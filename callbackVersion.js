const chores = [
    { name: 'Mow the yard', time: 2000 },
    { name: 'Weedeat the edges of the house and fence line', time: 1500 },
    { name: 'Trim the hedges', time: 1000 },
    { name: 'Collect fallen wood for summer night fires', time: 2500 },
    { name: 'Water the garden', time: 500 }
];

let totalMilliseconds = chores.reduce((sum, c) => sum + c.time, 0);
console.log(`Total time to complete all chores: ${totalMilliseconds} milliseconds`);

const SUCCESS_RATE = 0.85;

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
    }, 2000);
}

function weedEat(name, callback) {
    setTimeout(() => {
        if (Math.random() < SUCCESS_RATE) {
            console.log(`${name} finished using the weed eater.`);
            callback();
        } else {
            console.log(`${name} fell asleep after mowing the yard.`);
        }
    }, 1500);
}

function trimHedges(name, callback) {
    setTimeout(() => {
        if (Math.random() < SUCCESS_RATE) {
            console.log(`${name} finished trimming the hedges.`);
            callback();
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`);
        }
    }, 1000);
}

function collectWood(name, callback) {
    setTimeout(() => {
        if (Math.random() < SUCCESS_RATE) {
            console.log(`${name} finished collecting wood.`);
            callback();
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`);
        }
    }, 2500);
}

function waterGarden(name, callback) {
    setTimeout(() => {
        if (Math.random() < SUCCESS_RATE) {
            console.log(`${name} finished watering the garden.`);
            callback();
        } else {
            console.log(`${name} fell asleep after collecting wood.`);
        }
    }, 500);
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

doSummerChores("Charles");

