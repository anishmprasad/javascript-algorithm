import { useState, useEffect } from "react";
import './index.scss'

type Position = { x: number; y: number };

const maze_20: number[][] = [
    [0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1],
    [0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1],
    [0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0],
    [1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1],
    [0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0],
    [0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0],
    [0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0],
    [1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1],
    [0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0],
    [0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0],
    [1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0],
    [0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0],
    [1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0],
];

export default function Maze({maze = maze_20}) {
    const mazeSize = maze.length; // Dynamically get size
    const goalX = mazeSize - 1;
    const goalY = mazeSize - 1;
    const [player, setPlayer] = useState<Position>({ x: 0, y: 0 });
    const [path, setPath] = useState<Position[]>([]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            let dx = 0, dy = 0;
            if (e.key === "ArrowUp" || e.key === "w") dy = -1;
            if (e.key === "ArrowDown" || e.key === "s") dy = 1;
            if (e.key === "ArrowLeft" || e.key === "a") dx = -1;
            if (e.key === "ArrowRight" || e.key === "d") dx = 1;

            const newX = player.x + dx;
            const newY = player.y + dy;

            if (maze[newY]?.[newX] === 0) {
                setPlayer({ x: newX, y: newY });
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [player]);

    useEffect(() => {
        setPath(findShortestPath());
    }, []);

    const findShortestPath = (): Position[] => {
        const queue: Position[][] = [[{ x: 0, y: 0 }]];
        const visited = new Set<string>(["0,0"]);

        while (queue.length) {
            const path = queue.shift()!;
            const { x, y } = path[path.length - 1];

            if (x === goalX && y === goalY) return path;

            for (const [dx, dy] of [[0,1], [1,0], [0,-1], [-1,0]]) {
                const newX = x + dx, newY = y + dy;
                if (
                    maze[newY]?.[newX] === 0 &&
                    !visited.has(`${newX},${newY}`)
                ) {
                    visited.add(`${newX},${newY}`);
                    queue.push([...path, { x: newX, y: newY }]);
                }
            }
        }
        return [];
    };

    return (
        <div className="maze" style={{ display: "grid", gridTemplateColumns: `repeat(${mazeSize}, 25px)` }}>
            {maze.map((row, rowIndex) => (
                <div key={rowIndex} className="maze-row">
                    {row.map((cell, cellIndex) => {
                        const isPlayer = player.x === cellIndex && player.y === rowIndex;
                        const isGoal = cellIndex === goalX && rowIndex === goalY;
                        const isPath = path.some(p => p.x === cellIndex && p.y === rowIndex);

                        return (
                            <div
                                key={cellIndex}
                                className={`maze-cell ${cell === 1 ? 'wall' : 'path'} 
                                            ${isPlayer ? 'player' : ''} 
                                            ${isGoal ? 'goal' : ''} 
                                            ${isPath ? 'solution-path' : ''}`}
                            ></div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}