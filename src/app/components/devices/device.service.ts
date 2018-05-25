import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DeviceModel} from '../../model/device.model';

@Injectable()
export class DeviceService {

  private devicesUrl = 'http://preview.rockstardevelopers.de/dashboard/api/v1/devices';

  constructor(private http: HttpClient) {
  }

  public getDevices(): Observable<DeviceModel[]> {
    return this.http.get<DeviceModel[]>(this.devicesUrl);
  }
}
