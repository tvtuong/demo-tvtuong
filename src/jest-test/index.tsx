import React from 'react'
import axios from 'axios';

export const add = (a: number, b: number) => a + b;

export const addObject = (a: number, b: number) => ({ a, b });

export function divideByZero() {
  throw new Error('Ban khong duoc phep chia cho 0');
}

export function checkIsAdult(age: number) {
  return new Promise((resolve, reject) => {
      if (age >= 18) resolve('Da tren 18, an ngon nhoe');
      reject('Chua an duoc, can than boc lich');
  });
}

export function forEach(items: any, callback: any) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

export class Users {
  static all() {
    return axios.get('/users.json').then((resp: any) => resp.data);
  }
}