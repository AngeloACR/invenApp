const db = require('./database');
const path = require('path');
const testServer = require('./localServer');

const connection = db.initConnect();

const testPort = 6800;
const testFolder = './public/invenapp';
const testPath = testFolder + '/index.html';
const testApp = testServer.init(testFolder, testPath, testPort);

testApp.listen(testPort, () => {
	console.log('Server running at: ' + testPort);
});

//const landingServer = require('./landingServer');
/* const landingPort = 6174;
const landingFolder = './public/invenLand';
const landingPath = landingFolder + '/index.html';
const landingApp = landingServer.init(landingFolder, landingPort);

 landingApp.get('/', (req, res) => {
	res.send('We are having some troubles, please come back in a while!');
});

//Pointing to angular app
landingApp.get('/*', (req, res) => {
	var fileToSend = path.join(__dirname, landingPath);
	res.sendFile(fileToSend);
})

landingApp.listen(landingPort, () => {
	console.log('Server running at: ' + landingPort);
}); */