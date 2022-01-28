import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediTestService {

  constructor(private http: HttpClient) { }

  public host = "https://23.101.22.93/MediTestApi";


  //public host = "http://localhost:4199/";
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

  public GetAdmin_DiagnosticRegistration_LabelBYLanguageID(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_DiagnosticRegistration_LabelBYLanguageID?LanguageID=' + lid);
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

  // public GetCountryMasterByLanguageID(lid: any) {

  //   return this.http.get<any[]>(this.host + '/Master/GetCountryMasterByLanguageID?LanguageID=' + lid);
  // }

  public GetCityMasterBYIDandLanguageID(did: any, lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetCityMasterBYIDandLanguageID?CountryID=' + did + '&LanguageID=' + lid);
  }


  public GetAdmin_Masters_labels(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_Masters_labels?LanguageID=' + lid);
  }

  public GetAreaMasterByLangID(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAreaMasterByLangID?LanguageID=' + lid);
  }

  public GetCityMasterByLangID(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetCityMasterByLangID?LanguageID=' + lid);
  }

  public InsertCountryMaster(data: any) {
    this.url = this.host + '/Master/InsertCountryMaster';
    return this.http.post(this.url, data)
  }


  public UpdateCountryMaster_Web(data: any) {
    this.url = this.host + '/Master/UpdateCountryMaster_Web';
    return this.http.post(this.url, data)
  }

  public DeleteDiagnosticCenter(id: any) {

    return this.http.get<any[]>(this.host + '/Master/DeleteDiagnosticCenter?ID=' + id);
  }
  public GetDiagnosticDetailsForAdminByLanguageID(did: any, lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticDetailsForAdminByLanguageID?DiagnosticID=' + did + '&LanguageID=' + lid);
  }
  public UpdateDiagnosticCenterProfile(data: any) {
    this.url = this.host + '/Master/UpdateDiagnosticCenterProfile';
    return this.http.post(this.url, data)
  }
  public GetDiagnosticCenterPhotosByID(diaid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticCenterPhotosByID?ID=' + diaid);
  }
  public UpdateDiagnosticCenterPhotos(data: any) {

    this.url = this.host + '/Master/UpdateDiagnosticCenterPhotos';
    return this.http.post(this.url, data)
  }


  public GetAdmin_DiagnosticLoginOrdersAndOrderReport_Label(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_DiagnosticLoginOrdersAndOrderReport_Label?LanguageID=' + lid);
  }

  public GetDiagnosticAppointmentsByDiagnosticID(id: any, sdate: any, edate: any, lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticAppointmentsByDiagnosticID?DiagnosticCenterID=' + id + '&SDate=' + sdate + '&EDate=' + edate + '&LanguageID=' + lid);
  }
  public GetDiagnosticAppointmentsByDiagnosticIDMediTest(id: any, sdate: any, edate: any, lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticAppointmentsByDiagnosticIDMediTest?DiagnosticCenterID=' + id + '&SDate=' + sdate + '&EDate=' + edate + '&LanguageID=' + lid);
  }
  public GetAssigned_Phlebotomist_Details(sdate: any, StaffID: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAssigned_Phlebotomist_Details?SDate=' + sdate + '&StaffID=' + StaffID);
  }

  public GetAdmin_DoctorMyAppointments_Label(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_DoctorMyAppointments_Label?LanguageID=' + lid);
  }


  public GetDiagnosticCentersSubscriptions_Revenue(diagnosticid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticCentersSubscriptions_Revenue?DiagnosticID=' + diagnosticid);
  }
  public UpdateDiagnosticCentersSubscriptions_Revenue(data: any) {
    this.url = this.host + '/Master/UpdateDiagnosticCentersSubscriptions_Revenue';
    return this.http.post(this.url, data)
  }

  public InsertCityMaster(data: any) {
    this.url = this.host + '/Master/InsertCityMaster';
    return this.http.post(this.url, data)
  }

  public UpdateCityMaster_Web(data: any) {
    this.url = this.host + '/Master/UpdateCityMaster_Web';
    return this.http.post(this.url, data)
  }
  public InsertAreaMaster(data: any) {
    this.url = this.host + '/Master/InsertAreaMaster';
    return this.http.post(this.url, data)
  }

  public UpdateAreaMaster_Web(data: any) {
    this.url = this.host + '/Master/UpdateAreaMaster_Web';
    return this.http.post(this.url, data)
  }

  public DeleteAreaMaster(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/DeleteAreaMaster?ID=' + lid);
  }

  public DeleteCountryMaster(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/DeleteCountryMaster?ID=' + lid);
  }

  public DeleteCityMaster(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/DeleteCityMaster?ID=' + lid);
  }

  public GetAdmin_RegisterLogins_Label(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_RegisterLogins_Label?LanguageID=' + lid);
  }

  public GetAdmin_Doctorregistration_LabelsByLanguageID(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_Doctorregistration_LabelsByLanguageID?LanguageID=' + lid);
  }
  public InsertMyTeam(data: any) {
    this.url = this.host + '/Master/InsertMyTeam';
    return this.http.post(this.url, data)
  }
  public UpdateMyTeam(data: any) {
    this.url = this.host + '/Master/UpdateMyTeam';
    return this.http.post(this.url, data)
  }
  public GetMyTeam(did: any) {

    return this.http.get<any[]>(this.host + '/Master/GetMyTeam?DiagnosticID=' + did);
  }

  public DeleteMyTeam(id: any) {

    return this.http.get<any[]>(this.host + '/Master/DeleteMyTeam?ID=' + id);
  }


  public GetUserRegistration() {
    return this.http.get<any[]>(
      this.host + "/Master/GetUserRegistration"
    );
  }
  public sendemailattachements(data: any) {
    debugger
    this.url = this.host + '/Master/sendemailattachements';
    return this.http.post(this.url, data)

  }
  public Updateotp(data: any) {
    debugger;
    this.url = this.host + "/Master/Updateotp";
    return this.http.post(this.url, data);
  }
  public Verifyotp(data: any) {
    debugger;
    this.url = this.host + "/Master/Verifyotp";
    return this.http.post(this.url, data);
  }
  public Updatepassword(data: any) {
    debugger;
    this.url = this.host + "/Master/Updatepassword";
    return this.http.post(this.url, data);
  }

  //slots

  public GetAdmin_WorkingDetails_label(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_WorkingDetails_label?LanguageID=' + lid);
  }
  public GetAdmin_DoctorLoginFeedbackWorkingDetails_Label(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_DoctorLoginFeedbackWorkingDetails_Label?LanguageID=' + lid);
  }
  public GetDiagnosticSlotsWeb(did: any, date: any, timeid: any, dayid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticSlotsWeb?DiagnosticCenterID=' + did + '&Date=' + date + '&TimeID=' + timeid + '&DayID=' + dayid);
  }
  public GetDiagnosticSlots(did: any, lid: any, typeid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticSlots?DiagnosticCenterID=' + did + '&LanguageID=' + lid + '&TypeIDs=' + typeid);
  }
  public InsertDiagnosticRelatedSlotsWeb(data: any) {
    this.url = this.host + '/Master/InsertDiagnosticRelatedSlotsWeb';
    return this.http.post(this.url, data)
  }
  public DeleteDiagnosticRelatedSlotsStartTimeEndTime(diaid: any, dayid: any, timeid: any) {

    return this.http.get<any[]>(this.host + '/Master/DeleteDiagnosticRelatedSlotsStartTimeEndTime?DiagnosticCenterID=' + diaid + '&DayID=' + dayid + '&TimeID=' + timeid);
  }
  public DeleteDiagnosticRelatedSlots(id: any) {
    return this.http.get<any[]>(this.host + '/Master/DeleteDiagnosticRelatedSlots?ID=' + id);
  }
  public UpdateDiagnosticRelatedSlotsWeb(data: any) {
    this.url = this.host + '/Master/UpdateDiagnosticRelatedSlotsWeb';
    return this.http.post(this.url, data)
  }
  public GetDaysMasterByLanguageID(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDaysMasterByLanguageID?LanguageID=' + lid);
  }

  public GetDiagnosticCenterListByLanguageID(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticCenterListByLanguageID?LanguageID=' + lid);
  }
  public GetDiagnosticSlotMasterByTimeID(timeid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticSlotMasterByTimeID?TimeID=' + timeid);
  }

  public InsertDiagnosticRelatedSlots(data: any) {

    this.url = this.host + '/Master/InsertDiagnosticRelatedSlots';
    return this.http.post(this.url, data)
  }


  //30-10-2022 Package and Test API

  public GetAdmin_MapServiceDiagnostic_Label(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetAdmin_MapServiceDiagnostic_Label?LanguageID=' + lid);
  }



  public GetDiagnosticCenterPackages(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticCenterPackages?LanguageID=' + lid);
  }
  public DeleteDiagnosticCenterPackages(id: any) {

    return this.http.get<any[]>(this.host + '/Master/DeleteDiagnosticCenterPackages?ID=' + id);
  }
  public GetDiagnosticTestMasterByLanguageID(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticTestMasterByLanguageID?LanguageID=' + lid);
  }
  public GetDiagnosticCenterDetailsByID(id: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticCenterDetailsByID?ID=' + id);
  }
  public InsertDiagnosticCenterPackages(data: any) {
    this.url = this.host + '/Master/InsertDiagnosticCenterPackages';
    return this.http.post(this.url, data)
  }
  public InsertDiagnosticPackageRelatedTests(data: any) {
    this.url = this.host + '/Master/InsertDiagnosticPackageRelatedTests';
    return this.http.post(this.url, data)
  }
  public UpdateDiagnosticCenterPackages(data: any) {
    this.url = this.host + '/Master/UpdateDiagnosticCenterPackages';
    return this.http.post(this.url, data)
  }

  // test Api

  public GetDiagnosticCenterTestsForDash(lid: any) {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticCenterTestsForDash?LanguageID=' + lid);
  }

  public DeleteDiagnosticCenterTestsForDash(id: any) {

    return this.http.get<any[]>(this.host + '/Master/DeleteDiagnosticCenterTestsForDash?ID=' + id);
  }
  public InsertDiagnosticCenterTests(data: any) {
    this.url = this.host + '/Master/InsertDiagnosticCenterTests';
    return this.http.post(this.url, data)
  }

  public DisableStaff(data: any) {
    debugger;
    this.url = this.host + "/Master/DisableStaff";
    return this.http.post(this.url, data);
  }

  //08-11-2021


  public GetPatientRegistrationWeb() {
    debugger
    return this.http.get<any[]>(this.host + '/Master/GetPatientRegistrationWeb');
  }
  public UpdateDiagnosticCenterTests(data: any) {
    this.url = this.host + '/Master/UpdateDiagnosticCenterTests';
    return this.http.post(this.url, data)
  }



  public UpdateOrders(data: any) {
    this.url = this.host + '/Master/UpdateOrders';
    return this.http.post(this.url, data)
  }
  public AcceptOrder(data: any) {
    this.url = this.host + '/Master/AcceptOrder';
    return this.http.post(this.url, data)
  }
  public RejectOrder(data: any) {
    this.url = this.host + '/Master/RejectOrder';
    return this.http.post(this.url, data)
  }

  public UploadReport(data: any) {
    this.url = this.host + '/Master/UploadReport';
    return this.http.post(this.url, data)
  }
  public UpdateNewPrice(data: any) {
    this.url = this.host + '/Master/UpdateNewPrice';
    return this.http.post(this.url, data)
  }

  public DisablePatient(data: any) {
    debugger;
    this.url = this.host + "/Master/DisablePatient";
    return this.http.post(this.url, data);
  }

  public InsertTestOffers(data: any) {
    this.url = this.host + '/Master/InsertTestOffers';
    return this.http.post(this.url, data)
  }
  public UploadReciept(data: any) {
    this.url = this.host + '/Master/UploadReciept';
    return this.http.post(this.url, data)
  }


  public Gettestoffers() {

    return this.http.get<any[]>(this.host + '/Master/Gettestoffers');
  }

  public GetMediTestOrderDetailsNewWeb() {

    return this.http.get<any[]>(this.host + '/Master/GetMediTestOrderDetailsNewWeb');
  }

  public GetPatient_WalletLog() {

    return this.http.get<any[]>(this.host + '/Master/GetPatient_WalletLog');
  }
  public GetDiagnosticAppointmentPhotos() {

    return this.http.get<any[]>(this.host + '/Master/GetDiagnosticAppointmentPhotos');
  }




  public GetCountryMasterByLanguageID(lid: any) {

    return this.http.get<any[]>(' https://qa.his.clinivantage.dev/adt/getActiveCountryList/35');
  }


  ///Meditest API

  public GetStatefromMeditest() {
    var entity = {
      'countryId': 34,
      'organizationId': 35
    }
    this.url = 'https://qa.his.clinivantage.dev/adt/getActiveStateListByCountryId';
    return this.http.post(this.url, entity)
  }

  public GetCityfromMeditest() {
    var entity = {
      "stateId": 34
    }
    this.url = '  https://qa.his.clinivantage.dev/adt/getActiveDistrictListByStateId';
    return this.http.post(this.url, entity)
  }

  public GetPackagesfromMeditest() {
    var entity = {
      "organisationId": 35,
      "unitId": 34,
      "visitTypeId": 1,
      "bedBillingCategoryId": 35,
      "genderId": 1,
      "paymentEntitlementId": 1,
      "patientTypeId": 35,
      "serviceCode": "",
      "serviceName": ""
    }
    this.url = 'https://qa.his.clinivantage.dev/api/packages/bill/package/search';
    return this.http.post(this.url, entity)
  }
  public GetLabReportfromHIS(labSampleDtlsIds: any) {
    debugger
    var entity = {
      "labSampleDtlsIds": labSampleDtlsIds,
      "orgId": 1,
      "orgUnitId": 1,
    }
    this.url = 'https://intdev.his.clinivantage.dev/LIS/transaction/labReportPDF/getBinaryStringOfLABReport';
    return this.http.post(this.url, entity)
  }

  // public SendSMS(): any {
  //   debugger


  //   var body = {
  //     "data": [
  //       {
  //         "message_bag": {
  //           "numbers": "254739122099",
  //           "message": "Test Message From MediTEst",
  //           "sender": "UjumbeSMS"
  //         }
  //       }
  //     ]
  //   }


  //   // this.http.jsonp('https://ujumbesms.co.ke/api/messaging', 'callbak').subscribe(data => {
  //   //   debugger

  //   //   return data
  //   // });

  //   // axios.post('http://ujumbesms.co.ke/api/messaging', body, { headers: { 'X-Authorization': 'ZmI5NjgwYWI2ODE3MmU4ZWQzNGRkYjNmOWY1YmNl', 'Email': 'info@meditestdiagnostic.com', "Content-Type": "application/json" } })
  //   //   .then(res => {
  //   //     return res;
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error)
  //   //   });
  // }

  public SendSMS() {
    debugger
    var entity = {
      'data': [
        {
          "message_bag": {
            "numbers": "0723660400,0712090304",
            "message": "Message from the first bag",
            "sender": "DEPTHSMS"
          }
        }
      ]
    }
    this.url = this.host + '/Master/SendSMS';
    return this.http.post(this.url, entity);
    // this.url = 'https://qa.his.clinivantage.dev/api/packages/bill/package/search';



    // return this.http.post(this.url, entity)



  }

  public PostGCMNotifications(data: any) {

    this.url = this.host + '/Doctor/PostGCMNotifications';
    return this.http.post(this.url, data)
  }

}
