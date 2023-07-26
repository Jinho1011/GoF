import Command from "./command";

export interface Speaker {
  on(): void;
  off(): void;
  volumnUp(): void;
  volumnDown(): void;
  connect(): void;
  disconnect(): void;
}

export class BluetoothSpeaker implements Speaker {
  constructor(
    private readonly where: string,
    private readonly setMessage: (message: string) => void,
    private readonly setVolumn: (control: "up" | "down") => void,
    private readonly setConnect: (isConnect: boolean) => void
  ) {}
  on() {
    this.setMessage(`${this.where} 스피커가 켜졌습니다.`);
  }
  off() {
    this.setMessage(`${this.where} 스피커가 꺼졌습니다.`);
  }

  volumnUp() {
    this.setVolumn("up");
  }
  volumnDown() {
    this.setVolumn("down");
  }
  connect() {
    this.setConnect(true);
  }

  disconnect() {
    this.setConnect(false);
  }
}

class SpeakerOnCommand implements Command {
  constructor(private readonly speaker: Speaker) {}
  execute(): void {
    this.speaker.on();
  }
}

class SpeakerOffCommand implements Command {
  constructor(private readonly speaker: Speaker) {}
  execute(): void {
    this.speaker.off();
  }
}

class SpeakerVolumnUpCommand implements Command {
  constructor(private readonly speaker: Speaker) {}
  execute(): void {
    this.speaker.volumnUp();
  }
}

class SpeakerVolumnDownCommand implements Command {
  constructor(private readonly speaker: Speaker) {}
  execute(): void {
    this.speaker.volumnDown();
  }
}

class SpeakerConnectCommand implements Command {
  constructor(private readonly speaker: Speaker) {}
  execute(): void {
    this.speaker.connect();
  }
}

class SpeakerdisconnectCommand implements Command {
  constructor(private readonly speaker: Speaker) {}
  execute(): void {
    this.speaker.disconnect();
  }
}

export {
  SpeakerOnCommand,
  SpeakerOffCommand,
  SpeakerVolumnUpCommand,
  SpeakerVolumnDownCommand,
  SpeakerConnectCommand,
  SpeakerdisconnectCommand,
};
