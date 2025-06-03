jQuery("h1").addClass("big");

jQuery(document).keypress(function (event) {
    jQuery("h1").text(event.key);
})