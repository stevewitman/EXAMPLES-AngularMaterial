import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';

import { Tabs } from './examples/tabs/tabs'
import { TabsNested } from './examples/tabs-nested/tabs-nested';
import { Accordian } from "./examples/accordian/accordian";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatDividerModule, Tabs, TabsNested, Accordian],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-material-examples');
}
