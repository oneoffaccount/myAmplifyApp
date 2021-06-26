import { Component } from '@angular/core';
import { DataStore } from 'aws-amplify';
import { APIService } from './API.service';
import { Todo } from 'src/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myamplifyapp';
  todos!: Array<Todo>;

  async ngOnInit() {
    /*await DataStore.save(
      new Todo({
      "name": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet"
    })
  );
  */
 
  let todos = DataStore.query(Todo).then(event => {
    this.todos = event;
  });;

  }

}
