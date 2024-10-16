import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    // aqui se pueden hacer validaciones para autenticar al usuario y proteger la ruta
    const request = context.switchToHttp().getRequest();
    console.log(request.url)

    return true;
  }
}
