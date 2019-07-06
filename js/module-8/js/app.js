'use strict';


const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

class Notepad {
  constructor (
      initialNotes
  ) {
      this._notes = initialNotes;
  }
  
  get notes() {
      return this._notes;
  }
  findNoteById(id) {
  for (const note of this.notes) {
    if (note.id === id) {
      return note;
    }
  }
  };
  saveNote(note) {
  this.notes.push(note);
  };
  deleteNote(id) {
  return this.notes.splice(this.notes.indexOf(this.findNoteById(id)),1);
  };
  updateNoteContent(id, updatedContent) {
  const note = this.findNoteById(id);
  if (!note) return;
  Object.assign(note,updatedContent);
  return note;
  };
  updateNotePriority(id, priority) {
    return this.findNoteById(id).priority = priority;
  };
  filterNotesByQuery(query) {
  const newNotes = [];
    for (let note of this.notes) {
    const wordToLow = query.toLowerCase();
    const titleToLow = note.title.toLowerCase();
    const bodyToLow = note.body.toLowerCase();
    if (titleToLow.includes(wordToLow) || bodyToLow.includes(wordToLow)) {
      newNotes.push(note);
    }}
    return newNotes;
  };
  filterNotesByPriority(priority) {
  const newNotes = [];
    for (let note of this.notes) {
      if (note.priority === priority)
      newNotes.push(note);
    }
    return newNotes;
  };
  createListItem(note) {
    let noteOfNotes = note;
    let el = document.createElement('li');
    let noteWrapp = document.createElement('div');
    let noteContent = this.createNoteContent(noteOfNotes);
    let footer = this.createNoteFooter(noteOfNotes);
    el.classList.add('note-list__item');
    noteWrapp.classList.add('note');
    el.setAttribute('data-id', noteOfNotes.id);
    el.append(noteWrapp);
    noteWrapp.append(noteContent);
    noteWrapp.append(footer);
    return el;
  };
  createNoteContent(noteOfNotes) {
    let noteContent = document.createElement('div');
    let noteTitle = document.createElement('h2');
    let noteBody = document.createElement('p');
    noteContent.classList.add('note__content');
    noteTitle.classList.add('note__title');
    noteBody.classList.add('note__body');
    noteTitle.textContent = `${noteOfNotes.title}`;
    noteBody.textContent = `${noteOfNotes.body}`;
    noteContent.append(noteTitle);
    noteContent.append(noteBody);
    return noteContent;
  };
  createNoteFooter(noteOfNotes) {
    let footer = document.createElement('footer');
    let noteSectionPriority = document.createElement('section');
    let btnDecrease = this.createActionButton(ICON_TYPES.ARROW_DOWN, NOTE_ACTIONS.DECREASE_PRIORITY);
    let btnIncrease = this.createActionButton(ICON_TYPES.ARROW_UP, NOTE_ACTIONS.INCREASE_PRIORITY);
    let notePriority = document.createElement('span');
    let noteSectionEdit = document.createElement('section');
    let btnEdit = this.createActionButton(ICON_TYPES.EDIT, NOTE_ACTIONS.EDIT);
    let btnDelete = this.createActionButton(ICON_TYPES.DELETE, NOTE_ACTIONS.DELETE);
    footer.classList.add('note__footer');
    noteSectionPriority.classList.add('note__section');
    notePriority.classList.add('note__priority');
    noteSectionEdit.classList.add('note__section');
    notePriority.textContent = `${noteOfNotes.priority}`;
    footer.append(noteSectionPriority);
    noteSectionPriority.append(btnDecrease);
    noteSectionPriority.append(btnIncrease);    
    noteSectionPriority.append(notePriority);
    footer.append(noteSectionEdit);
    noteSectionEdit.append(btnEdit);
    noteSectionEdit.append(btnDelete);  
    return footer;
  };
  createActionButton(iconText, noteAction) {
    let btn = document.createElement('button');
    let icon = document.createElement('i');
    btn.classList.add('action');
    icon.classList.add('material-icons', 'action__icon');
    btn.setAttribute('data-action', `${noteAction}`);
    icon.textContent = `${iconText}`;
    btn.append(icon);
    return btn;
  }
  renderNoteList(listRef, notes) {
    for (const note of notes) {
      noteList.append(this.createListItem(note));
    }
    return noteList;
  }
}

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];


const notepad = new Notepad(initialNotes);
console.log('Все текущие заметки: ', notepad.notes);

let noteList = document.querySelector('.note-list');

let noteItem = notepad.renderNoteList(null, notepad.notes);

