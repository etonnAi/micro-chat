input.onButtonPressed(Button.A, function () {
    radio.sendString("-)")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("comment cela va t'il")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Bonjour")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("OUCH")
})
radio.setGroup(1)
basic.forever(function () {
	
})
