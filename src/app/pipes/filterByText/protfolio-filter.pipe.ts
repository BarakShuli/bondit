import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'protfolioFilter'
})
export class ProtfolioFilterPipe implements PipeTransform {

  transform(items: any, args?: any): any {
    return args 
    ? items.filter(item => this.searchByName(item, args))
    : items;
  }

  searchByName(item, args) {
   return item.name.indexOf(args) !== -1
  }

}
