import { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CommentIcon from "@mui/icons-material/Comment";
import Box from '@mui/material/Box';

const messages = [
  {
    id: 1,
    primary: "Brunch this week?",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "Birthday Gift",
    person: "/static/images/avatar/1.jpg",
  },
];

const comms = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Box component="main" sx={{ p: 3 }}>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{ p: 2, pb: 0 }}
      >
        Chat
      </Typography>
      <List sx={{ mb: 2 }}>
        {messages.map(({ id, primary, person }) => (
          <Fragment key={id}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} />
            </ListItem>
          </Fragment>
        ))}
      </List>
      </Box>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <CommentIcon />
          </IconButton>
          <IconButton color="inherit">
            <MeetingRoomIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default comms;