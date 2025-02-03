import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-mini-card',
  imports: [RouterLink],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.css'
})
export class MiniCardComponent implements OnInit{

  img:String =" ";
  title:string = " ";
  descricao:string="";

  @Input()
  id:string="1";

  ngOnInit(): void {
    this.img = dataFake[parseInt(this.id)-1].img;
    this.title = dataFake[parseInt(this.id)-1].title;
    this.descricao = dataFake[parseInt(this.id)-1].info
  }

}
