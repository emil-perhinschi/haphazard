# README

very simple seedable pseudorandom number generators: 

so far only BBS and MiddleSquare implemented

MiddleSquare has a short period, though it seems to be longer the longer the seed is

BBS works well if you initialize it with large prime numbers; passing the primes to the constructor is optional, some reasonable defaults are provided 

# EXAMPLE 

````
const seed = 12345
const first_prime = 23773
const second_prime = 19069
const generator = new BBS(
    seed,        // required, must be an integer
    first_prime, // optional
    second_prime // optional
)

// get an integer
const random_integer = generator.next()

// get a float
const random_float = generator.next_float()


````
