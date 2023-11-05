function to_do_list() {
    // Initialize an array to store tasks
    const tasks_arr = [
        { description: "Complete project proposal", completed: false },
        { description: "Buy groceries", completed: false },
        { description: "Go for a run", completed: true },
        { description: "Read a book", completed: false },
        { description: "Call mom", completed: false },
    ]

    // Display the application title and command information
    console.log("MyTasks - Command Line Task Manager")
    console.log('')
    let commands = `// Commands:
// - add                      Add a new task
// - list                     List all tasks
// - complete                 Mark a task as completed
// - remove                   Remove a task
// - help                     Show this help message
// - exit                     Exit the application`
    console.log(commands)

    // Loop to continuously prompt the user for commands
    while (true) {
        let command = prompt("Enter your command").trim().toLowerCase()

        if (command == 'add') {
            // Add a new task to the array
            let task_to_add = prompt("Enter description of the task")
            tasks_arr.push({ description: task_to_add, completed: false })
            console.log('Task Added')
        } else if (command == 'list') {
            // List all tasks in the array
            console.log("--List of Tasks--")
            for (task of tasks_arr) {
                console.log(task)
            }
        } else if (command == 'complete') {
            // Mark a task as completed
            let index = prompt("Enter the index of the completed task")
            if (index < tasks_arr.length) {
                tasks_arr[index].completed = true
                console.log('Task updated')
            } else {
                console.log('Wrong Index')
            }
        } else if (command == 'remove') {
            // Remove a task from the array
            let index = Number(prompt("Enter the index of the completed task"))
            if (index < tasks_arr.length) {
                tasks_arr.splice(index, 1)
                console.log('Task removed')
            } else {
                console.log('Wrong Index')
            }
        } else if (command == 'help') {
            // Display the available commands
            console.log(commands)
        } else if (command == 'exit') {
            // Exit the application
            break;
        } else {
            // Handle invalid commands
            console.log("Invalid command")
        }
    }
}

// Call the to_do_list function to start the CLI application
to_do_list()
