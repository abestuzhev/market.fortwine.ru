/**
 * @param {Object} $ The jQuery library
 */
(function($) {

    /**
     * Defines a jQuery object method called stickyFooter to position a footer at the bottom of the page.
     *
     * @param {string} action Specifies whether to create or destroy the sticky footer. If the action is other than 'destroy'
     * then some styles will be applied to the document so the footer always sticks to the bottom of the page; it's the default behaviour
     * and you can omit the plugin parameter. Otherwise, if the action is 'destroy', the styles applied by the plugin will be reset
     * to their default values and the footer will assume its default befaviour - it will stick to page content
     *
     * @return {selector}
     */
    $.fn.stickyFooter = function(action) {

        if (action === 'destroy') {
            $('html, body').css('height', 'auto');

            $($(this).prev()).css({
                marginBottom: 0,
                minHeight: 'auto'
            });

            $("[data-sticky-footer-style]").remove();
        }
        else {
            return this.each(function() {
                _footer = this;
                var footer = this;
                var content = $(footer).prev();
                var footerHeight = $(footer).outerHeight(true);

                $('html, body').css('height', '100%');

                $(content).css({
                    marginBottom: '-' + footerHeight + 'px',
                    minHeight: '100%'
                });

                // To avoid to include an external css, the css rules are attached via jQuery.
                $("body").append(
                    '<style data-sticky-footer-style>' +
                        'body > *:first-child:after {' +
                            'content: "";' +
                            'display: block;' +
                            'height: ' + footerHeight + 'px;' +
                        '}' +
                    '</style>'
                );
            });
        }
    };
}(jQuery));
