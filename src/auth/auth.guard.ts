import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import Config from 'src/config';

export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1] ?? '';

    if (!token) {
      throw new UnauthorizedException();
    }

    await this.jwtService.verifyAsync(token, {
      secret: Config.secret,
    });

    return true;
  }
}
