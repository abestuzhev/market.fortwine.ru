function fancybox() {
    var popup = $('.popup-link');

    if (popup.length) {

        popup.fancybox({
            wrapCSS: 'fancybox-popup',
            padding: ['0', '0', '0', '0'],
            hideOnOverlayClick: false,
            hideOnContentClick: false,
            helpers: {
                overlay: {closeClick: false} //Disable click outside event
            }
        });
    }
}

function attYes(e) {
    if ($(e).hasClass('no')) {
        console.log(1);
        attNo();
        return false;
    }
    if ($(e).hasClass('remember'))
        $.cookie('attention', '18', {path: '/', expires: 7});

    $('.fancybox-close').trigger('click');
}
function attNo() {
    $('#modal-buttons').remove();
    $('#ch-rem').remove();
    $('.checkboxes').remove();
    $('#txt18').html('Извините, но вы не можете зайти на этот сайт!');

}


$(document).ready(function () {
    fancybox();

    if (typeof $.cookie('attention') == 'undefined') {
        $('.show-attention').trigger('click');
    }


    $('input[name=rules]').change(function () {
        if ($(this).prop('checked'))
            $('#rules_read').addClass('yes').removeClass('no');
        else
            $('#rules_read').addClass('no').removeClass('yes');
    })
    $('input[name=remember]').change(function () {
        if ($(this).prop('checked'))
            $('#rules_read').addClass('remember');
        else
            $('#rules_read').removeClass('remember');
    })
    // change adress
    $('input[name=personal_adress]').change(function () {
        console.log($(this).val());
        $.ajax({
            url: '/ajax/save_adress.php',
            data: {
                adress: $(this).val()
            }
        })
    })
    $('input[name="REGISTER[PERSONAL_PHONE]"]').inputmask({"mask": "+79999999999"});
//    $('input[name="REGISTER[PERSONAL_PHONE]"]').keypress(function (e) {
//        e = e || event;
//
//        if (e.ctrlKey || e.altKey || e.metaKey)
//            return;
//
//        var chr = getChar(e);
//
//        // с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
//        // на всякий случай лучше вынести проверку chr == null отдельно
//        if (chr == null)
//            return;
//
//        if (chr < '0' || chr > '9') {
//            return false;
//        }
//    })


    $('input[name=reg_rules], input[name=reg_personal]').change(function () {
        checkRegister();
    })

    $('.show_content').click(function (e) {
        e.preventDefault();
        var item = $(this).data('item');
        var url = $(this).data('url');
        showLoadContent('show');
        var request = $.ajax({
            url: url,
            type: "GET",
            data: {
                item: item,
                banner: 1
            },
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
    })
    
    
    $('body').click(function() {
        window.catalog_slick.slick('slickNext');
    })
})


function checkRegister() {
    var rules_input = $('input[name=reg_rules]').prop('checked');
    var reg_personal = $('input[name=reg_personal]').prop('checked');

    if (rules_input && reg_personal)
        $('input[name=register_submit_button]').removeClass('disabled').prop('disabled', false);
    else
        $('input[name=register_submit_button]').addClass('disabled').prop('disabled', true);

}
function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32)
            return null;
        return String.fromCharCode(event.keyCode) // IE
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32)
            return null;
        return String.fromCharCode(event.which) // остальные
    }

    return null; // специальная клавиша
}
  