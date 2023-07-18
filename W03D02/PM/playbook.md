## Module 13- Promises


### 13.2-13.3
- Walk through the starter code prompts for 13.2-13.3
- Use a metaphor such as "waiting for an order at a restaurant - sandwich ticket"
- Promises allows you to have a way to run some code only after async code finishes running. So you need promises if you are expecting to get some new data from an asynchronous process and you need to have a way for your code to wait for the async process to run before using the data from that async process for further logic
- How do I force async code to run synchronously? -> use a promise
- Different states of a promise-> pending, fulfilled, rejected


### 13.4
- Platform examples - use the fortune teller starter code from platform
- Returning in a promise and passing it to the next .then()
- If a function returns a promise, then you can extract the output with a .then()
- If a function returns a promise that already has a .then()
- Convert the file download example from platform to a promise
- Quiz hints
  1. Show what happens if a promise resolves and you only have a .catch()
    - giveChallenge(question).catch() -> nothing
  2. Show what happens if you don’t .catch a rejected promise (error)
    - giveChallenge().then() -> error
  3. Show what happens if a promise resolves and you have multiple .thens and a .catch in between-> it will skip the .catch and do all the .thens
  4. Show what happens if you have a variable equal to a promise.then and then you .then to that
    ```javascript
      const challenge= "something here";
      const promise = giveChallenge(challenge).then(() => {
        console.log(challenge);
      });
                  promise.then(() => {
        console.log("challenge is complete");
      });


### 13.5
- Explain what .concat() does and why they might need it

