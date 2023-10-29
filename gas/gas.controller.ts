import { Controller, Post, Body } from '@nestjs/common';
import { GasService } from './gas.service';
import { Gas } from './entities/gas.entity';

@Controller('gas')
export class GasController {
  constructor(private readonly gasService: GasService) {}

  @Post('addRefillData')
  async addRefillData(
    @Body('gasSize') gasSize: string,
    @Body('refillDate') refillDate: Date,
    @Body('userEmail') userEmail: string,
  ): Promise<Gas> {
    return await this.gasService.createGasEntry(gasSize, refillDate, userEmail);
  }
}
