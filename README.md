# Exercises on using node

## Essentials

### The server side
We define boot.js as the entrypoint of the app. All it does is:
  * require "babel/register", which rices out the `require` call so as to be able to load ES6 .js files
    * we could do "coffee/register" instead, if we'd liked to use CoffeeScript instead. The NPM dependency here would've been "coffee".
      (can babel load CoffeeScript files as well?)
  * require "./src/server" -- just an example server
    * maybe can serve something with koajs
      * reactjs_koans dudes use express to serve Webpack assets

### The client side

* Files served out of public via Webpack
  * public/index.html loads a Webpack-generated bundle.js 

## Testing
* Mocha as test runner(?)
* Sinon for mocking
* Chai for expectation syntax
