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

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
   }

  public AtualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {

    if (this.resposta == this.rodadaFrase.frasePtBr) {
      this.rodada++
      this.rodadaFrase = this.frases[this.rodada]
      alert('A resposta está correta!')
    }else{
      alert('A resposta está incorreta!')
    }

    //this.resposta = ''
  }
}
