import { SpeakerFactory, LightFactory } from "../factory";
import { useCommandPatternData } from "../state";
import { RemoteControllerInvoker, SpeakerInvoker } from "../types/invoker";
import { RoomLight } from "../types/light";
import { BluetoothSpeaker } from "../types/speaker";

const bigSpeaker = new BluetoothSpeaker(
  "거실",
  useCommandPatternData.getState().setBigSpeakerMessage,
  useCommandPatternData.getState().setBigSpeakerVolumn,
  useCommandPatternData.getState().setBigSpeakerIsConnect
);

const samllSpeaker = new BluetoothSpeaker(
  "작은방",
  useCommandPatternData.getState().setSmallSpeakerMessage,
  useCommandPatternData.getState().setSmallSpeakerVolumn,
  useCommandPatternData.getState().setSmallSpeakerIsConnect
);

const bigLight = new RoomLight(
  "거실",
  useCommandPatternData.getState().setBigLightMessage
);

const smallLight = new RoomLight(
  "작은방",
  useCommandPatternData.getState().setSamllLightMessage
);

const bigSpeakerFactory = new SpeakerFactory(bigSpeaker);
const samllSpeakerFactory = new SpeakerFactory(samllSpeaker);
const bigLightFactory = new LightFactory(bigLight);
const smallLightFactory = new LightFactory(smallLight);
const slotRemoteControllerInvoker = new RemoteControllerInvoker();

slotRemoteControllerInvoker.setCommand(
  "거실_light",
  bigLightFactory.on(),
  bigLightFactory.off()
);
slotRemoteControllerInvoker.setCommand(
  "거실_speaker",
  bigSpeakerFactory.on(),
  bigSpeakerFactory.off()
);
slotRemoteControllerInvoker.setCommand(
  "작은방_light",
  smallLightFactory.on(),
  smallLightFactory.off()
);
slotRemoteControllerInvoker.setCommand(
  "작은방_speaker",
  samllSpeakerFactory.on(),
  samllSpeakerFactory.off()
);

const speakerInvoker = new SpeakerInvoker();
speakerInvoker.setCommand(
  "거실_speaker",
  bigSpeakerFactory.on(),
  bigSpeakerFactory.off(),
  bigSpeakerFactory.volumnUp(),
  bigSpeakerFactory.volumnDown(),
  bigSpeakerFactory.connect(),
  bigSpeakerFactory.disconnect()
);

speakerInvoker.setCommand(
  "작은방_speaker",
  samllSpeakerFactory.on(),
  samllSpeakerFactory.off(),
  samllSpeakerFactory.volumnUp(),
  samllSpeakerFactory.volumnDown(),
  samllSpeakerFactory.connect(),
  samllSpeakerFactory.disconnect()
);

export const useRemoteContollerHandler = () => {
  const handleSlotOnButtonClick = (buttonName: string) => {
    slotRemoteControllerInvoker.pushOnButton(buttonName);
  };

  const handleSlotOffButtonClick = (buttonName: string) => {
    slotRemoteControllerInvoker.pushOffButton(buttonName);
  };

  const handleSpeakerVolumnUpButtonClick = (buttonName: string) => {
    speakerInvoker.pushVolumnUpButton(buttonName);
  };

  const handleSpeakerVolumnDownButtonClick = (buttonName: string) => {
    speakerInvoker.pushVolumnDownButton(buttonName);
  };

  const handleSpeakerConnectButtonClick = (buttonName: string) => {
    speakerInvoker.pushConnectButton(buttonName);
  };

  const handleSpeakerdisconnectButtonClick = (buttonName: string) => {
    speakerInvoker.pushdisconnectButton(buttonName);
  };
  return {
    handleSlotOnButtonClick,
    handleSlotOffButtonClick,
    handleSpeakerVolumnUpButtonClick,
    handleSpeakerVolumnDownButtonClick,
    handleSpeakerConnectButtonClick,
    handleSpeakerdisconnectButtonClick,
  };
};
