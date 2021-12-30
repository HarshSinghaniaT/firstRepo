import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCondition'
})
export class SearchConditionPipe implements PipeTransform {

  transform(inputlist:any[], key:string, value:string): any[] {
    let output:any[] = [];
    if(key != "" && value != "")
      output = inputlist.filter(x => x[key].toString() == value)
    else
      output = inputlist;

    return output;
  }

}
