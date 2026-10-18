import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

// Campos opcionais vazios chegam do formulário como "" e o MySQL recusa em colunas numéricas/data
function vazioParaNulo(valor: any): any {
  if (valor === '') return null;
  if (Array.isArray(valor)) return valor.map(vazioParaNulo);
  if (valor && typeof valor === 'object') {
    for (const chave of Object.keys(valor)) valor[chave] = vazioParaNulo(valor[chave]);
  }
  return valor;
}

@Injectable()
export class VazioParaNuloInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    if (request.body) request.body = vazioParaNulo(request.body);
    return next.handle();
  }
}
