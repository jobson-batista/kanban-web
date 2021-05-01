import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() type;

  constructor() { }

  ngOnInit(): void {
  }

  editCard(): void {
  }

  deleteCard(): void {
    if (window.confirm('Deseja realmente remover a tarefa ' + this.title)) {

    }
  }

}
