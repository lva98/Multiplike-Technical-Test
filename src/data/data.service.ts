import { Injectable } from '@nestjs/common';
import { DataRepository } from 'src/repositories/data.repository';

@Injectable()
export class DataService {
  constructor(private dataRepository: DataRepository) {}

  async save(newData: string): Promise<void> {
    await this.dataRepository.save(newData);
  }
}
