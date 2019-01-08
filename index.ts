// 1. import
import { agent } from 'agentframework';
import { inject } from '@agentframework/domain';

// 2. define data models
class ResourceService {
  constructor() {
    console.log('>>> ResourceService created <<<');
  }

  addResource(name: string) {
    console.log('ResourceService: addResource(', name, ')');
  }
}

class ProjectService {
  constructor() {
    console.log('>>> ProjectService created <<<');
  }

  @inject()
  protected resources: ResourceService;

  createProject(name: string) {
    console.log('ProjectService: createProject(', name, ')');
  }

  addResource(resource: string) {
    this.resources.addResource(resource);
  }
}

@agent()
class System {
  constructor() {
    console.log('>>> System created <<<');
  }

  @inject()
  protected projects: ProjectService;

  createProject(name: string) {
    this.projects.createProject(name);
  }

  addResource(name: string) {
    this.projects.addResource(name);
  }
}

console.log('calling new System()....');
const sys = new System();

console.log('calling sys.createProject()....');
sys.createProject('AgentFramework');

console.log('calling sys.addResource()....');
sys.addResource('Image');
