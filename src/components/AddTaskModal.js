import React from 'react'

import { Card, Typography, Button, TextField } from '@mui/material'

export default function AddTaskModal ({ toggleShowTime }) {
  return (
    <Card raised className='mainCard'>
      <center>
        <Typography variant='h2'>
          What are you working on?
        </Typography>
        <TextField className='mainCard__TextField' variant='standard' />
      </center>
      <Button onClick={toggleShowTime} variant='contained' sx={{ position: 'absolute', right: '2rem', bottom: '2rem' }}>Add Task</Button>
    </Card>
  )
}
