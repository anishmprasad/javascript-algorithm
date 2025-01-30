import Maze2 from "../../Maze2";
import { maze_30_very_tough, maze_30_very_tough_tough, maze_30x30 } from '../../constants/maze'


export default function Maze(){
    return (
        <>
            <h3>Happy Birthday Vedhu</h3>
            <p>Try to solve this maze by using <code>WASD</code> keys</p>
            <Maze2 maze={maze_30_very_tough_tough}/>
        </>
    )
}