import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export const Notes = ({notes, onRemove}) => (

    <TransitionGroup component="ul" className="list-group">
        {notes.map((note) => (
            <CSSTransition
                key={note.id}
                classNames={'note'}
            timeout={500}>
                <li
                    className="list-group-item note"
                    key={note.id}>

                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                    </div>

                    <button type="button"
                            onClick={() => onRemove(note.id)}
                            className="btn btn-outline-danger btn-sm"
                    >&times;
                    </button>
                </li>
            </CSSTransition>

        ))}

    </TransitionGroup>
)
