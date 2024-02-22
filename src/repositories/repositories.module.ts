import { Module } from '@nestjs/common';
import UserRepository from './user.repository';
import { DataRepository } from './data.repository';

@Module({
  providers: [UserRepository, DataRepository],
  exports: [UserRepository, DataRepository],
})
export class RepositoriesModule {}
