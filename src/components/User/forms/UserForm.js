import React from 'react'

const UserForm = ({onSubmit, onChange, name}) => {
    return (
        <form onSubmit={onSubmit}>
                <div class="form-group row " >    
                    <label class="mr-3">Name : </label>
                    <input class="form-control col-md-4" type="text" name="name" onChange={onChange} value={name} />
                </div>
                <div class="form-group row">
                    <button class="btn btn-primary" type="submit" name="submit">Submit</button>
                </div>
        </form>
    )
}

export default UserForm

