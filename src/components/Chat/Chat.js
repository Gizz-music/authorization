import { useContext, useState, useEffect } from "react";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";
import {Container, Grid, TextField, Button, Avatar} from "@material-ui/core";
import "./Chat.css";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "../Loader/Loader";
import firebase from "firebase";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [ user ] = useAuthState(auth);
  const [ value, setValue ] =useState('');
  const [ messages, loading ] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL:user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('');
  }

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        sendMessage();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [sendMessage]);

  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <Grid container
            style={{height: window.innerHeight -50, marginTop: 20}}
            justify="center"
      >
        <div className="chat-area">
          {messages.map(messages =>
            <div
              className="chat-card"
              style={{marginLeft: user.uid === messages.uid ? 'auto' : '10px'}}
            >
              <Grid>
                <Avatar className="chat-avatar" src={messages.photoUrl} />
                <div className="chat-name">{messages.displayName}</div>
              </Grid>
              <div className="chat-text">{messages.text}</div>
            </div>
          )}
        </div>
        <Grid container
              direction="column"
              alignItems="flex-end"
              style={{ width: "80%" }}
        >
          <TextField
            className="text-field"
            fullWidth
            variant="outlined"
            rowsMax={2}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button
            className="button-send"
            variant="outlined"
            style={{ marginTop: "1em" }}
            onClick={sendMessage}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;