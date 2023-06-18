import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Note} from "../../types/types.ts";
import {modalStore} from "../../store/modalStore.tsx";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({note}: NoteCardProps) {

  return (
    <Card sx={{maxWidth: 345, marginBottom: 2}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
            ?
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => modalStore.open(<>삭제하시겠습니까?</>)}>
            <MoreVertIcon/>
          </IconButton>
        }
        title={note.title}
        subheader={note.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
