import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monitoring-frontend';
  successCard = {status: "200", color: "success"};
  primaryCard = {status: "201", color: "primary"};
  warningCard = {status: "404", color: "warning"};
  dangerCard = {status: "500", color: "danger"};
}
