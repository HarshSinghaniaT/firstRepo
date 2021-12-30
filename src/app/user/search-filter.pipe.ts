import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterPipe'
})
export class SearchFilterPipe implements PipeTransform {

  transform(inputlist:any[], filtercondition:string): any[] {
    
    let output:any[] = [];
    let k:number= 1;
    for(let i = 0; i<inputlist.length ; i++){
      if(!output.includes(inputlist[i][filtercondition])){
        output[k] = inputlist[i][filtercondition];
        k++;
      }
    }
    return output;
  }

}
