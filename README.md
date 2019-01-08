domain-example
====================================

This example will using following service dependencies

```ts


class ResourceService {

}

class ProjectService {

  @inject()
  protected resources: ResourceService;

}

@agent()
class System {

  @inject()
  protected projects: ProjectService;

}

```


How to run this example?

```bash

git clone https://github.com/agentframework/domain-example.git
cd domain-example
npm install
npm start

```
