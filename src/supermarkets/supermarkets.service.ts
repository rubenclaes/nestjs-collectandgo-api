import { Injectable } from '@nestjs/common';
import { Supermarket } from './classes/supermarket.class';
import { CreateSupermarketDto } from './dto/create-supermarket.dto';

@Injectable()
export class SupermarketsService {
  private readonly supermarkets: Supermarket[] = [];

  create(supermarket: CreateSupermarketDto): Supermarket {
    this.supermarkets.push(supermarket);
    return supermarket;
  }

  findOne(id: number): Supermarket {
    return this.supermarkets[id];
  }

  findAll(): Supermarket[] {
    return this.supermarkets;
  }
}
