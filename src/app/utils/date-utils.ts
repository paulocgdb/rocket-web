import {Injectable} from "@angular/core";
import {NativeDateAdapter} from "@angular/material/core";

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {

  override format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } else {
      return date.toDateString();
    }
  }
}
