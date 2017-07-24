import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  select: number = 1;
  onChanged(event: any) {
    alert(event);
  }
  onSelectedTab(event: any) {
    alert(event);
  }
}
