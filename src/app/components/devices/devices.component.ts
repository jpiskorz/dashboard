import {Component, OnInit} from '@angular/core';
import {DeviceModel} from '../../model/device.model';
import {DeviceService} from './device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  public devices: DeviceModel [];

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.getDevices();
  }


  getDevices(): void {
    this.deviceService.getDevices()
      .subscribe((devices) => this.devices = devices);
  }
}
