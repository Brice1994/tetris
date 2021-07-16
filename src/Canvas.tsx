import React, { useRef, useEffect } from "react";
import useCanvas from "./useCanvas";

export default function Canvas<
  T extends {
    draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
    width: string;
    height: string
  }
>(props: T): JSX.Element {
  const { draw, ...rest} = props;
  const canvasRef = useCanvas(draw);
  return <canvas ref={canvasRef} {...props} />;
}
