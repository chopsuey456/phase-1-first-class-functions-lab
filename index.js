function returnFirstTwoDrivers(drivers){ 
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return (someValue) => {return someValue * multiplier};
}

function fareDoubler(someValue){
    const multiplier = createFareMultiplier(2);
    return multiplier(someValue);

}

function fareTripler(someValue){
    const multiplier = createFareMultiplier(3);
    return multiplier(someValue);
}

function selectDifferentDrivers(arrayOfDrivers, select){
    return select(arrayOfDrivers);
}