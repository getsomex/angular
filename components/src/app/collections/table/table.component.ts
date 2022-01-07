import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() classNames = '';
  @Input() data: Data[] = [];
  @Input() headers: Headers[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
