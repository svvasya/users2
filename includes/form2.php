 <div class="container">
    <div class="row flex-lg-nowrap">
      <div class="col">
        <div class="row flex-lg-nowrap">
          <div class="col mb-3">
            <div class="e-panel card">
              <div class="card-body">
                <div class="card-title">
                  <h6 class="mr-2"><span>Users</span></h6>
				  <form id="form-checked">
				   <div class="container">
				   
				   
				   
				    <div class="row">
					
				<div class="col"><button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"
                                data-target="#user-form-modal" >Add</button></div>
								
				<div class="col select-block"><select class="btn-sm btn-outline-secondary badge"  aria-label="Default select example" id="selectevent" name="event">
				
								  <option selected>Please Select</option>
								  <option value="1">Set active</option>
								  <option value="2">Set no active</option>
								  <option value="3">Delete</option>
								</select></div>
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
						  echo " <tr>
						  
                          <td class=\"align-middle\">
                          <div
                          class=\"custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top\">
                          <input type=\"checkbox\" class=\"custom-control-input all-items\" name=\"check-user[]\" value=\"".$items[id]."\" id=\"item-".$items[id]."\">
                          <label class=\"custom-control-label\" for=\"item-".$items[id]."\"></label>
						  </div>
                          </td>
                          <td class=\"text-nowrap align-middle\">"  .$items[name]. "</td>
                          <td class=\"text-nowrap align-middle\"><span>" .$items[role].  "</span></td>
						  <td class=\"text-center align-middle\">";
						  if ($items[status] == 1) { echo "<i class=\"fa fa-circle active-circle\"></i> "; }
						  elseif  ($items[role] == 0) { echo 	"<i class=\"fa fa-circle not-active-circle\"></i>"; }
						  echo  "</td>
                          <td class=\"text-center align-middle\">
                          <div class=\"btn-group align-top\">
						  <button class=\"btn btn-sm btn-outline-secondary badge\" type=\"button\" data-toggle=\"modal\"  data-target=\"#user-form-modal\">Edit</button>
                          <button class=\"btn btn-sm btn-outline-secondary badge\"   type=\"button\" data-toggle=\"modal\"  data-target=\"#delete-form-modal\" ><i class=\"fa fa-trash\"></i></button>
				          </div>
						  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"delete-form-modal\">
						  <div class=\"modal-dialog\" role=\"document\">
						  <div class=\"modal-content\">
						  <div class=\"modal-header\">
						  <h5 class=\"modal-title\">Delete user</h5>
						  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
						  <span aria-hidden=\"true\">&times;</span>
						  </button>
						  </div>
						  <div class=\"modal-body\">
						  <p>Are you sure delete user?</p>
						  </div>
						  <div class=\"modal-footer\">
						  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>
						  <button type=\"button\" class=\"btn btn-primary userinfo\" data-id=".$items[id]." >Delete</button>
						  </div>
						  </div>
						  </div>
						  </div>  
                          </td>						 
                          </tr> ";
						  
						  
					  }
                       
					  ?>		

			  </form>
					  </tbody>
                    </table>
                  </div>
                </div>
				
								   <div class="container">
				   
				   
				   
				    <div class="row">
					
				<div class="col"><button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"
                                data-target="#user-form-modal" >Add</button></div>
				<div class="col select-block"><select class="btn-sm btn-outline-secondary badge" aria-label="Default select example">
								  <option selected>Please Select</option>
								  <option value="1">Set active</option>
								  <option value="2">Set no active</option>
								  <option value="3">Delete</option>
								</select></div>
				<div class="col"><button class="btn btn-sm btn-outline-secondary badge" type="submit">Ok</button></div>
				<div class="col-8"></div>
				
					</div>
					</div>
              </div>
            </div>
          </div>
        </div>
		
		
		
		
		
		
		
		
		
		
		
        <!-- Add User Form Modal -->
        <div class="modal fade" role="dialog" tabindex="-1" id="user-form-modal">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add/Edit user</h5>
                <button type="button" class="close" data-dismiss="modal">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="py-1">
                  <form id="form">
                    <div class="row">
                      <div class="col">
                        <div class="row">
                          <div class="col">
							
                            <div class="form-group">
							
                              <label>First Name</label>
                              <input class="form-control" required type="text" name="name" placeholder="John" value="John">
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>Last name</label>
                              <input class="form-control" required type="text" name="username" placeholder="Smith" value="Smith">
                            </div>
                          </div>
						  <div class="col">
						  <div class="form-check form-switch">
							  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" name="status" checked>
							  <label class="form-check-label" for="flexSwitchCheckChecked">Checked if user Active</label>
							</div>
							</div>
						  <div class="col select-block">
						  <select class="form-select" id="selectrole" aria-label="Default select example" name="role" required>
								  <option value="" selected > Please Select</option>
								  <option  value="Admin" >Admin</option>
								  <option  value="User">User</option>								  
								</select></div>
								
						  					
							
							
							
						  
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col d-flex justify-content-end">
                        <button class="btn btn-primary" type="submit">Save Changes</button>
						</form>
                      </div>
                    </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  
  

  
 



