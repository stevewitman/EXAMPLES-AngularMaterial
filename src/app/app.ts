import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';

import { Tabs } from './examples/tabs/tabs'
import { TabsNested } from './examples/tabs-nested/tabs-nested';
import { Accordian } from "./examples/accordian/accordian";
import { Autocomplete } from './examples/autocomplete/autocomplete';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { Header } from './examples/header/header'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    MatDividerModule,
    Tabs,
    TabsNested,
    Accordian,
    Autocomplete,
    MatDatepickerModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-material-examples');
}
