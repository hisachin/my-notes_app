'use client';
import React, { createContext, useReducer } from 'react';
import { initialNoteDetails, notesReducer } from '../reducer/notesReducer';

export const NoteContext = createContext(initialNoteDetails);

export const NoteProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notesReducer, initialNoteDetails);

    return (
        <NoteContext.Provider value={{ state, dispatch }}>
            {children}
        </NoteContext.Provider>
    );
};