import { Fragment, lazy, useState, memo, useCallback, Suspense } from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import generatesocket from "../../service/socket";

const NoSsr = lazy(() => import("@mui/material/NoSsr"));
const AppBar = lazy(() => import("@mui/material/AppBar"));
const CssBaseline = lazy(() => import("@mui/material/CssBaseline"));
const Toolbar = lazy(() => import("@mui/material/Toolbar"));
const IconButton = lazy(() => import("@mui/material/IconButton"));
const List = lazy(() => import("@mui/material/List"));
const Avatar = lazy(() => import("@mui/material/Avatar"));
const MeetingRoomIcon = lazy(() => import("@mui/icons-material/MeetingRoom"));
const CommentIcon = lazy(() => import("@mui/icons-material/Comment"));
const Box = lazy(() => import("@mui/material/Box"));
const ListItemAvatar = lazy(() => import("@mui/material/ListItemAvatar"));

const person = "/static/images/avatar/5.jpg";

const Comms = memo(() => {
  const messages = [
    {
      primary: "",
    },
  ];

  //State
  const [state, setState] = useState(messages);

  //Input function
  const __handleInput = useCallback(() => {
    const newObj = Object.create(null);
    newObj.primary = "";
    const newState = [...state];
    newState.push(newObj);
    // console.log(newState);
    setState(newState);
    generatesocket().connection()
  }, [state]);

  return (
    <Fragment>
      <Suspense fallback={<Fragment>Loading ...</Fragment>}>
        <NoSsr>
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
              {state.map(({ primary }, index) => (
                <Fragment key={`Fragment-${index}`}>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar>
                    <TextField
                      multiline
                      variant="standard"
                    />
                    <Button
                      style={{ marginLeft: "2rem" }}
                      variant="contained"
                      onClick={__handleInput}
                    >
                      Submit
                    </Button>
                  </ListItem>
                </Fragment>
              ))}
            </List>
          </Box>
          <AppBar
            position="fixed"
            color="primary"
            sx={{ top: "auto", bottom: 0 }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <CommentIcon />
              </IconButton>
              <IconButton color="inherit">
                <MeetingRoomIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </NoSsr>
      </Suspense>
    </Fragment>
  );
});

export default Comms;
