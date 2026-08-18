let x = 0
hummingbird.startHummingbird()
hummingbird.setLED(ThreePort.One, 100)
while (x == 0) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            # . . # .
            . . # . .
            . # . . .
            # # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
        x = randint(1, 3)
        if (x == 1) {
            basic.showLeds(`
                # # # # .
                # . . # .
                # # # . .
                # . # . .
                # . . # .
                `)
        } else if (x == 2) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . . .
                . # . . .
                `)
        } else if (x == 3) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                `)
        }
        x = 0
    }
}
