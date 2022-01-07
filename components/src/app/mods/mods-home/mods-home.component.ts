import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'yoo', content: 'boo' },
    { title: 'WYU', content: 'FU' },
  ];
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
