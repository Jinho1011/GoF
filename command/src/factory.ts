import { Light, LightOffCommand, LightOnCommand } from "./types/light";
import {
  Speaker,
  SpeakerOnCommand,
  SpeakerOffCommand,
  SpeakerConnectCommand,
  SpeakerdisconnectCommand,
  SpeakerVolumnUpCommand,
  SpeakerVolumnDownCommand,
} from "./types/speaker";

class LightFactory {
  constructor(private readonly light: Light) {}
  on() {
    return new LightOnCommand(this.light);
  }
  off() {
    return new LightOffCommand(this.light);
  }
}

class SpeakerFactory {
  constructor(private readonly speaker: Speaker) {}
  on() {
    return new SpeakerOnCommand(this.speaker);
  }
  off() {
    return new SpeakerOffCommand(this.speaker);
  }
  connect() {
    return new SpeakerConnectCommand(this.speaker);
  }
  disconnect() {
    return new SpeakerdisconnectCommand(this.speaker);
  }
  volumnUp() {
    return new SpeakerVolumnUpCommand(this.speaker);
  }
  volumnDown() {
    return new SpeakerVolumnDownCommand(this.speaker);
  }
}

export { LightFactory, SpeakerFactory };
