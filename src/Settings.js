import React from 'react';

function Settings(props) {
  return (
    <div className="settings">
      <div className="form-group row">
        <div className="col-sm-2">
          <select name="order" className="form-control" onChange={props.handleChange}>
            <option value="no">Без</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
        <div className="col-sm-10">
          <input type="text" placeholder="Поиск по имени" className="form-control" name="search" onChange={props.handleChange}/>
        </div>
      </div>
    </div>
  )
}

export default Settings;