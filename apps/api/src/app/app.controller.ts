import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('details')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/items')
  getAllItems() {
    return this.appService.getAllItems();
  }

  @Get('/items/:id')
  getItem(@Param('id') id: string) {
    return this.appService.getItem(id);
  }

  @Get('/customers')
  getAllCustomers() {
    return this.appService.getAllCustomers();
  }

  @Get('/customers/:id')
  getCustomer(@Param('id') id: string) {
    return this.appService.getCustomer(id);
  }
}
