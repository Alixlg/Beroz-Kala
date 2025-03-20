import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  videos = [
    { url: 'https://s33.picofile.com/d/8483496484/de6af24d-8da1-4325-83d4-849cb59a4051/Computer_Basic.mp4', title: 'معرفی قطعات سیستم' },
    { url: 'https://s33.picofile.com/d/8483496476/6fc93b33-d439-4af7-9882-cf984c27df18/Graphic_Card.mp4', title: 'معرفی گرافیک های سری 50' }
  ];
}
