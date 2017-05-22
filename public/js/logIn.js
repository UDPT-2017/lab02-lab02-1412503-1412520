$('#log-in').click(function(){
	var email = $('#email').val();
	var pass = $('#pass').val();
	console.log(email);
	login(email, pass);
})

login = function(email, pass){
	$.ajax({
		type: 'POST',
		data: { em: email, password: pass},
		dataType: 'json',
		url: '/logIn',
		success: function(data){
			swal({
            title: "Oops!!",
            text: 'test',
            type: "error",
            confirmButtonText: "Try again",
            confirmButtonColor: "#DD6B55"

		});
		}
	})
}