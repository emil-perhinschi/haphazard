"use strict"

export class MiddleSquare {

    constructor(seed) {
        this.string_size = (seed + "").length
        this.zero_string = Array.from(
            Array(this.string_size),
            () => 0
        ).join("")

        if ( seed != parseInt(seed) ) {
            throw new Error("seed is not an integer")
        }

        if (( seed + "") === this.zero_string) {
            throw "0* is not a valid seed"
        }

        this.initial = seed
        this.seed = seed
    }

    next() {
        const as_string = ( (this.seed * this.seed) + "").padStart(this.string_size * 2, "0")

        this.seed = as_string.substring(
            this.string_size/2,
            this.string_size + this.string_size/2
        )

        // start again if "0*" generated
        if ( (this.seed + "") === this.zero_string ) {
            this.seed = this.initial
        }

        return this.seed
    }
}

// primes from here https://www2.cs.arizona.edu/icon/oddsends/primes.htm
export class BBS {
    constructor(seed, p = 23773, q = 19069) {
        if (seed !== parseInt(seed)) {
            throw new Error("seed " + seed + " is not an integer")
        }

        this.p = p
        this.q = q
        this.M = this.p * this.q
        this.seed = seed
    }

    next() {
        const next = (this.seed * this.seed) % this.M
        this.seed = next
        return next
    }
}
