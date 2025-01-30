import React, { useEffect, useRef } from "react";
import "./index.scss";

interface Balloon {
    x: number;
    y: number;
    radius: number;
    speed: number;
    popped: boolean;
}

interface Arrow {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    moving: boolean;
}

const BalloonPop: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const balloonsRef = useRef<Balloon[]>([]);
    const arrowRef = useRef<Arrow>({ x: 750, y: 300, width: 10, height: 5, speed: 5, moving: false });
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 800;
        canvas.height = 600;

        const spawnBalloon = () => {
            balloonsRef.current.push({
                x: Math.random() * (canvas.width - 100) + 50,
                y: canvas.height,
                radius: 20,
                speed: Math.random() * 2 + 1,
                popped: false
            });
            setTimeout(spawnBalloon, Math.random() * 2000 + 500);
        };

        spawnBalloon();
    }, []);

    useEffect(() => {
        const updateGame = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            balloonsRef.current.forEach(balloon => {
                if (!balloon.popped) {
                    balloon.y -= balloon.speed;
                    ctx.beginPath();
                    ctx.arc(balloon.x, balloon.y, balloon.radius, 0, Math.PI * 2);
                    ctx.fillStyle = "red";
                    ctx.fill();
                    ctx.closePath();
                }
            });

            if (arrowRef.current.moving) {
                arrowRef.current.x -= arrowRef.current.speed;
                balloonsRef.current.forEach(balloon => {
                    if (!balloon.popped &&
                        arrowRef.current.x < balloon.x + balloon.radius &&
                        arrowRef.current.x + arrowRef.current.width > balloon.x - balloon.radius &&
                        arrowRef.current.y < balloon.y + balloon.radius &&
                        arrowRef.current.y + arrowRef.current.height > balloon.y - balloon.radius) {
                        balloon.popped = true;
                    }
                });

                if (arrowRef.current.x < 0) {
                    arrowRef.current = { x: 750, y: 300, width: 10, height: 5, speed: 5, moving: false };
                }
            }

            ctx.fillStyle = "black";
            ctx.fillRect(arrowRef.current.x, arrowRef.current.y, arrowRef.current.width, arrowRef.current.height);
            requestAnimationFrame(updateGame);
        };

        updateGame();
    }, []);

    const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.key === "Enter" || e.key === " ") && !arrowRef.current.moving) {
            arrowRef.current.moving = true;
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return <canvas ref={canvasRef} className="gameCanvas" />;
};

export default BalloonPop;
