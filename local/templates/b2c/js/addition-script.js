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


    $('.js-phone-mask').mask('+7(000)000-00-00');
    $('.js-data-mask').mask('00.00.0000');
});