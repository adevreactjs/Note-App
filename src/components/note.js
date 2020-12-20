import React from 'react'

const Note = ({note}) => {


    return (
    <ul className="list-group">
        {note.map((el) => {
            return (
                <li className="list-group-item note"
                key={el.id}> 
                <div>
                    <strong>{el.title}</strong> 
                    <small>{new Date().toLocaleDateString()}</small>
                </div>
                <button type="button" className="btn btn-danger btn-sm ">&times;</button>

                </li>
            )
        })}
      
    </ul>
    )
}

export default Note