import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { createConnection } from '@typedorm/core';
import { Table } from '@typedorm/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { Example } from 'src/sample/persistence/Example';

@Injectable()
export class DynamoDb implements OnModuleInit {
  constructor() {
    //
  }

  connect(): void {
    const { endpoint, accessKeyId, secretAccessKey } = {
      endpoint: 'http://localhost:4566',
      accessKeyId: 'mock',
      secretAccessKey: 'mock',
    };

    createConnection({
      table: this.getTable(),
      entities: [Example],
      documentClient: new DocumentClient({
        endpoint,
        credentials: {
          accessKeyId,
          secretAccessKey,
        },
        region: 'ap-northeast-2',
      }),
    });
  }

  getTable(): Table {
    return new Table({
      name: 'ExampleTable',
      partitionKey: 'pk',
      sortKey: 'sk',
    });
  }

  onModuleInit() {
    this.connect();
  }
}
