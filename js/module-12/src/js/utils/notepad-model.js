import { prototype } from "events";
import { parsedItem } from "../app";
import { listRef, renderNoteList } from './view';
import { renderedNotes } from '../app';

export default class Notepad {
    constructor(
        initialNotes
    ) {
        this._notes = renderedNotes();
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
        return new Promise((resolve) => {
            setTimeout(() => {
                this.notes.push(note);
                localStorage.setItem('notes', JSON.stringify(this.notes));
                resolve(this.notes)
            }, 200);
        })
    };
    deleteNote(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this._notes = this._notes.filter(note => note.id !== id);
                localStorage.setItem('notes', JSON.stringify(this.notes));
                resolve(this.notes)
            }, 201);
        })
    };
    updateNoteContent(id, updatedContent) {
        const note = this.findNoteById(id);
        if (!note) return;
        Object.assign(note, updatedContent);
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
            }
        }
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
};  