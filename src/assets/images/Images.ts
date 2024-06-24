import { StaticImageData } from "next/image";
import aboutPhoto from "./Img/aboutPhoto.jpg";
import noiseBackground from "./Img/noiseBackground.png";

type Images = Record<string, Readonly<StaticImageData>>;

export const images: Images = {
  aboutPhoto: aboutPhoto,
  noiseBackground: noiseBackground,
};
