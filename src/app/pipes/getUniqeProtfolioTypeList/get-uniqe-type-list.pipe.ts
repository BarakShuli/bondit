import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getUniqeTypeList'
})
export class GetUniqeTypeListPipe implements PipeTransform {

  transform(items: any): any {
    let newArr:string[] = [];
    return items.filter(item => this.getUniqeTypeList(item, newArr))
  }

  getUniqeTypeList(item, newArr) {
    if(!newArr.includes(item.type)) {
      newArr.push(item.type);
      return item;
    }
   // return item;
  }

}
