
    $('#signUpForm').bootstrapValidator({
//        live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'Username is required and cannot be empty'
                    }
                }
            },
            email: {
              validators: {
                    notEmpty: {
                        message: ''
                    }
                }
            },
            pass: {
              validators: {
                    notEmpty: {
                        message: 'Password is required and cannot be empty'
                    }
                }
            },
            rePassword: {
              validators: {
                    notEmpty: {
                        message: 'The field\'s content doesn\'t match your password' 
                    },
                    identical: {
                        field: 'pass',
                        message: 'The password and its confirm are not the same'
                    }
                }
            }
        }
        }).on('error.form.bv', function(e) {
        swal({
            title: "Oops!!",
            text: "Are you sure your information meets our standard??",
            type: "error",
            confirmButtonText: "Try again",
            confirmButtonColor: "#DD6B55"
        });
    }) .on('success.form.bv', function(e) {
                swal({
                title: "Success!",
                text: "You now have a brand new account!",
                type: "success",
                confirmButtonText: "Cool"
                });
        });

