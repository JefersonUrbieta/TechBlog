"use strict";

function initDropdowns(e) {
    e.children(".gh-drop-trigger").on("click", function (i) {
        i.stopPropagation();
        var o = $(this), c = o.parent();
        c.hasClass("active") ? (c.removeClass("active"), $(document).off("click")) : (e.removeClass("active"), c.addClass("active"), $(document).on("click", function () {
            e.removeClass("active")
        }))
    })
}

!function () {
    $(".gh-nav-burger").click(function () {
        $(".gh-mobilehead").toggleClass("gh-mobilehead-open")
    })
}();
