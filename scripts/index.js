function remove() {
    let elements = document.querySelectorAll(".slideIn");
    elements.forEach(ele => {
        ele.classList.remove("down")
    })
}

var heroSlideIns = document.querySelectorAll(".heroName .slideIn")
var aboutSlideIns = document.querySelectorAll(".aboutMe .slideInText")
var pics = document.querySelectorAll(".picContanier")
var skillRows = document.querySelectorAll(".skills .slideIn")
var skillDiv = document.querySelectorAll(".skillContent")
var projectDiv = document.querySelectorAll(".project .slideIn")

function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function checkSlide() {
    heroSlideIns.forEach(ele => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight + ele.clientHeight / 2);
        // bottom of the image
        const divBottom = ele.offsetTop + ele.clientHeight;
        const isHalfShown = slideInAt > ele.offsetTop;
        const isNotScrolledPast = window.scrollY < divBottom;
        if (isHalfShown && isNotScrolledPast) {
            ele.classList.remove('down');
        } else {
            ele.classList.add('down');
        }
    });

    aboutSlideIns.forEach(ele => {
        // half way through the image
        const slideInAt = (window.scrollY + 3 * window.innerHeight / 4 + ele.clientHeight / 2);
        // bottom of the image
        const divBottom = ele.offsetTop + ele.clientHeight;
        const isHalfShown = slideInAt > ele.offsetTop;
        const isNotScrolledPast = window.scrollY < divBottom;
        if (isHalfShown && isNotScrolledPast) {
            ele.classList.add('active');
        } else {
            ele.classList.remove('active');
        }

    });

    pics.forEach(ele => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight + 3 * ele.clientHeight / 4);
        // bottom of the image
        const divBottom = ele.offsetTop + ele.clientHeight;
        const isHalfShown = slideInAt > ele.offsetTop;
        const isNotScrolledPast = window.scrollY < divBottom;

        if (isHalfShown && isNotScrolledPast) {
            ele.classList.add('picActive');
        } else {
            ele.classList.remove('picActive');
        }

    });


    skillRows.forEach(ele => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight / 2 + ele.clientHeight / 2);
        // bottom of the image
        const divBottom = ele.offsetTop + ele.clientHeight;
        const isHalfShown = slideInAt > ele.offsetTop;
        const isNotScrolledPast = window.scrollY < divBottom;
        console.log(isHalfShown, " ", isNotScrolledPast);
        if (isHalfShown && isNotScrolledPast) {
            ele.classList.add("active");
        } else {
            ele.classList.remove("active");
        }
    });


    /*
    skillDiv.forEach(ele => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight / 2 + ele.clientHeight / 2);
        // bottom of the image
        const divBottom = ele.offsetTop + ele.clientHeight;
        const isHalfShown = slideInAt > ele.offsetTop;
        const isNotScrolledPast = window.scrollY < divBottom;

        if (isHalfShown && isNotScrolledPast) {
            skillRows.forEach(row => {
                row.classList.add("active");
            });
        } else {
            skillRows.forEach(row => {
                row.classList.remove("active");
            });
        }
    });*/

    projectDiv.forEach(ele => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight / 2 + ele.clientHeight / 2);
        // bottom of the image
        const divBottom = ele.offsetTop + ele.clientHeight;
        const isHalfShown = slideInAt > ele.offsetTop;
        const isNotScrolledPast = window.scrollY < divBottom;
        console.log(isHalfShown, " ", isNotScrolledPast);
        if (isHalfShown && isNotScrolledPast) {
            ele.classList.add("active");
        } else {
            ele.classList.remove("active");
        }
    });


}


window.addEventListener('scroll', debounce(checkSlide));

checkSlide()