/**
 * ======================================
 * template settings
 * ======================================
 */

(function($) {
    "use strict";

    // color switcher
    $(".color-trigger").on("click", function() {
        $(this).parent().toggleClass("visible-palate");
        $(this).hide();
        $(".close-color-trigger").show();
    });

    $(".close-color-trigger").on("click", function() {
        $(this).parent().toggleClass("visible-palate");
        $(this).hide();
        $(".color-trigger").show();
    });




    // rtl version
    var directionChanger = $(".color-palate .rtl-version li");
    var wrapper = $(".page-wrapper");
    directionChanger.on("click", function(e) {
        var $this = $(this);
        if ($this.hasClass("rtl")) {
            wrapper.addClass("rtl");
        } else {
            wrapper.removeClass("rtl");
        }
    });
})(jQuery);