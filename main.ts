input.onButtonPressed(Button.A, function () {
    if (ボリューム > 0) {
        ボリューム = ボリューム - 1
    }
    dfplayermini.setVolume(ボリューム)
})
input.onGesture(Gesture.Shake, function () {
    dfplayermini.press(dfplayermini.playType.PlayNext)
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
})
let ボリューム = 0
let 再生中 = false
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
再生中 = false
ボリューム = 10
dfplayermini.setVolume(ボリューム)
dfplayermini.playLoopAllFiles()
dfplayermini.press(dfplayermini.playType.Play)
basic.showIcon(IconNames.EigthNote)
