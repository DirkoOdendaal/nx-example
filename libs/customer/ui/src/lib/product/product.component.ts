import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { formatRating } from '@nx-example/customer/util-formatters';
import { Item } from '@nx-example/util-interface';

@Component({
  selector: 'nx-example-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  item$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id')),
    switchMap((id) => this.http.get<Item>(`/api/details/items/${id}`))
  );
  formatRating = formatRating;

}
