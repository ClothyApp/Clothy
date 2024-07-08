import Image from "next/image";
import React from "react";

type SVGProps = {
  svg: {
    src: string;
    width: number;
    height: number;
    blurWeight: number;
    blurWidth: number;
  };
  className?: string;
  width?: string;
  height?: string;
};

const SvgLoader = ({ svg, className }: SVGProps) => {

  return <Image priority className={className} src={svg.src} width={svg.width} height={svg.height} alt="Svg" />;
};

export default SvgLoader;
