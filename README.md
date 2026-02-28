# Summer Chores 🚜🌿

A simple Node.js learning project that simulates completing a list of Saturday chores. It demonstrates three different asynchronous patterns in JavaScript:

1. **Callbacks** (`callbackVersion.js`)
2. **Promises** (`promiseVersion.js`)
3. **Async/Await** (`asyncAwaitVersion.js`)

Each version executes the same ordered routine and may terminate early if the worker "falls asleep" (simulated with randomness).

---

## Chore List (in order)

1. Mowing the yard (2000 ms)
2. Weedeating the edges of the house and fence line (1500 ms)
3. Trimming the hedges (1000 ms)
4. Collecting fallen wood for summer night fires (2500 ms)
5. Watering the garden (500 ms)

> The person never falls asleep before mowing the yard.

Running through all chores successfully logs a celebratory message; a failure logs the point at which the worker nodded off.

---

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/summer-chores.git
   cd summer-chores
   ```
2. Ensure you have Node.js (v14+) installed.
3. Run any version:
   ```bash
   node callbackVersion.js   # callback style
   node promiseVersion.js    # promise chain
   node asyncAwaitVersion.js # async/await
   ```

Each script prints a total time estimate at startup and then steps through the chores.

---

## Script Details

- `callbackVersion.js` uses nested callbacks to model "callback hell".
- `promiseVersion.js` returns Promises from each chore function and chains them with `.then()`.
- `asyncAwaitVersion.js` is a thin wrapper around the same promise-based chores using `async`/`await` syntax.

You can adjust the `SUCCESS_RATE` constant in each file to make falling asleep more or less likely.

---

## Contributing & License

This repository is intended as a learning exercise. Feel free to fork and modify for practice.

---

_Note:_ create a GitHub repository named `summer-chores`, push your local changes, and share the link as your submission.
