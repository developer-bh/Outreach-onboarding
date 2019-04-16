$( document ).ready(function() {

    // Phone number

    var input = document.querySelector("#phone");
    window.intlTelInput(input);

    var input = document.querySelector("#recall");
    window.intlTelInput(input);

    // Show/hide

    $('.call_info__number a').on( "click", function(e) {
        e.preventDefault();
        var id = $(this).attr('data-related');
        $(".call_info__number").each(function(){
            $(this).hide();
            if($(this).attr('id') == id) {
                $(this).show();
            }
        });
    });
});


