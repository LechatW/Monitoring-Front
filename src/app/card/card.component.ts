import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpTraceInfo } from '../monitoring/httptraceInfo.payload';
import { MonitoringService } from '../monitoring/monitoring.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() card;
  nbResponse: number;
  httpTraces: HttpTraceInfo[];

  constructor(private monitoringService: MonitoringService) { }

  ngOnInit(): void {
    this.monitoringService.getHttpTraceInfos().subscribe(data => {
      this.httpTraces = data
      this.nbResponse = this.httpTraces.filter(element => element.status == this.card.status).length;
    });
  }

}
