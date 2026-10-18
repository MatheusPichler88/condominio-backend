import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

// Traduz erros do MySQL em respostas HTTP com mensagem legível, em vez de 500 genérico
const ERROS_MYSQL: Record<string, { status: number; message: string }> = {
  ER_NO_REFERENCED_ROW_2: { status: HttpStatus.BAD_REQUEST, message: 'Registro relacionado não encontrado. Selecione um item que exista.' },
  ER_ROW_IS_REFERENCED_2: { status: HttpStatus.CONFLICT, message: 'Não é possível excluir: este registro está sendo usado em outro cadastro.' },
  ER_DUP_ENTRY: { status: HttpStatus.CONFLICT, message: 'Já existe um registro com esse valor.' },
  ER_BAD_NULL_ERROR: { status: HttpStatus.BAD_REQUEST, message: 'Preencha todos os campos obrigatórios.' },
  ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: { status: HttpStatus.BAD_REQUEST, message: 'Valor inválido em um dos campos.' },
  ER_WRONG_VALUE_FOR_FIELD: { status: HttpStatus.BAD_REQUEST, message: 'Valor inválido em um dos campos.' },
  ER_DATA_TOO_LONG: { status: HttpStatus.BAD_REQUEST, message: 'Um dos campos excede o tamanho permitido.' },
  WARN_DATA_TRUNCATED: { status: HttpStatus.BAD_REQUEST, message: 'Valor inválido em um dos campos.' },
};

@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter {
  catch(exception: QueryFailedError & { code?: string }, host: ArgumentsHost) {
    const resposta = host.switchToHttp().getResponse();
    const erro = ERROS_MYSQL[exception.code ?? ''] ?? {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Erro ao acessar o banco de dados.',
    };
    resposta.status(erro.status).json({ statusCode: erro.status, message: erro.message });
  }
}
