import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [RouterModule, MatButtonModule, MatMenuModule, MatIcon, MatIconButton, MatToolbar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  router: any;
  toggleSideNav() {}
}
