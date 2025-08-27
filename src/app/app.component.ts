import { Component } from '@angular/core';
import { TopoComponent } from './Topo/topo.component';
import { PainelComponent } from './painel/painel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    TopoComponent,
    PainelComponent
  ]
})
export class AppComponent {

  public encerrarJogo(tipo: string): void {
    console.log(tipo);
  }
  
}
