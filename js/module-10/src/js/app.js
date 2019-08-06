'use strict';

import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './utils/constants';
import { listRef, createListItem, createNoteContent, createNoteFooter, createActionButton, renderNoteList } from './utils/view';
import  Notepad  from './utils/notepad-model';
import initialNotes from '../assets/notes.json'
const shortid = require('shortid');
const notepad = new Notepad(initialNotes);



const addListItem = event => {
  event.preventDefault();
  const [title, body] = event.target.elements;
  if (title.value.trim() === '' || body.value.trim() === '') {
    alert('Необходимо заполнить все поля!');
    return;
  }
  const listItem = {
    id: shortid.generate(),
    title: title.value,
    body: body.value,
    priority: PRIORITY_TYPES.LOW
  };
  listRef.noteList.append(createListItem(listItem));
  notepad.notes.push(listItem);
  listRef.form.reset()
}

const deleteListItem = event => {
  const action = event.target.parentElement.dataset.action;
  if (action !== NOTE_ACTIONS.DELETE) {
    return;
  }
  const parentListItem = event.target.closest('.note-list__item');
  const id = parentListItem.dataset.id;
  notepad.deleteNote(id);
  parentListItem.remove();
}

const filterNotes = event => {
  const filtredItem = notepad.filterNotesByQuery(event.target.value);
  renderNoteList(listRef, filtredItem);
}


console.log('Все текущие заметки: ', notepad.notes);
const noteItem = renderNoteList(listRef, notepad.notes);


listRef.form.addEventListener('submit', addListItem);
listRef.noteList.addEventListener('click', deleteListItem);
listRef.searchForm.addEventListener('input', filterNotes);