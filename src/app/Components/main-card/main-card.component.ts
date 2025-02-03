import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-main-card',
  imports: [RouterLink],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent implements OnInit{
  //@Input()
  img:string="teste";
  //@Input()
  title:string = "";
  //@Input()
  descricao:string="";

  data:string ="Hoje";
  id: number=1;


  ngOnInit():void{
    this.img = dataFake[this.id-1].img;
    this.title = dataFake[this.id-1].title;
    this.descricao = dataFake[this.id-1].info
  }
  constructor(){}
}
