import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  videos = [
    { url: '/videos/Computer-Basic.mp4', title: 'معرفی قطعات سیستم' },
    { url: '/videos/Graphic-Card.mp4', title: 'معرفی گرافیک های سری 50' }
  ];
}
