"use strict"
const tap = require("tap")
const MiddleSquare = require("haphazard.js").MiddleSquare

const [period_8, next_8] = test_MiddleSquare(987654, 6)
tap.equals(period_8, 99)
tap.equals(next_8, 625000)

const [period_4, next_4] = test_MiddleSquare(9876, 4)
tap.equals(period_4, 49)
tap.equals(next_4, 9600)

function test_MiddleSquare(test_value) {
    const generator = new MiddleSquare(test_value, 6)
    let counter = 0
    const seen = {}
    let next = 0
    while (counter < 100) {
        next = generator.next()
        if (next in seen) {
            // console.log(next, " was seen ", counter)
            break
        }
        seen[next] = 1
        counter++
    }

    return [counter, parseInt(next)]
}
