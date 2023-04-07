import { Module } from '@nestjs/common';
import { HsnController } from './hsn.controller';
import { HsnService } from './hsn.service';

@Module({ providers: [HsnService], controllers: [HsnController] })
export class HsnModule {}
