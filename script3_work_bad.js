
$("#selectrole").change(function(){
	$.ajax({
		url:'',
		method: 'post',
		dataType: 'html',
		data: $(this).serialize(),
		success: function(result){
			
		}
		
	});
	return false;
});


$("#form").on("submit", function(){
	$.ajax({
		url: 'add_user.php',
		method: 'post',
		ddataType: 'html',
		data: $(this).serialize(),
		success: function(result){
			$('.table-bordered tr').remove();
			$('.table-bordered').append(function(){
				var res=  '<tr><th class="align-top"><div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">' +
						  '<input type="checkbox" class="custom-control-input" id="all-items"> <label class="custom-control-label" for="all-items"></label>' +
						  '</div> </th> <th class="max-width">Name</th> <th class="sortable">Role</th> <th>Status</th><th>Actions</th></tr>';
				for(var i=0;i< result.users.name.length; i++){ 
					if (result.users.status[i] === '1') { var status = "<i class=\"fa fa-circle active-circle\"></i>"; }
					else if  (result.users.status[i] === '0') { var status = "<i class=\"fa fa-circle not-active-circle\"></i>"; }
				res+= 	  '<tr>' +
                          '<td class="align-middle">' +
                          '<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">' +
                          '<input type="checkbox" class="custom-control-input" id="item-'+result.users.id[i]+'">' +
                          '<label class="custom-control-label" for="item-'+result.users.id[i]+'"></label>' +
						  '</div>' +
                          '</td>' +
                          '<td class="text-nowrap align-middle">'+result.users.name[i]+'</td>' +
                          '<td class="text-nowrap align-middle"><span>'+result.users.role[i]+'</span></td>' +
						  '<td class="text-center align-middle">' + status +
						  '</td>' +
                          '<td class="text-center align-middle">' +
                          '<div class="btn-group align-top">' +
						  '<button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"  data-target="#user-form-modal">Edit</button>' +
                          '<button class="btn btn-sm btn-outline-secondary badge"   type="button" data-toggle="modal"  data-target="#delete-form-modal" ><i class="fa fa-trash"></i></button>' +
				          '</div>' +
						  '<div class="modal" tabindex="-1" role="dialog" id="delete-form-modal">' +
						  '<div class="modal-dialog" role="document">' +
						  '<div class="modal-content">' +
						  '<div class="modal-header">' +
						  '<h5 class="modal-title">Delete user</h5>' +
						  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
						  '<span aria-hidden="true">&times;</span>' +
						  '</button>' +
						  '</div>' +
						  '<div class="modal-body">' +
						  '<p>Are you sure delete user?</p>' +
						  '</div>' +
						  '<div class="modal-footer">' +
						  '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>' +
						  '<button type="button" class="btn btn-primary userinfo" data-id="'+result.users.id[i]+'">Delete</button>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
                          '</td>'  +					 
                          '</tr>'; 
				} 
				
				return res;
				
				
			});
			console.log(result);
		}
		
		
});

return false;

});

$(document).ready(function(){

 $('.userinfo').click(function(){
	
	var userid = $(this).data('id');
	console.log(userid);
	$.ajax({
		url: 'delete_user.php',
		method: 'post',
		data:  {userid: userid},
		dataType: 'json',
		success: function(result){
			$('.table-bordered tr').remove();
			$('.table-bordered').append(function(){
				var res=  '<tr><th class="align-top"><div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">' +
						  '<input type="checkbox" class="custom-control-input" id="all-items"> <label class="custom-control-label" for="all-items"></label>' +
						  '</div> </th> <th class="max-width">Name</th> <th class="sortable">Role</th> <th>Status</th><th>Actions</th></tr>';
				for(var i=0;i< result.users.name.length; i++){ 
					if (result.users.status[i] === '1') { var status = "<i class=\"fa fa-circle active-circle\"></i>"; }
					else if  (result.users.status[i] === '0') { var status = "<i class=\"fa fa-circle not-active-circle\"></i>"; }
				res+= 	  '<tr>' +
                          '<td class="align-middle">' +
                          '<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">' +
                          '<input type="checkbox" class="custom-control-input" id="item-'+result.users.id[i]+'">' +
                          '<label class="custom-control-label" for="item-'+result.users.id[i]+'"></label>' +
						  '</div>' +
                          '</td>' +
                          '<td class="text-nowrap align-middle">'+result.users.name[i]+'</td>' +
                          '<td class="text-nowrap align-middle"><span>'+result.users.role[i]+'</span></td>' +
						  '<td class="text-center align-middle">' + status +
						  '</td>' +
                          '<td class="text-center align-middle">' +
                          '<div class="btn-group align-top">' +
						  '<button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"  data-target="#user-form-modal">Edit</button>' +
                          '<button class="btn btn-sm btn-outline-secondary badge"   type="button" data-toggle="modal"  data-target="#delete-form-modal" ><i class="fa fa-trash"></i></button>' +
				          '</div>' +
						  '<div class="modal" tabindex="-1" role="dialog" id="delete-form-modal">' +
						  '<div class="modal-dialog" role="document">' +
						  '<div class="modal-content">' +
						  '<div class="modal-header">' +
						  '<h5 class="modal-title">Delete user</h5>' +
						  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
						  '<span aria-hidden="true">&times;</span>' +
						  '</button>' +
						  '</div>' +
						  '<div class="modal-body">' +
						  '<p>Are you sure delete user?</p>' +
						  '</div>' +
						  '<div class="modal-footer">' +
						  '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>' +
						  '<button type="button" class="btn btn-primary userinfo" data-id="'+result.users.id[i]+'">Delete</button>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
                          '</td>'  +					 
                          '</tr>';
				
				
				
				
				
				
				
				
				} 
				
				return res;
				
				
			});
			console.log(result);
		}
		
		
});

return false;
});


});






