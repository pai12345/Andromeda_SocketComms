import { Fragment, lazy } from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CommentIcon from "@mui/icons-material/Comment";
import Box from '@mui/material/Box';

const AppBar = lazy(() => import("@mui/material/AppBar"));
const CssBaseline = lazy(() => import("@mui/material/CssBaseline"));
const Toolbar = lazy(() => import("@mui/material/Toolbar"));
const IconButton = lazy(() => import("@mui/material/IconButton"));
const List = lazy(() => import("@mui/material/List"));
const ListItemAvatar = lazy(() => import("@mui/material/ListItemAvatar"));

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