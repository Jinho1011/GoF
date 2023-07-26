import Command from "./command";

class RemoteControllerInvoker {
  private readonly onCommand = new Map<string, Command>();
  private readonly offCommand = new Map<string, Command>();

  setCommand(commandName: string, onCommand: Command, offCommand: Command) {
    this.onCommand.set(commandName, onCommand);
    this.offCommand.set(commandName, offCommand);
  }

  pushOnButton(commandName: string) {
    const command = this.onCommand.get(commandName);
    command?.execute();
  }

  pushOffButton(commandName: string) {
    const command = this.offCommand.get(commandName);
    command?.execute();
  }
}

class SpeakerInvoker {
  private readonly onCommand = new Map<string, Command>();
  private readonly offCommand = new Map<string, Command>();
  private readonly volumnUpCommand = new Map<string, Command>();
  private readonly volumnDownCommand = new Map<string, Command>();
  private readonly connectCommand = new Map<string, Command>();
  private readonly disconnectCommand = new Map<string, Command>();

  setCommand(
    commandName: string,
    onCommand: Command,
    offCommand: Command,
    volumnUpCommand: Command,
    volumnDownCommand: Command,
    connectCommand: Command,
    disconnectCommand: Command
  ) {
    this.onCommand.set(commandName, onCommand);
    this.offCommand.set(commandName, offCommand);
    this.volumnUpCommand.set(commandName, volumnUpCommand);
    this.volumnDownCommand.set(commandName, volumnDownCommand);
    this.connectCommand.set(commandName, connectCommand);
    this.disconnectCommand.set(commandName, disconnectCommand);
  }

  pushOnButton(commandName: string) {
    const command = this.onCommand.get(commandName);
    command?.execute();
  }

  pushOffButton(commandName: string) {
    const command = this.offCommand.get(commandName);
    command?.execute();
  }

  pushVolumnUpButton(commandName: string) {
    const command = this.volumnUpCommand.get(commandName);
    command?.execute();
  }

  pushVolumnDownButton(commandName: string) {
    const command = this.volumnDownCommand.get(commandName);
    command?.execute();
  }

  pushConnectButton(commandName: string) {
    const command = this.connectCommand.get(commandName);
    command?.execute();
  }

  pushdisconnectButton(commandName: string) {
    const command = this.disconnectCommand.get(commandName);
    command?.execute();
  }
}

export { RemoteControllerInvoker, SpeakerInvoker };
