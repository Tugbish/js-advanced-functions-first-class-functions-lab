// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function (drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (multiplier) {
   return function(fare) {
       return fare * multiplier;
   }
}


const fareDoubler = function (fare) {
    const doubler = createFareMultiplier(2);
    
    return doubler(fare);
   
 }

 const fareTripler = function (fare1) {
    const tripler = createFareMultiplier(3);
    
    return tripler(fare1);
   
 }

 function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
 }