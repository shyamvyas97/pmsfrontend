import { NativeDateAdapter } from "@angular/material";

export class DateAdapter extends NativeDateAdapter{
    format(date: Date, displayFormat: Object): string {
        console.log(date);
        return date.toString();
    }
}
