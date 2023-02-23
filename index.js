function distanceFromHqInBlocks(blocks){
    const hq = 42
    if (blocks>hq){
        return blocks-hq
    } else{
        return hq-blocks
    }
}
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264
}
function distanceTravelledInFeet(start,destination){
if (destination>start){
    return (destination-start)*264
} else{
    return (start-destination)*264
}
}
function calculatesFarePrice(start,destination){
    const tripDistance = distanceTravelledInFeet(start,destination)
    if (tripDistance<400){
        return 0
    } else if(tripDistance<2000){
        return (tripDistance-400)*.02
    } else if(tripDistance<2500){
        return 25
    } else if(tripDistance>2500){
        return 'cannot travel that far'
    }
}