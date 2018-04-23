$(function(){
    /*соглашение на обработку персональных данных*/
    function disabledFormButton(form, check, btn_form) {
        $("form input[type='checkbox']").on('change', function () {
            if ($(check).prop('checked')) {
                $(btn_form).removeAttr('disabled');
            } else {
                $(btn_form).attr('disabled', 'disabled');
            }
        });
    }

    disabledFormButton('.n-registration-form', '#registration-data', '.n-registration__btn');

    console.log('show popup');
    $('.js-phone-mask').mask('+7(000)000-00-00');
    $('.js-data-mask').mask('00.00.0000');

    setTimeout(function () {
        console.log('show popup');
        $('.pop-up__choice-city').addClass('show-popup');
        $('.overlay').addClass('show-popup');
    }, 1500);

    $('.pop-up-custom .close').on('click', function(){
        $('.pop-up-custom').removeClass('show-popup');
        $('.overlay').removeClass('show-popup');
    });
    $('.pop-up-custom__city').on('click', function(e){
        e.preventDefault();
        $('.pop-up__choice-city').addClass('show-popup');
        $('.pop-up__change-city').addClass('show-popup');
    })
});