import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apps'
})
export class AppsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? value.filter((item,index)=>{
      if(item.ProductName.toLowerCase().indexOf(args)!=-1){
        return true;
      }
        }) : value;
  }

}
