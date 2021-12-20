"use strict";
const message = "changed class!"; // message is a *string*
const myNumber = 5; // myNumber is a number
const myBoolean = false; // myBoolean is a boolean
const x = { dueTime: new Date(), description: 'buy milk', completed: false };
function getTodoItem(description) {
    return { dueTime: new Date(), completed: false, description: description };
}
const todoItems = [];
todoItems.push(getTodoItem('buy milk'));
todoItems.push(getTodoItem('buy oj'));
todoItems.push({ dueTime: new Date(), description: 'should work', completed: false });
function add(a, b) {
    return a + b;
}
