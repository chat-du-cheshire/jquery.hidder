(function($) {
    $.fn.hidder = function(options) {
        var defaults = {
            show: 2, //Number of showing child tags
            collapsed: true, //Start plugin state
            hideText: 'Hide', //Control text when items expanded
            showText: 'Show', //Control text when items collapsed
            animationDuration: 600,
            tag: $('<div/>'), //Wrapping tag
            controlTag: $('<a/>').attr('href', '#') //Control tag
        };

        var $options = $.extend({}, defaults, options);

        var children = $(this).children();
        var hiddenItems = children.slice(-children.length + $options.show).remove();
        var controlText = function() {
            return $options.collapsed ? $options.showText : $options.hideText;
        }

        $options.tag.addClass('hidder').append(hiddenItems).hide();
        $options.controlTag
            .html(controlText())
            .on('click', function(e) {
                e.preventDefault();
                $options.collapsed = !$options.collapsed;
                $options.tag.slideToggle($options.animationDuration);
                $(this).html(controlText());
            });
        $(this).append($options.tag).append($options.controlTag);
    }
}(jQuery));
