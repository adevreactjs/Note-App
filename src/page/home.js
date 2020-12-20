import React, { Fragment } from 'react'
import Form from '../components/form';
import Note from '../components/note';

const Home = () => {

    const notes = [
        {value: '1',
        id: 1,
        title: "Note 1"},
        {value: '1',
        id: 1,
        title: "Note 2"},
        {value: '1',
        id: 1,
        title: "Note 3"},
    ]


    return (
        <Fragment>
            <Form/>
            <hr></hr>
            <Note note ={notes}/>
        </Fragment>
    )
}
export default Home
