import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MediTestService {

  constructor(private http: HttpClient) { }


  public host = "https://23.101.22.93/MediTestApi";
  private url: string = '';

  public GetLanguageMaster() {

    return this.http.get<any[]>(this.host + '/Master/GetLanguageMaster');
  }
  public Getloginlabel(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_RegisterLogins_Label?LanguageID=' + lid);
  }
  public GetAdmin_LoginPage_Labels(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_LoginPage_Labels?LanguageID=' + lid);
  }
  public GetAdmin_Sponsored_Label(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_Sponsored_Label?LanguageID=' + lid);
  }
  public GetDiagnosticForAdminByLanguageID(did: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticForAdminByLanguageID?LanguageID=' + did);
  }
  public GetDiagnosticDetailsForWeb(sdate: any, edate: any, lid: any) {

    return this.http.get<any[]>(this.host + "/Master/GetDiagnosticDetailsForWeb?SDate=" + sdate +
      "&EDate=" + edate + "&LanguageID=" + lid);
    return this.http.get(this.url);
  }
  public GetAdmin_Masters_labels(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_Masters_labels?LanguageID=' + lid);
  }
  public GetAdmin_DiagnosticRegistration_LabelBYLanguageID(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_DiagnosticRegistration_LabelBYLanguageID?LanguageID=' + lid);
  }
  public GetCountryMasterByLanguageID(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetCountryMasterByLanguageID?LanguageID=' + lid);
  }
  public GetCityMasterBYIDandLanguageID(did: any, lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetCityMasterBYIDandLanguageID?CountryID=' + did + '&LanguageID=' + lid);
  }
  public GetAreaMasterByCityIDAndLanguageID(did: any, lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAreaMasterByCityIDAndLanguageID?CityID=' + did + '&LanguageID=' + lid);
  }
  public GetInsuranceMasterByLanguageID(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetInsuranceMasterByLanguageID?LanguageID=' + lid);
  }
  public InsertDiagnosticCenterRegistration(data: any) {
    this.url = this.host + '/Master/InsertDiagnosticCenterRegistration';
    return this.http.post(this.url, data)
  }
  public InsertDiagnosticCenterInsurances(data: any) {
    this.url = this.host + '/Master/InsertDiagnosticCenterInsurances';
    return this.http.post(this.url, data)
  }
  public InsertDiagnosticCentersSubscriptions_Revenue(data: any) {
    this.url = this.host + '/Master/InsertDiagnosticCentersSubscriptions_Revenue';
    return this.http.post(this.url, data)
  }
  public InsertInsertDiagnosticCenterPhotos(data: any) {
    this.url = this.host + '/Master/InsertInsertDiagnosticCenterPhotos';
    return this.http.post(this.url, data)
  }
  public DiagnosticPhotos(files: any) {
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    return this.http.post(this.host + '/Master/UploadAttachment/', formdata);
  }

}
