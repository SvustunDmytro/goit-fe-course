export default class Notepad {
    constructor(
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
        this._notes = this._notes.filter(note => note.id !== id);
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