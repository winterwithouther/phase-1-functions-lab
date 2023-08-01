function distanceFromHqInBlocks(blocks) {
    let scubarHq = 42;
    if (blocks >= scubarHq) {
        return blocks - scubarHq;
    } else {
        return scubarHq - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    return distanceInBlocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const calculatedDistance = distanceTravelledInFeet(start, destination);
    if (calculatedDistance >= 2500) {
        return "cannot travel that far";
    } else {
        let price = 0;
        if (calculatedDistance > 2000) {
            price += 25;
        } else if (calculatedDistance >= 400) {
            price += (calculatedDistance - 400) * 0.02;
        }
        return price;
    }
}