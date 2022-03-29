import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExampleService } from './sample/application/ExampleService';
import { DynamoDbModule } from './dynamodb/DynamoDbModule';

const services = [ExampleService];

@Module({
  imports: [DynamoDbModule],
  controllers: [AppController],
  providers: [...services],
})
export class AppModule {}
