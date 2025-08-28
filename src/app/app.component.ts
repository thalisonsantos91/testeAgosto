import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './Topo/topo.component';
import { PainelComponent } from './painel/painel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    TopoComponent,
    PainelComponent,
    CommonModule
  ]
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public tipoEncerramento: string = ''

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = ''
  }
}
