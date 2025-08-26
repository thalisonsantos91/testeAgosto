import { Component } from '@angular/core';
import { TentativasComponent } from '../tentativas/tentativas.component';
import { ProgressoComponent } from '../progresso/progresso.component';
import { Frase } from '../shared/frase.model';
import { Frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  imports: [ProgressoComponent, TentativasComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss',
  standalone: true
})
export class PainelComponent {

  public frases: Frase[] = Frases
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase = this.frases[this.rodada]

  public progresso: number = 0

  constructor() {
    this.atualizaRodada()
   }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {

    if (this.resposta == this.rodadaFrase.frasePtBr) {
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)
      this.atualizaRodada()      
      //alert('A resposta está correta!')
    }else{
      alert('A resposta está incorreta!')
    }    
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
