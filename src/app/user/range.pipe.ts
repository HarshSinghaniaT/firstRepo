import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangepipe'
})
export class RangePipe implements PipeTransform {

  transform(inputArray:any[], start:any, end:any): any {
    
    let output:any[] = [];
    if((start != 0 && end != 0) && (start !=null && end != null))
    output = inputArray.filter(x => (x.salary >= start && x.salary <= end));
    else
    output = inputArray
    return output;
  }

}
