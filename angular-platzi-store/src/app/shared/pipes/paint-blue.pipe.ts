import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paintBlue'
})
export class PaintBluePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
