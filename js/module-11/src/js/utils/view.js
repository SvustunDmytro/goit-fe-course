'use strict';
import {PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './constants';
import listItemsTemplate from 'D:/GoIT/home_work/goit-fe-course/js/module-11/src/templates/listItems.hbs'

export const listRef = {
    noteList: document.querySelector('.note-list'),
    form: document.querySelector('.note-editor'),
    searchForm: document.querySelector('.search-form'),
    openEditorBtn: document.querySelector('#open-modal-editor')
}

export function renderNoteList(listRef, notes) {
    const result = notes.map(note => listItemsTemplate(note)).join('');
    listRef.noteList.innerHTML = `${result}`;
};