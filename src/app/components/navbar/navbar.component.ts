import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  icons = (name: string) => `../../../assets/icons/${name}.png`;
  ngOnInit(): void {}
}
