'use strict';

import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import listItemsTemplate from '../templates/listItems.hbs'
import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS, NOTIFICATION_MESSAGES } from './utils/constants';
import { listRef, renderNoteList } from './utils/view';
import Notepad from './utils/notepad-model';
import initialNotes from '../assets/notes.json'
const shortid = require('shortid');
const notepad = new Notepad(renderedNotes());
const notyf = new Notyf();

let notesFromLS = localStorage.getItem('notes');
export let parsedItem = JSON.parse(notesFromLS);

export function renderedNotes() {
  if(parsedItem) {
    return parsedItem;
  } return initialNotes;
}

const addListItem = event => {
  event.preventDefault();
  const [title, body] = event.target.elements;
  if (title.value.trim() === '' || body.value.trim() === '') {
    return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
  }
  const listItem = {
    id: shortid.generate(),
    title: title.value,
    body: body.value,
    priority: PRIORITY_TYPES.LOW
  };
  notepad.saveNote(listItem).then(addedItem => renderNoteList(listRef, addedItem));
  MicroModal.close('note-editor-modal');
  listRef.form.reset();
  notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
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
  notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
}

const filterNotes = event => {
  const filtredItem = notepad.filterNotesByQuery(event.target.value);
  renderNoteList(listRef, filtredItem);
}

const openMicroModal = () => {
  MicroModal.show('note-editor-modal');
}


console.log('Все текущие заметки: ', notepad.notes);
renderNoteList(listRef, renderedNotes());

listRef.form.addEventListener('submit', addListItem);
listRef.noteList.addEventListener('click', deleteListItem);
listRef.searchForm.addEventListener('input', filterNotes);
listRef.openEditorBtn.addEventListener('click', openMicroModal);