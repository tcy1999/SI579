1. Line *19* in *index.tsx*, edit *workInterval:* *25* to something else
2. number
3. This destructs the object that is passed into *IntervalConfigDisplay*, so that the value of the property *workInterval* in the object is assigned to the variable *initialWorkInterval*. It is necessary as *initialWorkInterval* is used to give the initial value of the state variable *workInterval* in the function body.
4. Line 20 in *LemonIcon.tsx*, change 'fa-lemon' in the *classNames* to 'fa-apple-whole'
5. Line 15 in *LemonIcon.tsx*, change 500 to some smaller values, e.g., 100
6. It will show the button "add task" when the user is not completing a task and is not taking a break, i.e., *currentlyIdle* is true. The effect of saying "currentlyIdle &&" is to utilize the short-circuiting && conditionals to let JavaScript evaluate the second expression about the button "add task" if *currentlyIdle* is truthy, and just shows nothing if *currentlyIdle* is false.
7. It will load the default state from *DEFAULT_APP_STATE* if *loadstate()* doesn't return a valid state.
8. This line mutates a copy of *state* (pushing *newtask* to *task*) without changing the original source
9. Line 42 in *TaskDisplay.tsx*
10. Line 80 of *App.tsx* , set *completedIntervals* for that task to its previous value plus one: *tasks: { [taskIndex]: { completedIntervals: {$apply: (c) => c+1}}}*
11. 0, 1
12. I probably would like to write a separate *DataModel.ts* to include all the functions related to add/start/remove task, etc., so that the view and model could be separated.