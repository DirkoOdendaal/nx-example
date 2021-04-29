import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getAllItems', () => {
    it('should return items list', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getAllItems()).toEqual(expect.arrayContaining(
        [{
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
        ]));
    });
  });

  describe('getAllCustomers', () => {
    it('should return customers list', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getAllCustomers()).toEqual(expect.arrayContaining([
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
      ]));
    });
  });
});
