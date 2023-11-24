import React, { Component } from 'react';
import axios from 'axios';
import YouTubeThumbnail from './YouTubeThumbnail'; // Asegúrate de que este componente existe y es importado correctamente.

export default class NotesList extends Component {
  state = {
    notes: [],
    error: null,
  };

  componentDidMount() {
    this.getNotes();
  }

  async getNotes() {
    try {
      const res = await axios.get('http://localhost:4000/api/notes');
      this.setState({ notes: res.data });
    } catch (error) {
      this.setState({ error });
      console.error('There was an error fetching the notes:', error);
    }
  }

  deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/notes/${id}`);
      this.getNotes();
    } catch (error) {
      console.error('There was an error deleting the note:', error);
    }
  };

  // Función para generar el botón de descarga si el enlace es de Google Drive
  renderDownloadButton = (key, value) => {
    if (value.includes('drive.google.com')) {
      const googleDriveId = value.match(/[-\w]{25,}/)[0];
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveId}`;
      return (
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" key={key}>
          Descargar
        </a>
      );
    } else {
      return <a href={value} target="_blank" rel="noopener noreferrer" key={key}>{value}</a>;
    }
  };

  render() {
    return (
      <div className='row'>
        {this.state.notes.map(note => (
          <div className='col-md-4 p-2' key={note._id}>
            <div className='card'>
              <div className='card-header d-flex justify-content-between'>
                <h5>{note.title}</h5>
                {/* Aquí puedes agregar otros elementos al encabezado si es necesario */}
              </div>
              <div className='card-body'>
                {Object.entries(note).filter(([key]) => !['_id', '__v'].includes(key)).map(([key, value]) => {
                  if (key.endsWith('_link') && value.includes('youtube.com/watch?v=')) {
                    return <YouTubeThumbnail link={value} key={key} />;
                  } else if (key.endsWith('_link')) {
                    return this.renderDownloadButton(key, value);
                  } else {
                    return <p key={key}>{value}</p>;
                  }
                })}
              </div>
              <div className='card-footer'>
                <button onClick={() => this.deleteNote(note._id)} className='btn btn-danger'>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
