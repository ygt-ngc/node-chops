import React from "react";

class Foo {
  constructor(x) {
    console.log("called constructor %s", x);
  }
}

var x = new Foo("bar");
