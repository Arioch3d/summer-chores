Summer Chores — Callback-based Chore Runner

This small Node.js script models a Saturday chores routine that runs tasks in a strict order using callbacks. It simulates growing fatigue while performing chores and includes a chance the person falls asleep before finishing all tasks.

Files

- `callbackVersion.js`: runs the chores sequentially with a callback-based flow. Each chore has a duration (milliseconds). After each chore, a `fatigue` value increases and is used to compute the probability of falling asleep.

Behavior

- Chores are performed in this order: Mow the yard; Weedeat the edges of the house and fence line; Trim the hedges; Collect fallen wood for summer night fires; Water the garden.
- The script prints start/finish messages for each chore and stops early if the fatigue-based sleep check succeeds.

How to run

Make sure you have Node.js installed, then run:

```bash
node "c:\Code-You\Web Dev\summer-chores\callbackVersion.js"
```
