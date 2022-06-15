

// форма додавання
$("body").on("submit","#form", function(){
	
	var res='';
	$.ajax({
		url: 'add_user.php',
		method: 'post',
		ddataType: 'html',
		data: $(this).serialize(),
		success: function(result){
			$('.table-bordered tr').remove();
			$('.table-bordered').append(function(){
				res+=  '<tr><th class="align-top"><div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">' +
						  '<input type="checkbox" class="custom-control-input" id="all-items"> <label class="custom-control-label" for="all-items"></label>' +
						  '</div> </th> <th class="max-width">Name</th> <th class="sortable">Role</th> <th>Status</th><th>Actions</th></tr>';
				for(var i=0;i< result.users.name.length; i++){ 
					if (result.users.status[i] === '1') { var status = "<i class=\"fa fa-circle active-circle\"></i>"; }
					else if  (result.users.status[i] === '0') { var status = "<i class=\"fa fa-circle not-active-circle\"></i>"; }
				res+= 	  '<tr>' +
                          '<td class="align-middle">' +
                          '<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">' +
                          '<input type="checkbox" class="custom-control-input" name="check-user[]" value="'+result.users.id[i]+'" id="item-'+result.users.id[i]+'">' +
                          '<label class="custom-control-label" for="item-'+result.users.id[i]+'"></label>' +
						  '</div>' +
                          '</td>' +
                          '<td class="text-nowrap align-middle">'+result.users.name[i]+'</td>' +
                          '<td class="text-nowrap align-middle"><span>'+result.users.role[i]+'</span></td>' +
						  '<td class="text-center align-middle">' + status +
						  '</td>' +
                          '<td class="text-center align-middle">' +
                          '<div class="btn-group align-top">' +
						  '<button class="btn btn-sm btn-outline-secondary badge btn_edit" type="button" data-toggle="modal"  data-target="#user-form-modal" id="btn_edit" data-id="'+result.users.id[i]+'">Edit</button>' +
                          '<button class="btn btn-sm btn-outline-secondary badge"   type="button" data-toggle="modal"  data-target="#delete-form-modal-'+result.users.id[i]+'" data-id="'+result.users.id[i]+'" ><i class="fa fa-trash"></i></button>' +
				          '</div>' +
						  '<div class="modal" tabindex="-1" role="dialog" id="delete-form-modal-'+result.users.id[i]+'">' +
						  '<div class="modal-dialog" role="document">' +
						  '<div class="modal-content">' +
						  '<div class="modal-header">' +
						  '<h5 class="modal-title">Delete user</h5>' +
						  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
						  '<span aria-hidden="true">&times;</span>' +
						  '</button>' +
						  '</div>' +
						  '<div class="modal-body">' +
						  '<p>Are you sure want delete user?</p>' +
						  '</div>' +
						  '<div class="modal-footer">' 	+				  
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
			$('#user-form-modal').hide();
			$('.modal-backdrop').hide();
			$("#form")[0].reset();
			
			
		}
		
		
});

return false;


});

// кнопка видалення
$(document).ready(function(){

 $('body').on("click",'.userinfo',function(){
	var res='';
	var userid = $(this).attr('data-id');	
$("#userid").attr('value', userid);
	$.ajax({
		url: 'delete_user.php',
		method: 'post',
		data:  {userid: userid},
		dataType: 'json',
		success: function(result){
			$('.table-bordered tr').remove();
			$('.table-bordered').append(function(){
				res+=  '<tr><th class="align-top"><div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">' +
						  '<input type="checkbox" class="custom-control-input" id="all-items"> <label class="custom-control-label" for="all-items"></label>' +
						  '</div> </th> <th class="max-width">Name</th> <th class="sortable">Role</th> <th>Status</th><th>Actions</th></tr>';
				for(var i=0;i< result.users.name.length; i++){ 
					if (result.users.status[i] === '1') { var status = "<i class=\"fa fa-circle active-circle\"></i>"; }
					else if  (result.users.status[i] === '0') { var status = "<i class=\"fa fa-circle not-active-circle\"></i>"; }
				res+= 	  '<tr>' +
                          '<td class="align-middle">' +
                          '<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">' +
                          '<input type="checkbox" class="custom-control-input" name="check-user[]" value="'+result.users.id[i]+'" id="item-'+result.users.id[i]+'">' +
                          '<label class="custom-control-label" for="item-'+result.users.id[i]+'"></label>' +
						  '</div>' +
                          '</td>' +
                          '<td class="text-nowrap align-middle">'+result.users.name[i]+'</td>' +
                          '<td class="text-nowrap align-middle"><span>'+result.users.role[i]+'</span></td>' +
						  '<td class="text-center align-middle">' + status +
						  '</td>' +
                          '<td class="text-center align-middle">' +
                          '<div class="btn-group align-top">' +
						  '<button class="btn btn-sm btn-outline-secondary badge btn_edit" type="button" data-toggle="modal"  data-target="#user-form-modal-'+result.users.id[i]+'" id="btn_edit" data-id="'+result.users.id[i]+'">Edit</button>' +
                          '<button class="btn btn-sm btn-outline-secondary badge"   type="button" data-toggle="modal"  data-target="#delete-form-modal-'+result.users.id[i]+'" data-id="'+result.users.id[i]+'" ><i class="fa fa-trash"></i></button>' +
				          '</div>' +
						  '<div class="modal" tabindex="-1" role="dialog" id="delete-form-modal-'+result.users.id[i]+'">' +
						  '<div class="modal-dialog" role="document">' +
						  '<div class="modal-content">' +
						  '<div class="modal-header">' +
						  '<h5 class="modal-title">Delete user</h5>' +
						  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
						  '<span aria-hidden="true">&times;</span>' +
						  '</button>' +
						  '</div>' +
						  '<div class="modal-body">' +
						  '<p>Are you sure want  delete user?</p>' +
						  '</div>' +
						  '<div class="modal-footer">' +
						  '<input type="hidden" id="custId" name="userinfo" value="'+result.users.id[i]+'">'	+					  
						  '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>' +
						  '<button type="submit" class="btn btn-primary userinfo" data-id="'+result.users.id[i]+'" >Delete</button>' +
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
			$('.modal-backdrop').hide();
		}
		
		
});


return false;

});


});




// вибір ролі юзера

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





//$(document).on("change", "input[type=checkbox]", function() { 
  		$('body').on("click","#checkbox-submit", function() {
  			var $this 		    = $(this); //submit button selector using ID
	        var $caption        = $this.html();// We store the html content of the submit button
	        var form 			= "#form-checked"; //defined the #form ID
	        var formData        = $(form).serializeArray(); //serialize the form into array
	        //var route 			= $(form).attr('action'); //get the route using attribute action		
	        
	    	$.ajax({
		        method: 'post', 
		        url: 'check_edit.php', 
		        data: formData,
				dataType: 'json',		                
		        success: function(result){
					$('.table-bordered tr').remove();
					if (result.users.error[0] != ''){
						' <div class="alert alert-danger" role="alert">'+alert(result.users.error[0])+'</div>'
						}
										
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
                          '<input type="checkbox" class="custom-control-input" name="check-user[]" value="'+result.users.id[i]+'"  id="item-'+result.users.id[i]+'">' +
                          '<label class="custom-control-label" for="item-'+result.users.id[i]+'"></label>' +
						  '</div>' +
                          '</td>' +
                          '<td class="text-nowrap align-middle">'+result.users.name[i]+'</td>' +
                          '<td class="text-nowrap align-middle"><span>'+result.users.role[i]+'</span></td>' +
						  '<td class="text-center align-middle">' + status +
						  '</td>' +
                          '<td class="text-center align-middle">' +
                          '<div class="btn-group align-top">' +
						  '<button class="btn btn-sm btn-outline-secondary badge btn_edit" type="button" data-toggle="modal"  data-target="#user-form-modal" id="btn_edit" data-id="'+result.users.id[i]+'">Edit</button>' +
                          '<button class="btn btn-sm btn-outline-secondary badge"   type="button" data-toggle="modal"  data-target="#delete-form-modal-'+result.users.id[i]+'" data-id="'+result.users.id[i]+'"><i class="fa fa-trash"></i></button>' +
				          '</div>' +
						  '<div class="modal" tabindex="-1" role="dialog" id="delete-form-modal-'+result.users.id[i]+'">' +
						  '<div class="modal-dialog" role="document">' +
						  '<div class="modal-content">' +
						  '<div class="modal-header">' +
						  '<h5 class="modal-title">Delete user</h5>' +
						  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
						  '<span aria-hidden="true">&times;</span>' +
						  '</button>' +
						  '</div>' +
						  '<div class="modal-body">' +
						  '<p>Are you sure want  delete user?</p>' +
						  '</div>' +
						  '<div class="modal-footer">' +						  					  
						  '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>' +
						  '<button type="button" class="btn btn-primary userinfo" data-id="'+result.users.id[i]+'" >Delete</button>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
                          '</td>'  +					 
                          '</tr>';						
				
				} 				
				return res;								
			});
				$("#form-checked")[0].reset();			
					
		        }
		        
		    
		    });
			
			
			return false;
  		});
  		
//});


// checkbox all

$(document).on("change", "input[type=checkbox]", function() { // when change checkbox
    if ($(this).attr('class')) {
        var CBgroupID = $(this).attr('class');
    }
    if (($(this).attr('id')) && ($('input[type="checkbox"].' + $(this).attr('id')).length)) { 
        var CBgroupID = $(this).attr('id');
        if (this.checked) {
            $('input[type="checkbox"].' + CBgroupID).attr('checked', 'checked');
            $('input[type="button"][class*="' + CBgroupID + '"]').removeAttr('disabled');
        } else {
            $('input[type="checkbox"].' + CBgroupID).removeAttr('checked');
            $('input[type="button"][class*="' + CBgroupID+'"]').attr('disabled', 'disabled');
        }
    }
    if (!CBgroupID) {
        return;
    }
    if ($('input[type="checkbox"].' + CBgroupID + ':not(:checked)').length) {
        $('input[type="checkbox"]#' + CBgroupID).removeAttr('checked');
    } else {
        $('input[type="checkbox"]#' + CBgroupID).attr('checked', 'checked');
    }
    if ($('input[type="checkbox"].' + CBgroupID+':checked').length) {
        $('input[type="button"][class*="' + CBgroupID + '"]').removeAttr('disabled');
    } else {
        $('input[type="button"][class*="' + CBgroupID + '"]').attr('disabled', 'disabled');
    }
    if ($('input[type="checkbox"].' + CBgroupID + ':checked').length === 1) {
        $('.jToEdit').removeAttr('disabled');
    } else {
        $('.jToEdit').attr('disabled', 'disabled');
    }
    delete CBgroupID;
});



// кнопка edit
$(document).ready(function(){
  $("body").on('click','.btn_edit' , function() {
  //$('#edtform').remove();			
	var userid = $(this).attr('data-id');	
$("#userid").attr('value', userid);

	$.ajax({
		url: 'edit_user.php',
		method: 'post',
		data:  {userid: userid},		
		dataType: 'json',				
		success: function(result){
				
				var admin_role = '';
				var user_role = '';
				if (result.users.status[0] == '1') { var status = "checked"; }
				else if  (result.users.status[0] == '0') { var status = ""; }
					if (result.users.role[0] == 'Admin') { admin_role = "selected"; }
					if  (result.users.role[0] == 'User') { user_role = "selected"; }
				$('#form').remove();
				
				
				
				$('.modal-content').append(function(){
				 
				var res = '<form action="update_user.php" method="POST" id="edtform">'+
				'<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel">Edit user</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
      '</div>' +
 '<div class="modal-body">' +
        
         ' <div class="form-group">' +
          '  <label for="recipient-name" class="col-form-label">First Name</label>' +
          '  <input type="text" class="form-control"  name="name"  value="'+result.users.name[0]+'">' +
          '</div>' +
         ' <div class="form-group">' +
           ' <label for="message-text" class="col-form-label">Last name</label>' +
			'<input type="text" class="form-control"  name="username"  value="'+result.users.surname[0]+'">'  +
         ' </div>' +
		'	<div class="form-group">' +
            ' <div class="custom-control custom-switch">' +
  '  <input type="checkbox" class="custom-control-input" id="switch1" name="status" '+status+'>' +
 
  '  <label class="custom-control-label" for="switch1">Checked if user Active</label>' +
 ' </div>' +
      '    </div>' +
'<div class="form-group">' +
           ' <select class="form-select" id="selectrole" aria-label="Default select example" name="role" required>' +
								'  <option value=""  > Please Select</option>' +
								 ' <option  value="Admin" '+admin_role+' >Admin</option>' +
								 ' <option  value="User" '+user_role+'>User</option>		'			 +			  
								'</select>' +
       '   </div>' +


    '  </div>' +
   '   <div class="modal-footer">' +
'<input type="hidden" id="custId" name="userinfo" value="'+result.users.id[0]+'">'	+		
      '  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
      '  <button class="btn btn-primary" type="submit">Edit </button>' +
		'</div>' +
      '  </form>' ;
		
		return res;	

				});
				
								
			}
		

	});
	
	});
});



// кнопка edit
$(document).ready(function(){
  $("body").on('click','.btn_edit2' , function() {
  //$('#edtform').remove();			
	var userid = $(this).attr('data-id');	
$("#userid").attr('value', userid);

	$.ajax({
		url: 'edit_user.php',
		method: 'post',
		data:  {userid: userid},		
		dataType: 'json',				
		success: function(result){
				
				var admin_role = '';
				var user_role = '';
				if (result.users.status[0] == '1') { var status = "checked"; }
				else if  (result.users.status[0] == '0') { var status = ""; }
					if (result.users.role[0] == 'Admin') { admin_role = "selected"; }
					if  (result.users.role[0] == 'User') { user_role = "selected"; }
				//'#form').remove();
				
				
				
				$('.body').append(function(){
				 
				var res = 
				
				
				
				
				
				'<form action="update_user.php" method="POST" id="edtform">'+
				'<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel">Edit user</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
      '</div>' +
 '<div class="modal-body">' +
        
         ' <div class="form-group">' +
          '  <label for="recipient-name" class="col-form-label">First Name</label>' +
          '  <input type="text" class="form-control"  name="name"  value="'+result.users.name[0]+'">' +
          '</div>' +
         ' <div class="form-group">' +
           ' <label for="message-text" class="col-form-label">Last name</label>' +
			'<input type="text" class="form-control"  name="username"  value="'+result.users.surname[0]+'">'  +
         ' </div>' +
		'	<div class="form-group">' +
            ' <div class="custom-control custom-switch">' +
  '  <input type="checkbox" class="custom-control-input" id="switch1" name="status" '+status+'>' +
 
  '  <label class="custom-control-label" for="switch1">Checked if user Active</label>' +
 ' </div>' +
      '    </div>' +
'<div class="form-group">' +
           ' <select class="form-select" id="selectrole" aria-label="Default select example" name="role" required>' +
								'  <option value=""  > Please Select</option>' +
								 ' <option  value="Admin" '+admin_role+' >Admin</option>' +
								 ' <option  value="User" '+user_role+'>User</option>		'			 +			  
								'</select>' +
       '   </div>' +


    '  </div>' +
   '   <div class="modal-footer">' +
'<input type="hidden" id="custId" name="userinfo" value="'+result.users.id[0]+'">'	+		
      '  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
      '  <button class="btn btn-primary" type="submit">Edit </button>' +
		'</div>' +
      '  </form>' ;
		
		return res;	

				});
				
								
			}
		

	});
	
	});
});

	