validation-example
====================================

This example will validate using following data model

```ts

class Project {
  @mandatory() name: string;
}

class User {
  @mandatory() id: number;
  @mandatory() name: string;
  @optional()  email: string;
  @optional()  project: Project;
}
```


How to run this example?

```bash

git clone https://github.com/agentframework/domain-example.git
cd domain-example
npm install
npm start

```
