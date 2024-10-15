import TailwindConfig from "../tailwind.config";

export const Colors = TailwindConfig.theme!.colors! as {
  black: { [key: number]: string };
  grey: { [key: number]: string };
  green: { [key: number]: string };
  red: { [key: number]: string };
  blue: { [key: number]: string };
};
