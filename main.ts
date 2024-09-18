enum RadioMessage {
    message1 = 49434,
    getIP = 42143
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    send_number(4312)
})
function send_number (num: number) {
    radio.sendValue(convertToText(num * (code2 / 10 ** convertToText(code2).length)), code * (code2 / 10 ** convertToText(code2).length))
    radio.sendNumber(0)
}
radio.onReceivedValue(function (name, value) {
    if (value / (code2 / 10 ** convertToText(code2).length) == code) {
        basic.showString("" + (parseFloat(name) / (code2 / 10 ** convertToText(code2).length)))
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let code2 = 0
let code = 0
radio.setGroup(255)
code = storage.getNumber(StorageSlots.s1)
code2 = storage.getNumber(StorageSlots.s2)
