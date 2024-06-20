import * as React from "react";
import { MdAccountCircle } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { TbLogout } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../redux/slices/userSlice";
import useLogout from "../hooks/useLogout";

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Adjust to your Redux slice
  const userName = user ? user.username : ""; // Ensure safe access to username
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = useLogout(); // Custom hook to handle logout
  const handleLogout = () => {
    logout(); 
  };

  return (
    <div>
      <button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="text-white focus:outline-none"
      >
        <MdAccountCircle className="text-white text-3xl" />
      </button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "black",
            color: "white",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "& .MuiMenuItem-root": {
              color: "white",
            },
            "& .MuiListItemIcon-root": {
              color: "white",
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "black",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {userName}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider sx={{ bgcolor: "gray" }} />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <IoMdSettings className="text-2xl" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Link to="/login">
            <ListItemIcon>
              <TbLogout className="text-2xl" />
            </ListItemIcon>
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Dropdown;
