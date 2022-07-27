import Head from 'next/head'
import  { useState} from "react";

import Image from 'next/image'
import {Typography,TextField, Container, Button, Snackbar,Alert,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions, Grid } from '@mui/material';
import styles from '../styles/Home.module.css'

export default function Message() {
  const [openDialog, setOpenDialog]=useState(false)
  const [reply, setReply] = useState("")
  const submitReply=()=>{
    console.log(reply)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>A Letter to Barnali</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container maxWidth="md" className={styles.messageContainer}>
            <div  className={styles.message}>
                <h1 className={styles.title}>
          Dear, <span>Barnali !</span>
        </h1>

          <Typography variant="subtitle1" gutterBottom component="div">
        This is the very first time when I am sharing my personal feelings with someone. I don't know how & why did you became so special to me, but it's a fact now. I also don't know what you will think about me on this, but I thought I should share my soul's voice with you. Let's give a chance to understand more about each other. 

      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
 I promise you that I shall try my best to meet & fulfill your all expectations throughout my life. You just have to dream whatever you want and rest will be my job to make your dream come true. Please give me a chance to prove my honesty, loyalty and dedication towards you, if in case you will figure out that I am not a guy of your type, I promise that I will walk out from your life completely and never disturb you again, But before that you should give me a chance. However, it is never necessary for you to have the same feelings as I have about you, so in case you don't want to continue please feel free to write to me. 
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
I promise you that I will always respect your all decisions, your feelings, your emotions from the deepest of my heart forever.
      </Typography>
       <Typography variant="subtitle1" gutterBottom component="div">
       I will desperately wait for your reply and also request you that please not share all this with anyone, till then I wish you to have a wonderful time with or without me, forever!
       </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
 Thanks for your time.
        </Typography>
      
        <Typography variant="overline" gutterBottom component="div">
Your well-wisher!   
        </Typography>
            
            </div>
             
    <Grid container spacing={2} >
        <Grid item xs={12} >
            <Button variant="outlined" fullWidth>Download Letter</Button>
        </Grid>
         <Grid item xs={12}>
            <Button variant="contained" fullWidth onClick={()=>setOpenDialog(true)}>Write a Reply</Button>
        </Grid>
    </Grid>
        </Container>
       
<br/>
 
<Dialog open={openDialog} fullScreen onClose={()=>setOpenDialog(false)}>
        <DialogTitle><Typography variant="body2" gutterBottom component="div">Please write your heart's voice.</Typography> </DialogTitle>
       
          <DialogContent>

          <TextField
            autoFocus
            label="Write your Reply"
          multiline
          rows={8}
          fullWidth
          variant="filled"
          value={reply}
        onChange={e=>setReply(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpenDialog(false)} variant="text" color='secondary'>Cancel</Button>
          <Button onClick={submitReply} variant="contained">Submit Reply</Button>
        </DialogActions>

          

        
      </Dialog>

   

      </main>

      
    </div>
  )
}
