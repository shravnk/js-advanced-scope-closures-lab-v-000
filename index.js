function produceDrivingRange(range) {
  return function(blockOne, blockTwo) {
    dist = blockOne[0,1] - blockTwo[0,2]
    if(dist > range) {return "${dist - range} blocks out of range"}
    else {return "within range by ${range - dist}"}
  }
}
