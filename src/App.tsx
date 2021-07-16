import React from "react";
import logo from "./logo.svg";
import Canvas from "./Canvas";
import "./App.css";

function App() {
  const BOX_WIDTH = 50;
  const BOX_HEIGHT = 50;
  const CANVAS_WIDTH = BOX_WIDTH * 10;
  const CANVAS_HEIGHT = BOX_HEIGHT * 10;
  const box = (width: number, height: number) => {
    return (x: number, y: number) => [x, y, width, height];
  };
  const sqr = box(BOX_WIDTH, BOX_HEIGHT);
  let speed = 3;
  let rects = [
    sqr(BOX_WIDTH * 2, 0),
    sqr(BOX_WIDTH * 2, BOX_HEIGHT),
    sqr(BOX_WIDTH * 2, 0),
    sqr(BOX_WIDTH * 2, -BOX_HEIGHT),
    sqr(BOX_WIDTH, BOX_HEIGHT),
  ];
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    for (const rect of rects) {
      const [x, y, w, h] = rect;
      ctx.fillRect(x, y, w, h);
    }
    rects = rects.map(([x, y, w, h]) => [
      x,
      (y + speed) % ctx.canvas.height,
      w,
      h,
    ]);
  };
  return (
    <Canvas
      width={CANVAS_WIDTH.toString()}
      height={CANVAS_HEIGHT.toString()}
      draw={draw}
    />
  );
}

export default App;
