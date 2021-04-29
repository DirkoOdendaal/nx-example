import { Component } from '@angular/core';
import { formatRating } from '@nx-example/customer/util-formatters';
import { HttpClient } from '@angular/common/http';
import { Item } from '@nx-example/util-interface';

@Component({
  selector: 'nx-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Customer Site';
  formatRating = formatRating;
  items = this.http.get<Item[]>('/api/details/items');
}
