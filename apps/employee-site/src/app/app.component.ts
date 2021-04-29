import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '@nx-example/util-interface';

@Component({
  selector: 'nx-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Employee Site';
  customers = this.http.get<Customer[]>('/api/details/customers');
}
