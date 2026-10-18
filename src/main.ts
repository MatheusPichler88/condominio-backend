import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VazioParaNuloInterceptor } from './common/vazio-para-nulo.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new VazioParaNuloInterceptor());

  // Habilitar CORS para o frontend
  app.enableCors({
    origin: true, // Isso permite qualquer origem temporariamente para teste
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
