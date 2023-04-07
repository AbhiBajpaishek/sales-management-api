import { Controller, Get } from '@nestjs/common';
import { HsnService } from './hsn.service';

@Controller()
export class HsnController {
  constructor(private readonly hsnService: HsnService) {}

  @Get()
  getHsn(): string {
    return this.hsnService.getHsn();
  }
}
