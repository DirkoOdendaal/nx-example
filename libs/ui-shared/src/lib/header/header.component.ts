import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-example-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title = '';
}
