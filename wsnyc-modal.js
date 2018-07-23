/*

Usage:

1. Create following structure, at the end of <body>:

<div class="wsnyc-modal" id="your-modal">
    <div class="wsnyc-modal-content">
        {your content}
    </div>
</div>

2. Insert your content
3. Insert specific id for your modal

4. Create trigger anywhere in document you want to access your modal
<a href="#" class="wsnyc-modal-trigger" data-modal="your-modal"></a>

5. Remember to have "wsnyc-modal-trigger" class on your <a> trigger element
6. Insert specific id of your modal into "data-modal" attribute in your trigger element

Voila

 */


(function ($) {

    function modalInit () {
        $(".wsnyc-modal-content").prepend("<div class='wsnyc-modal-close'></div>");
        $(".wsnyc-modal-trigger").click(function (e) {
            if ($(window).width() >= bp.large || jQuery(this).hasClass("disable-mobile-link")) {
                e.preventDefault();
                var modal = jQuery("#" + jQuery(this).attr("data-modal"));
                modal.toggleClass("show");
            }
        });
        $(".wsnyc-modal-close").click(function (e) {
            e.preventDefault();
            $(this).closest(".wsnyc-modal").toggleClass("show");
        });

        $(document).click(function (event) {
            if ($(event.target).hasClass("wsnyc-modal") && $(event.target).hasClass("show")) {
                if ($('.wsnyc-modal').hasClass("show")) {
                    $('.wsnyc-modal').removeClass("show");
                }
            }
        });
        $(window).bind('keydown', function(event) {
            $('.wsnyc-modal').removeClass("show");
        });
    }
    $(document).ready(function () {
        modalInit();
    });
})(jQuery);