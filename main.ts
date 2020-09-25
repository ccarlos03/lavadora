basic.forever(function () {
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        # # . # #
        `)
    basic.pause(2000)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            # . . . #
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(200)
    }
    basic.showLeds(`
        . # # # .
        . # # . #
        . # # # #
        . # # . #
        # . # # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # # . . .
        . . # . .
        . . # . .
        . . . # .
        . . . # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        . # # # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # . . . #
        # . # . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # . # . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # . # . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # . # . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . . . #
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
    }
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # # .
        . . . # .
        # # # # .
        `)
    basic.pause(2000)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # . . #
            # . . # .
            . # . . #
            # . . # .
            . # . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . #
            # . . # .
            . # . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . #
            `)
    }
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # # #
        # . # . #
        # . # . #
        `)
    basic.pause(10000)
})
