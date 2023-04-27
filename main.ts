let m1 = PCAmotor.Motors.M1
let m4 = PCAmotor.Motors.M4

let leftldx = 0;
let rightldx = 0;
const speed = [0,100,255]

input.onButtonPressed(Button.A, function() {
    PCAmotor.MotorRun(m1, speed[++rightldx % speed.length])
})

input.onButtonPressed(Button.B, function() {
    PCAmotor.MotorRun(m4, -speed[++leftldx % speed.length])
})

input.onButtonPressed(Button.AB, function() {
    PCAmotor.MotorStopAll()
    leftldx = rightldx = 0;
})
