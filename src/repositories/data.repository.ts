import { Injectable } from '@nestjs/common';
import DataEntity from 'src/entities/data.entity';

@Injectable()
export class DataRepository {
  private data: DataEntity[];

  constructor() {}

  async save(newData: string): Promise<void> {
    this.data.push({
      data: newData,
    });
  }
}
