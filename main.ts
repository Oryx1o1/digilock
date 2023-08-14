input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    basic.showString("A ")
    check_key()
})
function check_key () {
    user_key = temp
    serial.writeLine(user_key)
    if (user_key == key) {
        basic.showNumber(secret)
        Correct = true
    } else if (user_key.length > key.length) {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        basic.clearScreen()
        user_key = ""
    }
}
input.onButtonPressed(Button.B, function () {
    temp = "" + user_key + "B"
    basic.showString("B ")
    check_key()
})
let Correct = false
let temp = ""
let user_key = ""
let key = ""
let secret = 0
secret = 3791
key = "AABA"
user_key = ""
basic.forever(function () {
    if (Correct == true) {
        pins.servoWritePin(AnalogPin.P1, 91)
    }
})
