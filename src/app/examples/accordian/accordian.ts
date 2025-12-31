import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.html',
  styleUrl: './accordian.scss',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accordian {
  bldg = "420"
  idf = "122"
  panels = [
    {
      panel: '1D',
    },
    {
      panel: '1E',
    },
    {
      panel: '1F',
    },
    {
      panel: '1G',
    },
    {
      panel: '1H',
    },
    {
      panel: '2D',
    },
    {
      panel: '2E',
    },
    {
      panel: '2F',
    },
  ];
}
