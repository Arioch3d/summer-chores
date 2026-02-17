
const chores = [
    { name: 'Mow the yard', time: 2000 },
    { name: 'Weedeat the edges of the house and fence line', time: 1500 },
    { name: 'Trim the hedges', time: 1000 },
    { name: 'Collect fallen wood for summer night fires', time: 2500 },
    { name: 'Water the garden', time: 500 }
];

let totalMilliseconds = chores.reduce((sum, c) => sum + c.time, 0);
console.log(`Total time to complete all chores: ${totalMilliseconds} milliseconds`);

let fatigue = 0;
const maxFatigue = 6;

function doChore(chore, callback) {
    console.log(`Starting: ${chore.name} (${chore.time} ms)`);
    setTimeout(() => {
        console.log(`Finished: ${chore.name}`);
        fatigue += chore.time / 1000; 
        const sleepChance = Math.min(1, fatigue / maxFatigue);
        if (Math.random() < sleepChance) {
            console.log(`They got too tired and fell asleep after: ${chore.name}`);
            console.log(`Final fatigue: ${fatigue.toFixed(2)} (sleep chance was ${(
                sleepChance * 100
            ).toFixed(0)}%)`);
            return; 
        }
        callback();
    }, chore.time);
}

function runChores(index = 0) {
    if (index >= chores.length) {
        console.log('All chores completed successfully!');
        return;
    }
    doChore(chores[index], () => runChores(index + 1));
}

console.log('Beginning Saturday chores routine...');
runChores();



const SUCCESS_RATE = 0.85;

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
    }, 500);
}

function weedEat(name, callback) {
    setTimeout(() => {
        if (Math.random() < SUCCESS_RATE) {
            console.log(`${name} finished using the weed eater.`);
            callback();
        } else {
            console.log(`${name} fell asleep after mowing the yard.`);
        }
    }, 400);
}

function trimHedges(name, callback) {
    setTimeout(() => {
        if (Math.random() < SUCCESS_RATE) {
            console.log(`${name} finished trimming the hedges.`);
            callback();
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`);
        }
    }, 300);
}

function collectWood(name, callback) {
    setTimeout(() => {
        if (Math.random() < SUCCESS_RATE) {
            console.log(`${name} finished collecting wood.`);
            callback();
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`);
        }
    }, 600);
}

function waterGarden(name, callback) {
    setTimeout(() => {
        if (Math.random() < SUCCESS_RATE) {
            console.log(`${name} finished watering the garden.`);
            callback();
        } else {
            console.log(`${name} fell asleep after collecting wood.`);
        }
    }, 200);
}

function doSummerChores(name) {
    if (typeof name !== 'string') {
        throw new TypeError('Name must be a string literal');
    }

    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`);
                    });
                });
            });
        });
    });
}


doSummerChores("Alex");

