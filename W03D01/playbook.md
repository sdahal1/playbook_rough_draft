## Module 10 - Testing basics

- Use the Module 10 starter code to show how to use mocha and chai to test those functions
### 10.3 - Unit testing with Mocha and Chai

- Mocha is a Testing Framework (A program that automatically runs the tests so that you can easily run a complete set of tests whenever you update your code)
- Chai is an assertion library-> it allows you to compare results between actual and expected

- Use starter code and test the Average function
  - Each it() equals a test-> show multiple its for edge cases, if no artists are given or artists.length === 0, return null. Test that
	- Each describe for a group of related tests (generally its for a function)
	- Can have multiple it() in a describe block
  - Then also show for getArtistRatingByName

### 10.4 - More with Chai
- Show to.be.a and to.be.an
  1. Expect averageNumber to be a number
  2. Add the lowRatedArtists function test and show import for multiple functions->
  3. Expect lowRatedArtists to be an array
  4. Add function where-> Expect the artist found by name to be an object
- Eql vs equal-> 
  1. Reference types(Objects and arrays)-> eql to compare their key value pairs. Deep equality
  2. Primitive data types (Numbers, strings, booleans)-> equal to compare the values
  3. Remember by eql you drowning in deep water, testing for deep equality
- Show the other ones from platform like empty, include, lengthOf -> the documentation

### 10.6 - Coverage
- Code coverage just means-> if I have a bunch of different paths the code can take, how many of those potential paths have I covered?
- Walk through platform example


### 10.5 - JEST
- Its another testing framework, no chai needed
- Convert previous example to jest
