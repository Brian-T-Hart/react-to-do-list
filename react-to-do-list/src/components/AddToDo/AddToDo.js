import React from 'react';

const AddToDo = () =>

    <div className="row container-fluid">
        <div className="col-md-6">
            <div class="input-group">
                <form>
                    <div class="form-group">
                    <input id="AddToDoInput" type="text" class="form-control" placeholder="add a new to-do" />
                    </div>
                </form>
            </div>
        </div>
    </div>

export default AddToDo;