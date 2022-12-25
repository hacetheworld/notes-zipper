import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Mainscreen from '../../components/Mainscreen'
import ReactMarkdown from "react-markdown";
// import notes from "../../data.js"
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import Loading from '../../components/loading.js'
import { deleteNoteAction, listNotes } from '../../actions/notesAction';
 const MyNotes=({search}) =>{
  const dispatch=useDispatch()
  const history=useHistory()
  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const noteCreate = useSelector((state) => state.noteCreate);
  const noteUpdate = useSelector((state) => state.noteUpdate);
  const noteDelete = useSelector((state) => state.noteDelete);
  const {success:successUpdate}=noteUpdate
  const {success:successDelete}=noteDelete
  const {success:successCreate}=noteCreate

  const deleteHandler=(id)=>{
    if (window.confirm("Are You Sure ?")){
      dispatch(deleteNoteAction(id));
      history.push('/mynotes')
    }
  }
  useEffect(()=>{
    dispatch(listNotes())
    if (!userInfo){
      history.push('/login')
    }
  },[dispatch,history,successCreate,successUpdate,successDelete])
  return (
    <Mainscreen title={`Welcome Back ${ userInfo?.name} ..`}>
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
      {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />} */}
    {loading && <Loading />}

      {
        notes ? notes.filter((filteredNote) =>filteredNote.title.toLowerCase().includes(search.toLowerCase())
      )
      .reverse()
      .map((note) => (
            <Accordion key={note._id}>
              <Card style={{ margin: 10 }} key={note._id}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    // onClick={() => ModelShow(note)}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {note.title}
                    </Accordion.Toggle>
                  </span>

                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <ReactMarkdown>{note.content}</ReactMarkdown>
                      {/* {note.content} */}
                      <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0,10)}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          )) : null}
    </Mainscreen>
  )
}

export default MyNotes