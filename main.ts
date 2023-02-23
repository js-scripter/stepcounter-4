input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(steps)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(steps / 26)
    basic.pause(2000)
    basic.clearScreen()
})
let steps = 0
steps = 0
basic.clearScreen()
basic.showIcon(IconNames.Heart)
basic.pause(200)
basic.clearScreen()
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
})
