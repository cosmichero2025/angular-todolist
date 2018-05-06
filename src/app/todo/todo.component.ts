import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [

    trigger('todos', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

          query(':leave', stagger('200ms', [
            animate('.4s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
            ]))]), {optional: true}),

      ])
    ])

  ]
})

export class TodoComponent implements OnInit {
  todoCount: number;
  todoInput: string;
  todos = [
    {
      'title': 'Learn the basics of angular'
    },
    {
      'title': 'Apply that knowledge to work'
    },
    {
      'title': 'Get money to pay for heat'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.todoCount = this.todos.length;
  }

  addTodo() {
    if (this.todoInput === '') {
      return;
    }


    const newTodo = {
      'title': this.todoInput
    }

    this.todos.push(newTodo);
    this.todoInput = '';
    this.todoCount = this.todos.length;
  }

  deleteTodo(i) {
    this.todos.splice(i, 1);

    this.todoCount = this.todos.length;
  }

}
