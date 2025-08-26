import { Component, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss'],
  standalone: true
})
export class TentativasComponent {

  
  public coracoes: Coracao[] = [
    new Coracao(true),  
    new Coracao(true),
    new Coracao(true),
  ]
  
  constructor() {
    console.log(this.coracoes);
  }
  
  ngOnInit(){}
}
