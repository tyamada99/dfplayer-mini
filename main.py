def on_button_pressed_a():
    global ボリューム
    if ボリューム > 0:
        ボリューム = ボリューム - 1
    dfplayermini.set_volume(ボリューム)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    dfplayermini.press(dfplayermini.playType.PLAY_NEXT)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global 再生中
    if 再生中:
        再生中 = False
        dfplayermini.press(dfplayermini.playType.PAUSE)
        basic.clear_screen()
    else:
        再生中 = True
        dfplayermini.press(dfplayermini.playType.PLAY)
        basic.show_icon(IconNames.EIGTH_NOTE)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global ボリューム
    if ボリューム < 30:
        ボリューム = ボリューム + 1
    dfplayermini.set_volume(ボリューム)
input.on_button_pressed(Button.B, on_button_pressed_b)

ボリューム = 0
再生中 = False
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
再生中 = False
ボリューム = 10
dfplayermini.set_volume(ボリューム)
dfplayermini.play_loop_all_files()
dfplayermini.press(dfplayermini.playType.PLAY)
basic.show_icon(IconNames.EIGTH_NOTE)