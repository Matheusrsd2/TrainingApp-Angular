import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../utils/Constants';

@Pipe({
  name: 'dateFormatPipe'
})
export class DateFormatPipePipe extends DatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return super.transform(value, Constants.DATE_FMT);
  }

}
