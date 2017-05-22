    var error = true;
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
            error = true;
    }) .on('success.form.bv', function(e) {
            error = false;
        }); 

$('#sign-up').click(function(){
    $('#signUpForm').bootstrapValidator('validate');
    var name = $('#name').val();
    var email = $('#em').val();
    var pass = $('#passw').val();
    var tel = $('#tel').val();

    if (error === true)
    {

       swal({
            title: "Oops!!",
            text: "Are you sure your information meets our standard??",
            type: "error",
            confirmButtonText: "Try again",
            confirmButtonColor: "#DD6B55"
        });
    }
    else
    {
         $.ajax({
                type: 'POST',
                data: { name: name, em: email, password: pass, tel: tel},
                url: '/signUp',
                success: function(data){
                    if (data.localeCompare('1') === 0)
                    {
                        swal({
                        title: "Success!",
                        text: "You now have a brand new account!",
                        type: "success",
                        confirmButtonText: "Cool"
                        },
                        function(isConfirm){
                            if (isConfirm)
                                window.location = '/logIn';
                        });
                        
                    }
                    else
                    {
                        swal({
                        title: "Oops!!",
                        text: "Email has been used!!",
                        type: "error",
                        confirmButtonText: "Try again",
                        confirmButtonColor: "#DD6B55"
                        });
                    }
                    
                },
                 error: function(jqXHR, exception) {
                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404]';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].';
                    } else if (exception === 'parsererror') {
                        msg = 'Requested JSON parse failed.';
                    } else if (exception === 'timeout') {
                        msg = 'Time out error.';
                    } else if (exception === 'abort') {
                        msg = 'Ajax request aborted.';
                    } else {
                        msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    }
                    alert(msg);
                     /*swal({
                        title: "Oops!!",
                        text: "Email has been used!!",
                        type: "error",
                        confirmButtonText: "Try again",
                        confirmButtonColor: "#DD6B55"
                    });*/
    }

            });
                
    }

                   
})
