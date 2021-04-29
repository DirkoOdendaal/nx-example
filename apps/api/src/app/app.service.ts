import { Injectable } from '@nestjs/common';
import { Item, Customer } from '@nx-example/util-interface';

const items: Item[] = [
  {
    id: 'coca-cola-can',
    name: 'Coca-Cola',
    image: '/assets/coca-cola-can.jpeg',
    description:
      'Works really well with brandy!',
    price: 6,
    rating: 9,
  },
  {
    id: 'pepsi-can',
    name: 'Pepsi',
    image: '/assets/pepsi_can.png',
    description: 'Pepsi is a carbonated soft drink manufactured by PepsiCo.',
    price: 5,
    rating: 8.5,
  },
  {
    id: 'fanta-can',
    name: 'Fanta',
    image: '/assets/fanta_can.jpeg',
    description: 'Tasted way better before they replaced the sugar.',
    price: 7,
    rating: 4,
  },
];

const customers: Customer[] = [
  {
    id: '5344-5477-9899',
    name: 'Dave',
    surname: 'Smith',
    image: '/assets/no-profile-profile.jpeg',
    country:
      'England',
    age: 24
  },
  {
    id: '0365-6578-1234',
    name: 'John',
    surname: 'Legend',
    image: '/assets/john-profile.jpeg',
    country: "'Merica",
    age: 42
  },
  {
    id: '0236-2756-2368',
    name: 'Karen',
    surname: 'Whatever',
    image: '/assets/karen-profile.jpeg',
    country: 'South Africa',
    age: 36
  },
];


@Injectable()
export class AppService {
  getAllItems = () => items;
  getItem = (id: string) => items.find((item) => item.id === id);

  getAllCustomers = () => customers;
  getCustomer = (id: string) => customers.find((customer) => customer.id === id);
}
