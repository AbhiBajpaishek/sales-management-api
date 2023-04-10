import { Controller, Get, Post } from '@nestjs/common';
import { HsnService } from './hsn.service';
import { Hsn } from './hsn.entity';
import { CreateHsnDto } from './hsn.dtos';

@Controller()
export class HsnController {
  constructor(private readonly hsnService: HsnService) {}

  @Get()
  getHsn(): Promise<Hsn[]> {
    return this.hsnService.getHsn();
  }

  @Post()
  addHsn(): Promise<Hsn> {
    const dummyHsn: CreateHsnDto = {
      hsnNo: 'HSN11',
      gst: '5',
    };
    return this.hsnService.createHsn(dummyHsn);
  }
}
