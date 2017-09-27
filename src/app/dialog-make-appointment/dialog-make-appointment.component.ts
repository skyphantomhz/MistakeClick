import { Component, Inject, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { DateAdapter, NativeDateAdapter, MdDatepicker } from '@angular/material';
@Component({
  selector: 'app-dialog-make-appointment',
  templateUrl: './dialog-make-appointment.component.html',
  styleUrls: ['./dialog-make-appointment.component.scss']
})
export class DialogMakeAppointmentComponent {
  checkFullFill: boolean;
  nameAppointmentFormControl = new FormControl('', [
    Validators.required]);
  addressFormControl = new FormControl('', [
    Validators.required]);
  dateTime: string;
  constructor(
    public dialogRef: MdDialogRef<DialogMakeAppointmentComponent>,
    @Inject(MD_DIALOG_DATA) public data: any, dateAdapter: DateAdapter<NativeDateAdapter>) {
    this.checkFullFill=true;
  }
  acceptClick(): void {
    this.dialogRef.close({
      nameAppointment: this.getNameAppointment(),
      addressAppointment: this.getAddress(),
      dateTime: this.dateTime
    });
  }

  getNameAppointment(): string{
    return this.nameAppointmentFormControl.value
  }
  getAddress(): string{
    return this.addressFormControl.value
  }

  getDate(event){
    if(event.value && this.getNameAppointment() && this.getAddress()){
      this.checkFullFill=false;
      const dateAppointment = new Date(event.value);
      this.dateTime = this.getOnlyDate(dateAppointment);
    }
  }

  getOnlyDate(date: Date): string{
    let dateString: string;
    dateString="";
    dateString += (date.getMonth() + 1) + "/";  
    dateString += date.getDate() + "/";  
    dateString += date.getFullYear(); 
    return dateString;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
