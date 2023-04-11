import { Injectable } from '@nestjs/common';
import { CreateHsnDto } from './hsn.dtos';
import { Hsn } from './hsn.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HsnService {
  constructor(
    @InjectRepository(Hsn) private readonly hsnRepository: Repository<Hsn>,
  ) {}
  getHsn(): Promise<Hsn[]> {
    return this.hsnRepository.find();
  }

  getHsnById(id: number): Promise<Hsn> {
    return this.hsnRepository.findOne({ where: { id: id } });
  }

  createHsn(createHsnDto: CreateHsnDto): Promise<Hsn> {
    const newHsn = this.hsnRepository.create(createHsnDto);
    return this.hsnRepository.save(newHsn);
  }

  async deleteHsnById(id: number): Promise<boolean> {
    const hsn = await this.getHsnById(id);
    const rows = await this.hsnRepository.delete(hsn);
    return rows.affected > 0;
  }
}
