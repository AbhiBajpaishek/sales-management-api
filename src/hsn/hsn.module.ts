import { Module } from '@nestjs/common';
import { HsnController } from './hsn.controller';
import { HsnService } from './hsn.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hsn } from './hsn.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hsn])],
  providers: [HsnService],
  controllers: [HsnController],
})
export class HsnModule {}
