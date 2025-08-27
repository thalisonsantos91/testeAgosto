import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss'],
   imports: [CommonModule],
  standalone: true
})
export class TentativasComponent implements OnInit, OnChanges {

@Input() public tentativas: number = 0
  
  public coracoes: Coracao[] = [
    new Coracao(true),  
    new Coracao(true),
    new Coracao(true)
  ]
  
  constructor() {
  }

  ngOnChanges() {
    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas - 1
      this.coracoes[indice].cheio = false
    }
  }

  ngOnInit(){}
}
