import TailwindConfig from "../tailwind.config";

export const Colors = TailwindConfig.theme!.colors! as {
    primary: {[key: number] : string},
    secondary: {[key: number] : string}
};
