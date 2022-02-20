let item = document.getElementsByClassName("container-stack");

const setClass = () => {
    item.setAttribute("style", "background: red");
}

item.addEventListener("click", setClass);