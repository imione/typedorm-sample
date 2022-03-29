# dynamodb
aws --endpoint-url=http://aws:4566 dynamodb create-table --table-name ExampleTable \
  --attribute-definitions AttributeName=pk,AttributeType=S AttributeName=sk,AttributeType=S \
  --key-schema AttributeName=pk,KeyType=HASH AttributeName=sk,KeyType=RANGE \
  --provisioned-throughput ReadCapacityUnits=10,WriteCapacityUnits=5

# s3
aws --endpoint-url=http://aws:4566 s3 mb s3://s3-mocked
touch health
aws --endpoint-url=http://aws:4566 s3 cp health s3://s3-mocked
