function loadPage(){
    let content = document.querySelector("#content");
    
    

    let top = document.createElement("div");
    top.id = "top";
    content.appendChild(top);

    let main = document.createElement("div");
    main.id = "main";
    content.appendChild(main);

    let left = document.createElement("div");
    left.id = "left";
    main.appendChild(left);

    let right = document.createElement("div");
    right.id = "right";
    main.appendChild(right);

    //fill content

    let todoBox = document.createElement("div");
    todoBox.id = "todoBox";
    right.appendChild(todoBox);

    let title = document.createElement("p");
    title.innerText = "this is a title";
    let description = document.createElement("p");
    description.innerText = "this is a description";
    let dueDate = document.createElement("p");
    dueDate.innerText = "this is a dueDate";
    let priority = document.createElement("p");
    priority.innerText = "this is a priority";
    
    todoBox.appendChild(title);
    todoBox.appendChild(description);
    todoBox.appendChild(dueDate);
    todoBox.appendChild(priority);

    let addTodoButton = document.createElement("button");
    addTodoButton.id = "addTodoButton";
    addTodoButton.innerText ="+ Add Todo";
    right.appendChild(addTodoButton);

    addTodoButton.addEventListener("click", () => {
        alert("tasky");
    });

    //Add new todo box

    let addTodoForm = document.createElement("div");
    addTodoForm.id = "addTodoForm";

//
    let inputDiv1 = document.createElement("div");
    inputDiv1.className = "inputDiv";

    let addTitle = document.createElement("input");
    addTitle.setAttribute("type", "text");
    addTitle.id = "addTitle";

    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "addTitle");
    titleLabel.innerText = "Title:"

    inputDiv1.appendChild(titleLabel);
    inputDiv1.appendChild(addTitle);
    addTodoForm.appendChild(inputDiv1);
//


//
    let inputDiv2 = document.createElement("div");
    inputDiv2.className = "inputDiv";

    let addDescription  = document.createElement("input");
    addDescription.setAttribute("type", "text");
    addDescription.id = "addDescription";

    let descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "addDescription");
    descriptionLabel.innerText = "Description:"

    inputDiv2.appendChild(descriptionLabel);
    inputDiv2.appendChild(addDescription);
    addTodoForm.appendChild(inputDiv2);


//  
    let inputDiv3 = document.createElement("div");
    inputDiv3.className = "inputDiv";

    let addDueDate  = document.createElement("input");
    addDueDate.setAttribute("type", "date");
    addDueDate.id = "addDueDate";

    let dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "addDueDate");
    dueDateLabel.innerText = "Due Date:"

    inputDiv3.appendChild(dueDateLabel);
    inputDiv3.appendChild(addDueDate);
    addTodoForm.appendChild(inputDiv3);

//
    let inputDiv4 = document.createElement("div");
    inputDiv4.className = "inputDiv";

    let addHighPriority  = document.createElement("input");
    addHighPriority.setAttribute("type", "radio");
    addHighPriority.id = "addHighPriority";
    addHighPriority.name = "priority";

    let priorityHighLabel = document.createElement("label");
    priorityHighLabel.setAttribute("for", "addHighPriority");
    priorityHighLabel.className = "labelPriority";
    priorityHighLabel.innerText = "High Priority:"

    let addMediumPriority  = document.createElement("input");
    addMediumPriority.setAttribute("type", "radio");
    addMediumPriority.id = "addMediumPriority";
    addMediumPriority.name = "priority";

    let priorityMediumLabel = document.createElement("label");
    priorityMediumLabel.setAttribute("for", "addMediumPriority");
    priorityMediumLabel.className = "labelPriority";
    priorityMediumLabel.innerText = "Medium Priority:"

    let addLowPriority  = document.createElement("input");
    addLowPriority.setAttribute("type", "radio");
    addLowPriority.id = "addLowPriority";
    addLowPriority.name = "priority";

    let priorityLowLabel = document.createElement("label");
    priorityLowLabel.setAttribute("for", "addLowPriority");
    priorityLowLabel.className = "labelPriority";
    priorityLowLabel.innerText = "LowPriority:";

    inputDiv4.appendChild(priorityHighLabel);
    inputDiv4.appendChild(addHighPriority);
    inputDiv4.appendChild(priorityMediumLabel);
    inputDiv4.appendChild(addMediumPriority);
    inputDiv4.appendChild(priorityLowLabel);
    inputDiv4.appendChild(addLowPriority);


    addTodoForm.appendChild(inputDiv4);

    right.appendChild(addTodoForm);


//insert BR breaks after each priority has to be after Dom loaded for it to work
    let collectionPriority = document.getElementsByClassName("labelPriority");

    for(let i = 1; i < collectionPriority.length; i++){
        let breaky = document.createElement("br");
        inputDiv4.insertBefore(breaky,collectionPriority[i]);
    }

    //work on size of each element inside add task box to make them better and also hide and show box on click with add tdodo button.

    
}



export {loadPage}