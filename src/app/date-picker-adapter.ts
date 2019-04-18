import { NativeDateAdapter } from "@angular/material";

export class DatePickerAdapter extends NativeDateAdapter{
    format(date: Date, displayFormat: Object): string {
        console.log(date);
        return date.toString();
    }
}
