import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MediTestService {

  constructor(private http: HttpClient) { }

  url:any;
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

  public GetCountryMasterByLanguageID(lid:any) {

    return this.http.get<any[]>(this.host + '/Master/GetCountryMasterByLanguageID?LanguageID=' + lid);
  }

  public GetCityMasterBYIDandLanguageID(did:any, lid:any) {

    return this.http.get<any[]>(this.host + '/Master/GetCityMasterBYIDandLanguageID?CountryID=' + did + '&LanguageID=' + lid);
  }


  public GetAdmin_Masters_labels(lid:any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_Masters_labels?LanguageID=' + lid);
  }

  public GetAreaMasterByLangID(lid:any) {

    return this.http.get<any[]>(this.host + '/Master/GetAreaMasterByLangID?LanguageID=' + lid);
  }

  public GetCityMasterByLangID(lid:any) {

    return this.http.get<any[]>(this.host + '/Master/GetCityMasterByLangID?LanguageID=' + lid);
  }

  public InsertCountryMaster(data:any) {
    this.url = this.host + '/Master/InsertCountryMaster';
    return this.http.post(this.url, data)
  }


  public UpdateCountryMaster_Web(data:any) {
    this.url = this.host + '/Master/UpdateCountryMaster_Web';
    return this.http.post(this.url, data)
  }



}
