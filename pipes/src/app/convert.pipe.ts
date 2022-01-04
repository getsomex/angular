import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): any {
    if (!value) return '';
    switch (targetUnits) {
      case 'km':
        return value * 160934;
      case 'm':
        return value * 160934 * 1000;
      case 'cm':
        return value * 160934 * 1000 * 100;
      default:
        throw new Error('Target Unit is not supported');
    }
  }
}
