import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs-nested',
  imports: [MatTabsModule],
  templateUrl: './tabs-nested.html',
  styleUrl: './tabs-nested.scss',
})
export class TabsNested {
  idfs = [
    {
      idf: '122',
      panels: ['1D', '1E', '1F'],
    },
    {
      idf: '145',
      panels: [
        '1D',
        '1E',
        '1F',
        '1G',
        '1H',
        '2D',
        '2E',
        '2F',
        '2G',
        '2H',
        '3D',
        '3E',
        '3F',
        '3G',
        '3H',
      ],
    },
    {
      idf: '168',
      panels: ['1D', '1E', '1F', '1G', '1H', '2D', '2E', '2F', '2G'],
    },
    {
      idf: '222',
      panels: [
        '1D',
        '1E',
        '1F',
        '1G',
        '1H',
        '2D',
        '2E',
        '2F',
        '2G',
        '2H',
        '3D',
        '3E',
      ],
    },
    {
      idf: '245',
      panels: [
        '1D',
        '1E',
        '1F',
        '1G',
        '1H',
        '2D',
        '2E',
        '2F',
        '2G',
        '2H',
        '3D',
        '3E',
        '3F',
        '3G',
        '3H',
      ],
    },
    {
      idf: '268',
      panels: ['1D', '1E', '1F', '1G'],
    },
    {
      idf: '322',
      panels: ['1D', '1E', '1F', '1G', '1H', '2D', '2E', '2F'],
    },
    {
      idf: '345',
      panels: ['1D', '1E', '1F', '1G', '1H', '2D', '2E', '2F', '2G'],
    },
    {
      idf: '368',
    },
    {
      idf: '422',
      panels: [
        '1D',
        '1E',
        '1F',
        '1G',
        '1H',
        '2D',
        '2E',
        '2F',
        '2G',
        '2H',
        '3D',
        '3E',
        '3F',
        '3G',
        '3H',
      ],
    },
    {
      idf: '445',
      panels: [
        '1D',
        '1E',
        '1F',
        '1G',
        '1H',
        '2D',
        '2E',
        '2F',
        '2G',
        '2H',
        '3D',
        '3E',
        '3F',
        '3G',
        '3H',
      ],
    },
    {
      idf: '468',
      panels: ['1D', '1E', '1F', '1G', '1H'],
    },
    {
      idf: '522',
      panels: ['1D', '1E', '1F', '1G', '1H', '2D', '2E', '2F', '2G'],
    },
    {
      idf: '545',
      panels: ['1D', '1E', '1F', '1G', '1H'],
    },
    {
      idf: '568',
      panels: ['1D', '1E'],
    },
    {
      idf: '1B138',
      panels: ['1D'],
    },
  ];
}
