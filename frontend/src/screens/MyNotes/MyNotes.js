import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Mainscreen from '../../components/Mainscreen'
import ReactMarkdown from "react-markdown";
// import notes from "../../data.js"
import {useSelector} from 'react-redux'
import axios from 'axios'
 const MyNotes=() =>{
  const [notes,setNotes]=useState([])

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler=(id)=>{
    if (window.confirm("Are You Sure ?")){
      console.log('Deleted');
    }
  }
  const fetchNotes=async()=>{

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo ? userInfo.token : 'None' }`,
      }
    }
    const {data}=await axios.get('/api/notes/',config)
    setNotes(data)
  }
  useEffect(()=>{
    fetchNotes()
  },[])


  return (
    <Mainscreen title={`Welcome Back ajay meena ..`}>
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
      {
        notes.map((note) => (
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
                          created at -
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
    </Mainscreen>
  )
}

export default MyNotes