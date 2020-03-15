import { TCPClient, EventFactory } from 'geteventstore-promise';

export class EventStore {
  [x: string]: any;

  constructor() {
    (this.type = 'event-store'), (this.eventFactory = new EventFactory());
  }

  public connect(config) {
    this.client = new TCPClient(config);
    return this;
  }

  public getClient() {
    return this.client;
  }

  public newEvent(name, payload) {
    return this.eventFactory.newEvent(name, payload);
  }

  close() {
    this.client.close();
    return this;
  }
}
