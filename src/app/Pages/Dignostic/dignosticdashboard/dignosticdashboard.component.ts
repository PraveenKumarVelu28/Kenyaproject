import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
//import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-dignosticdashboard',
  templateUrl: './dignosticdashboard.component.html',
  styleUrls: ['./dignosticdashboard.component.css']
})
export class DignosticdashboardComponent implements OnInit {

  constructor(public MediTestService: MediTestService, private activatedroute: ActivatedRoute) { }
  public diagnosticlist: any;
  public id: any;
  public term: any;
  p: number = 1;
  public labels: any;
  public languageid: any;
  public enddate: any;
  public startdate: any;
  public count: any;
  public labels1: any;


  public countryid: any;
  public citylist: any;
  public cityid: any;
  public dummlist: any;
  public arealist: any;
  public areaid: any;
  public countrylist: any;
  public hospitalclinicid: any;
  public countrymanaerid: any;
  public showexportbutton: any;
  public salesrepresntiveid: any;
  public showeditbutton: any;
  meridionalid: any;
  showdelete: any;
  ngOnInit() {
    debugger


    this.languageid = localStorage.getItem('LanguageID');
    this.startdate = localStorage.getItem('StartDate');
    this.enddate = localStorage.getItem('EndDate');

    this.activatedroute.params.subscribe(params => {
      this.id = params['id'];
    }
    )
    this.getdiagnosticforadmin();
    this.getlanguage();
    this.MediTestService.GetAdmin_Masters_labels(this.languageid).subscribe(
      data => {

        this.labels1 = data;
      },
      error => { }
    );
    this.GetCountryMaster()
  
    this.countryid = 0;
    this.cityid = 0;

  }

  public getdiagnosticforadmin() {

    this.MediTestService.GetDiagnosticForAdminByLanguageID(this.languageid).subscribe(
      data => {

        this.diagnosticlist = data;

        this.dummlist = this.diagnosticlist
        this.count = this.diagnosticlist.length;
      }, error => {
      }
    )
  }

  public getlanguage() {
    this.MediTestService.GetAdmin_DiagnosticRegistration_LabelBYLanguageID(this.languageid).subscribe(
      data => {
        this.labels = data;
      }, error => {
      }
    )
  }




  public GetCountryMaster() {
    this.MediTestService.GetCountryMasterByLanguageID(this.languageid).subscribe(
      data => {

        this.countrylist = data;

      }, error => {
      }
    )
  }

  public GetCountryID(even: any) {
    if (even.target.value != 0) {

      this.countryid = even.target.value;

      this.diagnosticlist = this.dummlist.filter((x: { countryID: any; }) => x.countryID == this.countryid)
      this.count = this.diagnosticlist.length
      this.getcity();
    }
    else if (even.target.value == 0) {
      this.getdiagnosticforadmin()
      this.countryid = 0
      this.areaid = 0

    }
  }
  public getcity() {

    this.MediTestService.GetCityMasterBYIDandLanguageID(this.countryid, this.languageid).subscribe(
      data => {

        this.citylist = data;
      }, error => {
      }
    )
  }


  public GetCityID(even: any) {
    if (even.target.value != 0) {

      this.cityid = even.target.value;
      this.getareamasterbyid()
      this.diagnosticlist = this.dummlist.filter((x: { cityID: any; }) => x.cityID == this.cityid)
      this.count = this.diagnosticlist.length
    }
    else if (even.target.value == 0) {
      this.getcity();
      this.areaid = 0;
      this.cityid = 0
    }
  }



  public getareamasterbyid() {

    this.MediTestService.GetAreaMasterByCityIDAndLanguageID(this.cityid, this.languageid).subscribe(
      data => {

        this.arealist = data;

      }, error => {
      }
    )
  }

  public GetAreaID(even: any) {
    if (even.target.value != 0) {

      this.areaid = even.target.value;
      this.diagnosticlist = this.dummlist.filter((x: { areaID: any; }) => x.areaID == this.areaid)
      this.count = this.diagnosticlist.length
    }
    else if (even.target.value == 0) {
      this.getdiagnosticforadmin()
    }
  }

  // public deletediagnosticcenter(id) {

  //   if (this.languageid == 1) {
  //     Swal.fire({
  //       title: 'Are you sure?',
  //       text: "You Want to Delete This Diagnostic Center!",
  //       type: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes, delete it!'
  //     }).then((result) => {
  //       if (result.value) {
  //         this.MediTestService.DeleteDiagnosticCenter(id).subscribe(res => {
  //           let test = res;
  //           this.getdiagnosticforadmin();
  //         })
  //         Swal.fire(
  //           'Deleted!',
  //           'Diagnostic Center has been deleted.',
  //           'success'
  //         )
  //       }
  //       else {
  //         this.getdiagnosticforadmin();
  //       }
  //     })
  //   }
  //   else if (this.languageid == 6) {
  //     Swal.fire({
  //       title: 'Êtes-vous sûr ?',
  //       // text: "You Want to Delete This Doctor!",
  //       type: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Oui, supprimer !',
  //       cancelButtonText: 'Annuler'
  //     }).then((result) => {
  //       if (result.value) {
  //         this.MediTestService.DeleteDiagnosticCenter(id).subscribe(res => {
  //           let test = res;
  //           this.getdiagnosticforadmin();
  //         })
  //         Swal.fire(
  //           'Supprimé!'
  //           // 'Le médecin a été supprimé.',
  //           // 'success'
  //         )
  //       }
  //       else {
  //         this.getdiagnosticforadmin();
  //       }
  //     })
  //   }

  // }

  // public getglmasterexcel() {
  //   let hhh = this.tableToJson(document.getElementById('Doc'));
  //   this.exportAsExcelFile(hhh, "Diagnostic List");
  // }

  // public tableToJson(table) {

  //   var data = []; // first row needs to be headers
  //   var headers = [];
  //   for (var i = 0; i < table.rows[0].cells.length; i++) {
  //     headers[i] = table.rows[0].cells[i].innerHTML.toUpperCase().replace(/ /gi, '');
  //   }
  //   // go through cells 
  //   for (var i = 1; i < table.rows.length; i++) {
  //     var tableRow = table.rows[i];
  //     var rowData = {};
  //     for (var j = 1; j < tableRow.cells.length - 1; j++) {
  //       rowData[headers[j]] = tableRow.cells[j].innerHTML;
  //     } data.push(rowData);
  //   }
  //   return data;
  // }

  // public exportAsExcelFile(json: any[], excelFileName: string): void {

  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  //   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //   this.saveAsExcelFile(excelBuffer, excelFileName);
  // }

  // private saveAsExcelFile(buffer: any, fileName: string): void {
  //   const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
  //   FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  // }





  public pageChanged(even: any) {

    let fgdgfgd = even;
    this.p = even;
  }
}
