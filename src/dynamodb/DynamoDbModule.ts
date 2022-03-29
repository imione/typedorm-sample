import { Module } from '@nestjs/common';
import { DynamoDb } from './DynamoDb';

@Module({
  imports: [],
  providers: [DynamoDb],
  exports: [DynamoDb],
})
export class DynamoDbModule {}
