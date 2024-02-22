import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import Config from 'src/config';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: Config.secret,
      signOptions: { expiresIn: '30d' },
    }),
    RepositoriesModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
