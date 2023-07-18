## Module 15- Modern Async Programming

- Review on promises when you get a function that returns back a promise that already has a .then(), use crypto api
### 15.2- Promise chaining
  - What if I have asynchronous code but I don’t want it to be asynchronous, I want one operation to wait for the other to complete before running-> show how long get requests to plyers server takes, and how long post request takes-use postman to show this so they know its not a guarantee that the get request finishes before the post request
  - Go through platform examples-> check if player exists with the name "Daffy Duck", and if that name does not exist, then make a post request with that data-> show it with nested promises and how its hard to read
  - Refactor nested promises with promise chaining, Platform example-> do this-> inspect return values-> explain that
  - Show that if a player is not found-> it returns an error
  - Walk through the 15.2- promsie chaining starter code -> update if exists-> show you can return a promise

### 15.3-resolve-reject
  - Use platform example to show resolve reject to fix error on a function that returns null or a promise
  - Use the 15.3 starter code to go over how it works

### 15.4- Promise.all()
- Do 15.4 starter code from-> bulk find and bulk delete -> talk about what if you get a bunch of id's and you want delete each id
- Promise.allSettled()- Since ES2020 you can use Promise.allSettled. It returns a promise that always resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
  - For each outcome object, a status string is present :
    - fulfilled ✅
    - rejected ❌
      - The value (or reason) reflects what value each promise was fulfilled (or rejected) with.
  - Have a close look at following properties (status, value, reason) of resulting array

### 15.5- Async Await()
- Run through the platform example
- Show examples from 14.7 assessment being refactored to use async await
- Use the 15.5.2- assessment studyguide to convert the functions in main.js to async await



