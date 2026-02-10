const chores = {
    "Mow the yard": 2000,
    "Weed eat the yard": 1500,
    "Trim the hedges": 1000,
    "Collect wood": 2500,
    "Water the garden": 500
};

let totalMilliseconds = 0;
for (let chore in chores) {
    totalMilliseconds += chores[chore];
}
console.log(`Total time to complete all chores: ${totalMilliseconds} milliseconds`);

