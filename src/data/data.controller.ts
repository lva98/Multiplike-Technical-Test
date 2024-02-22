import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DataService } from './data.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @HttpCode(HttpStatus.OK)
  @Post('')
  createData(@Body() data: string) {
    this.dataService.save(data);
  }
}
