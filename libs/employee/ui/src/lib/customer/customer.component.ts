import { Component, } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Customer } from '@nx-example/util-interface';

@Component({
  selector: 'nx-example-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  customer$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id')),
    switchMap((id) => this.http.get<Customer>(`/api/details/customers/${id}`))
  );

}
