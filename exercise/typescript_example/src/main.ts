const message:string = "changed class!"; // message is a *string*
const myNumber:number = 5; // myNumber is a number
const myBoolean:boolean = false; // myBoolean is a boolean

// Every todo item should have:
// .    - dueTime (date)
//      - description (string)
// .    - completed (boolean)

type TodoItem = { // create a new *type*
    dueTime: Date,
    description: string,
    completed: boolean
};

const x: TodoItem = {dueTime: new Date(), description: 'buy milk', completed: false};

function getTodoItem(description: string): TodoItem {
    return {dueTime: new Date(), completed: false, description: description}
}

const todoItems:Array<TodoItem> = [];

todoItems.push(getTodoItem('buy milk'));
todoItems.push(getTodoItem('buy oj'));
todoItems.push({ dueTime: new Date(), description:'should work', completed: false });


function add(a:number, b:number): number {
    return a + b;
}