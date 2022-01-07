import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: 'number of users' },
    { value: 900, label: 'revenue' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'Best couch in the world',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
