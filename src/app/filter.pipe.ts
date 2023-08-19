import { Pipe, PipeTransform } from '@angular/core';
import { TODO } from './todo/todo.component';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(val: TODO[], key: string, fkey: string) {
    return val.filter((x) => x[key].toUpperCase().includes(fkey.toUpperCase()));
  }
}
