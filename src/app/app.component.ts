import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies = [
    {
      name: 'Episode I - The Phantom Menace',
      isDisable: false,
    },
    {
      name: 'Episode II - Attack of the Clones',
      isDisable: false,
    },
    {
      name: 'Episode III - Revenge of the Sith',
      isDisable: false,
    },
    {
      name: 'Episode IV - A New Hope',
      isDisable: false,
    },
    {
      name: 'Episode V - The Empire Strikes Back',
      isDisable: false,
    },
    {
      name: 'Episode VI - Return of the Jedi',
      isDisable: false,
    },
  ];

  delete(index: any) {
    this.movies.splice(index, 1);
  }

  addNew() {
    this.movies.push({
      name: 'new item',
      isDisable: false,
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
