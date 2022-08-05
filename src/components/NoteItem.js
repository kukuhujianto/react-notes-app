import React from 'react'
import NoteItemAction from './NoteItemAction'
import NoteItemContent from './NoteItemContent'

function NoteItem({ notes, title, createdAt, body, id, onDelete, onArchive}) {
  return (
    <div className='note-item'>
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction notes={notes} id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  )
}

export default NoteItem