import { Component, OnInit, ViewChild } from '@angular/core';
import { Saukatcovid19Service } from '../saukatcovid19.service';
import { CountryReports } from 'src/countryReports';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
  ELEMENT_DATA:CountryReports[];
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 
                                'deaths','todayDeaths', 'recovered',
                                'active', 'critical','casesPerOneMillion', 
                               'deathsPerOneMillion', 'tests', 'testsPerOneMillion'];
dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA)
//paginator
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private service:Saukatcovid19Service) { }
  
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getAllReports();
  }
  public getAllReports(){
    let resp=this.service.covid19Reports();
    resp.subscribe(report=>this.dataSource.data=report as CountryReports[])
  }

  //Filtering
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
