import { Component, OnInit } from '@angular/core';
import { faClock, faDatabase, faHdd, faMicrochip, faServer } from '@fortawesome/free-solid-svg-icons';
import { SystemInfo } from '../monitoring/systemInfo.payload';
import { MonitoringService } from '../monitoring/monitoring.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faServer = faServer;
  faDatabase = faDatabase;
  faMicrochip = faMicrochip;
  faHdd = faHdd;
  faClock = faClock;
  systemInfo: SystemInfo;

  constructor(private monitoringService: MonitoringService) { }

  ngOnInit(): void {
    this.monitoringService.getSystemInfos().subscribe(data => this.systemInfo = data);
  }

}
