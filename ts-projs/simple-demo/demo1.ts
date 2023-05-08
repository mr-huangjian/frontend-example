console.log('Hello TypeScript!')




function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
    console.log('direction', direction)
}

changeDirection('up')

enum Direction {
    Up = 'up',
    Down = 'down',
}