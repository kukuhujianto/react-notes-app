import React from 'react'

function NoteSearch({ searchTitle, onSearchChange }) {
  return (
    <div className='note-search'>
      <input type='text' placeholder='Cari catatan' value={searchTitle} onChange={(event) => onSearchChange(event)}></input>
    </div>
  )
}

export default NoteSearch