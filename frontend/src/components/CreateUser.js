import React, { Component } from 'react'
import axios from 'axios'
export default class CreateUser extends Component {

  state = {
      users: [],
      username: ''
  }
  
  async componentDidMount(){
    this.getUsers();
    console.log(this.state.users)
  }

getUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/users');
    this.setState({users: res.data});
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/users',{
    username: this.state.username
  })
  this.setState({username: ''});
  this.getUsers();
  }

  deleteUser = async (id) => {
    await axios.delete('http://localhost:4000/api/users/' + id)
    this.getUsers();
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-3'>
          <div className='card card-body'>
            <h3>Create a skill</h3>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <input 
                  type="text" 
                  className='form-control' 
                  value={this.state.username}
                  onChange={this.onChangeUsername}>
                </input>
                <br></br>
              </div>
              <button type = 'submit' className='btn btn-primary'>
                Save
              </button>
            </form>
          </div>
        </div>
        <div className='card-item style="width: 18rem;'>
          <ul className='list-group'>
            {
              this.state.users.map(user =>(
              <li className='list-group-item list-group-item-action' 
              key={user._id}
              onDoubleClick={() =>this.deleteUser(user._id)}
              >
              {user.username}
              </li>))
            }
          </ul>
        </div>
      </div>
    )
  }
}
