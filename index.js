const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// Use reduce to sum up the battery amounts
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalBatteries); // This will output the total sum of the batteryBatches array
