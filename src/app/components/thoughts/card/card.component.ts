import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
