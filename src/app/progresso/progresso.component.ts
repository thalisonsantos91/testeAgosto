import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  imports: [],
  templateUrl: './progresso.component.html',
  styleUrl: './progresso.component.scss'
})    
export class ProgressoComponent implements OnInit {

  @Input() public progresso: number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }
}
