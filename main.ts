input.onButtonPressed(Button.A, function () {
    if (ボリューム > 0) {
        ボリューム = ボリューム - 1
    }
    dfplayermini.setVolume(ボリューム)
    basic.showNumber(ボリューム)
    if (再生中) {
        basic.showIcon(IconNames.EigthNote)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (再生中) {
        dfplayermini.press(dfplayermini.playType.PlayNext)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (再生中) {
        再生中 = false
        dfplayermini.press(dfplayermini.playType.Pause)
        basic.clearScreen()
    } else {
        再生中 = true
        dfplayermini.press(dfplayermini.playType.Play)
        basic.showIcon(IconNames.EigthNote)
    }
})
input.onButtonPressed(Button.B, function () {
    if (ボリューム < 30) {
        ボリューム = ボリューム + 1
    }
    dfplayermini.setVolume(ボリューム)
    basic.showNumber(ボリューム)
    if (再生中) {
        basic.showIcon(IconNames.EigthNote)
    }
})
let ボリューム = 0
let 再生中 = false
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
basic.clearScreen()
再生中 = false
dfplayermini.press(dfplayermini.playType.Pause)
dfplayermini.playLoopAllFiles()
ボリューム = 20
dfplayermini.setVolume(ボリューム)
