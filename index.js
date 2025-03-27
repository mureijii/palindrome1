document.addEventListener("DOMContentLoaded", () => {
    // Get form and task list
    const form = document.getElementById("new-task-form");
    const taskList = document.getElementById("tasks");

    // Ensure form exists before adding an event listener
    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get user input
        const taskInput = document.getElementById("new-task-description");
        const priorityInput = document.getElementById("new-task-priority");
        
        if (!taskInput || !priorityInput ) {
            console.error("Input fields not found!");
            return;
        }

        const taskValue = taskInput.value.trim();
        const priorityValue = priorityInput.value;
        if (taskValue === "") {
            console.warn("Empty task ignored.");
            return;
        }

        // Create task list item
        const li = document.createElement("li");
        li.textContent = taskValue;

        // Apply priority color
        const priorityColors = { high: "red", medium: "orange", low: "green" };
        li.style.color = priorityColors[priorityValue] || "black";

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.setAttribute("aria-label", "Delete task");
        deleteBtn.addEventListener("click", () => {
            li.remove();
            console.log("Task deleted:", taskValue);
        });

        // Append elements
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        console.log("Task added:", taskValue, "Priority:", priorityValue);

        // Reset form input
        taskInput.value = "";
    });
});
