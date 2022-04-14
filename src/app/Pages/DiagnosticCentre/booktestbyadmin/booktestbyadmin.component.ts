import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booktestbyadmin',
  templateUrl: './booktestbyadmin.component.html',
  styleUrls: ['./booktestbyadmin.component.css']
})
export class BooktestbyadminComponent implements OnInit {

  constructor(public MediTestService: MediTestService, private spinner: NgxSpinnerService, private activatedroute: ActivatedRoute, public router: Router) { }
  PatientName: any;
  Mobileno: any;
  Email: any;
  Address: any;
  GenderID: any;
  DateOfBirth: any;
  Date: any;
  servicelist: any
  dropdownSettings1: any;
  SlotTime: any;
  public loader!: boolean;
  public selectedItems1: any = [];
  ngOnInit(): void {
    this.loader = false;
    var entity = {
      'organizationId': 1,
      'unitId': 1,
      'searchKeyword': "",

    }
    this.MediTestService.GetServices(entity).subscribe(res => {
      this.servicelist = res;
      this.dropdownSettings1 = {
        singleSelection: false,
        idField: 'basePriceForContract',
        textField: 'serviceStandardName',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        //  itemsShowLimit: 3,
        allowSearchFilter: true

      };
      console.log(this.servicelist);

    })
  }


  public onItemSelect1(item: any) {
    debugger
    this.selectedItems1.push(item);

  }
  Prefix: any;
  PatientID: any
  public InsertDetailes() {
    debugger
    this.loader = true;
    this.MediTestService.GetPatientRegistrationWeb().subscribe(res => {
      let temp: any = res.filter(x => x.mobileNumber == this.Mobileno || x.emailID == this.Email);
      if (temp.length != 0) {
        this.PatientID = temp[0].id;
        this.InsertAppoitmnet(this.PatientID);
      }
      else {
        var entity = {
          'PatientName': this.PatientName,
          'MobileNumber': this.Mobileno,
          'EmailID': this.Email,
          'Password': 'welcome',
          'GenderID': this.GenderID,
          'Address': this.Address,
          'DOB': this.DateOfBirth,
          'gender': this.GenderID == 1 ? 'Male' : 'Female',
          'patient_address': this.Address,
          'Prefix': 'Mr',
        }
        this.MediTestService.InsertPatientRegistration(entity).subscribe(res => {
          this.PatientID = res;
          this.InsertAppoitmnet(this.PatientID);
        })


      }


    })


  }
  TotalPrice: any;
  TestNames: any;
  orderid: any;
  lastname: any
  public InsertAppoitmnet(PatientID: any) {
    debugger
    this.TotalPrice = 0;
    this.TestNames = '';
    for (let i = 0; i < this.selectedItems1.length; i++) {
      this.TotalPrice = this.TotalPrice + this.selectedItems1[i].basePriceForContract
    }
    for (let i = 0; i < this.selectedItems1.length; i++) {
      this.TestNames = this.TestNames + this.selectedItems1[i].serviceStandardName + ','
    }
    var entity = {
      'PatientID': PatientID,
      'DiagnosticCenterID': localStorage.getItem('DiagnosticId'),
      'DiagnosticSlotID': 0,
      'Date': this.Date,
      'TotalPrice': this.TotalPrice,
      'HomeSampleBit': 1,
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
      this.Cashcollected();
    })



  }
  age: any;
  PaymentApprovalNo: any;
  public InsertAppoitmnetInSamirAPI() {
    debugger
    this.loader = true;
    var entity = {
      'ch_order_num': this.orderid,
      'patient_id': this.PatientID,
      'title': 'Mr',
      'patient_First_name': this.PatientName,
      'patient_Last_name': this.lastname,
      'patient_address': this.Address,
      'Address': this.Address,
      'mobile': this.Mobileno,
      'email': this.Mobileno,
      'DOB': this.DateOfBirth,
      'age': this.age,
      'sample_collection_date': this.Date,
      'entry_date_time': this.Date,
      'gender': this.GenderID == 1 ? 'Male' : 'Female',
      'tests': this.TestNames,
      'MediOrderID': 0,
      'UsedPoints': 0,
      'PaymentApprovalNo': this.PaymentApprovalNo

    }
    this.MediTestService.InsertOrdersMediNew(entity).subscribe(res => {
      console.log(res);
      this.loader = false;
      Swal.fire('Order Placed Successfully');
      location.href = "#/Orders"
    })

  }
  showplacebutton: any;
  public Cashcollected() {
    debugger

    this.TotalPrice = 0;
    for (let i = 0; i < this.selectedItems1.length; i++) {
      this.TotalPrice = this.TotalPrice + this.selectedItems1[i].basePriceForContract
    }
    var entity = {
      'Amount': this.TotalPrice,
      'PayeePhoneNo': this.Mobileno,
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
}
