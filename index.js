function produceDrivingRange(range) {
  return function(blockOne, blockTwo) {
    dist = Math.abs(blockOne.substring(0,blockOne.length - 2) - blockTwo.substring(0,blockTwo.length - 2))

    if(dist > range) {return `${dist - range} blocks out of range`}
    else {return `within range by ${range - dist}`}
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return tip*fare
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name) {
      this.id = ++DriverId
      this.name = name
    }
  }
}