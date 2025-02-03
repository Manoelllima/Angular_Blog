import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';


@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit
{
  img:string="";
  title:string="";
  info:string="";
  descricaoUm:string="";
  descricaoDois:string="";
  id:string|null="0";

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id')); // recuperar o id do link
    if(this.id != null){
      this.setInformacoes(parseInt(this.id))
    }

  }

  setInformacoes(id:number){
    const result = dataFake.filter(value =>{return value})[id];
    this.img = dataFake[id-1].img;
    this.title = dataFake[id-1].title;
    this.info = dataFake[id-1].info;
    this.descricaoUm = dataFake[id-1].descricao1;
    this.descricaoDois = dataFake[id-1].descricao2;
  }

}
