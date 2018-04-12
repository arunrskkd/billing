import { Component } from '@angular/core';
import {Message} from 'primeng/components/common/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  msgs: Message[] = [];
}
