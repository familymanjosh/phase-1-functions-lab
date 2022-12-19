function distanceFromHqInBlocks(blocks){
    const hq = 42;
    let destination = blocks
    return Math.abs(destination - hq)  
}
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264 
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start)*264
}
function calculatesFarePrice(start, destination){
    const tripDistance = distanceTravelledInFeet (start, destination)
    if (tripDistance <= 400){
        return 0
     }  else if (tripDistance < 2000){
        return (tripDistance-400) *.02
     }  else if (tripDistance > 2000){
        if (tripDistance > 2500){
            return "cannot travel that far"
        }
        return 25
     }    
    
}
// Code your solution in this file!
