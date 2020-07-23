import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FileHandlerService {
  constructor(private http: HttpClient) {}

  async imgTobase64(path) {
    let res = await this.http.get(path, { responseType: "blob" }).toPromise();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(res);

      reader.onloadend = () => {
        console.log("Returning data");
        var base64data = reader.result;
        resolve(base64data);
      };
    });

    /* .subscribe(res => {
      const reader = new FileReader();
      reader.onloadend = () => {
        var base64data = reader.result;
        return base64data;
      };

      reader.readAsDataURL(res);
    }); */
  }
}
