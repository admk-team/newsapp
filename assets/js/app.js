$('.dropdown-menu.new').on("click", function (e) {
    if (!e.target.classList.contains('overlay')) { // if dropdown is clicked
    e.stopPropagation();
    }
});

$(document).ready(function () {
    $('.toggle-switch-new').each(function () {
        let labels = $(this).find('label');
        let active = $(this).find('label.active');
        let inactive = $(this).find('label:not(.active)');
        let input = $(this).find('input[type="hidden"]');
        if (!this.classList.contains('initialized')) {
            $(active).append('<span class="active-mask">'+active.text()+'</span>');
            $(inactive).append('<span class="active-mask">'+inactive.text()+'</span>');
            this.classList.add('initialized');
            labels[0].classList.add('first');
            labels[1].classList.add('second');
        }
    });
    $('.toggle-switch-new').click(function () {
        let active = $(this).find('label.active');
        let inactive = $(this).find('label:not(.active)');
        let input = $(this).find('input[type="hidden"]');

        active.removeClass('active');
        inactive.addClass('active');
        input.val(inactive.data('value'));

        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            input[0].dispatchEvent(evt);
        }
        else
            input[0].fireEvent("onchange");
    });
})

function test(self) {
    console.log(self.value);
}