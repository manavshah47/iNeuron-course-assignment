function matchHouses(houses){
    let matchStickes = 0;
    if(houses <= 0){
        return matchStickes;
    }
    matchStickes += 6; // for first house it requires 6 sticks
    houses--;
    matchStickes += (houses*5); // after first house it will require 5 sticks to create new house
    return matchStickes;
}

let numberOfHouse = 87;
let numberOfMatchSticks = matchHouses(numberOfHouse)
console.log(numberOfMatchSticks);