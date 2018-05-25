import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DevicesComponent} from './components/devices/devices.component';
import {DeviceDetailComponent} from './components/devices/device-detail/device-detail.component';
import {DeviceService} from './components/devices/device.service';
import {HttpClientModule} from '@angular/common/http';
import { StatusPipe } from './components/devices/status.pipe';
import {MomentModule} from 'ngx-moment';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DevicesComponent,
    DeviceDetailComponent,
    StatusPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
