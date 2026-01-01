import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// 
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss',
  imports: [
    FormsModule,
    AsyncPipe,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
})
export class Autocomplete {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  options: string[] = [
    'ABAS 100 ABasin',
    'ASHL 140 Aspen Highlands',
    'ASMT 141 Aspen Mountain',
    'BMIL 142 Buttermilk',
    'BREK 201 Breckenridge',
    'COOP 430 Cooper',
    'COPP 195 Copper Mountain',
    'ECHO 278 Echo Mountain',
    'KEYS 205 Keystone',
    'LOVE 233 Loveland',
    'MONA 350 Monarch',
    'SNOW 222 Snowmass',
    'STEM 514 Steamboat',
    'TELL 320 Telluride',
    'VAIL 176 Vail',
    'WPAR 232 Winter Park',
    'WOLF 118 Wolf Creek',
  ];
  filteredOptions: string[];

  constructor() {
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter((o) => o.toLowerCase().includes(filterValue));
  }
  // myControl = new FormControl('');
  // options: string[] = [
  //     '100',
  //     '104',
  //     '105',
  //     '108',
  //     '110',
  //     '111',
  //     'CR101',
  //     'ST102',
  //     '200',
  //     '204',
  //     '205',
  //     '208',
  //     '210',
  //     '211',
  //     'CR201',
  //     'ST202',
  // ];
  // filteredOptions!: Observable<string[]>;

  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map((value) => this._filter(value || ''))
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  // }
}
