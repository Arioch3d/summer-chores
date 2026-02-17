Summer Chores — Callback-based Chore Runner

This small Node.js project contains two versions of the same Saturday chores routine: a callback-based implementation and a Promise-based implementation. Both model a set of chores performed in order and may stop early if the person "falls asleep" (simulated).

Files

- `callbackVersion.js`: runs the chores sequentially with a callback-based flow. The script also demonstrates a simple fatigue model where sleep probability increases as chores take time.
- `promiseVersion.js`: the same routine implemented using Promises; `doSummerChores` chains the promise-returning chore functions.

Behavior

- Chores are performed in this order: Mow the yard; Weedeat the edges of the house and fence line; Trim the hedges; Collect fallen wood for summer night fires; Water the garden.
- Each chore logs completion messages. If a chore fails (the person falls asleep), an appropriate "fell asleep after ..." message is logged and the routine stops.

How to run

Make sure you have Node.js installed, then run either version:

```bash
node callbackVersion.js
```

or

```bash
node promiseVersion.js
```
