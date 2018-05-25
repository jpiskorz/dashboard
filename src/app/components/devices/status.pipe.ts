import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: Status, args?: any): any {


    if (status.value <= (status.max - status.min) * 0.7) {
      return 'OK';
    } else if (status.value > (status.max - status.min) * 0.7
      && status.value < (status.max - status.min) * 0.95) {
      return 'WARN';
    } else {
      return 'FULL';
    }
  }

}

export class Status {
  min: number;
  max: number;
  value: number;
}
