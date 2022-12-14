$('.dropdown-menu.new').on("click", function (e) {
    if (!e.target.classList.contains('overlay')) { // if dropdown is clicked
    e.stopPropagation();
    }
});