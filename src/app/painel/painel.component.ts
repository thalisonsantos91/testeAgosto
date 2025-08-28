import { Component, EventEmitter, Output, OnDestroy, OnInit } from '@angular/core';
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
export class PainelComponent implements OnDestroy {

  public frases: Frase[] = Frases
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase = this.frases[this.rodada]

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
   }

  ngOnDestroy()  {
    console.log('Componente painel foi destruído!');
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
    
    if (this.resposta.trim() == this.rodadaFrase.frasePtBr) {
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)

      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria')
        this.rodada = 0
        this.tentativas = 4
        this.progresso = 0
        this.rodadaFrase = this.frases[this.rodada]
        this.resposta = ''
      }

      this.atualizaRodada()

    }else{
      this.tentativas--
      
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
        this.rodada = 0
        this.tentativas = 4
        this.progresso = 0
        this.atualizaRodada()
      }
    }    
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
