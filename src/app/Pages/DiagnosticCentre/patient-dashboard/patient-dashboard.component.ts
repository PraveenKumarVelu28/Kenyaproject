import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { DatePipe, formatDate } from '@angular/common';
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  term: any
  constructor(private MediTestService: MediTestService, private Datepipe: DatePipe) { }
  todaydate: any;
  edate: any;
  loader: any;
  count1: any = 10;
  p: any = 1;
  Type: any;
  servicelist: any;
  dropdownSettings1: any
  ngOnInit(): void {
    this.loader = false;
    this.Type = 2;
    const format = 'yyyy-MM-dd';
    var entity = {
      'organizationId': 1,
      'unitId': 1,
      'searchKeyword': "",

    }
    this.MediTestService.GetServices(entity).subscribe(res => {
      this.servicelist = res;
      this.dropdownSettings1 = {
        singleSelection: false,
        idField: 'testPrice',
        textField: 'testName',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        //  itemsShowLimit: 3,
        allowSearchFilter: true

      };
      console.log(this.servicelist);

    })
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    this.edate = formatDate(myDate, format, locale);
    this.GetPatientRegistrationWeb();
  }
  registeredpatients: any;
  public GetPatientRegistrationWeb() {
    debugger
    this.MediTestService.GetPatientRegistrationWeb().subscribe(

      data => {

        this.registeredpatients = data;
      }, error => {
      }
    )

  }

  public Getedate() {
    debugger
    this.MediTestService.GetPatientRegistrationWeb().subscribe(

      data => {
        this.registeredpatients = data.filter(x => x.filterdate >= this.todaydate && x.filterdate <= this.edate);
      }, error => {
      }
    )
  }

  public DisablePatient(id: any) {
    var eb = {
      'ID': id,
      'Enable_Disable': 1
    }
    this.MediTestService.DisablePatient(eb).subscribe(

      data => {
        debugger
        Swal.fire('Updated successfully.');
        location.reload();
      },
    )

  }
  patientid: any;
  PatientName: any;
  Address: any;
  GenderID: any;
  DateOfBirth: any;
  public GetPatientID(details: any) {

    this.patientid = details.id;
    this.Mobileno = details.mobileNumber;
    this.EmailID = details.emailID;
    this.MediTestService.GetPatientRegistrationWeb().subscribe(

      data => {
        let temp: any = data.filter(x => x.id == this.patientid);
        this.PatientName = temp[0].patientName;
        this.Address = temp[0].address;
        this.DateOfBirth = temp[0].dob;
        this.GenderID = temp[0].genderID;
      }, error => {
      }
    )

  }

  public BookTest() {
    this.InsertAppoitmnet(this.patientid);
    this.loader = true;

  }
  TotalPrice: number = 0;
  TestNames: any;
  orderid: any;
  lastname: any;
  Date: any;
  SlotTime: any;
  Testcodes: any;
  public InsertAppoitmnet(PatientID: any) {
    debugger
    this.TotalPrice = 0;
    this.TestNames = '';
    this.Testcodes = '';
    for (let i = 0; i < this.selectedItems2.length; i++) {
      this.TotalPrice = this.TotalPrice + parseInt(this.selectedItems2[i].testPrice);
    }
    for (let i = 0; i < this.selectedItems2.length; i++) {
      this.TestNames = this.TestNames + this.selectedItems2[i].testName + ','
    }
    for (let i = 0; i < this.selectedItems3.length; i++) {
      this.Testcodes = this.Testcodes + this.selectedItems3[i] + ','
    }


    var entity = {
      'PatientID': PatientID,
      'DiagnosticCenterID': localStorage.getItem('DiagnosticId'),
      'DiagnosticSlotID': 0,
      'Date': this.Date,
      'TotalPrice': this.TotalPrice,
      'HomeSampleBit': this.Type == 1 ? true : false,
      'DiagnopatientNmae': '',
      'AppointmentID': 0,
      'DoctorID': 0,
      'SlotTime': this.SlotTime,
      'AppointmentType': 1,
      'RelationPatientID': 44,
      'FileURL': 'temp',
      'PaymentType': 0,
      'TestNames': this.TestNames,
      'MediOrderID': 0,
      'UsedPoints': 0,
      'PaymentTypeMed': 'Cash On Delivery'

    }
    this.MediTestService.InsertDiagnosticAppointmentsWeb(entity).subscribe(res => {
      this.orderid = res;
      this.InsertAppoitmnetInSamirAPI1();
      // if (this.Type == 1) {
      //   this.Cashcollected();
      // }
      // else if (this.Type == 0) {
      //   this.InsertAppoitmnetInSamirAPI1();
      // }
    })



  }
  EmailID: any
  public InsertAppoitmnetInSamirAPI1() {
    debugger


    this.loader = true;
    var entity = {
      'ch_order_num': this.orderid,
      'patient_id': this.patientid,
      'title': 'Mr',
      'patient_First_name': this.PatientName,
      'patient_Last_name': this.lastname,
      'patient_address': this.Address,
      'Address': this.Address,
      'mobile': this.Mobileno,
      'email': this.EmailID,
      'DOB': this.DateOfBirth,
      'age': this.age,
      'sample_collection_date': this.Date,
      'entry_date_time': this.Date,
      'gender': this.GenderID == 1 ? 'Male' : 'Female',
      'tests': this.Testcodes,
      'MediOrderID': 0,
      'UsedPoints': 0,
      'PaymentApprovalNo': this.PaymentApprovalNo

    }
    this.MediTestService.InsertOrdersMediNew(entity).subscribe(res => {
      console.log(res);
      this.loader = false;
      Swal.fire('Order Placed Successfully');
      location.reload();
    })

  }

  public HomeSampleCall() {
    this.InsertAppoitmnet(this.patientid);
  }
  age: any;
  PaymentApprovalNo: any;
  public InsertAppoitmnetInSamirAPI() {
    debugger
    this.loader = true;
    var entity = {
      'ch_order_num': this.orderid,
      'patient_id': this.patientid,
      'title': 'Mr',
      'patient_First_name': this.PatientName,
      'patient_Last_name': this.lastname,
      'patient_address': this.Address,
      'Address': this.Address,
      'mobile': this.Mobileno,
      'email': this.EmailID,
      'DOB': this.DateOfBirth,
      'age': this.age,
      'sample_collection_date': this.Date,
      'entry_date_time': this.Date,
      'gender': this.GenderID == 1 ? 'Male' : 'Female',
      'tests': this.Testcodes,
      'MediOrderID': 0,
      'UsedPoints': 0,
      'PaymentApprovalNo': this.PaymentApprovalNo

    }
    this.MediTestService.InsertOrdersMediNew(entity).subscribe(res => {
      console.log(res);
      this.loader = false;
      Swal.fire('Order Placed Successfully');
      location.reload();
    })

  }
  selectedItems2: any = [];
  selectedItems3: any = [];
  public onItemSelect1(item: any) {
    debugger
    this.selectedItems2.push(item);

    let temp: any = this.servicelist;
    let test = temp.filter((x: { testName: any; }) => x.testName == item.testName);
    this.selectedItems3.push(test[0].testCode);

  }

  public onItemDeselect1(item: any) {
    debugger
    let temp: any = this.servicelist;
    let test = temp.filter((x: { testName: any; }) => x.testName == item.testName);
    this.selectedItems3.pop(test[0].testCode);
  }


  showplacebutton: any;
  selectedItems1: any = [];
  Mobileno: any
  public Cashcollected() {
    debugger

    this.TotalPrice = 0;
    for (let i = 0; i < this.selectedItems2.length; i++) {
      this.TotalPrice = this.TotalPrice + parseInt(this.selectedItems2[i].testPrice);
    }
    var entity = {
      'Amount': this.TotalPrice,
      'PayeePhoneNo': "CASH",
      'TranId': this.orderid
    }
    this.MediTestService.MediTestMPesaAPI(entity).subscribe(res => {
      let apires: any = res;
      let status = apires.isApproved;

      if (status == false) {
        this.loader = false;
        Swal.fire('Payment Failed')
      }
      else {
        this.PaymentApprovalNo = apires.approvalNo;
        Swal.fire('Cash Collected Successfully. Place Order Now')
        this.showplacebutton = 1;
        this.loader = false;
      }


    })

  }

  public pageChanged(even: any) {

    let fgdgfgd = even;
    this.p = even;
  }

}
