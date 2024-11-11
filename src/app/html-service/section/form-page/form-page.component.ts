import { Component, OnInit } from '@angular/core';

interface Age {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {

  selectedValue: string;
  selectedCar: string;

  age: Age[] = [
    { value: '3', viewValue: '0 - 3 Bulan' },
    { value: '6', viewValue: '3 - 6 Bulan' },
    { value: '9', viewValue: '6 - 9 Bulan' },
    { value: '12', viewValue: '9 - 12 Bulan' },
    { value: '18', viewValue: '12 - 18 Bulan' },
    { value: '24', viewValue: '18 - 24 Bulan' },
    { value: '36', viewValue: '24 - 36 Bulan' },
  ];


  constructor() { }

  ngOnInit() { }

}
