import { Injectable } from '@nestjs/common';

@Injectable()
export class HsnService {
  getHsn(): string {
    return 'hello hsn';
  }
}
