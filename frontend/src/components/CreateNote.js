import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export default class CreateNote extends Component {
  
  state = {
    users: [],
    userSelected:'',
    title: '',
    content: '',
    editing: false,
    _id: '',
    
  }
async componentDidMount(){
    const res = await axios.get('http://localhost:4000/api/users/');
    this.setState({
      users: res.data.map(user => user.username),
      userSelected: res.data[0].username,
      levels: res.data.map(user => user.level)
    })
    if (this.props.match.params.id){
      const res = await axios.get('http://localhost:4000/api/users/' + this.props.params.id);
      console.log(res.data)
        this.setState({
          editing: true,
          _id: this.props.match.params.id
        })
    }
  }
  
  onSubmit = async (e) =>{
    e.preventDefault();
    const newNote = {
      level: this.state.level,
      title: this.state.title,
      skill: this.state.skill,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
      extension: this.state.extension,
      ref: this.state.ref,
      reading: this.state.reading,
      reading_link: this.state.reading_link,
      ref1: this.state.ref1,
      listening: this.state.listening,
      listening_link: this.state.listening_link,
      ref2: this.state.ref2,
      writing: this.state.writing,
      writing_link: this.state.writing_link,
      ref3: this.state.ref3,
      speaking: this.state.speaking,
      speaking_link: this.state.speaking_link,
      ref4: this.state.ref4,
      grammar: this.state.grammar,
      grammar_link: this.state.grammar_link,
      ref5: this.state.ref5,
      vocabulary: this.state.vocabulary,
      vocabulary_link: this.state.vocabulary_link,
      ref6: this.state.ref6,
      pronunciation: this.state.pronunciation,
      pronunciation_link: this.state.pronunciation_link,
      ref7: this.state.ref7,
      TF_century_skills: this.state.TF_century_skills,
      TF_century_skills_link: this.state.TF_century_skills_link,
      ref8: this.state.ref8,
      para_el_aprendizaje: this.state.para_el_aprendizaje,
      para_el_aprendizaje_link: this.state.para_el_aprendizaje_link,
      ref9: this.state.ref9,
      del_aprendizaje: this.state.del_aprendizaje,
      del_aprendizaje_link: this.state.del_aprendizaje_link,
      ref10: this.state.ref10,
      examenes_estandarizados: this.state.examenes_estandarizados,
      examenes_estandarizados_link: this.state.examenes_estandarizados_link,
        
    };
    if(this.state.editing){
      await axios.put('http://localhost:4000/api/notes/', + this.state._id, newNote);
    }else{
      await axios.post('http://localhost:4000/api/notes', newNote);
    }
    
  window.location.href = '/';
}

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  

  render() {
    return (
      
      <div className='col-md-6 offset-md-3'>
        <div className='card card-body'>
          <h4>Create a COMPONENT</h4>

        {/**SELECT USER*/}
        
        <div className='form-group'>
            <textarea 
              name='level'
              className='form-control'
              placeholder='Language Skill'
              onChange={this.onInputChange}
              required  >
            </textarea>
        </div>
        <br></br>
        <div className='form-group'>
            <textarea 
              name='skill'
              className='form-control'
              placeholder='DBA'
              levels={this.state.levels}
              onChange={this.onInputChange}
              required  >
            </textarea>
        </div>
        <br></br>
            
            <div className='form-group'>
            <input 
            type='text' 
            className='form-control' 
            placeholder='ref' 
            name='ref'
            onChange={this.onInputChange}
            required
            />
        </div>
        <br></br>
        <div className='form-group'>
            <input 
              name='extension'
              className='form-control'
              placeholder='Extension'
              onChange={this.onInputChange}
              required  >
            </input>
        </div>
        <br></br>
        

        <div className='form-group'>
            <input 
              name='reading'
              className='form-control'
              placeholder='Reading'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>
        <div className='form-group'>
            <input 
              name='reading_link'
              className='form-control'
              placeholder='Reading Link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='ref1'
              className='form-control'
              placeholder='Ref 1'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='listening'
              className='form-control'
              placeholder='Listening'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='listening_link'
              className='form-control'
              placeholder='Listening Link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>
        
        <div className='form-group'>
            <input 
              name='ref2'
              className='form-control'
              placeholder='Ref 2'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='writing'
              className='form-control'
              placeholder='Writing'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='writing_link'
              className='form-control'
              placeholder='Writing Link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='ref3'
              className='form-control'
              placeholder='Ref 3'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='speaking'
              className='form-control'
              placeholder='Speaking'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='speaking_link'
              className='form-control'
              placeholder='Speaking Link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='ref4'
              className='form-control'
              placeholder='Ref 4'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='Grammar'
              className='form-control'
              placeholder='grammar'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='grammar_link'
              className='form-control'
              placeholder='Grammar Link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='ref5'
              className='form-control'
              placeholder='Ref 5'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='vocabulary'
              className='form-control'
              placeholder='Vocabulary'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='vocabulary_link'
              className='form-control'
              placeholder='Vocabulary Link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='ref6'
              className='form-control'
              placeholder='Ref 6'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='pronunciation'
              className='form-control'
              placeholder='Pronunciation'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>
        
        <div className='form-group'>
            <input 
              name='pronunciation_link'
              className='form-control'
              placeholder='Pronunciation link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='ref7'
              className='form-control'
              placeholder='Ref 7'
              onChange={this.onInputChange}
              >
            </input>
        </div>

        <br></br>
        <div className='form-group'>
            <input 
              name='TF_century_skills'
              className='form-control'
              placeholder='21st Century Skills'
              onChange={this.onInputChange}
              >
            </input>
        </div>

        <br></br>
        <div className='form-group'>
            <input 
              name='TF_century_skills_link'
              className='form-control'
              placeholder='21st Century Skills Link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>
        <div className='form-group'>
            <input 
              name='ref8'
              className='form-control'
              placeholder='Ref 8'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='para_el_aprendizaje'
              className='form-control'
              placeholder='Para el aprendizaje'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='para_el_aprendizaje_link'
              className='form-control'
              placeholder='Para el aprendizaje link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='ref9'
              className='form-control'
              placeholder='Ref 9'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        

        <br></br>
        <div className='form-group'>
            <input 
              name='del_aprendizaje'
              className='form-control'
              placeholder='Del aprendizaje'
              onChange={this.onInputChange}
              >
            </input>
        </div>

        <br></br>
        <div className='form-group'>
            <input 
              name='del_aprendizaje_link'
              className='form-control'
              placeholder='Del aprendizaje link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>

        <div className='form-group'>
            <input 
              name='ref10'
              className='form-control'
              placeholder='Ref 10'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>
        <div className='form-group'>
            <input 
              name='examenes_estandarizados'
              className='form-control'
              placeholder='Examenes Estandarizados'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>
        <div className='form-group'>
            <input 
              name='examenes_estandarizados_link'
              className='form-control'
              placeholder='Examenes Estandarizados Link'
              onChange={this.onInputChange}
              >
            </input>
        </div>
        <br></br>
          <form onSubmit={this.onSubmit}>
            <br></br>
            <button type='submit' className='btn btn-primary'>
              Save
            </button>
          </form>
        </div>
      </div>
    )
    
  }
}
