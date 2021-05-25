function loadPage(){
    let content = document.querySelector("#content");
    

    let top = document.createElement("div");
    top.id = "top";
    content.appendChild(top);

    let left = document.createElement("div");
    left.id = "left";
    content.appendChild(left);

    let main = document.createElement("div");
    main.id = "main";
    content.appendChild(main);
}



export {loadPage}