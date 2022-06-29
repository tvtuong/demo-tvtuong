import React from 'react';

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dogs extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}

interface NotOkay {
  [x: number]: Dogs;
}

let _dog1 = new Dogs("Dog","Husky");
let _dog2 = new Dogs("Dog","Alaska");
let _dog3 = new Dogs("Dog","Golden");

let ani: NotOkay;
ani = [_dog1,_dog2,_dog3];

for (let index in ani) {
  console.log(`Animal: ${ani[index].name} - breed ${ani[index].breed}`);
  
}

