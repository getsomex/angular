import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      userName: 'nature',
      imageUrl: 'assets/tree.jpeg',
      content: 'Hello tree',
    },
    {
      title: 'Snowy Mouuntain',
      userName: 'mountainLover',
      imageUrl: 'assets/mountain.jpeg',
      content: 'Hello Mountain',
    },
    {
      title: 'Mountain Biking',
      userName: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      content: 'Love Biking',
    },
  ];
}
