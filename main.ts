input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # # . .
        # . # # .
        # . . # #
        . # # . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
