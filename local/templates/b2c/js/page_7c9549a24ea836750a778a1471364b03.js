
; /* Start:"a:4:{s:4:"full";s:75:"/local/templates/b2c/components/bitrix/catalog/def/script.js?15236282965054";s:6:"source";s:60:"/local/templates/b2c/components/bitrix/catalog/def/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$("document").ready(function () {
    $(".n-pop-up-order--mod__count").click(function (e) {
        e.preventDefault();
        var data = $(".vine_calc").serialize();
        var pairs = data.split('&');
        var obj = {}, p, idx, val;
        for (var i = 0, n = pairs.length; i < n; i++) {
            p = pairs[i].split('=');
            idx = p[0];

            if (idx.indexOf("[]") == (idx.length - 2)) {
                var ind = idx.substring(0, idx.length - 2)
                if (obj[ind] === undefined) {
                    obj[ind] = [];
                }
                obj[ind].push(p[1]);
            } else {
                obj[idx] = p[1];
            }
        }
        console.log(obj);
        var ot = obj.piople_ot;
        obj.piople_ot = ot.replace(/[^-0-9]/gim, '');
        var doo = obj.piople_do;
        obj.piople_do = doo.replace(/[^-0-9]/gim, '');
        var total_summ = obj.total_summ;
        obj.total_summ = total_summ.replace(/[^-0-9]/gim, '');
        //console.log(obj);

        var mir = 0;
        if (obj.mir_1 == "on")
        {
            mir = 1;
        } else if (obj.mir_2 == "on")
        {
            mir = 2;
        }

        var month = 0;
        if (obj.month_1 == "on")
        {
            month = 1;
        }
        if (obj.month_2 == "on")
        {
            month = 2;
        }
        if (obj.month_3 == "on")
        {
            month = 3;
        }
        if (obj.month_4 == "on")
        {
            month = 4;
        }
        if (obj.month_5 == "on")
        {
            month = 5;
        }
        if (obj.month_6 == "on")
        {
            month = 6;
        }
        if (obj.month_7 == "on")
        {
            month = 7;
        }
        if (obj.month_8 == "on")
        {
            month = 8;
        }
        if (obj.month_9 == "on")
        {
            month = 9;
        }
        if (obj.month_10 == "on")
        {
            month = 10;
        }
        if (obj.month_11 == "on")
        {
            month = 11;
        }
        if (obj.month_12 == "on")
        {
            month = 12;
        }

        if (month >= 5 && month <= 9)
        {
            var sezon = 1;
        } else
        {
            var sezon = 2;
        }
        var kof_mir = (mir == 1) ? 0.8 : 0.6;
        var kof_igr = (sezon == 1) ? 0.33 : 0.25;
        var igr = obj.piople_do * kof_mir * kof_igr;

        var bel = obj.piople_do * kof_mir * kof_igr;

        var kof_red = (sezon == 1) ? 0.33 : 0.5;
        var red = obj.piople_do * kof_mir * kof_red;

        $(".n-main__catalog__header--fl, .n-main__catalog__remain").show();
        $(".result_calc_igr").html(Math.ceil(igr));
        $(".result_calc_bel").html(Math.ceil(bel));
        $(".result_calc_red").html(Math.ceil(red));
        $(".vine_calc .n-close--bttn").click();
        if (window.innerWidth <= 768) {
            $(".n-main__filter__close a").click();
        }
        var showForm = false;
        igr_price = obj.total_summ / Math.ceil(igr);
        bel_price = obj.total_summ / Math.ceil(bel);
        red_price = obj.total_summ / Math.ceil(red);

        total_count = obj.total_summ / (Math.ceil(igr) + Math.ceil(bel) + Math.ceil(red));
        if (total_count > price_for_unit)
            showForm = true;



        //console.log(total_count+"/"+price_for_unit);

        if (showForm == true)
        {
            $('#form-calc').show();
            $(".n-main__catalog__remain__form").show();
            $(".n-main__catalog__remain__bad").hide();
        } else
        {
            $(".n-main__catalog__remain__form").hide();
            $(".n-main__catalog__remain__bad").show();
        }

        $(".form_calc input[name='form_text_8']").val(obj.total_summ);
        $(".form_calc input[name='form_text_9']").val(Math.ceil(igr));
        $(".form_calc input[name='form_text_10']").val(Math.ceil(bel));
        $(".form_calc input[name='form_text_11']").val(Math.ceil(red));
        console.log(1);
        //console.log(showForm);
        // console.log(igr+"/"+bel+"/"+igr);
    });

    /*$(".add_to_basket").click(function(e){
     e.preventDefault();
     var id = $(this).attr("data-id");
     var quantity = $(this).attr("data-quantity");
     if ($('.count_to_card.count_'+id).length)
     {
     quantity = $('.count_to_card.count_'+id).val();
     }
     
     $.post( "/basket_action.php?ID="+id+"&COUNT="+quantity, function( data ) {
     $(".n-header__bucket a span").html(data+" шт");
     
     });
     //console.log(quantity+"/"+id);
     });*/

    $(".count_to_card").change(function () {
        var val = $(this).val();
        var val2 = val.replace(/\D+/g, "");
        var res = parseInt(val2);

        if (val <= 0) {
            $(this).val($(this).data("last"));
            res = 0;
        }

        if (isNaN(res))
            res = $(this).data("last");

        if (res > 999) {
            res = res.toString().substr(0, 3);
        }

        $(this).data("last", res);
        $(this).val(res);
    });
});


/* End */
;
; /* Start:"a:4:{s:4:"full";s:74:"/local/templates/b2c/components/kombox/filter/def/script.js?15236282968178";s:6:"source";s:59:"/local/templates/b2c/components/kombox/filter/def/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var HEIGHTFILT = 0;
$(window).load(function () {
    getFilterPositionNew(false);
})
$("document").ready(function () {


    setTimeout(function () {
        getFilterPositionNew(false);
    }, 100);
    //$.cookie('old_filter_url', window.location.pathname, {path: '/'});
    HEIGHTFILT = $("#kombox-filter").height();
    $(window).scroll(function (e) {
        //console.log("123");

        getFilterPositionNew();
    });
    $(window).resize(function (e) {
        getFilterPositionNew();
    });
    getFilterPositionNew();

    $(".n-main__filter__block__calc a").live("click", function (e) {
        e.preventDefault();
        if ($('#n-pop-up-calc').length) {

            setTimeout(function () {
                $.magnificPopup.open({
                    items: {
                        src: '#n-pop-up-calc'
                    },
                    type: 'inline',

                    fixedContentPos: false,
                    fixedBgPos: true,

                    overflowY: 'auto',

                    closeBtnInside: true,
                    preloader: false,
                    closeMarkup: '',
                    midClick: true,
                    removalDelay: 300,
                    mainClass: 'my-mfp-slide-bottom'
                });
            }, 500);
        }
    });

    $(".count_to_card").live("change", function () {
        var val = $(this).val();
        var val2 = val.replace(/\D+/g, "");
        var res = parseInt(val2);

        if (val <= 0) {
            $(this).val($(this).data("last"));
            res = 0;
        }
        if (isNaN(res))
            res = $(this).data("last");

        if (res > 999)
            res = res.toString().substr(0, 3);


        $(this).data("last", res);
        $(this).val(res);
    });

    $('.n-main__filter__block__more').live("click", function () {
        var th = $(this);
        if (!th.hasClass("active"))
        {
            $('.n-main__filter__block__more').removeClass("active");
            $('.n-main__filter__block__more').next().removeClass("active");
        }
        th.toggleClass('active');
        th.next().toggleClass('active');
    });

    $('.n-main__filter__close a').live("click", function () {
        $('.n-main__filter').hide('fast');
        $(".n-main__catalog_ajax_content").removeAttr("style");
    });

    $("#n-filter a").live("click", function () {
        $('.n-main__filter').show('fast');
        $(".n-main__catalog_ajax_content").height($('.n-main__filter__container').height());
    });
});


var scrollWin = 0;
var thisTop = 0;


function getFilterPosition(e) {
    //
    if ($(window).width() >= 770)
    {
        var filter = $("#kombox-filter");

        var winHeight = $(window).height();
        var winScroll = $(window).scrollTop();
        var filterHeight = filter.height();

        var filterOffset = filter.offset();
        var filterTop = filterOffset.top;

        var filterParentOffset = filter.parent().offset();
        var filterParentTop = filterParentOffset.top;
        var filterParentWidth = filter.parent().width();

        var block = $(".n-main__catalog");
        var blockHeight = block.height();
        var blockOffset = block.offset();
        var blockTop = blockOffset.top;


        var winBottom = winScroll + winHeight;
        var filterBottom = filterParentTop + filterHeight;
        var blockBottom = blockHeight + blockTop - 20;



        var naprScroll = ((scrollWin - winScroll) > 0) ? "up" : "down";



        scrollWin = winScroll;

        if (blockHeight > filterHeight)
        {
            if (winBottom > filterBottom || naprScroll == "up")
            {

                if (filterHeight > winHeight)
                {
                    var top = winBottom - filterBottom;
                    if ((filterBottom + top) > blockBottom)
                    {
                        top = blockBottom - filterBottom;
                    }
                } else
                {
                    var top = winScroll;
                }

                filter.css("position", "absolute");

                if (naprScroll != "up" || filterTop > (winScroll + 60))
                {
                    if (naprScroll == "up" && filterTop > (winScroll + 60))
                    {
                        top = winScroll;
                    }
                    filter.css("top", top);

                }

                filter.css("border", "1px solid #ededed");
                filter.css("width", filterParentWidth);
                filter.parent().css("border", "none");
                thisTop = top;
            } else
            {
                filter.removeAttr("style");
                filter.parent().removeAttr("style");
                thisTop = 0;
            }
        } else
        {
            filter.removeAttr("style");
            filter.parent().removeAttr("style");
            thisTop = 0;
        }

    }
}

function getFilterPositionNew(start) {

    if ($("#kombox-filter").length <= 0)
        return false;
    if ($(window).width() >= 770)
    {
        var filter = $("#kombox-filter");

        var winHeight = $(window).height();
        var winScroll = $(window).scrollTop();
        var filterHeight = filter.height();

        var filterOffset = filter.offset();
        var filterTop = filterOffset.top;

        var filterParentOffset = filter.parent().offset();
        var filterParentTop = filterParentOffset.top;
        var filterParentWidth = filter.parent().width();

        var block = $(".n-main__catalog");
        var blockHeight = block.height();
        var blockOffset = block.offset();
        var blockTop = blockOffset.top;

        var winBottom = winScroll + winHeight;
        var filterBottom = filterParentTop + filterHeight;
        var blockBottom = blockHeight + blockTop - 20;

        var naprScroll = ((scrollWin - winScroll) > 0) ? "up" : "down";

        scrollWin = winScroll;

        if (winScroll > 150)
        {
            if (winBottom <= (blockBottom - 50) || start)
            {
                filter.css("position", "fixed");
                filter.css("top", 70);
                filter.css("overflow-y", "auto");
                filter.height(winHeight - 70);
                filter.css("border", "1px solid #ededed");
                filter.css("width", filterParentWidth);
            } else
            {
                var top = blockBottom - winHeight - 90;
                filter.css("position", "absolute");
                filter.css("border", "1px solid #ededed");
                filter.css("top", top);


            }
            if (!start)
                filter.height(winHeight - 70);
        } else
        {
            filter.removeAttr("style");
        }
        filter.height(winHeight - 70);
        if (filterHeight > $(".n-main__catalog_ajax_content").height())
        {
            //var jilaBilaMalenkayaPeremennaya = winHeight - 0;
            //$(".n-main__catalog_ajax_content").attr("style","min-height:"+jilaBilaMalenkayaPeremennaya+"px;");
            filter.removeAttr("style");
            //$(".n-main__catalog").height($(".n-main__filter").height());
            filter.height($(".n-main__catalog").height() - 70);
            filter.css("overflow-y", "auto");
        }

    } else
    {
        var filter = $("#kombox-filter");
        filter.css("position", "static");
    }
    
}

$(document).click(function (event) {
    $(document).mouseup(function (e) {

        var div = $(".filter_more");
        if (!div.is(e.target)
                && div.has(e.target).length === 0) {
            if ($(".n-main__filter__block__more").is(e.target)
                    && $(".n-main__filter__block__more").has(e.target).length === 0)
            {
                console.log("YEs");
            }

            $(".filter_more.active").removeClass("active");
            $(".n-main__filter__block__more.active").removeClass("active");
        }
    });

});
$(".clear_filter").live("click", function () {
    $.cookie('old_filter_url', "", {path: '/'});
    
})

function isMobile()
{
    return ($(window).width() >= 770) ? false : true;
}




/* End */
;
; /* Start:"a:4:{s:4:"full";s:85:"/local/templates/b2c/components/kombox/filter/def/js/jquery.filter.js?152362829631144";s:6:"source";s:69:"/local/templates/b2c/components/kombox/filter/def/js/jquery.filter.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function () {
    $.komboxInherit = function (name, base, prototype)
    {
        if (!prototype) {
            prototype = base;
            base = $.KomboxSmartFilter;
        }

        $[name] = function (wrapper, settings) {
            if (arguments.length) {
                this.init(wrapper, settings);
            }
        };

        var basePrototype = new base();
        basePrototype.options = $.extend({}, basePrototype.options);
        $[name].prototype = $.extend(true, basePrototype, {name: name}, prototype);

        $.fn[name] = function (options) {
            var filters = [];
            $(this).each(function () {
                var filter = new $[name](this, options);
                filters[filters.length] = filter;
            });
            return filters;
        };
    };

    $.KomboxSmartFilter = function (wrapper, options)
    {
        if (arguments.length) {
            this.init(wrapper, options);
        }
    };

    $.KomboxSmartFilter.prototype = {
        options: {
            ajaxURL: false,
            align: 'LEFT',
            modeftimeout: 0,
            urlDelete: false,
            callbacks: {
                init: false
            }
        },
        init: function (wrapper, options) {
            this.wrapper = $(wrapper);

            this.options = $.extend(this.options, options);
            this.form = $('form', this.wrapper);
            this.timer = null;
            this.hint = null;

            this.initRanges();
            this.initHints();
            this.initToggleProperties();
            this.initTogglePropertiesValues();
            this.initForm();
            this.initButtonPrice();

            if (typeof this.options.callbacks.init == 'function') {
                this.options.callbacks.init.call(this.wrapper, this.options);
            }
            window.KomboboxFilter = this;
        },
        initButtonPrice: function ()
        {
            var _this = this;
            $(".price_send a").live("click", function (e) {
                e.preventDefault();
                _this.reload();
                $(".price_send").hide();
            });

            $(".ajax_send a").live("click", function (e) {
                e.preventDefault();
                _this.reload();
                $('.n-main__filter').hide('fast');
                $(".n-main__catalog_ajax_content").removeAttr("style");
            });

        },
        initRanges: function ()
        {

            var _this = this;
            $(".kombox-range div", _this.wrapper).each(function () {

                var slider = $(this);
                var min = parseFloat(slider.data('min'));
                var max = parseFloat(slider.data('max'));
                var diaposonNumbers = max - min;
                var parent = slider.parents('.kombox-num');
                var step = 1;
                if (diaposonNumbers / 20 < 1)
                    step = Math.round(diaposonNumbers / 20 * 1000000) / 1000000;

                var inputFrom = $('.kombox-num-from', parent);
                var inputTo = $('.kombox-num-to', parent);

                slider.ionRangeSlider({
                    type: "double",
                    /*hasGrid: true,*/
                    min_interval: 100,
                    step: step,
                    hideMinMax: true,
                    hideFromTo: true,
                    /*prettify: false,*/
                    postfix: ' р.',
                    from: window.ionSliderFrom,
                    to: window.ionSliderTo,
                    onChange: function (obj, slider) {

                        if (obj.fromNumber == min)
                            inputFrom.val('');
                        else
                            inputFrom.val(obj.fromNumber);

                        if (obj.toNumber == max)
                            inputTo.val('');
                        else
                            inputTo.val(obj.toNumber);

                        $(".kombox-num-to").val(obj.toNumber);
                        $(".kombox-num-from").val(obj.fromNumber);
                        window.ionSliderFrom = obj.from;
                        window.ionSliderTo = obj.to;
                        //console.log(obj);
                    },
                    onFinish: function (obj, slider) {
                        if (obj.fromNumber == min)
                            inputFrom.val('');
                        else
                            inputFrom.val(obj.fromNumber);

                        if (obj.toNumber == max)
                            inputTo.val('');
                        else
                            inputTo.val(obj.toNumber);

                        $(".kombox-num-to").val(obj.toNumber);
                        $(".kombox-num-from").val(obj.fromNumber);
                        window.ionSliderFrom = obj.from;
                        window.ionSliderTo = obj.to;
                        _this.keyup(inputFrom);

                    }
                });


                inputFrom.on('change', function () {

                    var from = inputFrom.val();
                    if (!from.length)
                        from = min;
                    from = parseFloat(from);
                    var to = inputTo.val();
                    if (!to.length)
                        to = max;
                    to = parseFloat(to);

                    if (from > to) {
                        from = to;
                        inputFrom.val(from);
                    } else if (from == min) {
                        inputFrom.val('');
                    }

                    slider.ionRangeSlider("update", {
                        from: from,
                        to: to
                    });

                    _this.keyup(inputFrom);
                });

                inputTo.on('change', function () {

                    var from = inputFrom.val();
                    if (!from.length)
                        from = min;
                    from = parseFloat(from);

                    var to = inputTo.val();
                    if (!to.length)
                        to = max;
                    to = parseFloat(to);

                    if (from > to) {
                        to = from;
                        inputTo.val(to);
                    } else if (to == max) {
                        inputTo.val('');
                    }

                    slider.ionRangeSlider("update", {
                        from: from,
                        to: to
                    });

                    _this.keyup(inputTo);
                });

                $('.irs-slider.to').attr('style', '');
                setTimeout(function () {

                    var from = $('.kombox-num-from').val();
                    if (!from.length)
                        from = min;
                    var to = $('.kombox-num-to').val();
                    if (!to.length)
                        to = max;

                    slider.ionRangeSlider("reset");
                    $('.irs-slider.to').attr('style', '');
                }, 1000);
            });
        },
        initHints: function ()
        {
            var _this = this;

            if (jQuery().tooltip) {
                $('.kombox-filter-property-hint', _this.wrapper).each(function () {
                    var $this = $(this);
                    var hint = $this.next();
                    if (hint.length)
                    {
                        var hintHtml = hint.html();
                        $this.attr('title', 'title');
                        $this.data('title', hintHtml);
                        hint.remove();
                    }
                });

                $('.kombox-filter-property-hint', _this.wrapper).tooltip({
                    position: {
                        my: "center bottom-5",
                        at: "center top",
                    },
                    content: function () {
                        return $(this).data('title');
                    }
                });
            } else
            {
                $('.kombox-filter-property-hint', _this.wrapper).on('click', function () {
                    var $this = $(this);
                    var hint = $this.next();
                    if (hint.length)
                    {
                        var hintHtml = hint.html();
                        if (hintHtml.length)
                        {
                            if (_this.hint == null) {
                                _this.hint = new BX.PopupWindow("kombox-hint", BX(this), {
                                    content: '',
                                    lightShadow: true,
                                    autoHide: true,
                                    closeByEsc: true,
                                    bindOptions: {position: "bottom"},
                                    closeIcon: {top: "5px", right: "10px"},
                                    offsetLeft: 0,
                                    offsetTop: 2,
                                    angle: {offset: 14}
                                });
                            }
                            _this.hint.setContent('<div class="kombox-filter-hint">' + hintHtml + '</div>');
                            _this.hint.setBindElement(BX(this));
                            _this.hint.show();
                        }
                    }
                    return false;
                });
            }
        },
        initToggleProperties: function ()
        {

            $('.kombox-filter-property-name', this.wrapper).on('click', function () {
                var $this = $(this);
                var property = $this.parents('.lvl1');
                var body = $('.kombox-filter-property-body', property);
                if (body.length) {
                    body.slideToggle(300);
                    if (property.hasClass('kombox-closed')) {
                        property.removeClass('kombox-closed');
                        $.cookie('kombox-filter-closed-' + property.data('id'), false, {path: '/'});
                    } else
                    {
                        property.addClass('kombox-closed');
                        $.cookie('kombox-filter-closed-' + property.data('id'), true, {path: '/'});
                    }
                }
                return false;

            });

            $('.kombox-closed .kombox-filter-property-body.kombox-num', this.wrapper).slideToggle(0);

        },
        initTogglePropertiesValues: function ()
        {

            $('.kombox-values-other-show', this.wrapper).on('click', function () {

                var $this = $(this);
                var propertybody = $this.closest('.kombox-filter-property-body');
                var hide = propertybody.find('.kombox-values-other-hide'),
                        valuesHidden = propertybody.find('.kombox-values-other');

                valuesHidden.show();
                $this.hide();
                hide.show();

                return false;
            });

            $('.kombox-values-other-hide', this.wrapper).on('click', function () {
                var $this = $(this);
                var propertybody = $this.closest('.kombox-filter-property-body');
                var show = propertybody.find('.kombox-values-other-show'),
                        valuesHidden = propertybody.find('.kombox-values-other');

                valuesHidden.hide();
                $this.hide();
                show.show();

                return false;
            });
        },
        initForm: function ()
        {
            var _this = this;
            var form = this.form;

            if (!isMobile())
            {
                form.on('click', 'input[type=submit], button[type=submit]', function () {
                    form.data('clicked', $(this).attr('name'));
                });

                form.on('click', '.kombox-combo input[type="checkbox"], .kombox-radio input[type="radio"]', function () {
                    //console.log("check");
                    _this.click($(this));
                });

                form.on('change', '.kombox-select select, .kombox-list select', function () {
                    _this.click($(this));
                });

                $('.kombox-link .lvl2 a', this.wrapper).on('click', function () {
                    var $this = $(this);
                    var lvl2 = $this.closest('.lvl2');

                    if (lvl2.hasClass('kombox-disabled') && !lvl2.hasClass('kombox-checked'))
                        return false;
                });

                form.on('keypress', 'input[type="text"]', function (e) {
                    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                        form.trigger('submit');
                        return false;
                    } else {
                        //_this.click($(this));
                        return true;
                    }
                });

                form.on('keyup', 'input[type="text"]', function (e) {
                    _this.keyup();
                });

                form.on('submit', function () {
                    if (_this.submitForm() == false)
                        return false;
                });
            }
        },
        submitForm: function () {
            var _this = this;
            var form = this.form;

            $(':input', form).filter(
                    function () {
                        return $(this).val().length == 0;
                    }
            ).prop('disabled', true);

            $('select', form).filter(
                    function () {
                        return $(this).val() == '';
                    }
            ).prop('disabled', true);

            if (form.data('sef') == 'yes')
            {
                var url = '';
                if (form.data('clicked') == 'del_filter')
                {
                    url = _this.options.urlDelete;
                } else
                {
                    url = form.attr('action') + 'filter/' + _this.getSefUrl();

                }
                window.location = url;
                return false;
            }
        },
        getSefUrl: function () {
            var form = this.form;
            var url = '';
            var _this = this;

            $('.lvl1 .kombox-filter-property-body', form).each(function () {
                var $this = $(this);
                var name = $this.data('name');

                if (name.length)
                {
                    var values = '';

                    if ($this.hasClass('kombox-num'))
                    {
                        var from = $('input.kombox-num-from', $this).val();
                        if (from.length)
                            values += '-from-' + parseFloat(from);

                        var to = $('input.kombox-num-to', $this).val();
                        if (to.length)
                            values += '-to-' + parseFloat(to);
                    } else if ($this.hasClass('kombox-combo') || $this.hasClass('kombox-radio'))
                    {
                        values = _this.getSefUrlValues($('input:checked', $this));
                    } else if ($this.hasClass('kombox-select') || $this.hasClass('kombox-list'))
                    {
                        values = _this.getSefUrlValues($('option:selected', $this));
                    } else if ($this.hasClass('kombox-link'))
                    {
                        values = _this.getSefUrlValues($('.kombox-checked a', $this));
                    }

                    if (values.length) {
                        url += name + values + '/';
                    }
                }
            });

            return url;
        },
        getSefUrlValues: function (items)
        {
            var values = '';

            var arValues = items.map(function () {
                var result = '';
                var value = $(this).data('value');
                if (typeof value != 'undefined')
                    result = value;
                else
                    result = $(this).val();

                if (result)
                    return result;
            }).get();

            if (arValues.length)
                values = '-' + arValues.join('-or-');

            return values;
        },
        keyup: function (input)
        {
            //this.reload(input);
            //console.log(isMobile())
            if (!isMobile())
            {
                $(".price_send").show();
            }
        },
        click: function (checkbox)
        {

            if (!checkbox.hasClass("not"))
            {
                var parent = checkbox.parents('lvl2');

                if (checkbox.prop('checked'))
                    parent.addClass('kombox-checked');
                else
                    parent.removeClass('kombox-checked');

                this.reload(checkbox);
            }

        },
        reload: function (input)
        {
            this.input = input;

            if (this.form.length)
            {
                var values = new Array;
                values[0] = {name: 'ajax', value: 'y'};

                this.gatherInputsValues(values, this.form.find('input, select, .kombox-link .lvl2 a'));
                BX.ajax.loadJSON(
                        this.options.ajaxURL,
                        this.values2post(values),
                        BX.delegate(this.postHandler, this)
                        );
                console.log("reload");
                loadContent(this.options.ajaxURL, this.values2post(values));
                showLoadContent("show");
            }
        },
        postHandler: function (result)
        {
            var href_content = "";

            if (result.ITEMS)
            {
                for (var PID in result.ITEMS)
                {
                    var arItem = result.ITEMS[PID];
                    if (arItem.SETTINGS.VIEW == 'SLIDER')
                    {
                        var control = $('#' + arItem.VALUES.MAX.CONTROL_ID);
                        var slider = control.closest('.lvl1').find('.kombox-range div');

                        slider.data('range-from', parseFloat(arItem.VALUES.MIN.RANGE_VALUE));
                        slider.data('range-to', parseFloat(arItem.VALUES.MAX.RANGE_VALUE));

                        slider.ionRangeSlider("updateRange");
                    } else if (arItem.VALUES)
                    {
                        for (var i in arItem.VALUES)
                        {
                            var ar = arItem.VALUES[i];
                            var control = $('#' + ar.CONTROL_ID);
                            if (control.length)
                            {
                                var parent = control.closest('.lvl2');

                                if (arItem.SETTINGS.VIEW == 'LIST' || arItem.SETTINGS.VIEW == 'SELECT')
                                {
                                    if (ar.DISABLED)
                                        control.addClass('kombox-disabled');
                                    else
                                        control.removeClass('kombox-disabled');

                                    if (ar.CHECKED) {
                                        control.addClass('kombox-checked');
                                    } else
                                        control.removeClass('kombox-checked');

                                    if (ar.CNT > 0 && !ar.CHECKED)
                                        control.text(ar.VALUE + ' (' + ar.CNT + ')');
                                    else
                                        control.text(ar.VALUE);
                                } else
                                {
                                    if (ar.DISABLED)
                                        parent.addClass('kombox-disabled');
                                    else
                                        parent.removeClass('kombox-disabled');

                                    if (ar.CHECKED)
                                        parent.addClass('kombox-checked');
                                    else
                                        parent.removeClass('kombox-checked');

                                    if (ar.CNT > 0)
                                        parent.find('span.kombox-cnt').text('(' + ar.CNT + ')');
                                    else
                                        parent.find('span.kombox-cnt').text('');
                                }

                                if (control.is('a') && ar.HREF)
                                {
                                    control.attr('href', ar.HREF);


                                }
                            }
                        }
                    }
                }
                //this.showModef(result);
            }
        },
        showModef: function (result)
        {
            var modef = $('#modef', this.wrapper);
            var modef_num = $('#modef_num', this.wrapper);

            if (modef_num.length)
            {
                modef_num.html(result.ELEMENT_COUNT);
                var href = modef.find('a');
                if (result.FILTER_URL && href.length)
                    href.attr('href', BX.util.htmlspecialcharsback(result.FILTER_URL));

                if (result.INSTANT_RELOAD && result.COMPONENT_CONTAINER_ID)
                {
                    var url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);
                    BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);
                } else
                {
                    var input = $(this.input);
                    var curProp = input.closest('.lvl1').find('.for_modef');
                    if (curProp.length)
                    {
                        modef.show();

                        var lvl2 = input.closest('.lvl2');
                        var top = 0;

                        if (lvl2.length)
                        {
                            top = lvl2.position().top - lvl2.height() / 2;
                        }
                        modef.css({'top': top + 'px'});

                        if (this.options.align != 'LEFT')
                        {
                            modef.css({'left': '' + modef.outerWidth() + 'px'});
                        } else
                        {
                            modef.addClass('modef-right');
                            modef.css({'right': '-' + modef.outerWidth() + 'px'});
                        }

                        curProp.append(modef);

                        if (this.options.modeftimeout > 0)
                        {
                            if (this.modeftimer)
                                clearTimeout(this.modeftimer);

                            this.modeftimer = setTimeout(function () {
                                modef.hide();
                            }, this.options.modeftimeout * 1000);
                        }
                    }
                }
            }
        },
        gatherInputsValues: function (values, elements)
        {
            if (elements.length)
            {
                elements.each(function () {
                    var el = $(this);

                    if (el.is('a') && el.data('checked') == 'checked')
                    {
                        values[values.length] = {name: el.data('name'), value: el.data('value')};
                    } else if (!el.prop('disabled') && el[0].type)
                    {
                        switch (el[0].type.toLowerCase())
                        {
                            case 'text':
                            case 'textarea':
                            case 'password':
                            case 'hidden':
                                var val = el.val();
                                if (val.length)
                                    values[values.length] = {name: el.attr('name'), value: el.val()};
                                break;
                            case 'radio':
                            case 'checkbox':
                                var val = el.val();

                                if (el.prop('checked') && val.length)
                                    values[values.length] = {name: el.attr('name'), value: el.val()};

                                break;
                            case 'select-one':
                            case 'select-multiple':
                                el.find('option').each(function () {
                                    var option = $(this);
                                    if (option.prop('selected') && option.val().length)
                                        values[values.length] = {name: el.attr('name'), value: option.val()};
                                });
                                break;
                            default:
                                break;
                        }
                    }
                });
            }
        },
        values2post: function (values)
        {
            var post = new Object;
            var current = post;
            var i = 0;
            while (i < values.length)
            {
                var value = values[i].value;
                var name = values[i].name;
                var p = name.indexOf('[');
                if (p != -1)
                {
                    name = values[i].name.substring(0, p);
                }

                if (typeof current[name] != 'undefined' && !$.isArray(current[name])) {
                    var first = current[name];
                    current[name] = new Array;
                    current[name].push(first);
                }

                if ($.isArray(current[name]))
                    current[name].push(value);
                else
                    current[name] = value;

                current = post;
                i++;
            }

            return post;
        }
    };

    $.komboxInherit('komboxSmartFilter');
});

function showLoadContent(param)
{
    var container = $(".n-main__catalog__items");
    var containerOffset = container.offset();
    $(".preloader_content").remove();

    if (param == "show")
    {
        container.append("<div class='preloader_content' style='width:" + (container.width()) + "px; height:" + (container.height()) + "px; top:326px;'></div>")
        //console.log(containerOffset.top);
        $("html,body").scrollTop(300);
        $(".preloader_content").fadeTo("slow", 1);
        $(".clear_filter").show();
    }

    getFilterPositionNew();
}

function loadContent(url, obj)
{
    /*var loc = window.location.search;
     
     // LEEFT IF CATALOG_QUANTITY input checked (HACK!!)
     if (BX('CATALOG_QUANTITY').checked) {
     if (url.indexOf("?") != -1)
     {
     url = url + "&" + 'CATALOG_QUANTITY=Y';
     }
     else
     {
     url = url + "?" + 'CATALOG_QUANTITY=Y';
     }
     }
     if (url != "")
     {
     loc = loc.substring(1);
     
     if (loc.length > 0)
     {
     if (url.indexOf("?") != -1)
     {
     url = url + "&" + loc;
     }
     else
     {
     url = url + "?" + loc;
     }
     }*/
    /*delete obj.CATALOG_QUANTITY;
     console.log($("#CATALOG_QUANTITY").prop('checked'));
     if (BX('CATALOG_QUANTITY').checked) {
     obj.CATALOG_QUANTITY = "Y";
     }
     else
     {
     obj.CATALOG_QUANTITY = "N";
     }*/

    obj.ajax = "n";
    obj.PAGEN_2 = 0;
    /*delete komboxInherit;
     komboxInherit = undefined;*/
    var request = $.ajax({
        url: url,
        type: "GET",
        data: obj,
        dataType: "html",
        success: function (e)
        {
            var cont = $(e).find(".n-main__catalog_ajax_content").html();
            $(".n-main__catalog_ajax_content").html(cont);

            var filter = $(e).find(".n-main__filter__container").html();
            $(".n-main__filter__container").html(filter);

            window.KomboboxFilter.initRanges();
            window.KomboboxFilter.initButtonPrice();
            //loadSliderRange();
            //$.cookie('old_filter_url', url, {path: '/'});
            stateObj = {};
            //history.pushState(stateObj, "Каталог", url);

            //console.log(e);
            showLoadContent("hide");
            bindEvents();


        }
    });

    console.log(obj);
    /*}
     else
     {
     return false;
     }*/

}


function bindEvents() {
    $('.favorites-add').on('click', function (e) {
        e.preventDefault();
        var action = $(this).hasClass('added') ? 'remove' : 'add';
        var item = $(this).data('item');
        var _this = $(this);
        var from = _this.data('from');
        var image = _this.data('image');
        var addText = 'Товар добавлен в избранное';
        var removeText = 'Товар удален из избранного';
        $.ajax({
            url: '/ajax/favorite.php?action=' + action + '&item=' + item,
            success: function (res) {
                $('.pop-up__favorites').find('img').attr('src', image);
                if (action == 'remove') {
                    _this.removeClass('added');
                    if (from == 'p') {
                        $('#item-' + item).fadeOut('slow');
                        setTimeout(function () {
                            $('#item-' + item).remove()
                        }, 500);
                    }
                    $('.pop-up__favorites span.text').text(removeText);
                } else if (!res.error) {
                    _this.addClass('added');
                    $('.pop-up__favorites span.text').text(addText);
                }
                $('.pop-up__favorites').addClass('show-pop-up');
                $('.overlay').addClass('overlay-show');
                $('.n-header__favorites span').text(res.count);
            }
        });
    });
    $(".add_to_basket, .add_to_basket2, .add_to_basket22").on("click", function (e) {
        e.preventDefault();
        var _this = $(this);
        var id = $(this).attr("data-id");
        var quantity = $(this).attr("data-quantity");
        if ($('.count_to_card.count_' + id).length)
        {
            quantity = $('.count_to_card.count_' + id).val();
        }

        if (parseInt(quantity) <= 0)
            return false;
        $.post("/basket_action.php?ID=" + id + "&COUNT=" + quantity, function (data) {
            var image = $('#fav-' + id).data('image');
            $(".n-header__bucket a span").html(data + " шт");
            $('.pop-up__cart').find('img').attr('src', image);
            $('.pop-up__cart').addClass('show-pop-up');
            $('.overlay').addClass('overlay-show');

        });
        //console.log(quantity+"/"+id);
    });
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:77:"/local/templates/b2c/js/jquery.mCustomScrollbar.concat.min.js?152362830245479";s:6:"source";s:61:"/local/templates/b2c/js/jquery.mCustomScrollbar.concat.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:108:"/local/templates/b2c/components/bitrix/catalog/def/bitrix/catalog.section/.default/script.js?152362829652067";s:6:"source";s:92:"/local/templates/b2c/components/bitrix/catalog/def/bitrix/catalog.section/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (window) {

    if (!!window.JCCatalogSection)
    {
        return;
    }

    var BasketButton = function (params)
    {
        BasketButton.superclass.constructor.apply(this, arguments);
        this.nameNode = BX.create('span', {
            props: {className: 'bx_medium bx_bt_button', id: this.id},
            text: params.text
        });
        this.buttonNode = BX.create('span', {
            attrs: {className: params.ownerClass},
            style: {marginBottom: '0', borderBottom: '0 none transparent'},
            children: [this.nameNode],
            events: this.contextEvents
        });
        if (BX.browser.IsIE())
        {
            this.buttonNode.setAttribute("hideFocus", "hidefocus");
        }
    };
    BX.extend(BasketButton, BX.PopupWindowButton);

    window.JCCatalogSection = function (arParams)
    {
        this.productType = 0;
        this.showQuantity = true;
        this.showAbsent = true;
        this.secondPict = false;
        this.showOldPrice = false;
        this.showPercent = false;
        this.showSkuProps = false;
        this.visual = {
            ID: '',
            PICT_ID: '',
            SECOND_PICT_ID: '',
            QUANTITY_ID: '',
            QUANTITY_UP_ID: '',
            QUANTITY_DOWN_ID: '',
            PRICE_ID: '',
            DSC_PERC: '',
            SECOND_DSC_PERC: '',
            DISPLAY_PROP_DIV: '',
            BASKET_PROP_DIV: ''
        };
        this.product = {
            checkQuantity: false,
            maxQuantity: 0,
            stepQuantity: 1,
            isDblQuantity: false,
            canBuy: true,
            canSubscription: true,
            name: '',
            pict: {},
            id: 0,
            addUrl: '',
            buyUrl: ''
        };
        this.basketData = {
            useProps: false,
            emptyProps: false,
            quantity: 'quantity',
            props: 'prop',
            basketUrl: '',
            sku_props: '',
            sku_props_var: 'basket_props'
        };

        this.defaultPict = {
            pict: null,
            secondPict: null
        };

        this.checkQuantity = false;
        this.maxQuantity = 0;
        this.stepQuantity = 1;
        this.isDblQuantity = false;
        this.canBuy = true;
        this.canSubscription = true;
        this.precision = 6;
        this.precisionFactor = Math.pow(10, this.precision);

        this.offers = [];
        this.offerNum = 0;
        this.treeProps = [];
        this.obTreeRows = [];
        this.showCount = [];
        this.showStart = [];
        this.selectedValues = {};

        this.obProduct = null;
        this.obQuantity = null;
        this.obQuantityUp = null;
        this.obQuantityDown = null;
        this.obPict = null;
        this.obSecondPict = null;
        this.obPrice = null;
        this.obTree = null;
        this.obBuyBtn = null;
        this.obDscPerc = null;
        this.obSecondDscPerc = null;
        this.obSkuProps = null;
        this.obMeasure = null;

        this.obPopupWin = null;
        this.basketUrl = '';
        this.basketParams = {};

        this.treeRowShowSize = 5;
        this.treeEnableArrow = {display: '', cursor: 'pointer', opacity: 1};
        this.treeDisableArrow = {display: '', cursor: 'default', opacity: 0.2};

        this.lastElement = false;
        this.containerHeight = 0;

        this.errorCode = 0;

        if ('object' === typeof arParams)
        {
            this.productType = parseInt(arParams.PRODUCT_TYPE, 10);
            this.showQuantity = arParams.SHOW_QUANTITY;
            this.showAbsent = arParams.SHOW_ABSENT;
            this.secondPict = !!arParams.SECOND_PICT;
            this.showOldPrice = !!arParams.SHOW_OLD_PRICE;
            this.showPercent = !!arParams.SHOW_DISCOUNT_PERCENT;
            this.showSkuProps = !!arParams.SHOW_SKU_PROPS;

            this.visual = arParams.VISUAL;
            switch (this.productType)
            {
                case 1://product
                case 2://set
                    if (!!arParams.PRODUCT && 'object' === typeof (arParams.PRODUCT))
                    {
                        if (this.showQuantity)
                        {
                            this.product.checkQuantity = arParams.PRODUCT.CHECK_QUANTITY;
                            this.product.isDblQuantity = arParams.PRODUCT.QUANTITY_FLOAT;
                            if (this.product.checkQuantity)
                            {
                                this.product.maxQuantity = (this.product.isDblQuantity ? parseFloat(arParams.PRODUCT.MAX_QUANTITY) : parseInt(arParams.PRODUCT.MAX_QUANTITY, 10));
                            }
                            this.product.stepQuantity = (this.product.isDblQuantity ? parseFloat(arParams.PRODUCT.STEP_QUANTITY) : parseInt(arParams.PRODUCT.STEP_QUANTITY, 10));

                            this.checkQuantity = this.product.checkQuantity;
                            this.isDblQuantity = this.product.isDblQuantity;
                            this.maxQuantity = this.product.maxQuantity;
                            this.stepQuantity = this.product.stepQuantity;
                            if (this.isDblQuantity)
                            {
                                this.stepQuantity = Math.round(this.stepQuantity * this.precisionFactor) / this.precisionFactor;
                            }
                        }
                        this.product.canBuy = arParams.PRODUCT.CAN_BUY;
                        this.product.canSubscription = arParams.PRODUCT.SUBSCRIPTION;

                        this.canBuy = this.product.canBuy;
                        this.canSubscription = this.product.canSubscription;

                        this.product.name = arParams.PRODUCT.NAME;
                        this.product.pict = arParams.PRODUCT.PICT;
                        this.product.id = arParams.PRODUCT.ID;
                        if (!!arParams.PRODUCT.ADD_URL)
                        {
                            this.product.addUrl = arParams.PRODUCT.ADD_URL;
                        }
                        if (!!arParams.PRODUCT.BUY_URL)
                        {
                            this.product.buyUrl = arParams.PRODUCT.BUY_URL;
                        }
                        if (!!arParams.BASKET && 'object' === typeof (arParams.BASKET))
                        {
                            this.basketData.useProps = !!arParams.BASKET.ADD_PROPS;
                            this.basketData.emptyProps = !!arParams.BASKET.EMPTY_PROPS;
                        }
                    } else
                    {
                        this.errorCode = -1;
                    }
                    break;
                case 3://sku
                    if (!!arParams.OFFERS && BX.type.isArray(arParams.OFFERS))
                    {
                        if (!!arParams.PRODUCT && 'object' === typeof (arParams.PRODUCT))
                        {
                            this.product.name = arParams.PRODUCT.NAME;
                            this.product.id = arParams.PRODUCT.ID;
                        }
                        this.offers = arParams.OFFERS;
                        this.offerNum = 0;
                        if (!!arParams.OFFER_SELECTED)
                        {
                            this.offerNum = parseInt(arParams.OFFER_SELECTED, 10);
                        }
                        if (isNaN(this.offerNum))
                        {
                            this.offerNum = 0;
                        }
                        if (!!arParams.TREE_PROPS)
                        {
                            this.treeProps = arParams.TREE_PROPS;
                        }
                        if (!!arParams.DEFAULT_PICTURE)
                        {
                            this.defaultPict.pict = arParams.DEFAULT_PICTURE.PICTURE;
                            this.defaultPict.secondPict = arParams.DEFAULT_PICTURE.PICTURE_SECOND;
                        }
                    } else
                    {
                        this.errorCode = -1;
                    }
                    break;
                default:
                    this.errorCode = -1;
            }
            if (!!arParams.BASKET && 'object' === typeof (arParams.BASKET))
            {
                if (!!arParams.BASKET.QUANTITY)
                {
                    this.basketData.quantity = arParams.BASKET.QUANTITY;
                }
                if (!!arParams.BASKET.PROPS)
                {
                    this.basketData.props = arParams.BASKET.PROPS;
                }
                if (!!arParams.BASKET.BASKET_URL)
                {
                    this.basketData.basketUrl = arParams.BASKET.BASKET_URL;
                }
                if (3 === this.productType)
                {
                    if (!!arParams.BASKET.SKU_PROPS)
                    {
                        this.basketData.sku_props = arParams.BASKET.SKU_PROPS;
                    }
                }
            }
            this.lastElement = (!!arParams.LAST_ELEMENT && 'Y' === arParams.LAST_ELEMENT);
        }
        if (0 === this.errorCode)
        {
            BX.ready(BX.delegate(this.Init, this));
        }
    };

    window.JCCatalogSection.prototype.Init = function ()
    {
        var i = 0,
                strPrefix = '',
                TreeItems = null;

        this.obProduct = BX(this.visual.ID);
        if (!this.obProduct)
        {
            this.errorCode = -1;
        }
        this.obPict = BX(this.visual.PICT_ID);
        if (!this.obPict)
        {
            this.errorCode = -2;
        }
        if (this.secondPict && !!this.visual.SECOND_PICT_ID)
        {
            this.obSecondPict = BX(this.visual.SECOND_PICT_ID);
        }
        this.obPrice = BX(this.visual.PRICE_ID);
        if (!this.obPrice)
        {
            this.errorCode = -16;
        }
        if (this.showQuantity && !!this.visual.QUANTITY_ID)
        {
            this.obQuantity = BX(this.visual.QUANTITY_ID);
            if (!!this.visual.QUANTITY_UP_ID)
            {
                this.obQuantityUp = BX(this.visual.QUANTITY_UP_ID);
            }
            if (!!this.visual.QUANTITY_DOWN_ID)
            {
                this.obQuantityDown = BX(this.visual.QUANTITY_DOWN_ID);
            }
        }
        if (3 === this.productType)
        {
            if (!!this.visual.TREE_ID)
            {
                this.obTree = BX(this.visual.TREE_ID);
                if (!this.obTree)
                {
                    this.errorCode = -256;
                }
                strPrefix = this.visual.TREE_ITEM_ID;
                for (i = 0; i < this.treeProps.length; i++)
                {
                    this.obTreeRows[i] = {
                        LEFT: BX(strPrefix + this.treeProps[i].ID + '_left'),
                        RIGHT: BX(strPrefix + this.treeProps[i].ID + '_right'),
                        LIST: BX(strPrefix + this.treeProps[i].ID + '_list'),
                        CONT: BX(strPrefix + this.treeProps[i].ID + '_cont')
                    };
                    if (!this.obTreeRows[i].LEFT || !this.obTreeRows[i].RIGHT || !this.obTreeRows[i].LIST || !this.obTreeRows[i].CONT)
                    {
                        this.errorCode = -512;
                        break;
                    }
                }
            }
            if (!!this.visual.QUANTITY_MEASURE)
            {
                this.obMeasure = BX(this.visual.QUANTITY_MEASURE);
            }
        }
        if (!!this.visual.BUY_ID)
        {
            this.obBuyBtn = BX(this.visual.BUY_ID);
        }

        if (this.showPercent)
        {
            if (!!this.visual.DSC_PERC)
            {
                this.obDscPerc = BX(this.visual.DSC_PERC);
            }
            if (this.secondPict && !!this.visual.SECOND_DSC_PERC)
            {
                this.obSecondDscPerc = BX(this.visual.SECOND_DSC_PERC);
            }
        }

        if (this.showSkuProps)
        {
            if (!!this.visual.DISPLAY_PROP_DIV)
            {
                this.obSkuProps = BX(this.visual.DISPLAY_PROP_DIV);
            }
        }

        if (0 === this.errorCode)
        {
            if (this.showQuantity)
            {
                if (!!this.obQuantityUp)
                {
                    BX.bind(this.obQuantityUp, 'click', BX.delegate(this.QuantityUp, this));
                }
                if (!!this.obQuantityDown)
                {
                    BX.bind(this.obQuantityDown, 'click', BX.delegate(this.QuantityDown, this));
                }
                if (!!this.obQuantity)
                {
                    BX.bind(this.obQuantity, 'change', BX.delegate(this.QuantityChange, this));
                }
            }
            switch (this.productType)
            {
                case 1://product
                    break;
                case 3://sku
                    TreeItems = BX.findChildren(this.obTree, {tagName: 'li'}, true);
                    if (!!TreeItems && 0 < TreeItems.length)
                    {
                        for (i = 0; i < TreeItems.length; i++)
                        {
                            BX.bind(TreeItems[i], 'click', BX.delegate(this.SelectOfferProp, this));
                        }
                    }
                    for (i = 0; i < this.obTreeRows.length; i++)
                    {
                        BX.bind(this.obTreeRows[i].LEFT, 'click', BX.delegate(this.RowLeft, this));
                        BX.bind(this.obTreeRows[i].RIGHT, 'click', BX.delegate(this.RowRight, this));
                    }
                    this.SetCurrent();
                    break;
            }
            if (!!this.obBuyBtn)
            {
                BX.bind(this.obBuyBtn, 'click', BX.delegate(this.Basket, this));
            }
            if (this.lastElement)
            {
                this.containerHeight = parseInt(this.obProduct.parentNode.offsetHeight, 10);
                if (isNaN(this.containerHeight))
                {
                    this.containerHeight = 0;
                }
                this.setHeight();
                BX.bind(window, 'resize', BX.delegate(this.checkHeight, this));
                BX.bind(this.obProduct.parentNode, 'mouseover', BX.delegate(this.setHeight, this));
                BX.bind(this.obProduct.parentNode, 'mouseout', BX.delegate(this.clearHeight, this));
            }
        }
    };

    window.JCCatalogSection.prototype.checkHeight = function ()
    {
        this.containerHeight = parseInt(this.obProduct.parentNode.offsetHeight, 10);
        if (isNaN(this.containerHeight))
        {
            this.containerHeight = 0;
        }
    };

    window.JCCatalogSection.prototype.setHeight = function ()
    {
        if (0 < this.containerHeight)
        {
            BX.adjust(this.obProduct.parentNode, {style: {height: this.containerHeight + 'px'}});
        }
    };

    window.JCCatalogSection.prototype.clearHeight = function ()
    {
        BX.adjust(this.obProduct.parentNode, {style: {height: 'auto'}});
    };

    window.JCCatalogSection.prototype.QuantityUp = function ()
    {
        var curValue = 0,
                boolSet = true;

        if (0 === this.errorCode && this.showQuantity && this.canBuy)
        {
            curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
            if (!isNaN(curValue))
            {
                curValue += this.stepQuantity;
                if (this.checkQuantity)
                {
                    if (curValue > this.maxQuantity)
                    {
                        boolSet = false;
                    }
                }
                if (boolSet)
                {
                    if (this.isDblQuantity)
                    {
                        curValue = Math.round(curValue * this.precisionFactor) / this.precisionFactor;
                    }
                    this.obQuantity.value = curValue;
                }
            }
        }
    };

    window.JCCatalogSection.prototype.QuantityDown = function ()
    {
        var curValue = 0,
                boolSet = true;

        if (0 === this.errorCode && this.showQuantity && this.canBuy)
        {
            curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
            if (!isNaN(curValue))
            {
                curValue -= this.stepQuantity;
                if (curValue < this.stepQuantity)
                {
                    boolSet = false;
                }
                if (boolSet)
                {
                    if (this.isDblQuantity)
                    {
                        curValue = Math.round(curValue * this.precisionFactor) / this.precisionFactor;
                    }
                    this.obQuantity.value = curValue;
                }
            }
        }
    };

    window.JCCatalogSection.prototype.QuantityChange = function ()
    {
        var curValue = 0,
                boolSet = true;

        if (0 === this.errorCode && this.showQuantity)
        {
            if (this.canBuy)
            {
                curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
                if (!isNaN(curValue))
                {
                    if (this.checkQuantity)
                    {
                        if (curValue > this.maxQuantity)
                        {
                            boolSet = false;
                            curValue = this.maxQuantity;
                        } else if (curValue < this.stepQuantity)
                        {
                            boolSet = false;
                            curValue = this.stepQuantity;
                        }
                    }
                    if (!boolSet)
                    {
                        this.obQuantity.value = curValue;
                    }
                } else
                {
                    this.obQuantity.value = this.stepQuantity;
                }
            } else
            {
                this.obQuantity.value = this.stepQuantity;
            }
        }
    };

    window.JCCatalogSection.prototype.QuantitySet = function (index)
    {
        if (0 === this.errorCode)
        {
            this.canBuy = this.offers[index].CAN_BUY;
            if (this.canBuy)
            {
                BX.addClass(this.obBuyBtn, 'bx_bt_button');
                BX.removeClass(this.obBuyBtn, 'bx_bt_button_type_2');
                this.obBuyBtn.innerHTML = BX.message('MESS_BTN_BUY');
            } else
            {
                BX.addClass(this.obBuyBtn, 'bx_bt_button_type_2');
                BX.removeClass(this.obBuyBtn, 'bx_bt_button');
                this.obBuyBtn.innerHTML = BX.message('MESS_NOT_AVAILABLE');
            }
            if (this.showQuantity)
            {
                this.isDblQuantity = this.offers[index].QUANTITY_FLOAT;
                this.checkQuantity = this.offers[index].CHECK_QUANTITY;
                if (this.isDblQuantity)
                {
                    this.maxQuantity = parseFloat(this.offers[index].MAX_QUANTITY);
                    this.stepQuantity = Math.round(parseFloat(this.offers[index].STEP_QUANTITY) * this.precisionFactor) / this.precisionFactor;
                } else
                {
                    this.maxQuantity = parseInt(this.offers[index].MAX_QUANTITY, 10);
                    this.stepQuantity = parseInt(this.offers[index].STEP_QUANTITY, 10);
                }

                this.obQuantity.value = this.stepQuantity;
                this.obQuantity.disabled = !this.canBuy;
                if (!!this.obMeasure)
                {
                    if (!!this.offers[index].MEASURE)
                    {
                        BX.adjust(this.obMeasure, {html: this.offers[index].MEASURE});
                    } else
                    {
                        BX.adjust(this.obMeasure, {html: ''});
                    }
                }
            }
        }
    };

    window.JCCatalogSection.prototype.SelectOfferProp = function ()
    {
        var i = 0,
                value = '',
                strTreeValue = '',
                arTreeItem = [],
                RowItems = null,
                target = BX.proxy_context;

        if (!!target && target.hasAttribute('data-treevalue'))
        {
            strTreeValue = target.getAttribute('data-treevalue');
            arTreeItem = strTreeValue.split('_');
            if (this.SearchOfferPropIndex(arTreeItem[0], arTreeItem[1]))
            {
                RowItems = BX.findChildren(target.parentNode, {tagName: 'li'}, false);
                if (!!RowItems && 0 < RowItems.length)
                {
                    for (i = 0; i < RowItems.length; i++)
                    {
                        value = RowItems[i].getAttribute('data-onevalue');
                        if (value === arTreeItem[1])
                        {
                            BX.addClass(RowItems[i], 'bx_active');
                        } else
                        {
                            BX.removeClass(RowItems[i], 'bx_active');
                        }
                    }
                }
            }
        }
    };

    window.JCCatalogSection.prototype.SearchOfferPropIndex = function (strPropID, strPropValue)
    {
        var strName = '',
                arShowValues = false,
                i, j,
                arCanBuyValues = [],
                index = -1,
                arFilter = {},
                tmpFilter = [];

        for (i = 0; i < this.treeProps.length; i++)
        {
            if (this.treeProps[i].ID === strPropID)
            {
                index = i;
                break;
            }
        }

        if (-1 < index)
        {
            for (i = 0; i < index; i++)
            {
                strName = 'PROP_' + this.treeProps[i].ID;
                arFilter[strName] = this.selectedValues[strName];
            }
            strName = 'PROP_' + this.treeProps[index].ID;
            arShowValues = this.GetRowValues(arFilter, strName);
            if (!arShowValues)
            {
                return false;
            }
            if (!BX.util.in_array(strPropValue, arShowValues))
            {
                return false;
            }
            arFilter[strName] = strPropValue;
            for (i = index + 1; i < this.treeProps.length; i++)
            {
                strName = 'PROP_' + this.treeProps[i].ID;
                arShowValues = this.GetRowValues(arFilter, strName);
                if (!arShowValues)
                {
                    return false;
                }
                if (this.showAbsent)
                {
                    arCanBuyValues = [];
                    tmpFilter = [];
                    tmpFilter = BX.clone(arFilter, true);
                    for (j = 0; j < arShowValues.length; j++)
                    {
                        tmpFilter[strName] = arShowValues[j];
                        if (this.GetCanBuy(tmpFilter))
                        {
                            arCanBuyValues[arCanBuyValues.length] = arShowValues[j];
                        }
                    }
                } else
                {
                    arCanBuyValues = arShowValues;
                }
                if (!!this.selectedValues[strName] && BX.util.in_array(this.selectedValues[strName], arCanBuyValues))
                {
                    arFilter[strName] = this.selectedValues[strName];
                } else
                {
                    arFilter[strName] = arCanBuyValues[0];
                }
                this.UpdateRow(i, arFilter[strName], arShowValues, arCanBuyValues);
            }
            this.selectedValues = arFilter;
            this.ChangeInfo();
        }
        return true;
    };

    window.JCCatalogSection.prototype.RowLeft = function ()
    {
        var i = 0,
                strTreeValue = '',
                index = -1,
                target = BX.proxy_context;

        if (!!target && target.hasAttribute('data-treevalue'))
        {
            strTreeValue = target.getAttribute('data-treevalue');
            for (i = 0; i < this.treeProps.length; i++)
            {
                if (this.treeProps[i].ID === strTreeValue)
                {
                    index = i;
                    break;
                }
            }
            if (-1 < index && this.treeRowShowSize < this.showCount[index])
            {
                if (0 > this.showStart[index])
                {
                    this.showStart[index]++;
                    BX.adjust(this.obTreeRows[index].LIST, {style: {marginLeft: this.showStart[index] * 20 + '%'}});
                    BX.adjust(this.obTreeRows[index].RIGHT, {style: this.treeEnableArrow});
                }

                if (0 <= this.showStart[index])
                {
                    BX.adjust(this.obTreeRows[index].LEFT, {style: this.treeDisableArrow});
                }
            }
        }
    };

    window.JCCatalogSection.prototype.RowRight = function ()
    {
        var i = 0,
                strTreeValue = '',
                index = -1,
                target = BX.proxy_context;

        if (!!target && target.hasAttribute('data-treevalue'))
        {
            strTreeValue = target.getAttribute('data-treevalue');
            for (i = 0; i < this.treeProps.length; i++)
            {
                if (this.treeProps[i].ID === strTreeValue)
                {
                    index = i;
                    break;
                }
            }
            if (-1 < index && this.treeRowShowSize < this.showCount[index])
            {
                if ((this.treeRowShowSize - this.showStart[index]) < this.showCount[index])
                {
                    this.showStart[index]--;
                    BX.adjust(this.obTreeRows[index].LIST, {style: {marginLeft: this.showStart[index] * 20 + '%'}});
                    BX.adjust(this.obTreeRows[index].LEFT, {style: this.treeEnableArrow});
                }

                if ((this.treeRowShowSize - this.showStart[index]) >= this.showCount[index])
                {
                    BX.adjust(this.obTreeRows[index].RIGHT, {style: this.treeDisableArrow});
                }
            }
        }
    };

    window.JCCatalogSection.prototype.UpdateRow = function (intNumber, activeID, showID, canBuyID)
    {
        var i = 0,
                showI = 0,
                value = '',
                countShow = 0,
                strNewLen = '',
                obData = {},
                pictMode = false,
                extShowMode = false,
                isCurrent = false,
                selectIndex = 0,
                obLeft = this.treeEnableArrow,
                obRight = this.treeEnableArrow,
                currentShowStart = 0,
                RowItems = null;

        if (-1 < intNumber && intNumber < this.obTreeRows.length)
        {
            RowItems = BX.findChildren(this.obTreeRows[intNumber].LIST, {tagName: 'li'}, false);
            if (!!RowItems && 0 < RowItems.length)
            {
                pictMode = ('PICT' === this.treeProps[intNumber].SHOW_MODE);
                countShow = showID.length;
                extShowMode = this.treeRowShowSize < countShow;
                strNewLen = (extShowMode ? (100 / countShow) + '%' : '20%');
                obData = {
                    props: {className: ''},
                    style: {
                        width: strNewLen
                    }
                };
                if (pictMode)
                {
                    obData.style.paddingTop = strNewLen;
                }
                for (i = 0; i < RowItems.length; i++)
                {
                    value = RowItems[i].getAttribute('data-onevalue');
                    isCurrent = (value === activeID);
                    if (BX.util.in_array(value, canBuyID))
                    {
                        obData.props.className = (isCurrent ? 'bx_active' : '');
                    } else
                    {
                        obData.props.className = (isCurrent ? 'bx_active bx_missing' : 'bx_missing');
                    }
                    obData.style.display = 'none';
                    if (BX.util.in_array(value, showID))
                    {
                        obData.style.display = '';
                        if (isCurrent)
                        {
                            selectIndex = showI;
                        }
                        showI++;
                    }
                    BX.adjust(RowItems[i], obData);
                }

                obData = {
                    style: {
                        width: (extShowMode ? 20 * countShow : 100) + '%',
                        marginLeft: '0%'
                    }
                };
                if (pictMode)
                {
                    BX.adjust(this.obTreeRows[intNumber].CONT, {props: {className: (extShowMode ? 'bx_item_detail_scu full' : 'bx_item_detail_scu')}});
                } else
                {
                    BX.adjust(this.obTreeRows[intNumber].CONT, {props: {className: (extShowMode ? 'bx_item_detail_size full' : 'bx_item_detail_size')}});
                }
                if (extShowMode)
                {
                    if (selectIndex + 1 === countShow)
                    {
                        obRight = this.treeDisableArrow;
                    }
                    if (this.treeRowShowSize <= selectIndex)
                    {
                        currentShowStart = this.treeRowShowSize - selectIndex - 1;
                        obData.style.marginLeft = currentShowStart * 20 + '%';
                    }
                    if (0 === currentShowStart)
                    {
                        obLeft = this.treeDisableArrow;
                    }
                    BX.adjust(this.obTreeRows[intNumber].LEFT, {style: obLeft});
                    BX.adjust(this.obTreeRows[intNumber].RIGHT, {style: obRight});
                } else
                {
                    BX.adjust(this.obTreeRows[intNumber].LEFT, {style: {display: 'none'}});
                    BX.adjust(this.obTreeRows[intNumber].RIGHT, {style: {display: 'none'}});
                }
                BX.adjust(this.obTreeRows[intNumber].LIST, obData);
                this.showCount[intNumber] = countShow;
                this.showStart[intNumber] = currentShowStart;
            }
        }
    };

    window.JCCatalogSection.prototype.GetRowValues = function (arFilter, index)
    {
        var i = 0,
                j,
                arValues = [],
                boolSearch = false,
                boolOneSearch = true;

        if (0 === arFilter.length)
        {
            for (i = 0; i < this.offers.length; i++)
            {
                if (!BX.util.in_array(this.offers[i].TREE[index], arValues))
                {
                    arValues[arValues.length] = this.offers[i].TREE[index];
                }
            }
            boolSearch = true;
        } else
        {
            for (i = 0; i < this.offers.length; i++)
            {
                boolOneSearch = true;
                for (j in arFilter)
                {
                    if (arFilter[j] !== this.offers[i].TREE[j])
                    {
                        boolOneSearch = false;
                        break;
                    }
                }
                if (boolOneSearch)
                {
                    if (!BX.util.in_array(this.offers[i].TREE[index], arValues))
                    {
                        arValues[arValues.length] = this.offers[i].TREE[index];
                    }
                    boolSearch = true;
                }
            }
        }
        return (boolSearch ? arValues : false);
    };

    window.JCCatalogSection.prototype.GetCanBuy = function (arFilter)
    {
        var i = 0,
                j,
                boolSearch = false,
                boolOneSearch = true;

        for (i = 0; i < this.offers.length; i++)
        {
            boolOneSearch = true;
            for (j in arFilter)
            {
                if (arFilter[j] !== this.offers[i].TREE[j])
                {
                    boolOneSearch = false;
                    break;
                }
            }
            if (boolOneSearch)
            {
                if (this.offers[i].CAN_BUY)
                {
                    boolSearch = true;
                    break;
                }
            }
        }
        return boolSearch;
    };

    window.JCCatalogSection.prototype.SetCurrent = function ()
    {
        var i = 0,
                j = 0,
                arCanBuyValues = [],
                strName = '',
                arShowValues = false,
                arFilter = {},
                tmpFilter = [],
                current = this.offers[this.offerNum].TREE;

        for (i = 0; i < this.treeProps.length; i++)
        {
            strName = 'PROP_' + this.treeProps[i].ID;
            arShowValues = this.GetRowValues(arFilter, strName);
            if (!arShowValues)
            {
                break;
            }
            if (BX.util.in_array(current[strName], arShowValues))
            {
                arFilter[strName] = current[strName];
            } else
            {
                arFilter[strName] = arShowValues[0];
                this.offerNum = 0;
            }
            if (this.showAbsent)
            {
                arCanBuyValues = [];
                tmpFilter = [];
                tmpFilter = BX.clone(arFilter, true);
                for (j = 0; j < arShowValues.length; j++)
                {
                    tmpFilter[strName] = arShowValues[j];
                    if (this.GetCanBuy(tmpFilter))
                    {
                        arCanBuyValues[arCanBuyValues.length] = arShowValues[j];
                    }
                }
            } else
            {
                arCanBuyValues = arShowValues;
            }
            this.UpdateRow(i, arFilter[strName], arShowValues, arCanBuyValues);
        }
        this.selectedValues = arFilter;
        this.ChangeInfo();
    };

    window.JCCatalogSection.prototype.ChangeInfo = function ()
    {
        var i = 0,
                j,
                index = -1,
                obData = {},
                boolOneSearch = true,
                strPrice = '';

        for (i = 0; i < this.offers.length; i++)
        {
            boolOneSearch = true;
            for (j in this.selectedValues)
            {
                if (this.selectedValues[j] !== this.offers[i].TREE[j])
                {
                    boolOneSearch = false;
                    break;
                }
            }
            if (boolOneSearch)
            {
                index = i;
                break;
            }
        }
        if (-1 < index)
        {
            if (!!this.obPict)
            {
                if (!!this.offers[index].PREVIEW_PICTURE)
                {
                    BX.adjust(this.obPict, {style: {backgroundImage: 'url(' + this.offers[index].PREVIEW_PICTURE.SRC + ')'}});
                } else
                {
                    BX.adjust(this.obPict, {style: {backgroundImage: 'url(' + this.defaultPict.pict.SRC + ')'}});
                }
            }
            if (this.secondPict && !!this.obSecondPict)
            {
                if (!!this.offers[index].PREVIEW_PICTURE_SECOND)
                {
                    BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url(' + this.offers[index].PREVIEW_PICTURE_SECOND.SRC + ')'}});
                } else if (!!this.offers[index].PREVIEW_PICTURE.SRC)
                {
                    BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url(' + this.offers[index].PREVIEW_PICTURE.SRC + ')'}});
                } else if (!!this.defaultPict.secondPict)
                {
                    BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url(' + this.defaultPict.secondPict.SRC + ')'}});
                } else
                {
                    BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url(' + this.defaultPict.pict.SRC + ')'}});
                }
            }
            if (this.showSkuProps && !!this.obSkuProps)
            {
                if (0 === this.offers[index].DISPLAY_PROPERTIES.length)
                {
                    BX.adjust(this.obSkuProps, {style: {display: 'none'}, html: ''});
                } else
                {
                    BX.adjust(this.obSkuProps, {style: {display: ''}, html: this.offers[index].DISPLAY_PROPERTIES});
                }
            }
            if (!!this.obPrice)
            {
                strPrice = this.offers[index].PRICE.PRINT_DISCOUNT_VALUE;
                if (this.showOldPrice && (this.offers[index].PRICE.DISCOUNT_VALUE !== this.offers[index].PRICE.VALUE))
                {
                    strPrice += ' <span>' + this.offers[index].PRICE.PRINT_VALUE + '</span>';
                }
                BX.adjust(this.obPrice, {html: strPrice});
                if (this.showPercent)
                {
                    if (this.offers[index].PRICE.DISCOUNT_VALUE !== this.offers[index].PRICE.VALUE)
                    {
                        obData = {
                            style: {
                                display: ''
                            },
                            html: this.offers[index].PRICE.DISCOUNT_DIFF_PERCENT
                        };
                    } else
                    {
                        obData = {
                            style: {
                                display: 'none'
                            },
                            html: ''
                        };
                    }
                    if (!!this.obDscPerc)
                    {
                        BX.adjust(this.obDscPerc, obData);
                    }
                    if (!!this.obSecondDscPerc)
                    {
                        BX.adjust(this.obSecondDscPerc, obData);
                    }
                }
            }
            this.offerNum = index;
            this.QuantitySet(this.offerNum);
        }
    };

    window.JCCatalogSection.prototype.InitBasketUrl = function ()
    {
        switch (this.productType)
        {
            case 1://product
            case 2://set
                this.basketUrl = this.product.addUrl;
                break;
            case 3://sku
                this.basketUrl = this.offers[this.offerNum].ADD_URL;
                break;
        }
        this.basketParams = {
            'ajax_basket': 'Y'
        };
        if (this.showQuantity)
        {
            this.basketParams[this.basketData.quantity] = this.obQuantity.value;
        }
        if (!!this.basketData.sku_props)
        {
            this.basketParams[this.basketData.sku_props_var] = this.basketData.sku_props;
        }
    };

    window.JCCatalogSection.prototype.FillBasketProps = function ()
    {
        if (!this.visual.BASKET_PROP_DIV)
        {
            return;
        }
        var
                i = 0,
                propCollection = null,
                foundValues = false,
                obBasketProps = null;

        if (this.basketData.useProps && !this.basketData.emptyProps)
        {
            if (!!this.obPopupWin && !!this.obPopupWin.contentContainer)
            {
                obBasketProps = this.obPopupWin.contentContainer;
            }
        } else
        {
            obBasketProps = BX(this.visual.BASKET_PROP_DIV);
        }
        if (!!obBasketProps)
        {
            propCollection = obBasketProps.getElementsByTagName('select');
            if (!!propCollection && !!propCollection.length)
            {
                for (i = 0; i < propCollection.length; i++)
                {
                    if (!propCollection[i].disabled)
                    {
                        switch (propCollection[i].type.toLowerCase())
                        {
                            case 'select-one':
                                this.basketParams[propCollection[i].name] = propCollection[i].value;
                                foundValues = true;
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
            propCollection = obBasketProps.getElementsByTagName('input');
            if (!!propCollection && !!propCollection.length)
            {
                for (i = 0; i < propCollection.length; i++)
                {
                    if (!propCollection[i].disabled)
                    {
                        switch (propCollection[i].type.toLowerCase())
                        {
                            case 'hidden':
                                this.basketParams[propCollection[i].name] = propCollection[i].value;
                                foundValues = true;
                                break;
                            case 'radio':
                                if (propCollection[i].checked)
                                {
                                    this.basketParams[propCollection[i].name] = propCollection[i].value;
                                    foundValues = true;
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        }
        if (!foundValues)
        {
            this.basketParams[this.basketData.props] = [];
            this.basketParams[this.basketData.props][0] = 0;
        }
    };

    window.JCCatalogSection.prototype.SendToBasket = function ()
    {
        if (!this.canBuy)
        {
            return;
        }
        this.InitBasketUrl();
        this.FillBasketProps();
        BX.ajax.loadJSON(
                this.basketUrl,
                this.basketParams,
                BX.delegate(this.BasketResult, this)
                );
    };

    window.JCCatalogSection.prototype.Basket = function ()
    {
        var contentBasketProps = '';
        if (!this.canBuy)
        {
            return;
        }
        switch (this.productType)
        {
            case 1://product
            case 2://set
                if (this.basketData.useProps && !this.basketData.emptyProps)
                {
                    this.InitPopupWindow();
                    this.obPopupWin.setTitleBar({
                        content: BX.create('div', {
                            style: {marginRight: '30px', whiteSpace: 'nowrap'},
                            text: BX.message('TITLE_BASKET_PROPS')
                        })
                    });
                    if (BX(this.visual.BASKET_PROP_DIV))
                    {
                        contentBasketProps = BX(this.visual.BASKET_PROP_DIV).innerHTML;
                    }
                    this.obPopupWin.setContent(contentBasketProps);
                    this.obPopupWin.setButtons([
                        new BasketButton({
                            ownerClass: this.obProduct.parentNode.parentNode.className,
                            text: BX.message('BTN_MESSAGE_SEND_PROPS'),
                            events: {
                                click: BX.delegate(this.SendToBasket, this)
                            }
                        })
                    ]);
                    this.obPopupWin.show();
                } else
                {
                    this.SendToBasket();
                }
                break;
            case 3://sku
                this.SendToBasket();
                break;
        }
    };

    window.JCCatalogSection.prototype.BasketResult = function (arResult)
    {
        var strContent = '',
                strName = '',
                strPict = '',
                successful = true,
                buttons = [];

        if (!!this.obPopupWin)
        {
            this.obPopupWin.close();
        }
        if ('object' !== typeof arResult)
        {
            return false;
        }
        successful = ('OK' === arResult.STATUS);
        if (successful)
        {
            BX.onCustomEvent('OnBasketChange');
            strName = this.product.name;
            switch (this.productType)
            {
                case 1://
                case 2://
                    strPict = this.product.pict.SRC;
                    break;
                case 3:
                    strPict = (!!this.offers[this.offerNum].PREVIEW_PICTURE ?
                            this.offers[this.offerNum].PREVIEW_PICTURE.SRC :
                            this.defaultPict.pict.SRC
                            );
                    break;
            }
            strContent = '<div style="width: 96%; margin: 10px 2%; text-align: center;"><img src="' + strPict + '" height="130"><p>' + strName + '</p></div>';
            buttons = [
                new BasketButton({
                    ownerClass: this.obProduct.parentNode.parentNode.className,
                    text: BX.message("BTN_MESSAGE_BASKET_REDIRECT"),
                    events: {
                        click: BX.delegate(function () {
                            location.href = (!!this.basketData.basketUrl ? this.basketData.basketUrl : BX.message('BASKET_URL'));
                        }, this)
                    }
                })
            ];
        } else
        {
            strContent = (!!arResult.MESSAGE ? arResult.MESSAGE : BX.message('BASKET_UNKNOWN_ERROR'));
            buttons = [
                new BasketButton({
                    ownerClass: this.obProduct.parentNode.parentNode.className,
                    text: BX.message('BTN_MESSAGE_CLOSE'),
                    events: {
                        click: BX.delegate(this.obPopupWin.close, this.obPopupWin)
                    }
                })
            ];
        }
        this.InitPopupWindow();
        this.obPopupWin.setTitleBar({
            content: BX.create('div', {
                style: {marginRight: '30px', whiteSpace: 'nowrap'},
                text: (successful ? BX.message('TITLE_SUCCESSFUL') : BX.message('TITLE_ERROR'))
            })
        });
        this.obPopupWin.setContent(strContent);
        this.obPopupWin.setButtons(buttons);
        this.obPopupWin.show();
    };

    window.JCCatalogSection.prototype.InitPopupWindow = function ()
    {
        if (!!this.obPopupWin)
        {
            return;
        }
        this.obPopupWin = BX.PopupWindowManager.create('CatalogSectionBasket_' + this.visual.ID, null, {
            autoHide: false,
            offsetLeft: 0,
            offsetTop: 0,
            overlay: true,
            closeByEsc: true,
            titleBar: true,
            closeIcon: {top: '10px', right: '10px'}
        });
    };
})(window);

$(document).ready(function () {
    $(".success-order").live("click", function (e) {
        setTimeout(function () {
            $.magnificPopup.open({
                items: {
                    src: '#success'
                },
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                closeMarkup: '',
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
        }, 500);
    });

    $(".n-main__catalog__items__item__buy__button-b.slow").live("click", function (e) {
        e.preventDefault();

        $('.n-pop-up-done').hide();
        $('.n-pop-up-done__container').show();
        var id = $(this).attr("data-id");
        $("input.fastOrderId").val(id);

        if ($('.n-pop-up-done--mod.buy1click').length) {

            setTimeout(function () {
                $.magnificPopup.open({
                    items: {
                        src: '.n-pop-up-done--mod.buy1click'
                    },
                    type: 'inline',
                    fixedContentPos: false,
                    fixedBgPos: true,
                    overflowY: 'auto',
                    closeBtnInside: true,
                    preloader: false,
                    closeMarkup: '',
                    midClick: true,
                    removalDelay: 300,
                    mainClass: 'my-mfp-slide-bottom'
                });
            }, 500);
        }

    });

    $(".buy1click_form").submit(function (e) {
        e.preventDefault();
        var err = false;
        $(".buy1click_form input.req").each(function () {
            if ($(this).val() == "")
            {
                err = true;
                $(this).css("border", "solid 1px #f00");
            }

        });

        if (err == false)
        {
            // ќтправка данных

            var request = $.ajax({
                url: "/order_ajax.php",
                method: "POST",
                data: $(".buy1click_form").serialize()
            });

            request.done(function (msg) {
                $('.success-order').trigger('click');
                //window.location.href = "/personal/cart/?ORDER_ID=" + msg;

            });
        }

    });

    $(".buy1click_form input.req").on("click", function () {
        $(this).removeAttr("style");
    });

    $(".add_to_sender").live("click", function (e) {
        e.preventDefault();

        var id = $(this).attr("data-id");
        $("input.preOrderId").val(id);

        $(".preorder_form .form").show();
        $(".preorder_form .sucsess").hide();

        if ($('.n-pop-up-done--mod.preorder').length) {

            setTimeout(function () {
                $.magnificPopup.open({
                    items: {
                        src: '.n-pop-up-done--mod.preorder'
                    },
                    type: 'inline',
                    fixedContentPos: false,
                    fixedBgPos: true,
                    overflowY: 'auto',
                    closeBtnInside: true,
                    preloader: false,
                    closeMarkup: '',
                    midClick: true,
                    removalDelay: 300,
                    mainClass: 'my-mfp-slide-bottom'
                });
            }, 500);
        }
    });

    $(".preorder_form").live("submit", function (e) {
        e.preventDefault();
        var err = false;
        $(".preorder_form input.req").each(function () {
            if ($(this).val() == "")
            {
                err = true;
                $(this).css("border", "solid 1px #f00");
            }

        });

        if (err == false)
        {


            var request = $.ajax({
                url: "/order_sale.php",
                method: "POST",
                data: $(".preorder_form").serialize()
            });

            request.done(function (msg) {
                //window.location.href = "/personal/cart/?ORDER_ID="+msg;
                console.log(msg);
                $(".preorder_form .form").hide();
                $(".preorder_form .sucsess").show();
                //$(".preorder_form").html("<p>Ваш предзаказ успешно отправлен. С Вами свяжутся в ближайшее время.</p>");
            });
        }

    });

});
/* End */
;; /* /local/templates/b2c/components/bitrix/catalog/def/script.js?15236282965054*/
; /* /local/templates/b2c/components/kombox/filter/def/script.js?15236282968178*/
; /* /local/templates/b2c/components/kombox/filter/def/js/jquery.filter.js?152362829631144*/
; /* /local/templates/b2c/js/jquery.mCustomScrollbar.concat.min.js?152362830245479*/
; /* /local/templates/b2c/components/bitrix/catalog/def/bitrix/catalog.section/.default/script.js?152362829652067*/
