import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';

import { Tabs } from './examples/tabs/tabs'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatDividerModule, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-material-examples');
}
