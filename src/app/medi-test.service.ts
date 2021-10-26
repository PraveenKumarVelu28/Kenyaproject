import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MediTestService {

  constructor(private http: HttpClient) { }


  public host = "https://23.101.22.93/MediTestApi";

  public GetLanguageMaster() {

    return this.http.get<any[]>(this.host + '/Master/GetLanguageMaster');
  }
  public Getloginlabel(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_RegisterLogins_Label?LanguageID=' + lid);
  }
  public GetAdmin_LoginPage_Labels(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_LoginPage_Labels?LanguageID=' + lid);
  }

}
