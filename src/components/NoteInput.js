import React from 'react'

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const max = 50;
    const titleInput = event.target.value.slice(0, max);
    const titleLength = titleInput.length;

    this.setState(() => {
      return {
        title: titleInput,
        maxTitle: max - titleLength
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: '',
        body: '',
        maxTitle: 50,
      };
    });
  }

  render() {
    return (
      <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <h2>Buat Catatan</h2>
        <p className='note-input__title__char-limit'>Sisa Karakter : {this.state.maxTitle}</p>
        <input
          type='text'
          className='note-input__title'
          placeholder='Judul'
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        ></input>
        <textarea
          type='text'
          className='note-input__body'
          placeholder='Tulis Catatan Disini...'
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        ></textarea>
        <button type='submit'>Buat</button>
      </form>
    );
  }
}

export default NoteInput