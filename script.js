

// add form
$("body").on("submit","#form", function(){
	
	var res='';
	$.ajax({
		url: 'add_user.php',
		method: 'post',
		dataType: 'json',
		data: $(this).serialize(),
		success: function(result){			
			
			if ((result.error == null)){	
			
			$('.table-bordered').append(function(){
				var res='';
				if (result.users.role == 1) { var role = "Admin"; }
					else if  (result.users.role == 0) { var role = "User"; }
					if (result.users.status == '1') { var status = "<i class=\"fa fa-circle active-circle\"></i>"; }
					else if  (result.users.status == '0') { var status = "<i class=\"fa fa-circle not-active-circle\"></i>"; }
				 res+=  '<tr class="trr-'+result.users.id+'">' +
                          '<td class="align-middle">' +
                          '<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">' +
                          '<input type="checkbox" class="custom-control-input" name="check-user[]" value="'+result.users.id+'" id="item-'+result.users.id+'">' +
                          '<label class="custom-control-label" for="item-'+result.users.id+'"></label>' +
						  '</div>' +
                          '</td>' +
                          '<td class="text-nowrap align-middle">'+result.users.name+'</td>' +
                          '<td class="text-nowrap align-middle"><span>'+role+'</span></td>' +
						  '<td class="text-center align-middle">' + status +
						  '</td>' +
                          '<td class="text-center align-middle">' +
                          '<div class="btn-group align-top">' +
						  '<button class="btn btn-sm btn-outline-secondary badge btn_edit" type="button" data-toggle="modal"  id="btn_edit" data-id="'+result.users.id+'" data-target="#user-form-modal">Edit</button>' +
                          '<button class="btn btn-sm btn-outline-secondary badge"   type="button" data-toggle="modal"  data-target="#delete-form-modal-'+result.users.id+'" data-id="'+result.users.id+'" ><i class="fa fa-trash"></i></button>' +
				          '</div>' +
						  '<div class="modal" tabindex="-1" role="dialog" id="delete-form-modal-'+result.users.id+'">' +
						  '<div class="modal-dialog" role="document">' +
						  '<div class="modal-content">' +
						  '<div class="modal-header">' +
						  '<h5 class="modal-title">Delete user</h5>' +
						  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
						  '<span aria-hidden="true">&times;</span>' +
						  '</button>' +
						  '</div>' +
						  '<div class="modal-body">' +
						  '<p>Are you sure want delete user <b>'+result.users.name+'</b>?</p>' +
						  '</div>' +
						  '<div class="modal-footer">' 	+				  
						  '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>' +
						  '<button type="button" class="btn btn-primary userinfo" data-id="'+result.users.id+'">Delete</button>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
                          '</td>'  +					 
                          '</tr>'; 
					
				//} 
				
				return res;
				
				
			});
			//console.log(result);
			//$('.fade').hide();
			$('.modal-backdrop').hide();
			//$('.modal-backdrop').remove();
			$('#user-form-modal').hide().removeClass("show").removeAttr('aria-modal').removeAttr('role').attr('aria-hidden', 'true').removeAttr('style');//;
			$("#form")[0].reset();
			//$('body').removeClass("modal-open");
			
			
		}
		else if (result.error.message == 'name') {
			$("#form")[0].reset();
			$('input#usr_name').attr("placeholder", "Please, enter First Name!");
			
			
		}
		else if (result.error.message == 'username') {
			$("#form")[0].reset();
			$('input#usr_username').attr("placeholder", "Please, enter Last Name!");
			
			
		}
		else if (result.error.message == 'name_and_username') {
			$("#form")[0].reset();
			$('input#usr_name').attr("placeholder", "Please, enter First Name!");
			$('input#usr_username').attr("placeholder", "Please, enter Last Name!");
			
		}
		
		}
});

return false;


});

// delete button
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
			if (result.error == null){
			
			$('.trr-'+result.id+'').remove();
			
			
			$('.modal-backdrop').hide();
		}
		else {
			
			$('.modal-backdrop').hide();
			
		}
		}
		
		
		
});


return false;

});


});




// delete button checker
$(document).ready(function(){

 $('body').on("click",'.userinfo_check',function(){
	 
	//var res='';
	var form = "#form-checked-del";
//$("#userid").attr('value', userid);
	$.ajax({
		url: 'delete_user_check.php',
		method: 'post',
		data: $(form).serializeArray(),
		dataType: 'json',
		success: function(result){
			
						
			if (result.error == null)
			{
				for(var i=0;i< result.count; i++){
					$('.trr-'+result.users[i].id+'').remove();					
						}
			$('#delete-form-modal').hide();
			$('.modal-backdrop').hide();						
			$('#form-checked-del').remove();		
			
			
			}
		else {
		
		    
			
			$('.modal-backdrop').hide();
			
		}
		
		
		} 	
		
		
});


return false;

});


});





// user role

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





//check-edit
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
					//$('.table-bordered tr').remove();
					if (result.error != null){
						//' <div class="alert alert-danger" role="alert">'+alert(result.error.message)+'</div>'
						$('.modal-backdrop').show();
						$('#chek_edit_conf').show();
						
						$('.info_conf').remove();
						$('.modal-footer-conf').remove();
						$('.modal-content-conf').append(function(){
							var res = '';
							res+= '<div class="modal-body info_conf">' + result.error.message  + '<br/></div><div class="modal-footer modal-footer-conf"><button type="button" id="modalClose2" class="btn btn-secondary" data-dismiss="modal">Ok</button></div></div>';
							return res;
					});
							
					}
				if (result.event == 'upd') {
				for(var i=0;i< result.count; i++){
					var res=  '';
		$('.trr-'+result.users[i].id+'').replaceWith(function(){					
					if (result.users[i].status == '1') { var status = "<i class=\"fa fa-circle active-circle\"></i>"; }
					else if  (result.users[i].status == '0') { var status = "<i class=\"fa fa-circle not-active-circle\"></i>"; }
					if (result.users[i].role == 1) { var role = "Admin"; }
					else if  (result.users[i].role == 0) { var role = "User"; }
				res+= 	  '<tr class="trr-'+result.users[i].id+'">' +
                          '<td class="align-middle">' +
                          '<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">' +
                          '<input type="checkbox" class="custom-control-input all-items" name="check-user[]" value="'+result.users[i].id+'"  id="item-'+result.users[i].id+'">' +
                          '<label class="custom-control-label" for="item-'+result.users[i].id+'"></label>' +
						  '</div>' +
                          '</td>' +
                          '<td class="text-nowrap align-middle">'+result.users[i].name+'</td>' +
                          '<td class="text-nowrap align-middle"><span>'+role+'</span></td>' +
						  '<td class="text-center align-middle">' + status +
						  '</td>' +
                          '<td class="text-center align-middle">' +
                          '<div class="btn-group align-top">' +
						  '<button class="btn btn-sm btn-outline-secondary badge btn_edit" type="button" data-toggle="modal"  data-target="#user-form-modal" id="btn_edit" data-id="'+result.users[i].id+'">Edit</button>' +
                          '<button class="btn btn-sm btn-outline-secondary badge"   type="button" data-toggle="modal"  data-target="#delete-form-modal-'+result.users[i].id+'" data-id="'+result.users[i].id+'"><i class="fa fa-trash"></i></button>' +
				          '</div>' +
						  '<div class="modal" tabindex="-1" role="dialog" id="delete-form-modal-'+result.users[i].id+'">' +
						  '<div class="modal-dialog" role="document">' +
						  '<div class="modal-content">' +
						  '<div class="modal-header">' +
						  '<h5 class="modal-title">Delete user</h5>' +
						  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
						  '<span aria-hidden="true">&times;</span>' +
						  '</button>' +
						  '</div>' +
						  '<div class="modal-body">' +
						  '<p>Are you sure want  delete user <b>'+result.users[i].name+'</b>?</p>' +
						  '</div>' +
						  '<div class="modal-footer">' +						  					  
						  '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>' +
						  '<button type="button" class="btn btn-primary userinfo" data-id="'+result.users[i].id+'" >Delete</button>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
                          '</td>'  +					 
                          '</tr>';						
				
				 				
						return res;								
							});
								}
				
				}
				else if (result.event == 'del'){
					//for(var i=0;i< result.count; i++){
					//$('.trr-'+result.users[i].id+'').remove();
					//	}
					
					$('#delete-form-modal').show();
					$('.modal-backdrop').show();
					
					var usersDel = '';
					var inpHidd = '';
					for(var i=0;i< result.count; i++){
						
						 usersDel += result.users[i].name+ '; ';
						 inpHidd +=  '<input type="hidden" id="postId" name="userId[]" value="'+result.users[i].id+'">'
						
					}
					//$('.info_conf').remove();
						$('.del-modal-content').remove();
						$('.modal-dialog-del').append(function(){
							
							var res =  '<form id="form-checked-del"><div class="modal-content del-modal-content">' +
						  '<div class="modal-header">' +
						  '<h5 class="modal-title">Delete user</h5>' +
						  '<button type="button" class="close" data-dismiss="modal"  id="modalClose3" aria-label="Close">' +
						  '<span aria-hidden="true">&times;</span>' +
						  '</button>' +
						  '</div>' +
						  '<div class="modal-body">' +
						  '<p>Are you sure want  delete user <b>'+usersDel+'</b>?</p>' +
						  '</div>' +
						  '<div class="modal-footer">' +	inpHidd +
						  
						  '<button type="button" class="btn btn-secondary" data-dismiss="modal" id="modalClose3">Cancel</button>' +
						  '<button type="button" class="btn btn-primary userinfo_check" >Delete</button>' +
						  '</div>' +
						  '</div></form>' ;
							return res;
					});
					
				}
				
				$("#form-checked")[0].reset();	
							
					
		        }
		        
		    
		    });
			
			
			return false;
  		});


//






// checkbox all

$('body').on('click', 'table tr',  function() {
  var $selectAll = $('#all-items'); // main checkbox inside table thead
  var $table = $('.table'); // table selector 
  var $tdCheckbox = $table.find('tbody input:checkbox'); // checboxes inside table body
  var tdCheckboxChecked = 0; // checked checboxes

  // select all
  $($table).on('click','#all-items', function () {
    $tdCheckbox.prop('checked', this.checked);
  });

  // Toggle main checkbox state to checked when all checkboxes inside tbody tag is checked
  $tdCheckbox.on('change', function(e){
    tdCheckboxChecked = $table.find('tbody input:checkbox:checked').length; // Get count of checkboxes that is checked
    // if all checkboxes are checked, then set property of main checkbox to "true", else set to "false"
    $selectAll.prop('checked', (tdCheckboxChecked === $tdCheckbox.length));
  })
});





//close modal
 $(function () {
        $('body').on('click','#modalClose', function () {
            $('#user-form-modal').hide();
			$('.modal-backdrop').hide();
        })
    })



 $(function () {
        $('body').on('click','#modalClose2', function () {
            $('#chek_edit_conf').hide();
			$('.modal-backdrop').hide();
        })
    })


 $(function () {
        $('body').on('click','#modalClose3', function () {
            $('#delete-form-modal').hide();
			$('.modal-backdrop').hide();
        })
    })




//  add button
$(document).ready(function(){
  $("body").on('click','.btn_add' , function() {
	  	$('#user-form-modal').show();
		$('.modal-backdrop').show();
				$('.edit-add-form').remove();	
				
				
				$('.edit-add-form-dialog').append(function(){
				 
				var res = '<div class="modal-content edit-add-form">'+
				'<form id= "form">'+
				'<div class="modal-header"> <h5 class="modal-title" id="exampleModalLabel">Add user</h5>' +
        '<button type="button"  id="modalClose" class="close" data-dismiss="modal" aria-label="Close">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
      '</div>' +
 '<div class="modal-body">' +
        
         ' <div class="form-group">' +
          '  <label for="recipient-name" class="col-form-label">First Name</label>' +
          '  <input type="text" class="form-control" id="usr_name"  name="name"  value="" required>' +
          '</div>' +
         ' <div class="form-group">' +
           ' <label for="message-text" class="col-form-label">Last name</label>' +
			'<input type="text" class="form-control"  id="usr_username" name="username"  value="" required>'  +
         ' </div>' +
		'	<div class="form-group">' +
            ' <div class="custom-control custom-switch">' +
  '  <input type="checkbox" class="custom-control-input" id="switch1" name="status">' +
 
  '  <label class="custom-control-label" for="switch1">Checked if user Active</label>' +
 ' </div>' +
      '    </div>' +
'<div class="form-group">' +
           ' <select class="form-select" id="selectrole" aria-label="Default select example" name="role" required>' +
								'  <option value > Please Select</option>' +
								 ' <option  value="1"  >Admin</option>' +
								 ' <option  value="0" >User</option>		'			 +			  
								'</select>' +
       '   </div>' +


    '  </div>' +
   '   <div class="modal-footer">' +
'<input type="hidden" id="custId" name="userinfo" value="">'	+		
      '  <button type="button" id="modalClose" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
      '  <button class="btn btn-primary" type="submit" >Add</button>' +
		'</div>' +
      '  </form></div>' ;
		
		return res;	

				});

	
	
	
	});
});




//  edit button
$(document).ready(function(){
  $("body").on('click','.btn_edit' , function() {
		
		
	var userid = $(this).attr('data-id');	
	$("#userid").attr('value', userid);

	$.ajax({
		url: 'edit_user.php',
		method: 'post',
		data:  {userid: userid},		
		dataType: 'json',				
		success: function(result){
			
				if (result.users != null ){
				$('#user-form-modal').show();
				$('.modal-backdrop').show();
				var admin_role = '';
				var user_role = '';
				var uns_role = '';
				var Uname = result.users.name;
				var Sname =  result.users.surname;
				
				if (result.text == 'Add'){
					result.users.name = null;
					result.users.surname = null;
					result.users.status = 0;
					result.users.role == '';
				}
				if (result.users.status == '1') { var status = "checked"; }
				else if  (result.users.status == '0') { var status = ""; }
				if (result.users.role == 1) { admin_role = "selected"; }
				if  (result.users.role== 0) { user_role = "selected"; }
				if  (result.users.role == null) { uns_role = "selected"; }							
				
				function Res(){				 
				var res = '<div class="modal-content edit-add-form">'+
				'<form id="edtform">'+
				'<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel">Edit user</h5>' +
        '<button type="button" id="modalClose" class="close" data-dismiss="modal" aria-label="Close">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
      '</div>' +
 '<div class="modal-body">' +
        
         ' <div class="form-group">' +
          '  <label for="recipient-name" class="col-form-label">First Name</label>' +
          '  <input type="text" class="form-control" id="usr_name"  name="name"  value="'+Uname+'" required>' +
          '</div>' +
         ' <div class="form-group">' +
           ' <label for="message-text" class="col-form-label">Last name</label>' +
			'<input type="text" class="form-control"  id="usr_username" name="username"  value="'+Sname+'" required>'  +
         ' </div>' +
		'	<div class="form-group">' +
            ' <div class="custom-control custom-switch">' +
  '  <input type="checkbox" class="custom-control-input" id="switch1" name="status" '+status+'>' +
 
  '  <label class="custom-control-label" for="switch1">Checked if user Active</label>' +
 ' </div>' +
      '    </div>' +
'<div class="form-group">' +
           ' <select class="form-select" id="selectrole" aria-label="Default select example" name="role" required>' +
								'  <option value '+uns_role+' > Please Select</option>' +
								 ' <option  value="1" '+admin_role+' >Admin</option>' +
								 ' <option  value="0" '+user_role+'>User</option>		'			 +			  
								'</select>' +
       '   </div>' +
    '  </div>' +
   '   <div class="modal-footer">' +
'<input type="hidden" id="custId" name="userinfo" value="'+result.users.id+'">'	+		
      '  <button type="button" id="modalClose" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
      '  <button class="btn btn-primary" type="submit">Edit</button>' +
		'</div>' +
      '  </form></div>' ;		
		return res;	
				};
		$('.edit-add-form-dialog').append(Res); 	
			
			}
			else {
				
				alert(result.error);
				$('.modal-backdrop').hide();
			}
		}
		
		
	});
	
	$('.edit-add-form').remove();
	});
});




// edit form
$("body").on("submit","#edtform", function(){

			//$('.modal-backdrop').show();
	var res='';
	$.ajax({
		url: 'update_user.php',
		method: 'post',
		ddataType: 'html',
		data: $(this).serialize(),
		success: function(result){
			//$('.trr-'+result.id+'').remove();
			
			$('.trr-'+result.users.id+'').replaceWith(function(){
				res+=  '';
					if (result.users.status == '1') { var status = "<i class=\"fa fa-circle active-circle\"></i>"; }
					else if  (result.users.status == '0') { var status = "<i class=\"fa fa-circle not-active-circle\"></i>"; }
					if (result.users.role == 1) { var role = "Admin"; }
					else if  (result.users.role == 0) { var role = "User"; }
					
				res+= 	  '<tr class="trr-'+result.users.id+'">' +
                          '<td class="align-middle">' +
                          '<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">' +
                          '<input type="checkbox" class="custom-control-input all-items" name="check-user[]" value="'+result.users.id+'" id="item-'+result.users.id+'">' +
                          '<label class="custom-control-label" for="item-'+result.users.id+'"></label>' +
						  '</div>' +
                          '</td>' +
                          '<td class="text-nowrap align-middle">'+result.users.name+'</td>' +
                          '<td class="text-nowrap align-middle"><span>'+role+'</span></td>' +
						  '<td class="text-center align-middle">' + status +
						  '</td>' +
                          '<td class="text-center align-middle">' +
                          '<div class="btn-group align-top">' +
						  '<button class="btn btn-sm btn-outline-secondary badge btn_edit" type="button"   id="btn_edit" data-id="'+result.users.id+'" data-target="#user-form-modal">Edit</button>' +
                          '<button class="btn btn-sm btn-outline-secondary badge"   type="button" data-toggle="modal"  data-target="#delete-form-modal-'+result.users.id+'" data-id="'+result.users.id+'" ><i class="fa fa-trash"></i></button>' +
				          '</div>' +
						  '<div class="modal" tabindex="-1" role="dialog" id="delete-form-modal-'+result.users.id+'">' +
						  '<div class="modal-dialog" role="document">' +
						  '<div class="modal-content">' +
						  '<div class="modal-header">' +
						  '<h5 class="modal-title">Delete user</h5>' +
						  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
						  '<span aria-hidden="true">&times;</span>' +
						  '</button>' +
						  '</div>' +
						  '<div class="modal-body">' +
						  '<p>Are you sure want delete user <b>'+result.users.name+'</b>?</p>' +
						  '</div>' +
						  '<div class="modal-footer">' 	+				  
						  '<button type="button" id="modalClose" class="btn btn-secondary" data-dismiss="modal">Cancel</button>' +
						  '<button type="button" class="btn btn-primary userinfo" data-id="'+result.users.id+'">Delete</button>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
						  '</div>' +
                          '</td>'  +					 
                          '</tr>'; 
					
				
				
				return res;
				
				
			});
			console.log(result);
			$('#user-form-modal').hide();
			$('.modal-backdrop').hide();
			//$("#edtform")[0].reset();
			
			
		}
		
		
});

return false;


});

