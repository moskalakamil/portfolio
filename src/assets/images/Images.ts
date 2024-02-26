import { StaticImageData } from "next/image";

type Images = Record<string, Readonly<StaticImageData>>;

export const images = {
  aboutPhoto: require("./Img/aboutPhoto.jpg"),
  noiseBackground: require("./Img/noiseBackground.png"),
} satisfies Images;
