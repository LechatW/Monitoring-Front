import { Component, OnInit } from '@angular/core';
import { HttpTraceInfo } from '../monitoring/httptraceInfo.payload';
import { MonitoringService } from '../monitoring/monitoring.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  httpTraces: HttpTraceInfo[];

  constructor(private monitoringService: MonitoringService) { }

  ngOnInit(): void {
    this.monitoringService.getHttpTraceInfos().subscribe(data => this.httpTraces = data);
  }

}
