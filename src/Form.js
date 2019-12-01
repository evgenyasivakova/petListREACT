import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      owner: '',
      date: '',
      time: '',
      content: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, owner, date, time, content } = this.state;

    const client = { name, owner, date, time, content };

    this.props.addClient(client);

    e.target.reset();
    this.setState({ name: '', owner: '', date: '', time: '', content: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Имя животного</label>
          <div className="col-sm-10">
            <input type="text" placeholder="Имя" className="form-control" name="name" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Владелец</label>
          <div className="col-sm-10">
            <input type="text" placeholder="Владелец" className="form-control" name="owner" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Дата</label>
          <div className="col-sm-10">
            <input type="date" className="form-control" name="date" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Время</label>
          <div className="col-sm-10">
            <input type="time" className="form-control" name="time" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Заметки</label>
          <div className="col-sm-10">
            <textarea placeholder="Заметки" name="content" className="form-control" onChange={this.handleChange} ></textarea>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            <input type="submit" className="btn btn-primary" value="Добавить" onChange={this.handleChange} />
          </div>
        </div>
      </form>
    )
  }
}

export default Form;
