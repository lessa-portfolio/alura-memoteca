import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-thought',
  templateUrl: './new-thought.component.html',
  styleUrls: ['./new-thought.component.scss']
})
export class NewThoughtComponent implements OnInit {

  thought = {
    id: '1',
    content: 'Aprendendo Angular',
    authorship: 'Lucas Lessa',
    model: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought() {
    alert('Novo pensamento criado')
  }

  cancel() {

  }
}
