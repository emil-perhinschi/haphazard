"use strict"
const tap = require("tap")
const BBS = require("haphazard.js").BBS

const generator = new BBS(12345)
tap.equals(152399025, generator.next())
tap.equals(112991132, generator.next())
tap.equals(224555593, generator.next())
tap.equals(354424591, generator.next())
tap.equals(46647681, generator.next())
const second = new BBS(12345)
tap.equals(0.152399025, second.next_float())
tap.equals(0.112991132, second.next_float())
tap.equals(0.224555593, second.next_float())
tap.equals(0.354424591, second.next_float())
tap.equals(0.46647681, second.next_float())
tap.equals(0.18872812, second.next_float())
let count = 0
while (count < 10000) {
    second.next_float()
    count++
}
tap.equals(0.351947619, second.next_float())
tap.equals(0.317421454, second.next_float())
tap.equals(0.122476029, second.next_float())
tap.equals(0.41983318, second.next_float())
tap.equals(0.198187955, second.next_float())
