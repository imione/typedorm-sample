import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { getEntityManager } from '@typedorm/core';

import { Example } from '../persistence/Example';

@Injectable()
export class ExampleService {
  async saveExample(): Promise<Example> {
    const entityManager = getEntityManager();

    const example = new Example();
    const id = uuid.v1();
    example.id = id;
    example.title = 'exampleTitle';

    await entityManager.create(example);

    return example;
  }

  async getExample(id: string): Promise<unknown> {
    const entityManager = getEntityManager();

    const example = await entityManager.findOne(Example, { id });

    return example;
  }
}
