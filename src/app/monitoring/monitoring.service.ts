import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpTraceInfo } from './httptraceInfo.payload';
import { SystemInfo } from './systemInfo.payload';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  constructor(private httpClient: HttpClient) { }

  getSystemInfos(): Observable<SystemInfo> {
    return this.httpClient.get<any>(`${environment.backendURL}/health`)
    .pipe(map(responseData => {
      return new SystemInfo(
        responseData.status,
        responseData.components.db.details.database,
        responseData.components.db.status,
        this.byteToGb(responseData.components.diskSpace.details.free).toFixed(),
      )
    }));
  }

  getHttpTraceInfos(): Observable<HttpTraceInfo[]> {
    return this.httpClient.get<any>(`${environment.backendURL}/httptrace`)
    .pipe(map(responseData => {
      const httpTraces = Array<HttpTraceInfo>();
      responseData.traces.forEach(element => {
        httpTraces.push(new HttpTraceInfo(
          element.request.method, 
          element.timestamp, 
          element.timeTaken, 
          element.response.status,
          element.request.uri
        ));
      });
      return httpTraces;
    }));
  }

  private byteToGb(byte: number): number {
    return byte / Math.pow(1024,3);
  }
}