import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss'],
  standalone: true
})
export class TentativasComponent {
  public coracaoVazio = '/coracao_vazio.png';
  public coracaoCheio = '/coracao_cheio.png';
}
