import { Component, OnInit } from '@angular/core';
interface Headers {
  key: keyof Data;
  label: string;
}
interface Data {
  name: string;
  job: string;
  age: number;
}
@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data: Data[] = [
    {
      name: 'James',
      age: 24,
      job: 'Designer',
    },
    {
      name: 'Yon',
      age: 25,
      job: 'Programmer',
    },
    {
      name: 'Itachi',
      age: 30,
      job: 'Photographer',
    },
  ];
  headers: Headers[] = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
