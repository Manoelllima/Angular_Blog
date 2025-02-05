import { Component, OnInit, Query } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { LoginComponent } from "./login/login.component";
import { SocialMidiaComponent } from "./social-midia/social-midia.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MenuComponent, LoginComponent, SocialMidiaComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  show:boolean = true;
  ngOnInit(): void {
    if(window.innerWidth <= 675){
        this.show=false;
    }else{
       this.show=true;
    }

  }
}
