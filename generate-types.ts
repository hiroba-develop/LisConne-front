import {generate} from 'openapi-typescript-codegen';

generate({
  input: './public/api/swagger.yml',
  output: './src/api',
  httpClient: 'fetch',
  useOptions: true,
})