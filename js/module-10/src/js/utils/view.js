import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './constants';

export const listRef = {
    noteList: document.querySelector('.note-list'),
    form: document.querySelector('.note-editor'),
    searchForm: document.querySelector('.search-form')
}


export function createListItem(note) {
    const listItem = document.createElement('li');
    const noteWrapp = document.createElement('div');
    const noteContent = createNoteContent(note);
    const footer = createNoteFooter(note);
    listItem.classList.add('note-list__item');
    noteWrapp.classList.add('note');
    listItem.setAttribute('data-id', note.id);
    listItem.append(noteWrapp);
    noteWrapp.append(noteContent);
    noteWrapp.append(footer);
    return listItem;
};
export function createNoteContent(note) {
    const noteContent = document.createElement('div');
    const noteTitle = document.createElement('h2');
    const noteBody = document.createElement('p');
    noteContent.classList.add('note__content');
    noteTitle.classList.add('note__title');
    noteBody.classList.add('note__body');
    noteTitle.textContent = `${note.title}`;
    noteBody.textContent = `${note.body}`;
    noteContent.append(noteTitle);
    noteContent.append(noteBody);
    return noteContent;
};
export function createNoteFooter(note) {
    const footer = document.createElement('footer');
    const noteSectionPriority = document.createElement('section');
    const btnDecrease = createActionButton(ICON_TYPES.ARROW_DOWN, NOTE_ACTIONS.DECREASE_PRIORITY);
    const btnIncrease = createActionButton(ICON_TYPES.ARROW_UP, NOTE_ACTIONS.INCREASE_PRIORITY);
    const notePriority = document.createElement('span');
    const noteSectionEdit = document.createElement('section');
    const btnEdit = createActionButton(ICON_TYPES.EDIT, NOTE_ACTIONS.EDIT);
    const btnDelete = createActionButton(ICON_TYPES.DELETE, NOTE_ACTIONS.DELETE);
    footer.classList.add('note__footer');
    noteSectionPriority.classList.add('note__section');
    notePriority.classList.add('note__priority');
    noteSectionEdit.classList.add('note__section');
    notePriority.textContent = `${note.priority}`;
    footer.append(noteSectionPriority);
    noteSectionPriority.append(btnDecrease);
    noteSectionPriority.append(btnIncrease);
    noteSectionPriority.append(notePriority);
    footer.append(noteSectionEdit);
    noteSectionEdit.append(btnEdit);
    noteSectionEdit.append(btnDelete);
    return footer;
};
export function createActionButton(iconText, noteAction) {
    const btn = document.createElement('button');
    const icon = document.createElement('i');
    btn.classList.add('action');
    icon.classList.add('material-icons', 'action__icon');
    btn.setAttribute('data-action', `${noteAction}`);
    icon.textContent = `${iconText}`;
    btn.append(icon);
    return btn;
};
export function renderNoteList(listRef, notes) {
    const result = notes.map(note => createListItem(note));
    listRef.noteList.innerHTML = '';
    listRef.noteList.append(...result);
};