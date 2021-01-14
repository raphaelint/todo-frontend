import React from 'react'

const TodoForm = ({onSubmit, onChange, description, statex}) => {
    return (
        <form onSubmit={onSubmit}>
                    <div className="FormDiv">
                        <label>Description : </label>
                        <br/>
                        <input type="text" name="description" onChange={onChange} value={description} />
                    </div>
                    <div>
                        <label>State: </label><br />
                        <select name="statex" onChange={onChange} value={statex}>
                            <option value="">Select-one</option>
                            <option value="to do">to do</option>
                            <option value="done">done</option>
                        </select>
                    </div>
                    <br/>
                    <div className="FormDiv">
                        <button type="submit" name="submit">Submit</button>
                    </div>
                    
                </form>
    )
}

export default TodoForm
