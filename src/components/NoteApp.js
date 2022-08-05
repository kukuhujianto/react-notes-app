import React from 'react'
import { getInitialData } from '../utils'
import NoteAppBody from './NoteAppBody'
import NoteAppHeader from './NoteAppHeader'


class NoteApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),
      searchedNotes: [],
      searchTitle: ''
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const archivedNotes = this.state.notes
      .filter((note) => note.id === id)
      .map((note) => (note.archived = !note.archived));
    this.setState({ archivedNotes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: Date(),
          }
        ]
      }
    });
  }

  onSearchChangeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchTitle: event.target.value
      }
    })
    this.onSearchHandler(event.target.value);
  }

  onSearchHandler(searchedTitle) {
    let searchedNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(searchedTitle.toLocaleLowerCase())
    );
    if (this.state.searchTitle.length >= 0) {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: searchedNotes });
    } else {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: this.state.notes });
    }
  }

  render() {
    return (
      <div>
        <NoteAppHeader
          onSearchHandler={this.onSearchHandler}
          onSearchChange={this.onSearchChangeHandler}
        />
        <NoteAppBody
          addNote={this.onAddNoteHandler}
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          searchedNotes={this.state.searchedNotes}
          searchedTitle={this.state.searchTitle}
        />
      </div>
    );
  }
}

export default NoteApp