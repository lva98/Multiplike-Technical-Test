import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import UserRepository from 'src/repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  async verifyUser(userName: string, password: string): Promise<string> {
    const user = await this.userRepository.find(userName);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      return await this.jwtService.signAsync(user);
    }

    throw new UnauthorizedException('Usuário ou senha incorreta');
  }
}
