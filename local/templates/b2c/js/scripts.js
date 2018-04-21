$(document).foundation();

$(document).ready(function () {

    function isMobileWidth() {
        return $('#mobile-indicator').is(':visible');
    }

    function stickyFooter() {
        $('.content').css('padding-bottom', $('.footer').outerHeight(true));
    }

    stickyFooter();

    $(window).on('resize', stickyFooter);

    $('.latest__list').slick({
        autoplay: false,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    window.catalog_slick = $('.slider__list').slick({
        autoplay: false,
        autoplaySpeed: 1500,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.item__switcher').click(function (e) {

        $('.addresses__item').hide();
        $($(this).attr('href')).show();

        return false;
    });

    $('.manufacturers__item .item__list').each(function () {
        if ($(this).find('li').length > 5) {
            $(this).find('li:gt(4)').hide();
            $(this).append('<div class="item__more"><a href="#">показать все</a></div>');
        }
    });

    $('.manufacturers__item .item__list .item__more a').click(function (e) {
        e.preventDefault();

        $(this).parents('.item__list').find('li:gt(4)').show();
        $(this).hide();
    });

    $('#n-perSelect').selectmenu({
        appendTo: '.n-main__wrap__bucket__header__col--second__select',
    });





    $('.header__search--mob').click(function () {
        $(this).addClass('header__search--mob--expand');
    });

    $('.header').sticky();


    $('.one-of2 input').click(function () {
        $(this).parent().parent().parent().parent().find('.one-of2 input').prop('checked', false);
        $(this).prop('checked', true);
    });

    $('#n-filter').click(function () {
        $('.n-main__filter').show('fast');
    });

    $('.n-main__filter__close a').click(function () {
        $('.n-main__filter').hide('fast');
    });

    $('.n-main__wrap__bucket__history__wrap__cell--third').click(function () {
        $(this).parent().parent().find('.n-main__wrap__bucket__history__wrap__inside').toggle('fast');
        $(this).find('span').toggleClass('active');
    })

    /*$(window).resize(function(){
     if(!isMobileWidth()) {
     $('.n-main__filter').show();
     }
     if(isMobileWidth()) {
     $('.n-main__filter').hide();
     }
     });*/

    /*$('.n-main__wrap__bucket__buy__field').click(function(){
     $(this).parent().parent().find('input').prop('checked',false);
     $(this).find('input').prop('checked',true);
     });*/

    $(function () {
        $('.n-main__wrap__bucket__order').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,
            closeMarkup: '',
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',

            callbacks: {
                open: function () {
                    $('#select-street').selectmenu({
                        appendTo: '.n-pop-up-order__field__box--first',
                    });
                    $('#select-buy').selectmenu({
                        appendTo: '.n-pop-up-order__field__box--second',
                    });
                }
            }

        });
        $(document).on('click', '.n-close--bttn', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

    if ($('.n-pop-up-done').length) {

        setTimeout(function () {
            $.magnificPopup.open({
                items: {
                    src: '.n-pop-up-done'
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

    document.body.onclick = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        if ((" " + target.parentNode.parentNode.className + " ").replace(/[\n\t]/g, " ").indexOf(" header__search--mob--expand ") < 0) {
            $('.header__search--mob').removeClass('header__search--mob--expand');
        }
    }

    $(".n-main__filter__block__calc a").click(function (e) {
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


    $(".enther_cab_href").click(function (e) {
        e.preventDefault();
        if ($('.n-pop-up-done--mod.login').length) {

            setTimeout(function () {
                $.magnificPopup.open({
                    items: {
                        src: '.n-pop-up-done--mod.login'
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
    $(".n-pop-up-done--mod__forget").click(function () {
        if ($('.n-pop-up-done--mod.forgoth').length) {

            setTimeout(function () {
                $.magnificPopup.open({
                    items: {
                        src: '.n-pop-up-done--mod.forgoth'
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

    $(".n-pop-up-done--mod__reg").click(function () {
        if ($('.n-pop-up-done--mod.registration').length) {
            setTimeout(function () {
                $.magnificPopup.open({
                    items: {
                        src: '.n-pop-up-done--mod.registration'
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

                var v = 'comp_' + $('[name=regform]').find('[name=bxajaxid]').val();

                $('#' + v).remove();

                console.log(v);
                $('.registration').attr('id', v);
            }, 500);
        }
    });

    $(".n-pop-up-done--mod__reg_sucsess").click(function () {
        if ($('.n-pop-up-done--mod.register_sucsess').length) {
            setTimeout(function () {
                $.magnificPopup.open({
                    items: {
                        src: '.n-pop-up-done--mod.register_sucsess'
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

    if ($('.n-pop-up-done').length) {

        setTimeout(function () {
            $.magnificPopup.open({
                items: {
                    src: '.n-pop-up-done'
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

    $(".n-main__sidebar__manager__present__data a").on("click", function (e) {
        e.preventDefault();

        var id = $(this).attr("data-id");
        $("input.fastOrderId").val(id);

        if ($('.n-pop-up-done--mod.remanager').length) {

            setTimeout(function () {
                $.magnificPopup.open({
                    items: {
                        src: '.n-pop-up-done--mod.remanager'
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


    $('.plus').click(function () {
        var val = $(this).parent().find('input').val();
        $(this).parent().find('input').val(++val);

        $(this).parent().find('input').trigger('change');
    });

    $('.minus').click(function () {
        var val = $(this).parent().find('input').val();
        if (val > 1) {
            $(this).parent().find('input').prop('value', --val);
            $(this).parent().find('input').trigger('change');
        }
    });

    $(".header__search input[type='reset']").click(function () {
        $(".header__search").removeClass("active");
    });

    /* start new */
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
        if (!_this.parent().hasClass('n-main__catalog__items__item__buy__preorder')) {

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
        }
        //console.log(quantity+"/"+id);
    });

    $('.pop-up__cart .close, .pop-up__cart .pop-up__btn--continue').on('click', function (e) {
        $('.pop-up__cart').removeClass('show-pop-up');
        $('.overlay').removeClass('overlay-show');
    });

    $('.pop-up__favorites .close, .pop-up__favorites .pop-up__btn--continue').on('click', function (e) {
        $('.pop-up__favorites').removeClass('show-pop-up');
        $('.overlay').removeClass('overlay-show');
    });

    $('input[name="REGISTER[LOGIN]"]').keyup(function (e) {
        e.preventDefault();
        var login = $(this).val();
        var email = $('input[name="REGISTER[EMAIL]"]').val();
        $.ajax({
            url: '/ajax/check_user.php',
            data: {
                login: login,
                email: email
            },
            success: function (res) {
                if (res.error)
                    $('#error-cont').html(res.error_message);
                else
                    $('#error-cont').html('');
            }
        })
    })
    $('input[name="REGISTER[EMAIL]"]').keyup(function (e) {
        e.preventDefault();
        var email = $(this).val();
        var login = $('input[name="REGISTER[LOGIN]"]').val();
        $.ajax({
            url: '/ajax/check_user.php',
            data: {
                login: login,
                email: email
            },
            success: function (res) {
                if (res.error)
                    $('#error-cont').html(res.error_message);
                else
                    $('#error-cont').html('');
            }
        })
    })
    $('input[name="register_submit_button"]').on('click', function (e) {
        $('[name=regform]').ajaxForm(function (e) {
            if ($(e).find('.error').length > 0) {
                $('#error-cont').html($(e).find('.error'));
                $('#captcha').html($(e).find('#captcha').html());
            } else
                window.location.assign('/catalog/vino/?register=Y');
        });
    })

    $('input[name="Login"]').on('click', function (e) {
        $('#auth_form').ajaxForm(function (e) {
            if ($(e).find('#auth-errors p').length > 0) {
                $('#auth-errors').html($(e).find('#auth-errors p').html());
            } else {
                window.location.assign('/catalog/vino/');
            }
        });
    })

    $('#full-version').on('click', function () {
        //$('[name="viewport"]').attr('content', 'width=1300px');
        $.cookie('FULL', '1', {path: '/', expires: 7});
        $(this).attr('id', 'desk-version');
        $(this).text('Мобильная версия сайта');
        $(this).addClass('show_all');
        $(this).hide();
        $('#desk-version-menu').show();
        window.location.reload();

    })
    $('#desk-version').on('click', function () {
        //$('[name="viewport"]').attr('content', 'width=device-width, initial-scale=1.0');
        $.cookie('FULL', '', {path: '/', expires: -1});
        $(this).attr('id', 'full-version');
        $(this).text('Полная версия сайта');
        window.location.reload();
        $(this).hide();
        $(this).parent().css('top', '-13px');
        $(this).removeClass('show_all');

    })

    $('#desk-version-menu').on('click', function () {
        $('[name="viewport"]').attr('content', 'width=device-width, initial-scale=1.0');
        $.cookie('FULL', '', {path: '/', expires: -1});
        $('#desk-version').attr('id', 'full-version');
        $('#full-version').text('Полная версия сайта');
    })
});