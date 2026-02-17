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

function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve();
        }, 500);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < SUCCESS_RATE) {
                console.log(`${name} finished using the weed eater.`);
                resolve();
            } else {
                console.log(`${name} fell asleep after mowing the yard.`);
                reject(new Error('fell asleep after mowing the yard'));
            }
        }, 400);
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < SUCCESS_RATE) {
                console.log(`${name} finished trimming the hedges.`);
                resolve();
            } else {
                console.log(`${name} fell asleep after weed eating the yard.`);
                reject(new Error('fell asleep after weed eating the yard'));
            }
        }, 300);
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < SUCCESS_RATE) {
                console.log(`${name} finished collecting wood.`);
                resolve();
            } else {
                console.log(`${name} fell asleep after trimming the hedges.`);
                reject(new Error('fell asleep after trimming the hedges'));
            }
        }, 600);
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < SUCCESS_RATE) {
                console.log(`${name} finished watering the garden.`);
                resolve();
            } else {
                console.log(`${name} fell asleep after collecting wood.`);
                reject(new Error('fell asleep after collecting wood'));
            }
        }, 200);
    });
}

function doSummerChores(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string literal');

    mowYard(name)
        .then(() => weedEat(name))
        .then(() => trimHedges(name))
        .then(() => collectWood(name))
        .then(() => waterGarden(name))
        .then(() => console.log(`${name} finished all their chores!`))
        .catch(() => {
        });
}


doSummerChores("Alex");
