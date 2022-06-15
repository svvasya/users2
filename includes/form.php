<body>
   <div class="container">
    <div class="row flex-lg-nowrap">
      <div class="col">
	    <form id="form-checked">
        <div class="row flex-lg-nowrap">
          <div class="col mb-3">
            <div class="e-panel card">
              <div class="card-body">
                <div class="card-title">
                  <h6 class="mr-2"><span>Users</span></h6>
				
				   <div class="container">
				   
				   
				   
				    <div class="row">
					
				<div class="col"><button class="btn btn-sm btn-outline-secondary badge btn_add" type="button" 
                                data-target="#user-form-modal" >Add</button></div>
								
				<div class="col select-block"><select class="btn-sm btn-outline-secondary badge"  aria-label="Default select example" id="selectevent" name="event" required>
				
								  <option value="0" selected >Please Select</option>
								  <option value="1">Set active</option>
								  <option value="2">Set no active</option>
								  <option value="3">Delete</option>
								</select></div>
								
								<input type="checkbox" class="custom-control-input" id="item-612">
				<div class="col"><button class="btn btn-sm btn-outline-secondary badge" id="checkbox-submit" type="submit">Ok</button> </div>
				
				<div class="col-8"></div>
				
					</div>
					</div>
					</div>
					
					
                <div class="e-table">
                  <div class="table-responsive table-lg mt-3">
                    <table class="table table-bordered">
					<thead>
                        <tr>
                          <th class="align-top">
                            <div
                              class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                              <input type="checkbox" class="custom-control-input" id="all-items">
                              <label class="custom-control-label" for="all-items"></label>
                            </div>
                          </th>
                          <th class="max-width">Name</th>
                          <th class="sortable">Role</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>

					  <? 
					   
						$i = 0;
					  foreach ($result as $items){
						  $i++;
						 
						  echo " <tr class=\"trr-".$items[id]."\">
						  
                          <td class=\"align-middle\">
                          <div
                          class=\"custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top\">
                          <input type=\"checkbox\" class=\"custom-control-input all-items\" name=\"check-user[]\" value=\"".$items[id]."\" id=\"item-".$items[id]."\">
                          <label class=\"custom-control-label\" for=\"item-".$items[id]."\"></label>
						  </div>
                          </td>
                          <td class=\"text-nowrap align-middle\">"  .$items[name]. "</td>
                          <td class=\"text-nowrap align-middle\"><span>";
						  if ($items[role] == 1) { echo "Admin"; }
						  elseif  ($items[role] == 0) { echo 	"User"; }
						 echo "</span></td>  <td class=\"text-center align-middle\">";
						  if ($items[status] == 1) { echo "<i class=\"fa fa-circle active-circle\"></i> "; }
						  elseif  ($items[status] == 0) { echo 	"<i class=\"fa fa-circle not-active-circle\"></i>"; }
						  echo  "</td>
                          <td class=\"text-center align-middle\">
                          <div class=\"btn-group align-top\">
						  <button class=\"btn btn-sm btn-outline-secondary badge btn_edit\" type=\"button\"   data-id=".$items[id]."  id=\"btn_edit\" data-target=\"#user-form-modal\">Edit</button>
                          <button class=\"btn btn-sm btn-outline-secondary badge\"   type=\"button\" data-toggle=\"modal\" data-target=\"#delete-form-modal-".$items[id]."\" data-id=".$items[id]."><i class=\"fa fa-trash\"></i></button>
				          </div>
						  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"delete-form-modal-".$items[id]."\">
						  <div class=\"modal-dialog\" role=\"document\">
						  <div class=\"modal-content\">
						  <div class=\"modal-header\">
						  <h5 class=\"modal-title\">Delete user</h5>
						  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
						  <span aria-hidden=\"true\">&times;</span>
						  </button>
						  </div>
						  <div class=\"modal-body\">
						  <p>Are you sure delete user <b>" .$items[name]. "</b>?</p>
						  </div>
						  <div class=\"modal-footer\">
						  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>
						  <button type=\"button\" class=\"btn btn-primary userinfo\" data-id=".$items[id]." >Delete</button>
						  </div>
						  </div>
						  </div>
						  </div>  
                          </td>						 
                          </tr>	 ";
						  
						  
					  }
                       
					  ?>		

			
					  </tbody>
                    </table>
                  </div>
                </div>
				
							
								   <div class="container">
				   
				   
				   
				    <div class="row">
					
				<div class="col"><button class="btn btn-sm btn-outline-secondary badge btn_add" type="button" 
                                data-target="#user-form-modal" >Add</button></div>
				<div class="col select-block"><select class="btn-sm btn-outline-secondary badge" aria-label="Default select example" id="selectevent" name="event2">
								  <option   value="0" selected>Please Select</option>
								  <option value="1">Set active</option>
								  <option value="2">Set no active</option>
								  <option value="3">Delete</option>
								</select></div>
				<div class="col"><button class="btn btn-sm btn-outline-secondary badge" id="checkbox-submit" type="submit">Ok</button></div>
				<div class="col-8"></div>
				
					</div>
					</div>
					 
              </div>
            </div>
          </div>
        </div>
		
		
		</form>
		 </div>
          </div>
        </div>
		
		
		
		
		
		
        <!-- Add User Form Modal -->

<div class="modal" id="user-form-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog edit-add-form-dialog" role="document">
    <div class="modal-content edit-add-form">
	<form id="form">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add user</h5>
        <button type="button" id="modalClose" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">First Name</label>
            <input type="text" class="form-control" id="usr_name" required type="text" name="name" placeholder="" value="" required>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Last name</label>
            <input type="text"  class="form-control" id="usr_username"  required type="text" name="username" placeholder="" value="" required>
          </div>
			<div class="form-group">
             <div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="switch1" name="status" checked>
    <label class="custom-control-label" for="switch1">Checked if user Active</label>
  </div>
          </div>
<div class="form-group">
            <select class="form-select" id="selectrole" aria-label="Default select example" name="role" required>
								  <option value selected > Please Select</option>
								  <option  value="1" >Admin</option>
								  <option  value="0">User</option>								  
								</select>
          </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="modalClose" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary" type="submit" data-dismiss="modal">Add</button>
        
      </div>
</form>
  
 </div>

 </div>
 </div>



<div class="modal" tabindex="-1" role="dialog" id="chek_edit_conf">
						  <div class="modal-dialog" role="document">
						  <div class="modal-content modal-content-conf">
						  <div class="modal-header">
						  <h5 class="modal-title">Attention!</h5>
						  <button type="button" id="modalClose2" class="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						  </button>
						  </div>
						  <div class="modal-body info_conf">
						  
						  <div class="modal-footer modal-footer-conf">
						  <button type="button" id="modalClose2" class="btn btn-secondary" data-dismiss="modal">Ok</button>
						   </div>
						  </div>
						  </div>
						  </div>  

</div>



<div class="modal" tabindex="-1" role="dialog" id="delete-form-modal">
						  <div class="modal-dialog" role="document">
						  <div class="modal-content del-modal-content">
						  <div class="modal-header">
						  <h5 class="modal-title">Delete user</h5>
						  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						  </button>
						  </div>
						  <div class="modal-body">
						  <p>Are you sure want  delete user?</p>
						  </div>
						  <div class="modal-footer">					  					  
						  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
						  <button type="button" class="btn btn-primary userinfo" id="userinfo_check">Delete</button>
						  </div>
						  </div>
						  </div>
						  </div>








<div class="modal-backdrop show" style="display:none"></div>

  </body>
  
 



