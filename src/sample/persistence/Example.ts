import { Attribute, Entity, TransformToDynamo } from '@typedorm/common';

@Entity({
  name: 'ExampleTable',
  primaryKey: {
    partitionKey: 'Example#{{id}}',
    sortKey: 'Example#{{id}}',
  },
})
export class Example {
  @Attribute()
  id: string;

  @Attribute()
  @TransformToDynamo((param: { value: string }) => 'transformed:' + param.value)
  title: string;
}
