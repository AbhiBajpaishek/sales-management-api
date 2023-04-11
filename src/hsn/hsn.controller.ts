import { Controller, Delete, Get, Param, Post, Req, Res } from '@nestjs/common';
import { HsnService } from './hsn.service';
import { Hsn } from './hsn.entity';
import { CreateHsnDto } from './hsn.dtos';
import { Request, Response } from 'express';

@Controller('hsn')
export class HsnController {
  constructor(private readonly hsnService: HsnService) {}

  @Get()
  getHsn(): Promise<Hsn[]> {
    return this.hsnService.getHsn();
  }

  @Post()
  async addHsn(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { hsnNo, gst } = req.body;
    const newHsn: CreateHsnDto = { hsnNo, gst };
    const createdHsn = await this.hsnService.createHsn(newHsn);
    res.send({ status: 'ok', data: createdHsn });
  }

  @Get(':id')
  async getHsnById(@Param() params, @Res() res: Response): Promise<void> {
    const { id } = params;
    const hsn = await this.hsnService.getHsnById(id);
    res.send({ status: 'ok', data: hsn });
  }

  @Delete(':id')
  async deleteHsnById(@Param() params, @Res() res: Response): Promise<void> {
    const { id } = params;
    await this.hsnService.deleteHsnById(id);
    res.send({ status: 'ok' });
  }
}
