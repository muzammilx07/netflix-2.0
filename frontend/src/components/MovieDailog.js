import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useSelector, useDispatch } from "react-redux";
import { setDailog } from "../redux/slices/movieSlice";
import VideoBackground from "./VideoBackground";

const MovieDialog = () => {
  const { onDailog, selectedMovieId } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setDailog(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={onDailog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md" // Adjust maxWidth as needed
        fullWidth
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <VideoBackground movieId={selectedMovieId} large />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default MovieDialog;
