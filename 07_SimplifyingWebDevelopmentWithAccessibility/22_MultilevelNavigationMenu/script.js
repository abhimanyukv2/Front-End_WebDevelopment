// Find all sub menu
const subMenus = document.querySelectorAll(".main-nav ul ul");
// Find all the sub menu trigger buttons
const menuTriggers = document.querySelectorAll(".menu-trigger");

// hide all sub-menus
subMenus.forEach((subMenus) => {
    subMenus.classList.add("hide");
});

// Toggle sub-menu open/closed
// @pram {DOM node} parent
// @pram {boolean} status

const toggleMenu = (parent, status) => {
    const trigger = parent.querySelector("button");
    const subMenu = parent.querySelector("ul");
    if (status == "false") {
        parent.classList.add("open");
        subMenu.classList.remove("hide");
        trigger.setAttribute("aria-expanded", "true");
        trigger.setAttribute("aria-label", "Close news Menu.")
    }
    else {
        parent.classList.remove("open");
        subMenu.classList.add("hide");
        trigger.setAttribute("aria-expanded", "false");
        trigger.setAttribute("aria-label", "Open news menu");
    }
};

// for each trigger button - add a down arrow, - set aria attribute, - add event listener
menuTriggers.forEach((trigger) => {
    trigger.classList.add("sub");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Open news menu.");
    trigger.addEventListener("click", function() {
        const parent = trigger.parentElement;
        const status = trigger.getAttribute("aria-expanded");
        toggleMenu(parent, status)
    })
})

// close sub-menu when user tabs outside menu.
document.addEventListener("focusin", (e) => {
    let currentSubMenu = document.querySelector(".open");
    if (currentSubMenu && e.target.closest(".has-sub-menu") !== currentSubMenu) {
        toggleMenu(currentSubMenu, true);
    }
})

// close sub menus when user clicks outside menu.
document.addEventListener("click", (e)=> {
    let currentSubMenu = document.querySelector(".open");
    if (currentSubMenu && e.target.closest(".has-sub-menu") !== currentSubMenu) {
        toggleMenu(currentSubMenu, true)
    }
})