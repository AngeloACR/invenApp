"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const node_1 = require("@angular-devkit/core/node");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ProjectNotFoundException extends core_1.BaseException {
    constructor(projectName) {
        super(`Project '${projectName}' could not be found in Workspace.`);
    }
}
exports.ProjectNotFoundException = ProjectNotFoundException;
class TargetNotFoundException extends core_1.BaseException {
    constructor(projectName, targetName) {
        super(`Target '${targetName}' could not be found in project '${projectName}'.`);
    }
}
exports.TargetNotFoundException = TargetNotFoundException;
class ConfigurationNotFoundException extends core_1.BaseException {
    constructor(projectName, configurationName) {
        super(`Configuration '${configurationName}' could not be found in project '${projectName}'.`);
    }
}
exports.ConfigurationNotFoundException = ConfigurationNotFoundException;
// TODO: break this exception apart into more granular ones.
class BuilderCannotBeResolvedException extends core_1.BaseException {
    constructor(builder) {
        super(`Builder '${builder}' cannot be resolved.`);
    }
}
exports.BuilderCannotBeResolvedException = BuilderCannotBeResolvedException;
class ArchitectNotYetLoadedException extends core_1.BaseException {
    constructor() { super(`Architect needs to be loaded before Architect is used.`); }
}
exports.ArchitectNotYetLoadedException = ArchitectNotYetLoadedException;
class BuilderNotFoundException extends core_1.BaseException {
    constructor(builder) {
        super(`Builder ${builder} could not be found.`);
    }
}
exports.BuilderNotFoundException = BuilderNotFoundException;
class Architect {
    constructor(_workspace) {
        this._workspace = _workspace;
        this._targetsSchemaPath = core_1.join(core_1.normalize(__dirname), 'targets-schema.json');
        this._buildersSchemaPath = core_1.join(core_1.normalize(__dirname), 'builders-schema.json');
        this._architectSchemasLoaded = false;
        this._targetMapMap = new Map();
        this._builderPathsMap = new Map();
        this._builderDescriptionMap = new Map();
        this._builderConstructorMap = new Map();
    }
    loadArchitect() {
        if (this._architectSchemasLoaded) {
            return rxjs_1.of(this);
        }
        else {
            return rxjs_1.forkJoin(this._loadJsonFile(this._targetsSchemaPath), this._loadJsonFile(this._buildersSchemaPath)).pipe(operators_1.concatMap(([targetsSchema, buildersSchema]) => {
                this._targetsSchema = targetsSchema;
                this._buildersSchema = buildersSchema;
                this._architectSchemasLoaded = true;
                // Validate and cache all project target maps.
                return rxjs_1.forkJoin(...this._workspace.listProjectNames().map(projectName => {
                    const unvalidatedTargetMap = this._workspace.getProjectTargets(projectName);
                    return this._workspace.validateAgainstSchema(unvalidatedTargetMap, this._targetsSchema).pipe(operators_1.tap(targetMap => this._targetMapMap.set(projectName, targetMap)));
                }));
            }), operators_1.map(() => this));
        }
    }
    listProjectTargets(projectName) {
        return Object.keys(this._getProjectTargetMap(projectName));
    }
    _getProjectTargetMap(projectName) {
        if (!this._targetMapMap.has(projectName)) {
            throw new ProjectNotFoundException(projectName);
        }
        return this._targetMapMap.get(projectName);
    }
    _getProjectTarget(projectName, targetName) {
        const targetMap = this._getProjectTargetMap(projectName);
        const target = targetMap[targetName];
        if (!target) {
            throw new TargetNotFoundException(projectName, targetName);
        }
        return target;
    }
    getBuilderConfiguration(targetSpec) {
        const { project: projectName, target: targetName, configuration: configurationName, overrides, } = targetSpec;
        const project = this._workspace.getProject(projectName);
        const target = this._getProjectTarget(projectName, targetName);
        const options = target.options;
        let configuration = {};
        if (configurationName) {
            if (!target.configurations) {
                throw new ConfigurationNotFoundException(projectName, configurationName);
            }
            configuration = target.configurations[configurationName];
            if (!configuration) {
                throw new ConfigurationNotFoundException(projectName, configurationName);
            }
        }
        const builderConfiguration = {
            root: project.root,
            sourceRoot: project.sourceRoot,
            projectType: project.projectType,
            builder: target.builder,
            options: Object.assign({}, options, configuration, overrides),
        };
        return builderConfiguration;
    }
    run(builderConfig, partialContext = {}) {
        const context = Object.assign({ logger: new core_1.logging.NullLogger(), architect: this, host: this._workspace.host, workspace: this._workspace }, partialContext);
        let builderDescription;
        return this.getBuilderDescription(builderConfig).pipe(operators_1.tap(description => builderDescription = description), operators_1.concatMap(() => this.validateBuilderOptions(builderConfig, builderDescription)), operators_1.tap(validatedBuilderConfig => builderConfig = validatedBuilderConfig), operators_1.map(() => this.getBuilder(builderDescription, context)), operators_1.concatMap(builder => builder.run(builderConfig)));
    }
    getBuilderDescription(builderConfig) {
        // Check cache for this builder description.
        if (this._builderDescriptionMap.has(builderConfig.builder)) {
            return rxjs_1.of(this._builderDescriptionMap.get(builderConfig.builder));
        }
        return new rxjs_1.Observable((obs) => {
            // TODO: this probably needs to be more like NodeModulesEngineHost.
            const basedir = core_1.getSystemPath(this._workspace.root);
            const [pkg, builderName] = builderConfig.builder.split(':');
            const pkgJsonPath = node_1.resolve(pkg, { basedir, resolvePackageJson: true, checkLocal: true });
            let buildersJsonPath;
            let builderPaths;
            // Read the `builders` entry of package.json.
            return this._loadJsonFile(core_1.normalize(pkgJsonPath)).pipe(operators_1.concatMap((pkgJson) => {
                const pkgJsonBuildersentry = pkgJson['builders'];
                if (!pkgJsonBuildersentry) {
                    return rxjs_1.throwError(new BuilderCannotBeResolvedException(builderConfig.builder));
                }
                buildersJsonPath = core_1.join(core_1.dirname(core_1.normalize(pkgJsonPath)), pkgJsonBuildersentry);
                return this._loadJsonFile(buildersJsonPath);
            }), 
            // Validate builders json.
            operators_1.concatMap((builderPathsMap) => this._workspace.validateAgainstSchema(builderPathsMap, this._buildersSchema)), operators_1.concatMap((builderPathsMap) => {
                builderPaths = builderPathsMap.builders[builderName];
                if (!builderPaths) {
                    return rxjs_1.throwError(new BuilderCannotBeResolvedException(builderConfig.builder));
                }
                // Resolve paths in the builder paths.
                const builderJsonDir = core_1.dirname(buildersJsonPath);
                builderPaths.schema = core_1.join(builderJsonDir, builderPaths.schema);
                builderPaths.class = core_1.join(builderJsonDir, builderPaths.class);
                // Save the builder paths so that we can lazily load the builder.
                this._builderPathsMap.set(builderConfig.builder, builderPaths);
                // Load the schema.
                return this._loadJsonFile(builderPaths.schema);
            }), operators_1.map(builderSchema => {
                const builderDescription = {
                    name: builderConfig.builder,
                    schema: builderSchema,
                    description: builderPaths.description,
                };
                // Save to cache before returning.
                this._builderDescriptionMap.set(builderDescription.name, builderDescription);
                return builderDescription;
            })).subscribe(obs);
        });
    }
    validateBuilderOptions(builderConfig, builderDescription) {
        return this._workspace.validateAgainstSchema(builderConfig.options, builderDescription.schema).pipe(operators_1.map(validatedOptions => {
            builderConfig.options = validatedOptions;
            return builderConfig;
        }));
    }
    getBuilder(builderDescription, context) {
        const name = builderDescription.name;
        let builderConstructor;
        // Check cache for this builder.
        if (this._builderConstructorMap.has(name)) {
            builderConstructor = this._builderConstructorMap.get(name);
        }
        else {
            if (!this._builderPathsMap.has(name)) {
                throw new BuilderNotFoundException(name);
            }
            const builderPaths = this._builderPathsMap.get(name);
            // TODO: support more than the default export, maybe via builder#import-name.
            const builderModule = require(core_1.getSystemPath(builderPaths.class));
            builderConstructor = builderModule['default'];
            // Save builder to cache before returning.
            this._builderConstructorMap.set(builderDescription.name, builderConstructor);
        }
        const builder = new builderConstructor(context);
        return builder;
    }
    _loadJsonFile(path) {
        return this._workspace.host.read(core_1.normalize(path)).pipe(operators_1.map(buffer => core_1.virtualFs.fileBufferToString(buffer)), operators_1.map(str => core_1.parseJson(str, core_1.JsonParseMode.Loose)));
    }
}
exports.Architect = Architect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl0ZWN0LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9hcmNoaXRlY3Qvc3JjL2FyY2hpdGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOztBQUVILCtDQWE4QjtBQUM5QixvREFBbUU7QUFDbkUsK0JBQTREO0FBQzVELDhDQUFxRDtBQUVyRCxNQUFhLHdCQUF5QixTQUFRLG9CQUFhO0lBQ3pELFlBQVksV0FBbUI7UUFDN0IsS0FBSyxDQUFDLFlBQVksV0FBVyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQUpELDREQUlDO0FBRUQsTUFBYSx1QkFBd0IsU0FBUSxvQkFBYTtJQUN4RCxZQUFZLFdBQW1CLEVBQUUsVUFBa0I7UUFDakQsS0FBSyxDQUFDLFdBQVcsVUFBVSxvQ0FBb0MsV0FBVyxJQUFJLENBQUMsQ0FBQztJQUNsRixDQUFDO0NBQ0Y7QUFKRCwwREFJQztBQUVELE1BQWEsOEJBQStCLFNBQVEsb0JBQWE7SUFDL0QsWUFBWSxXQUFtQixFQUFFLGlCQUF5QjtRQUN4RCxLQUFLLENBQUMsa0JBQWtCLGlCQUFpQixvQ0FBb0MsV0FBVyxJQUFJLENBQUMsQ0FBQztJQUNoRyxDQUFDO0NBQ0Y7QUFKRCx3RUFJQztBQUVELDREQUE0RDtBQUM1RCxNQUFhLGdDQUFpQyxTQUFRLG9CQUFhO0lBQ2pFLFlBQVksT0FBZTtRQUN6QixLQUFLLENBQUMsWUFBWSxPQUFPLHVCQUF1QixDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGO0FBSkQsNEVBSUM7QUFFRCxNQUFhLDhCQUErQixTQUFRLG9CQUFhO0lBQy9ELGdCQUFnQixLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbkY7QUFGRCx3RUFFQztBQUVELE1BQWEsd0JBQXlCLFNBQVEsb0JBQWE7SUFDekQsWUFBWSxPQUFlO1FBQ3pCLEtBQUssQ0FBQyxXQUFXLE9BQU8sc0JBQXNCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7QUFKRCw0REFJQztBQXFFRCxNQUFhLFNBQVM7SUFXcEIsWUFBb0IsVUFBNEM7UUFBNUMsZUFBVSxHQUFWLFVBQVUsQ0FBa0M7UUFWL0MsdUJBQWtCLEdBQUcsV0FBSSxDQUFDLGdCQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUN2RSx3QkFBbUIsR0FBRyxXQUFJLENBQUMsZ0JBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBR2xGLDRCQUF1QixHQUFHLEtBQUssQ0FBQztRQUNoQyxrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFxQixDQUFDO1FBQzdDLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO1FBQ25ELDJCQUFzQixHQUFHLElBQUksR0FBRyxFQUE4QixDQUFDO1FBQy9ELDJCQUFzQixHQUFHLElBQUksR0FBRyxFQUFrQyxDQUFDO0lBRVAsQ0FBQztJQUVyRSxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsT0FBTyxTQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNMLE9BQU8sZUFBUSxDQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQzdDLENBQUMsSUFBSSxDQUNKLHFCQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7Z0JBRXBDLDhDQUE4QztnQkFDOUMsT0FBTyxlQUFRLENBQ2IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUN0RCxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRTVFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FDMUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FDN0MsZUFBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQ25FLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLGVBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDaEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixDQUFDLFdBQW1CO1FBQ3BDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU8sb0JBQW9CLENBQUMsV0FBbUI7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sSUFBSSx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFjLENBQUM7SUFDMUQsQ0FBQztJQUVPLGlCQUFpQixDQUFTLFdBQW1CLEVBQUUsVUFBa0I7UUFDdkUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpELE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQW9CLENBQUM7UUFFeEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsdUJBQXVCLENBQVcsVUFBMkI7UUFDM0QsTUFBTSxFQUNKLE9BQU8sRUFBRSxXQUFXLEVBQ3BCLE1BQU0sRUFBRSxVQUFVLEVBQ2xCLGFBQWEsRUFBRSxpQkFBaUIsRUFDaEMsU0FBUyxHQUNWLEdBQUcsVUFBVSxDQUFDO1FBRWYsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMvRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksYUFBYSxHQUF3QixFQUFFLENBQUM7UUFFNUMsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDMUIsTUFBTSxJQUFJLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2FBQzFFO1lBRUQsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUV6RCxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNsQixNQUFNLElBQUksOEJBQThCLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUM7YUFDMUU7U0FDRjtRQUVELE1BQU0sb0JBQW9CLEdBQW1DO1lBQzNELElBQUksRUFBRSxPQUFPLENBQUMsSUFBWTtZQUMxQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQThCO1lBQ2xELFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztZQUNoQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDdkIsT0FBTyxFQUFFLGtCQUNKLE9BQU8sRUFDUCxhQUFhLEVBQ2IsU0FBZSxDQUNQO1NBQ2QsQ0FBQztRQUVGLE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUVELEdBQUcsQ0FDRCxhQUE2QyxFQUM3QyxpQkFBMEMsRUFBRTtRQUU1QyxNQUFNLE9BQU8sbUJBQ1gsTUFBTSxFQUFFLElBQUksY0FBTyxDQUFDLFVBQVUsRUFBRSxFQUNoQyxTQUFTLEVBQUUsSUFBSSxFQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLElBQ3ZCLGNBQWMsQ0FDbEIsQ0FBQztRQUVGLElBQUksa0JBQXNDLENBQUM7UUFFM0MsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUNuRCxlQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUMsRUFDcEQscUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUMsRUFDL0UsZUFBRyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxhQUFhLEdBQUcsc0JBQXNCLENBQUMsRUFDckUsZUFBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFDdkQscUJBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FDakQsQ0FBQztJQUNKLENBQUM7SUFFRCxxQkFBcUIsQ0FDbkIsYUFBNkM7UUFFN0MsNENBQTRDO1FBQzVDLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUQsT0FBTyxTQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUF1QixDQUFDLENBQUM7U0FDekY7UUFFRCxPQUFPLElBQUksaUJBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLG1FQUFtRTtZQUNuRSxNQUFNLE9BQU8sR0FBRyxvQkFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1RCxNQUFNLFdBQVcsR0FBRyxjQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5RixJQUFJLGdCQUFzQixDQUFDO1lBQzNCLElBQUksWUFBMEIsQ0FBQztZQUUvQiw2Q0FBNkM7WUFDN0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3BELHFCQUFTLENBQUMsQ0FBQyxPQUFtQixFQUFFLEVBQUU7Z0JBQ2hDLE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBVyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsb0JBQW9CLEVBQUU7b0JBQ3pCLE9BQU8saUJBQVUsQ0FBQyxJQUFJLGdDQUFnQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNoRjtnQkFFRCxnQkFBZ0IsR0FBRyxXQUFJLENBQUMsY0FBTyxDQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2dCQUUvRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFDRiwwQkFBMEI7WUFDMUIscUJBQVMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FDbEUsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUN6QyxxQkFBUyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUU7Z0JBQzVCLFlBQVksR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUVyRCxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNqQixPQUFPLGlCQUFVLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDaEY7Z0JBRUQsc0NBQXNDO2dCQUN0QyxNQUFNLGNBQWMsR0FBRyxjQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDakQsWUFBWSxDQUFDLE1BQU0sR0FBRyxXQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEUsWUFBWSxDQUFDLEtBQUssR0FBRyxXQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFOUQsaUVBQWlFO2dCQUNqRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBRS9ELG1CQUFtQjtnQkFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsRUFDRixlQUFHLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ2xCLE1BQU0sa0JBQWtCLEdBQUc7b0JBQ3pCLElBQUksRUFBRSxhQUFhLENBQUMsT0FBTztvQkFDM0IsTUFBTSxFQUFFLGFBQWE7b0JBQ3JCLFdBQVcsRUFBRSxZQUFZLENBQUMsV0FBVztpQkFDdEMsQ0FBQztnQkFFRixrQ0FBa0M7Z0JBQ2xDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBRTdFLE9BQU8sa0JBQWtCLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQXNCLENBQ3BCLGFBQTZDLEVBQUUsa0JBQXNDO1FBRXJGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FDMUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQ2pELENBQUMsSUFBSSxDQUNKLGVBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3JCLGFBQWEsQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7WUFFekMsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLENBQ1Isa0JBQXNDLEVBQUUsT0FBdUI7UUFFL0QsTUFBTSxJQUFJLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksa0JBQWdELENBQUM7UUFFckQsZ0NBQWdDO1FBQ2hDLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBaUMsQ0FBQztTQUM1RjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BDLE1BQU0sSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQztZQUVELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFpQixDQUFDO1lBRXJFLDZFQUE2RTtZQUM3RSxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsb0JBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNqRSxrQkFBa0IsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFpQyxDQUFDO1lBRTlFLDBDQUEwQztZQUMxQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQzlFO1FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU8sYUFBYSxDQUFDLElBQVU7UUFDOUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDcEQsZUFBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNuRCxlQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxnQkFBUyxDQUFDLEdBQUcsRUFBRSxvQkFBYSxDQUFDLEtBQUssQ0FBcUIsQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBcFBELDhCQW9QQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQmFzZUV4Y2VwdGlvbixcbiAgSnNvbk9iamVjdCxcbiAgSnNvblBhcnNlTW9kZSxcbiAgUGF0aCxcbiAgZGlybmFtZSxcbiAgZXhwZXJpbWVudGFsLFxuICBnZXRTeXN0ZW1QYXRoLFxuICBqb2luLFxuICBsb2dnaW5nLFxuICBub3JtYWxpemUsXG4gIHBhcnNlSnNvbixcbiAgdmlydHVhbEZzLFxufSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQgeyByZXNvbHZlIGFzIG5vZGVSZXNvbHZlIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUvbm9kZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmb3JrSm9pbiwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0Tm90Rm91bmRFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBQcm9qZWN0ICcke3Byb2plY3ROYW1lfScgY291bGQgbm90IGJlIGZvdW5kIGluIFdvcmtzcGFjZS5gKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFyZ2V0Tm90Rm91bmRFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWU6IHN0cmluZywgdGFyZ2V0TmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYFRhcmdldCAnJHt0YXJnZXROYW1lfScgY291bGQgbm90IGJlIGZvdW5kIGluIHByb2plY3QgJyR7cHJvamVjdE5hbWV9Jy5gKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbk5vdEZvdW5kRXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lOiBzdHJpbmcsIGNvbmZpZ3VyYXRpb25OYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgQ29uZmlndXJhdGlvbiAnJHtjb25maWd1cmF0aW9uTmFtZX0nIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiBwcm9qZWN0ICcke3Byb2plY3ROYW1lfScuYCk7XG4gIH1cbn1cblxuLy8gVE9ETzogYnJlYWsgdGhpcyBleGNlcHRpb24gYXBhcnQgaW50byBtb3JlIGdyYW51bGFyIG9uZXMuXG5leHBvcnQgY2xhc3MgQnVpbGRlckNhbm5vdEJlUmVzb2x2ZWRFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoYnVpbGRlcjogc3RyaW5nKSB7XG4gICAgc3VwZXIoYEJ1aWxkZXIgJyR7YnVpbGRlcn0nIGNhbm5vdCBiZSByZXNvbHZlZC5gKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJjaGl0ZWN0Tm90WWV0TG9hZGVkRXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkgeyBzdXBlcihgQXJjaGl0ZWN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgQXJjaGl0ZWN0IGlzIHVzZWQuYCk7IH1cbn1cblxuZXhwb3J0IGNsYXNzIEJ1aWxkZXJOb3RGb3VuZEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcihidWlsZGVyOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgQnVpbGRlciAke2J1aWxkZXJ9IGNvdWxkIG5vdCBiZSBmb3VuZC5gKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1aWxkZXJDb250ZXh0IHtcbiAgbG9nZ2VyOiBsb2dnaW5nLkxvZ2dlcjtcbiAgaG9zdDogdmlydHVhbEZzLkhvc3Q8e30+O1xuICB3b3Jrc3BhY2U6IGV4cGVyaW1lbnRhbC53b3Jrc3BhY2UuV29ya3NwYWNlO1xuICBhcmNoaXRlY3Q6IEFyY2hpdGVjdDtcbiAgdGFyZ2V0U3BlY2lmaWVyPzogVGFyZ2V0U3BlY2lmaWVyO1xufVxuXG4vLyBUT0RPOiB1c2UgQnVpbGQgRXZlbnQgUHJvdG9jb2xcbi8vIGh0dHBzOi8vZG9jcy5iYXplbC5idWlsZC92ZXJzaW9ucy9tYXN0ZXIvYnVpbGQtZXZlbnQtcHJvdG9jb2wuaHRtbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZWFwaXMvZ29vZ2xlYXBpcy90cmVlL21hc3Rlci9nb29nbGUvZGV2dG9vbHMvYnVpbGQvdjFcbmV4cG9ydCBpbnRlcmZhY2UgQnVpbGRFdmVudCB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVpbGRlcjxPcHRpb25zVD4ge1xuICBydW4oYnVpbGRlckNvbmZpZzogQnVpbGRlckNvbmZpZ3VyYXRpb248UGFydGlhbDxPcHRpb25zVD4+KTogT2JzZXJ2YWJsZTxCdWlsZEV2ZW50Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdWlsZGVyUGF0aHNNYXAge1xuICBidWlsZGVyczogeyBbazogc3RyaW5nXTogQnVpbGRlclBhdGhzIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVpbGRlclBhdGhzIHtcbiAgY2xhc3M6IFBhdGg7XG4gIHNjaGVtYTogUGF0aDtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdWlsZGVyRGVzY3JpcHRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNjaGVtYTogSnNvbk9iamVjdDtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdWlsZGVyQ29uc3RydWN0b3I8T3B0aW9uc1Q+IHtcbiAgbmV3KGNvbnRleHQ6IEJ1aWxkZXJDb250ZXh0KTogQnVpbGRlcjxPcHRpb25zVD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVpbGRlckNvbmZpZ3VyYXRpb248T3B0aW9uc1QgPSB7fT4ge1xuICByb290OiBQYXRoO1xuICBzb3VyY2VSb290PzogUGF0aDtcbiAgcHJvamVjdFR5cGU6IHN0cmluZztcbiAgYnVpbGRlcjogc3RyaW5nO1xuICBvcHRpb25zOiBPcHRpb25zVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYXJnZXRTcGVjaWZpZXI8T3B0aW9uc1QgPSB7fT4ge1xuICBwcm9qZWN0OiBzdHJpbmc7XG4gIHRhcmdldDogc3RyaW5nO1xuICBjb25maWd1cmF0aW9uPzogc3RyaW5nO1xuICBvdmVycmlkZXM/OiBQYXJ0aWFsPE9wdGlvbnNUPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYXJnZXRNYXAge1xuICBbazogc3RyaW5nXTogVGFyZ2V0O1xufVxuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFRhcmdldE9wdGlvbnM8VCA9IEpzb25PYmplY3Q+ID0gVDtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgVGFyZ2V0Q29uZmlndXJhdGlvbjxUID0gSnNvbk9iamVjdD4gPSBQYXJ0aWFsPFQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhcmdldDxUID0gSnNvbk9iamVjdD4ge1xuICBidWlsZGVyOiBzdHJpbmc7XG4gIG9wdGlvbnM6IFRhcmdldE9wdGlvbnM8VD47XG4gIGNvbmZpZ3VyYXRpb25zPzogeyBbazogc3RyaW5nXTogVGFyZ2V0Q29uZmlndXJhdGlvbjxUPiB9O1xufVxuXG5leHBvcnQgY2xhc3MgQXJjaGl0ZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfdGFyZ2V0c1NjaGVtYVBhdGggPSBqb2luKG5vcm1hbGl6ZShfX2Rpcm5hbWUpLCAndGFyZ2V0cy1zY2hlbWEuanNvbicpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9idWlsZGVyc1NjaGVtYVBhdGggPSBqb2luKG5vcm1hbGl6ZShfX2Rpcm5hbWUpLCAnYnVpbGRlcnMtc2NoZW1hLmpzb24nKTtcbiAgcHJpdmF0ZSBfdGFyZ2V0c1NjaGVtYTogSnNvbk9iamVjdDtcbiAgcHJpdmF0ZSBfYnVpbGRlcnNTY2hlbWE6IEpzb25PYmplY3Q7XG4gIHByaXZhdGUgX2FyY2hpdGVjdFNjaGVtYXNMb2FkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdGFyZ2V0TWFwTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRhcmdldE1hcD4oKTtcbiAgcHJpdmF0ZSBfYnVpbGRlclBhdGhzTWFwID0gbmV3IE1hcDxzdHJpbmcsIEJ1aWxkZXJQYXRocz4oKTtcbiAgcHJpdmF0ZSBfYnVpbGRlckRlc2NyaXB0aW9uTWFwID0gbmV3IE1hcDxzdHJpbmcsIEJ1aWxkZXJEZXNjcmlwdGlvbj4oKTtcbiAgcHJpdmF0ZSBfYnVpbGRlckNvbnN0cnVjdG9yTWFwID0gbmV3IE1hcDxzdHJpbmcsIEJ1aWxkZXJDb25zdHJ1Y3Rvcjx7fT4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd29ya3NwYWNlOiBleHBlcmltZW50YWwud29ya3NwYWNlLldvcmtzcGFjZSkgeyB9XG5cbiAgbG9hZEFyY2hpdGVjdCgpIHtcbiAgICBpZiAodGhpcy5fYXJjaGl0ZWN0U2NoZW1hc0xvYWRlZCkge1xuICAgICAgcmV0dXJuIG9mKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm9ya0pvaW4oXG4gICAgICAgIHRoaXMuX2xvYWRKc29uRmlsZSh0aGlzLl90YXJnZXRzU2NoZW1hUGF0aCksXG4gICAgICAgIHRoaXMuX2xvYWRKc29uRmlsZSh0aGlzLl9idWlsZGVyc1NjaGVtYVBhdGgpLFxuICAgICAgKS5waXBlKFxuICAgICAgICBjb25jYXRNYXAoKFt0YXJnZXRzU2NoZW1hLCBidWlsZGVyc1NjaGVtYV0pID0+IHtcbiAgICAgICAgICB0aGlzLl90YXJnZXRzU2NoZW1hID0gdGFyZ2V0c1NjaGVtYTtcbiAgICAgICAgICB0aGlzLl9idWlsZGVyc1NjaGVtYSA9IGJ1aWxkZXJzU2NoZW1hO1xuICAgICAgICAgIHRoaXMuX2FyY2hpdGVjdFNjaGVtYXNMb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gVmFsaWRhdGUgYW5kIGNhY2hlIGFsbCBwcm9qZWN0IHRhcmdldCBtYXBzLlxuICAgICAgICAgIHJldHVybiBmb3JrSm9pbihcbiAgICAgICAgICAgIC4uLnRoaXMuX3dvcmtzcGFjZS5saXN0UHJvamVjdE5hbWVzKCkubWFwKHByb2plY3ROYW1lID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdW52YWxpZGF0ZWRUYXJnZXRNYXAgPSB0aGlzLl93b3Jrc3BhY2UuZ2V0UHJvamVjdFRhcmdldHMocHJvamVjdE5hbWUpO1xuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2UudmFsaWRhdGVBZ2FpbnN0U2NoZW1hPFRhcmdldE1hcD4oXG4gICAgICAgICAgICAgICAgdW52YWxpZGF0ZWRUYXJnZXRNYXAsIHRoaXMuX3RhcmdldHNTY2hlbWEpLnBpcGUoXG4gICAgICAgICAgICAgICAgICB0YXAodGFyZ2V0TWFwID0+IHRoaXMuX3RhcmdldE1hcE1hcC5zZXQocHJvamVjdE5hbWUsIHRhcmdldE1hcCkpLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzKSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbGlzdFByb2plY3RUYXJnZXRzKHByb2plY3ROYW1lOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2dldFByb2plY3RUYXJnZXRNYXAocHJvamVjdE5hbWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByb2plY3RUYXJnZXRNYXAocHJvamVjdE5hbWU6IHN0cmluZyk6IFRhcmdldE1hcCB7XG4gICAgaWYgKCF0aGlzLl90YXJnZXRNYXBNYXAuaGFzKHByb2plY3ROYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFByb2plY3ROb3RGb3VuZEV4Y2VwdGlvbihwcm9qZWN0TmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldE1hcE1hcC5nZXQocHJvamVjdE5hbWUpIGFzIFRhcmdldE1hcDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByb2plY3RUYXJnZXQ8VCA9IHt9Pihwcm9qZWN0TmFtZTogc3RyaW5nLCB0YXJnZXROYW1lOiBzdHJpbmcpOiBUYXJnZXQ8VD4ge1xuICAgIGNvbnN0IHRhcmdldE1hcCA9IHRoaXMuX2dldFByb2plY3RUYXJnZXRNYXAocHJvamVjdE5hbWUpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0TWFwW3RhcmdldE5hbWVdIGFzIHt9IGFzIFRhcmdldDxUPjtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgVGFyZ2V0Tm90Rm91bmRFeGNlcHRpb24ocHJvamVjdE5hbWUsIHRhcmdldE5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBnZXRCdWlsZGVyQ29uZmlndXJhdGlvbjxPcHRpb25zVD4odGFyZ2V0U3BlYzogVGFyZ2V0U3BlY2lmaWVyKTogQnVpbGRlckNvbmZpZ3VyYXRpb248T3B0aW9uc1Q+IHtcbiAgICBjb25zdCB7XG4gICAgICBwcm9qZWN0OiBwcm9qZWN0TmFtZSxcbiAgICAgIHRhcmdldDogdGFyZ2V0TmFtZSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb25OYW1lLFxuICAgICAgb3ZlcnJpZGVzLFxuICAgIH0gPSB0YXJnZXRTcGVjO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuX3dvcmtzcGFjZS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl9nZXRQcm9qZWN0VGFyZ2V0KHByb2plY3ROYW1lLCB0YXJnZXROYW1lKTtcbiAgICBjb25zdCBvcHRpb25zID0gdGFyZ2V0Lm9wdGlvbnM7XG4gICAgbGV0IGNvbmZpZ3VyYXRpb246IFRhcmdldENvbmZpZ3VyYXRpb24gPSB7fTtcblxuICAgIGlmIChjb25maWd1cmF0aW9uTmFtZSkge1xuICAgICAgaWYgKCF0YXJnZXQuY29uZmlndXJhdGlvbnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IENvbmZpZ3VyYXRpb25Ob3RGb3VuZEV4Y2VwdGlvbihwcm9qZWN0TmFtZSwgY29uZmlndXJhdGlvbk5hbWUpO1xuICAgICAgfVxuXG4gICAgICBjb25maWd1cmF0aW9uID0gdGFyZ2V0LmNvbmZpZ3VyYXRpb25zW2NvbmZpZ3VyYXRpb25OYW1lXTtcblxuICAgICAgaWYgKCFjb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBDb25maWd1cmF0aW9uTm90Rm91bmRFeGNlcHRpb24ocHJvamVjdE5hbWUsIGNvbmZpZ3VyYXRpb25OYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidWlsZGVyQ29uZmlndXJhdGlvbjogQnVpbGRlckNvbmZpZ3VyYXRpb248T3B0aW9uc1Q+ID0ge1xuICAgICAgcm9vdDogcHJvamVjdC5yb290IGFzIFBhdGgsXG4gICAgICBzb3VyY2VSb290OiBwcm9qZWN0LnNvdXJjZVJvb3QgYXMgUGF0aCB8IHVuZGVmaW5lZCxcbiAgICAgIHByb2plY3RUeXBlOiBwcm9qZWN0LnByb2plY3RUeXBlLFxuICAgICAgYnVpbGRlcjogdGFyZ2V0LmJ1aWxkZXIsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIC4uLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIC4uLm92ZXJyaWRlcyBhcyB7fSxcbiAgICAgIH0gYXMgT3B0aW9uc1QsXG4gICAgfTtcblxuICAgIHJldHVybiBidWlsZGVyQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIHJ1bjxPcHRpb25zVD4oXG4gICAgYnVpbGRlckNvbmZpZzogQnVpbGRlckNvbmZpZ3VyYXRpb248T3B0aW9uc1Q+LFxuICAgIHBhcnRpYWxDb250ZXh0OiBQYXJ0aWFsPEJ1aWxkZXJDb250ZXh0PiA9IHt9LFxuICApOiBPYnNlcnZhYmxlPEJ1aWxkRXZlbnQ+IHtcbiAgICBjb25zdCBjb250ZXh0OiBCdWlsZGVyQ29udGV4dCA9IHtcbiAgICAgIGxvZ2dlcjogbmV3IGxvZ2dpbmcuTnVsbExvZ2dlcigpLFxuICAgICAgYXJjaGl0ZWN0OiB0aGlzLFxuICAgICAgaG9zdDogdGhpcy5fd29ya3NwYWNlLmhvc3QsXG4gICAgICB3b3Jrc3BhY2U6IHRoaXMuX3dvcmtzcGFjZSxcbiAgICAgIC4uLnBhcnRpYWxDb250ZXh0LFxuICAgIH07XG5cbiAgICBsZXQgYnVpbGRlckRlc2NyaXB0aW9uOiBCdWlsZGVyRGVzY3JpcHRpb247XG5cbiAgICByZXR1cm4gdGhpcy5nZXRCdWlsZGVyRGVzY3JpcHRpb24oYnVpbGRlckNvbmZpZykucGlwZShcbiAgICAgIHRhcChkZXNjcmlwdGlvbiA9PiBidWlsZGVyRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiksXG4gICAgICBjb25jYXRNYXAoKCkgPT4gdGhpcy52YWxpZGF0ZUJ1aWxkZXJPcHRpb25zKGJ1aWxkZXJDb25maWcsIGJ1aWxkZXJEZXNjcmlwdGlvbikpLFxuICAgICAgdGFwKHZhbGlkYXRlZEJ1aWxkZXJDb25maWcgPT4gYnVpbGRlckNvbmZpZyA9IHZhbGlkYXRlZEJ1aWxkZXJDb25maWcpLFxuICAgICAgbWFwKCgpID0+IHRoaXMuZ2V0QnVpbGRlcihidWlsZGVyRGVzY3JpcHRpb24sIGNvbnRleHQpKSxcbiAgICAgIGNvbmNhdE1hcChidWlsZGVyID0+IGJ1aWxkZXIucnVuKGJ1aWxkZXJDb25maWcpKSxcbiAgICApO1xuICB9XG5cbiAgZ2V0QnVpbGRlckRlc2NyaXB0aW9uPE9wdGlvbnNUPihcbiAgICBidWlsZGVyQ29uZmlnOiBCdWlsZGVyQ29uZmlndXJhdGlvbjxPcHRpb25zVD4sXG4gICk6IE9ic2VydmFibGU8QnVpbGRlckRlc2NyaXB0aW9uPiB7XG4gICAgLy8gQ2hlY2sgY2FjaGUgZm9yIHRoaXMgYnVpbGRlciBkZXNjcmlwdGlvbi5cbiAgICBpZiAodGhpcy5fYnVpbGRlckRlc2NyaXB0aW9uTWFwLmhhcyhidWlsZGVyQ29uZmlnLmJ1aWxkZXIpKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5fYnVpbGRlckRlc2NyaXB0aW9uTWFwLmdldChidWlsZGVyQ29uZmlnLmJ1aWxkZXIpIGFzIEJ1aWxkZXJEZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnMpID0+IHtcbiAgICAgIC8vIFRPRE86IHRoaXMgcHJvYmFibHkgbmVlZHMgdG8gYmUgbW9yZSBsaWtlIE5vZGVNb2R1bGVzRW5naW5lSG9zdC5cbiAgICAgIGNvbnN0IGJhc2VkaXIgPSBnZXRTeXN0ZW1QYXRoKHRoaXMuX3dvcmtzcGFjZS5yb290KTtcbiAgICAgIGNvbnN0IFtwa2csIGJ1aWxkZXJOYW1lXSA9IGJ1aWxkZXJDb25maWcuYnVpbGRlci5zcGxpdCgnOicpO1xuICAgICAgY29uc3QgcGtnSnNvblBhdGggPSBub2RlUmVzb2x2ZShwa2csIHsgYmFzZWRpciwgcmVzb2x2ZVBhY2thZ2VKc29uOiB0cnVlLCBjaGVja0xvY2FsOiB0cnVlIH0pO1xuICAgICAgbGV0IGJ1aWxkZXJzSnNvblBhdGg6IFBhdGg7XG4gICAgICBsZXQgYnVpbGRlclBhdGhzOiBCdWlsZGVyUGF0aHM7XG5cbiAgICAgIC8vIFJlYWQgdGhlIGBidWlsZGVyc2AgZW50cnkgb2YgcGFja2FnZS5qc29uLlxuICAgICAgcmV0dXJuIHRoaXMuX2xvYWRKc29uRmlsZShub3JtYWxpemUocGtnSnNvblBhdGgpKS5waXBlKFxuICAgICAgICBjb25jYXRNYXAoKHBrZ0pzb246IEpzb25PYmplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCBwa2dKc29uQnVpbGRlcnNlbnRyeSA9IHBrZ0pzb25bJ2J1aWxkZXJzJ10gYXMgc3RyaW5nO1xuICAgICAgICAgIGlmICghcGtnSnNvbkJ1aWxkZXJzZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKG5ldyBCdWlsZGVyQ2Fubm90QmVSZXNvbHZlZEV4Y2VwdGlvbihidWlsZGVyQ29uZmlnLmJ1aWxkZXIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidWlsZGVyc0pzb25QYXRoID0gam9pbihkaXJuYW1lKG5vcm1hbGl6ZShwa2dKc29uUGF0aCkpLCBwa2dKc29uQnVpbGRlcnNlbnRyeSk7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEpzb25GaWxlKGJ1aWxkZXJzSnNvblBhdGgpO1xuICAgICAgICB9KSxcbiAgICAgICAgLy8gVmFsaWRhdGUgYnVpbGRlcnMganNvbi5cbiAgICAgICAgY29uY2F0TWFwKChidWlsZGVyUGF0aHNNYXApID0+IHRoaXMuX3dvcmtzcGFjZS52YWxpZGF0ZUFnYWluc3RTY2hlbWE8QnVpbGRlclBhdGhzTWFwPihcbiAgICAgICAgICBidWlsZGVyUGF0aHNNYXAsIHRoaXMuX2J1aWxkZXJzU2NoZW1hKSksXG4gICAgICAgIGNvbmNhdE1hcCgoYnVpbGRlclBhdGhzTWFwKSA9PiB7XG4gICAgICAgICAgYnVpbGRlclBhdGhzID0gYnVpbGRlclBhdGhzTWFwLmJ1aWxkZXJzW2J1aWxkZXJOYW1lXTtcblxuICAgICAgICAgIGlmICghYnVpbGRlclBhdGhzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihuZXcgQnVpbGRlckNhbm5vdEJlUmVzb2x2ZWRFeGNlcHRpb24oYnVpbGRlckNvbmZpZy5idWlsZGVyKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVzb2x2ZSBwYXRocyBpbiB0aGUgYnVpbGRlciBwYXRocy5cbiAgICAgICAgICBjb25zdCBidWlsZGVySnNvbkRpciA9IGRpcm5hbWUoYnVpbGRlcnNKc29uUGF0aCk7XG4gICAgICAgICAgYnVpbGRlclBhdGhzLnNjaGVtYSA9IGpvaW4oYnVpbGRlckpzb25EaXIsIGJ1aWxkZXJQYXRocy5zY2hlbWEpO1xuICAgICAgICAgIGJ1aWxkZXJQYXRocy5jbGFzcyA9IGpvaW4oYnVpbGRlckpzb25EaXIsIGJ1aWxkZXJQYXRocy5jbGFzcyk7XG5cbiAgICAgICAgICAvLyBTYXZlIHRoZSBidWlsZGVyIHBhdGhzIHNvIHRoYXQgd2UgY2FuIGxhemlseSBsb2FkIHRoZSBidWlsZGVyLlxuICAgICAgICAgIHRoaXMuX2J1aWxkZXJQYXRoc01hcC5zZXQoYnVpbGRlckNvbmZpZy5idWlsZGVyLCBidWlsZGVyUGF0aHMpO1xuXG4gICAgICAgICAgLy8gTG9hZCB0aGUgc2NoZW1hLlxuICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkSnNvbkZpbGUoYnVpbGRlclBhdGhzLnNjaGVtYSk7XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoYnVpbGRlclNjaGVtYSA9PiB7XG4gICAgICAgICAgY29uc3QgYnVpbGRlckRlc2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgbmFtZTogYnVpbGRlckNvbmZpZy5idWlsZGVyLFxuICAgICAgICAgICAgc2NoZW1hOiBidWlsZGVyU2NoZW1hLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGJ1aWxkZXJQYXRocy5kZXNjcmlwdGlvbixcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gU2F2ZSB0byBjYWNoZSBiZWZvcmUgcmV0dXJuaW5nLlxuICAgICAgICAgIHRoaXMuX2J1aWxkZXJEZXNjcmlwdGlvbk1hcC5zZXQoYnVpbGRlckRlc2NyaXB0aW9uLm5hbWUsIGJ1aWxkZXJEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gYnVpbGRlckRlc2NyaXB0aW9uO1xuICAgICAgICB9KSxcbiAgICAgICkuc3Vic2NyaWJlKG9icyk7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZUJ1aWxkZXJPcHRpb25zPE9wdGlvbnNUPihcbiAgICBidWlsZGVyQ29uZmlnOiBCdWlsZGVyQ29uZmlndXJhdGlvbjxPcHRpb25zVD4sIGJ1aWxkZXJEZXNjcmlwdGlvbjogQnVpbGRlckRlc2NyaXB0aW9uLFxuICApOiBPYnNlcnZhYmxlPEJ1aWxkZXJDb25maWd1cmF0aW9uPE9wdGlvbnNUPj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2UudmFsaWRhdGVBZ2FpbnN0U2NoZW1hPE9wdGlvbnNUPihcbiAgICAgIGJ1aWxkZXJDb25maWcub3B0aW9ucywgYnVpbGRlckRlc2NyaXB0aW9uLnNjaGVtYSxcbiAgICApLnBpcGUoXG4gICAgICBtYXAodmFsaWRhdGVkT3B0aW9ucyA9PiB7XG4gICAgICAgIGJ1aWxkZXJDb25maWcub3B0aW9ucyA9IHZhbGlkYXRlZE9wdGlvbnM7XG5cbiAgICAgICAgcmV0dXJuIGJ1aWxkZXJDb25maWc7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0QnVpbGRlcjxPcHRpb25zVD4oXG4gICAgYnVpbGRlckRlc2NyaXB0aW9uOiBCdWlsZGVyRGVzY3JpcHRpb24sIGNvbnRleHQ6IEJ1aWxkZXJDb250ZXh0LFxuICApOiBCdWlsZGVyPE9wdGlvbnNUPiB7XG4gICAgY29uc3QgbmFtZSA9IGJ1aWxkZXJEZXNjcmlwdGlvbi5uYW1lO1xuICAgIGxldCBidWlsZGVyQ29uc3RydWN0b3I6IEJ1aWxkZXJDb25zdHJ1Y3RvcjxPcHRpb25zVD47XG5cbiAgICAvLyBDaGVjayBjYWNoZSBmb3IgdGhpcyBidWlsZGVyLlxuICAgIGlmICh0aGlzLl9idWlsZGVyQ29uc3RydWN0b3JNYXAuaGFzKG5hbWUpKSB7XG4gICAgICBidWlsZGVyQ29uc3RydWN0b3IgPSB0aGlzLl9idWlsZGVyQ29uc3RydWN0b3JNYXAuZ2V0KG5hbWUpIGFzIEJ1aWxkZXJDb25zdHJ1Y3RvcjxPcHRpb25zVD47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fYnVpbGRlclBhdGhzTWFwLmhhcyhuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgQnVpbGRlck5vdEZvdW5kRXhjZXB0aW9uKG5hbWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBidWlsZGVyUGF0aHMgPSB0aGlzLl9idWlsZGVyUGF0aHNNYXAuZ2V0KG5hbWUpIGFzIEJ1aWxkZXJQYXRocztcblxuICAgICAgLy8gVE9ETzogc3VwcG9ydCBtb3JlIHRoYW4gdGhlIGRlZmF1bHQgZXhwb3J0LCBtYXliZSB2aWEgYnVpbGRlciNpbXBvcnQtbmFtZS5cbiAgICAgIGNvbnN0IGJ1aWxkZXJNb2R1bGUgPSByZXF1aXJlKGdldFN5c3RlbVBhdGgoYnVpbGRlclBhdGhzLmNsYXNzKSk7XG4gICAgICBidWlsZGVyQ29uc3RydWN0b3IgPSBidWlsZGVyTW9kdWxlWydkZWZhdWx0J10gYXMgQnVpbGRlckNvbnN0cnVjdG9yPE9wdGlvbnNUPjtcblxuICAgICAgLy8gU2F2ZSBidWlsZGVyIHRvIGNhY2hlIGJlZm9yZSByZXR1cm5pbmcuXG4gICAgICB0aGlzLl9idWlsZGVyQ29uc3RydWN0b3JNYXAuc2V0KGJ1aWxkZXJEZXNjcmlwdGlvbi5uYW1lLCBidWlsZGVyQ29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgYnVpbGRlckNvbnN0cnVjdG9yKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGJ1aWxkZXI7XG4gIH1cblxuICBwcml2YXRlIF9sb2FkSnNvbkZpbGUocGF0aDogUGF0aCk6IE9ic2VydmFibGU8SnNvbk9iamVjdD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2UuaG9zdC5yZWFkKG5vcm1hbGl6ZShwYXRoKSkucGlwZShcbiAgICAgIG1hcChidWZmZXIgPT4gdmlydHVhbEZzLmZpbGVCdWZmZXJUb1N0cmluZyhidWZmZXIpKSxcbiAgICAgIG1hcChzdHIgPT4gcGFyc2VKc29uKHN0ciwgSnNvblBhcnNlTW9kZS5Mb29zZSkgYXMge30gYXMgSnNvbk9iamVjdCksXG4gICAgKTtcbiAgfVxufVxuIl19