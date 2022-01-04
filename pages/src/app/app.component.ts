import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the Moon',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the mountain',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the stadium',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the beach',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the Moon',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the mountain',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the stadium',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the beach',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the Moon',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the mountain',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the stadium',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the beach',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the Moon',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the mountain',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the stadium',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the beach',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the Moon',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the mountain',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      title: 'At the stadium',
      url: 'https://source.unsplash.com/random/200x200?sig=1',
    },
  ];

  incrementPage() {
    if (this.currentPage !== this.images.length - 1)
      this.currentPage == this.currentPage++;
  }
  decreamentPage() {
    if (this.currentPage !== 0) this.currentPage == this.currentPage--;
  }
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
