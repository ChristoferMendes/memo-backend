import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const url = `http://localhost:3000`;
  console.log(`[MEMO] is running on ${url}`);
  console.log(`[MEMO - GRAPHQL] is running on ${url}/graphql`);
}
bootstrap();
