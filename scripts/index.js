var heroSlideIns = document.querySelectorAll(".heroName .slideIn")
var aboutSlideIns = document.querySelectorAll(".aboutMe .slideIn")
var pics = document.querySelectorAll(".pic")
var skillRows = document.querySelectorAll(".skills .slideIn")
var skillDiv = document.querySelectorAll(".skillContent")
var projectDiv = document.querySelectorAll(".project .slideIn")
var contactDiv = document.querySelectorAll(".contact")
var connectButton = document.querySelector(".connectButton")

// Media condition that targets viewports at max 768px wide
const mediaQuery = window.matchMedia('(max-width: 450px)')

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
    test3();
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
        const slideInAt = (window.scrollY + window.innerHeight + ele.clientHeight / 2);
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


    // skillRows.forEach(ele => {
    //     // half way through the image
    //     const slideInAt = (window.scrollY + window.innerHeight / 2 + ele.clientHeight / 2);
    //     // bottom of the image
    //     const divBottom = ele.offsetTop + ele.clientHeight;
    //     const isHalfShown = slideInAt > ele.offsetTop;
    //     const isNotScrolledPast = window.scrollY < divBottom;
    //     if (isHalfShown && isNotScrolledPast) {
    //         ele.classList.add("active");
    //     } else {
    //         ele.classList.remove("active");
    //     }
    // });


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
    })

    projectDiv.forEach(ele => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight + ele.clientHeight / 2);
        // bottom of the image
        const divBottom = ele.offsetTop + ele.clientHeight;
        const isHalfShown = slideInAt > ele.offsetTop;
        const isNotScrolledPast = window.scrollY < divBottom;
        if (isHalfShown && isNotScrolledPast) {
            ele.classList.add("active");
        } else {
            ele.classList.remove("active");
        }
    });
    connecButtonTransition();



}


function connecButtonTransition() {
    contactDiv.forEach(ele => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight + ele.clientHeight / 2);
        // bottom of the image
        const divBottom = ele.offsetTop + ele.clientHeight;
        const isHalfShown = slideInAt > ele.offsetTop;
        const isNotScrolledPast = window.scrollY < divBottom;
        if (isHalfShown && isNotScrolledPast) {
            connectButton.classList.add("rollRight");
        } else {
            connectButton.classList.remove("rollRight");
        }
    });
}

function test3() {
    if (window.scrollY >= 200)
        test();
    else {
        test2();
    }
}

function test() {
    var ele = document.querySelector(".connectButton");
    ele.innerHTML = "M";
    try {
        ele.classList.remove("connectButtonOriginal")
    } catch {
        console.log("error 1");
    }
    ele.classList.add("connectButtonSide");
}

function test2() {
    var ele = document.querySelector(".connectButton");
    ele.innerHTML = "Lets Connect";
    try {
        ele.classList.remove("connectButtonSide")
    } catch {
        console.log("error 2");
    }
    ele.classList.add("connectButtonOriginal");

}

window.addEventListener('scroll', debounce(checkSlide));
connectButton.addEventListener("click", connecButtonTransition)

checkSlide();