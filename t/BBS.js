"use strict"
const tap = require("tap")
const BBS = require("haphazard.js").BBS

const generator = new BBS(12345)
tap.equals(152399025, generator.next())
tap.equals(112991132, generator.next())
tap.equals(224555593, generator.next())
tap.equals(354424591, generator.next())
tap.equals(46647681, generator.next())
