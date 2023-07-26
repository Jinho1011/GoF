import Command from "./command";

interface Light {
  on(): void;
  off(): void;
}

class RoomLight implements Light {
  constructor(
    private readonly where: string,
    private readonly commandPatternData: (message: string) => void
  ) {}
  on() {
    this.commandPatternData(`${this.where} 불이 켜졌습니다.`);
  }
  off() {
    this.commandPatternData(`${this.where} 불이 꺼졌습니다.`);
  }
}

class LightOnCommand implements Command {
  constructor(private readonly light: Light) {}
  execute(): void {
    this.light.on();
  }
}

class LightOffCommand implements Command {
  constructor(private readonly light: Light) {}
  execute(): void {
    this.light.off();
  }
}

export { RoomLight, LightOnCommand, LightOffCommand };
export type { Light };
