// do not change these lines

function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

function enter(numAdults, numChildren)  { 
  console.log(occupancy())
  if (numAdults < numChildren) {
    return false
  } 
  else {
    adults = adults + numAdults
    children = children + numChildren
    return true
  }
}

function leave(numAdults, numChildren) {
  console.log(occupancy())
  if (adults === 1 && children >= 1) {
    return false
  } 
   if ((adults - numAdults) < (children < adults)) {
    return false
  }
  
   if ((adults < numAdults) || (children < numChildren)) {
    return false
  }
    adults -= numAdults
    children -= numChildren
    console.log(occupancy())
    return true;
  }



function occupancy(numChildren, numAdults) {
  return { adults: adults, children: children }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset,
}
