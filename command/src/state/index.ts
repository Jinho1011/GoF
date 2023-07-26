import { create } from "zustand";
import { combine } from "zustand/middleware";

interface ICommandPatternDataState {
  bigLightMessage: string;
  smallLigthMessage: string;
  bigSpeakerMessage: string;
  bigSpeakerVolumn: number;
  bigSpeakerIsConnect: boolean;
  smallSpeakerMessage: string;
  smallSpeakerVolumn: number;
  smallSpeakerIsConnect: boolean;
}

const initState: ICommandPatternDataState = {
  bigLightMessage: "",
  smallLigthMessage: "",
  bigSpeakerMessage: "",
  bigSpeakerVolumn: 0,
  bigSpeakerIsConnect: false,
  smallSpeakerMessage: "",
  smallSpeakerVolumn: 0,
  smallSpeakerIsConnect: false,
};
const useCommandPatternData = create(
  combine(initState, (set, get) => ({
    setBigLightMessage: (message: string) => {
      set((state) => ({ bigLightMessage: message }));
    },
    setSamllLightMessage: (message: string) => {
      set((state) => ({ smallLigthMessage: message }));
    },
    setBigSpeakerMessage: (message: string) => {
      set((state) => ({ bigSpeakerMessage: message }));
    },
    setSmallSpeakerMessage: (message: string) => {
      set((state) => ({ smallSpeakerMessage: message }));
    },
    setSmallSpeakerVolumn: (controll: "up" | "down") => {
      set((state) => {
        if (controll === "up") {
          return { smallSpeakerVolumn: get().smallSpeakerVolumn + 1 };
        }
        return {
          smallSpeakerVolumn:
            get().smallSpeakerVolumn > 0 ? get().smallSpeakerVolumn - 1 : 0,
        };
      });
    },
    setBigSpeakerVolumn: (controll: "up" | "down") => {
      set((state) => {
        if (controll === "up") {
          return { bigSpeakerVolumn: get().bigSpeakerVolumn + 1 };
        }
        return {
          bigSpeakerVolumn:
            get().bigSpeakerVolumn > 0 ? get().bigSpeakerVolumn - 1 : 0,
        };
      });
    },
    setBigSpeakerIsConnect: (isConnect: boolean) => {
      set((state) => ({ bigSpeakerIsConnect: isConnect }));
    },
    setSmallSpeakerIsConnect: (isConnect: boolean) => {
      set((state) => ({ smallSpeakerIsConnect: isConnect }));
    },
  }))
);

export { initState, useCommandPatternData };
export type { ICommandPatternDataState };
