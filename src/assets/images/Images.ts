import { StaticImageData } from "next/image";

type Images = Record<string, Readonly<StaticImageData>>;

export const images = {
  noiseBackground: require("./Img/noiseBackground.png"),
} satisfies Images;
