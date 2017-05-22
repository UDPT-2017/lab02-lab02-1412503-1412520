function addFriend(friendID){
	$.ajax({
		type: 'POST',
		data: {friendID: friendID},
		url: '/addfriend',
		success: function(data){
			if (data.localeCompare('1') === 0)
			{
				swal({
                 title: "Success!",
               	 text: "You guys are now friends!",
                 type: "success",
                confirmButtonText: "Cool"
            	});
			}
			else
			{
				swal({
	            title: "Oops!!",
	            text: "That's our fault, please try again!!",
	            type: "error",
	            confirmButtonText: "Try again",
	            confirmButtonColor: "#DD6B55"
        		});
			}
		}
	})
}

function unFriend(friendID){
swal({
	  	title: "Wait!!",
	  	text: "Are you sure you want to unfriend??",
	  	type: "warning",
	  	confirmButtonText: "Yes",
	  	cancelButtonText: "Nah, I don't think so",
	  	showCancelButton: true
		},
		function(isConfirm){
			if (isConfirm)
			{
				$.ajax({
					type: 'POST',
					data: {friendID: friendID},
					url: '/unfriend',
					success: function(data){
						if (data.localeCompare('1') === 0)
							{
								alert('You guys are no longer friends :(');
							}
						else
						{
							alert('There must be something wrong, please try again!!');
						}
					}
				})

			}
		});	
}