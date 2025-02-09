function solveMaze(maze) {
    const rows = maze.length;
    const cols = maze[0].length;
  
    // Create a solution array initialized to 0
    const solution = Array.from({ length: rows }, () => Array(cols).fill(0));
  
    // Create a visited array to track already visited cells
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  
    // Check if the position is within bounds and not a wall or visited
    function isSafe(x, y) {
      return (
        x >= 0 &&
        y >= 0 &&
        x < rows &&
        y < cols &&
        maze[x][y] === 0 &&
        !visited[x][y]
      );
    }
  
    // Recursive backtracking function
    function backtrack(x, y) {
        console.log(x,y)
      // Base case: if we reach the end point
      if (x === rows - 1 && y === cols - 1) {
        solution[x][y] = 1; // Mark the end point as part of the solution
        return true;
      }
  
      if (isSafe(x, y)) {
        // Mark the current cell as part of the solution and visited
        solution[x][y] = 1;
        visited[x][y] = true;
  
        // Move down
        if (backtrack(x + 1, y)) return true;
  
        // Move right
        if (backtrack(x, y + 1)) return true;
  
        // Move up
        if (backtrack(x - 1, y)) return true;
  
        // Move left
        if (backtrack(x, y - 1)) return true;
  
        // Backtrack: Unmark this cell as it doesn't lead to a solution
        solution[x][y] = 0;
        return false;
      }
  
      return false; // No valid moves
    }
  
    // Start the backtracking from the top-left corner
    if (backtrack(0, 0)) {
      return solution;
    } else {
      return "No solution exists!";
    }
  }
  
  // Input maze
  const maze_10 = [
    [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  ];

  const maze_50 = [
    [0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1],
    [0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
    [0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1],
    [0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0],
    [0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1],
    [0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
    [1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0],
    [1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0],
    [0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0],
    [0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1],
    [0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1],
    [1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],
    [1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0],
    [1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1],
    [0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1],
    [0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0],
    [1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1],
    [1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0],
    [0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1],
    [0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1],
    [0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1],
    [1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0],
    [0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0],
    [0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0],
    [1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0],
    [0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0],
    [0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1],
    [0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0],
    [1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1],
    [0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1],
    [0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1],
    [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1],
    [0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1],
    [0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0],
  ]

  const maze_20 = [
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
  ]
  


    // Solve the maze and print the solution
    const result = solveMaze(maze_20);
    console.log(result);