import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { LoginComponent } from "./login/login.component";
import { SocialMidiaComponent } from "./social-midia/social-midia.component";

@Component({
  selector: 'app-header',
  imports: [MenuComponent, LoginComponent, SocialMidiaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
