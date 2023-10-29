import { Injectable } from '@nestjs/common';
import { Gas } from './entities/gas.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GasService {
  constructor(
    @InjectRepository(Gas)
    private readonly gasRepository: Repository<Gas>,
  ) {}

  calculateExpirationDate(refillDate: Date, gasSize: string): Date {
    let expirationDate: Date;
    switch (gasSize) {
      case '1kg':
        expirationDate = new Date(refillDate.getTime() + 60 * 24 * 60 * 60 * 1000); // 60 days in milliseconds
        break;
      case '5kg':
        expirationDate = new Date(refillDate.getTime() + 60 * 24 * 60 * 60 * 1000);
        break;
      case '12.5kg':
        expirationDate = new Date(refillDate.getTime() + 60 * 24 * 60 * 60 * 1000);
        break;
      case '16kg':
        expirationDate = new Date(refillDate.getTime() + 60 * 24 * 60 * 60 * 1000);
        break;
      default:
        // Handle other cases
        break;
    }
    return expirationDate;
  }

  async createGasEntry(gasSize: string, refillDate: Date, userEmail: string): Promise<Gas> {
    const expirationDate = this.calculateExpirationDate(refillDate, gasSize);
    const gasEntry = this.gasRepository.create({
      gasSize,
      refillDate,
      userEmail,
      expirationDate,
    } as DeepPartial<Gas>);
    return await this.gasRepository.save(gasEntry);
  }
}
