import { useRef, useEffect } from "react";

const useCanvas = (draw: (ctx: CanvasRenderingContext2D, ct: number) => void) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    
    let frameCount = 0;
    let animationFrameId: number;

    if(canvas){
        const context = canvas.getContext("2d");
        const render = (timestamp: number) => {
            if(context){
                frameCount++;
                draw(context, frameCount);
                animationFrameId = window.requestAnimationFrame(render);
            }
        };
        window.requestAnimationFrame(render);
    }
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
