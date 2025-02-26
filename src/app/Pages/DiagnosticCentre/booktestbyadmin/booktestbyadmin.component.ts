import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-booktestbyadmin',
  templateUrl: './booktestbyadmin.component.html',
  styleUrls: ['./booktestbyadmin.component.css'],
})
export class BooktestbyadminComponent implements OnInit {
  constructor(
    public MediTestService: MediTestService,
    private Datepipe: DatePipe,
    private spinner: NgxSpinnerService,
    private activatedroute: ActivatedRoute,
    public router: Router
  ) {}
  PatientName: any;
  Mobileno: any;
  Email: any;
  Address: any;
  GenderID: any;
  DateOfBirth: any;
  Date: any;
  servicelist: any;
  dropdownSettings1: any;
  SlotTime: any;
  public loader!: boolean;
  public selectedItems1: any = [];
  Type: any;
  ngOnInit(): void {
    this.loader = false;

    this.Type = 2;
    var entity = {
      organizationId: 1,
      unitId: 1,
      searchKeyword: '',
    };
    this.MediTestService.GetServices(entity).subscribe((res) => {
      this.servicelist = res;
      this.dropdownSettings1 = {
        singleSelection: false,
        idField: 'testPrice',
        textField: 'testName',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        //  itemsShowLimit: 3,
        allowSearchFilter: true,
      };
      console.log(this.servicelist);
    });
  }

  selectedItems2: any = [];
  selectedItems3: any = [];

  public onItemSelect1(item: any) {
    debugger;
    this.selectedItems2.push(item);

    let temp: any = this.servicelist;
    let test = temp.filter(
      (x: { testName: any }) => x.testName == item.testName
    );
    this.selectedItems3.push(test[0].testCode);
  }

  public onItemDeselect1(item: any) {
    debugger;
    let temp: any = this.servicelist;
    let test = temp.filter(
      (x: { testName: any }) => x.testName == item.testName
    );
    this.selectedItems3.pop(test[0].testCode);
  }
  Prefix: any;
  PatientID: any;
  public InsertDetailes() {
    debugger;

    this.MediTestService.GetPatientRegistrationWeb().subscribe((res) => {
      let temp: any = res.filter(
        (x) => x.mobileNumber == this.Mobileno || x.emailID == this.Email
      );
      if (temp.length != 0) {
        this.PatientID = temp[0].id;
        this.DateOfBirth = temp[0].dob;
        this.Mobileno = temp[0].mobileNumber;
        this.EmailID = temp[0].emailID;
        this.InsertAppoitmnet(this.PatientID);
      } else {
        var entity = {
          PatientName: this.PatientName,
          MobileNumber: this.Mobileno,
          EmailID: this.Email,
          Password: 'welcome',
          GenderID: this.GenderID,
          Address: this.Address,
          DOB: this.DateOfBirth,
          gender: this.GenderID == 1 ? 'Male' : 'Female',
          patient_address: this.Address,
          Prefix: 'Mr',
        };
        this.MediTestService.InsertPatientRegistration(entity).subscribe(
          (res) => {
            this.PatientID = res;
            this.MediTestService.GetPatientRegistrationWeb().subscribe(
              (res) => {
                let temp: any = res.filter((x) => (x.id = this.PatientID));
                this.DateOfBirth = temp[0].dob;
                this.Mobileno = temp[0].mobileNumber;
                this.EmailID = temp[0].emailID;
                this.InsertAppoitmnet(this.PatientID);
              }
            );
          }
        );
      }
    });
  }
  TotalPrice: number = 0;
  TestNames: any;
  orderid: any;
  lastname: any;
  Testcodes: any;
  public InsertAppoitmnet(PatientID: any) {
    debugger;
    this.TotalPrice = 0;
    this.TestNames = '';
    for (let i = 0; i < this.selectedItems2.length; i++) {
      this.TotalPrice =
        this.TotalPrice + parseInt(this.selectedItems2[i].testPrice);
    }
    for (let i = 0; i < this.selectedItems2.length; i++) {
      this.TestNames = this.TestNames + this.selectedItems2[i].testName + ',';
    }
    for (let i = 0; i < this.selectedItems3.length; i++) {
      this.Testcodes = this.Testcodes + this.selectedItems3[i] + ',';
    }

    var entity = {
      PatientID: PatientID,
      DiagnosticCenterID: localStorage.getItem('DiagnosticId'),
      DiagnosticSlotID: 0,
      Date: this.Date,
      TotalPrice: this.TotalPrice,
      HomeSampleBit: this.Type == 1 ? true : false,
      DiagnopatientNmae: '',
      AppointmentID: 0,
      DoctorID: 0,
      SlotTime: this.SlotTime,
      AppointmentType: 1,
      RelationPatientID: 44,
      FileURL: 'temp',
      PaymentType: 0,
      TestNames: this.TestNames,
      MediOrderID: 0,
      UsedPoints: 0,
      PaymentTypeMed: 'Cash On Delivery',
    };
    this.MediTestService.InsertDiagnosticAppointmentsWeb(entity).subscribe(
      (res) => {
        this.orderid = res;
        // if (this.Type == 1) {
        //   this.Cashcollected();
        // }
        // else if (this.Type == 0) {
        //   this.InsertAppoitmnetInSamirAPI1();
        // }
        //this.InsertAppoitmnetInSamirAPI1();
      }
    );
  }
  age: any;
  EmailID: any;
  PaymentApprovalNo: any;
  public InsertAppoitmnetInSamirAPI() {
    debugger;
    this.loader = true;
    var entity = {
      ch_order_num: this.orderid,
      patient_id: this.PatientID,
      title: 'Mr',
      patient_First_name: this.PatientName,
      patient_Last_name: this.lastname,
      patient_address: this.Address,
      Address: this.Address,
      mobile: this.Mobileno,
      email: this.EmailID,
      DOB: this.DateOfBirth,
      age: this.age,
      sample_collection_date: this.Date,
      entry_date_time: this.Date,
      gender: this.GenderID == 1 ? 'Male' : 'Female',
      tests: this.Testcodes,
      MediOrderID: 0,
      UsedPoints: 0,
      PaymentApprovalNo: this.PaymentApprovalNo,
    };
    this.MediTestService.InsertOrdersMediNew(entity).subscribe((res) => {
      console.log(res);
      this.loader = false;
      Swal.fire('Order Placed Successfully');
      location.href = '#/Orders';
    });
  }
  public HomeSampleCall() {
    this.InsertDetailes();
  }

  public InsertAppoitmnetInSamirAPI1() {
    debugger;

    this.loader = true;
    var entity = {
      ch_order_num: this.orderid,
      patient_id: this.PatientID,
      title: 'Mr',
      patient_First_name: this.PatientName,
      patient_Last_name: this.lastname,
      patient_address: this.Address,
      Address: this.Address,
      mobile: this.Mobileno,
      email: this.EmailID,
      DOB: this.DateOfBirth,
      age: this.age,
      sample_collection_date: this.Date,
      entry_date_time: this.Date,
      gender: this.GenderID == 1 ? 'Male' : 'Female',
      tests: this.Testcodes,
      MediOrderID: 0,
      UsedPoints: 0,
      PaymentApprovalNo: this.PaymentApprovalNo,
    };
    this.MediTestService.InsertOrdersMediNew(entity).subscribe((res) => {
      console.log(res);
      this.loader = false;
      Swal.fire('Order Placed Successfully');
      location.href = '#/Orders';
    });
  }
  showplacebutton: any;
  public Cashcollected() {
    debugger;

    this.TotalPrice = 0;
    for (let i = 0; i < this.selectedItems2.length; i++) {
      this.TotalPrice =
        this.TotalPrice + parseInt(this.selectedItems2[i].testPrice);
    }
    var entity = {
      Amount: this.TotalPrice,
      PayeePhoneNo: 'CASH',
      TranId: this.orderid,
    };
    this.MediTestService.MediTestMPesaAPI(entity).subscribe((res) => {
      let apires: any = res;
      let status = apires.isApproved;

      if (status == false) {
        this.loader = false;
        Swal.fire('Payment Failed');
      } else {
        this.PaymentApprovalNo = apires.approvalNo;
        Swal.fire('Cash Collected Successfully. Place Order Now');
        this.showplacebutton = 1;
        this.loader = false;
      }
    });
  }
}
