import { Component } from '@angular/core';
import { MainCardComponent } from "../../Components/main-card/main-card.component";
import { MiniCardComponent } from "../../Components/mini-card/mini-card.component";

@Component({
  selector: 'app-home',
  imports: [MainCardComponent, MiniCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
