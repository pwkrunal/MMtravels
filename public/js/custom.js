$(function() {
    /* $('#car_from').typeahead({
     name: 'car_from',
     local: ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen']
 });
*/


    $("form[id='booking_form']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            car_from: "required",
            car_name: "required",
            car_to: "required",
            car_mobileNumber: {
                required: true,
                number: true,
                minlength: 10,
            }

        },
        // Specify validation error messages
        messages: {
            car_from: "Please enter source",
            car_name: "Please enter name",
            car_to: "Please enter destination",
            car_mobileNumber: {
                required: "Please enter mobile number",
                number: "Please enter only number",
                minlength: "Please enter 10 digit number"
            }

        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {

            $.ajax({
                url: $('#booking_form').attr('action'),
                type: 'POST',
                data: $('#booking_form').serialize(),
                success: function() {
                    form.reset();
                    console.log('form submitted.');
                    $('#successModal').modal('show');
                }
            });

        }
    });
});
