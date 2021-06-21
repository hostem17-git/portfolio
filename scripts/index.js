function remove(){
    let elements = document.querySelectorAll(".slideIn");
    elements.forEach(ele=>{
        ele.classList.remove("down")
    })
}

remove();