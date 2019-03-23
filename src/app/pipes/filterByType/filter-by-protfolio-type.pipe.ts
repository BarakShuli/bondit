import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByProtfolioType'
})
export class FilterByProtfolioTypePipe implements PipeTransform {

  transform(items: any, args: string): any {
    return args 
    ? items.filter(item => this.searchByType(item, args))
    : items;
  }

  searchByType(item, args:string) {
    if(args === "All") {
      return item;
    }
    return item.type === args.toLowerCase();
  }

}
