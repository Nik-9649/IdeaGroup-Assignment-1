import { Menu, MenuItem } from "@mui/material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import { red } from "@mui/material/colors";
import CustomStyledCard from "./StylizedCard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export default function ProfileCard() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      marginRight={3}
      marginLeft={3}
      marginTop={2}
      boxShadow={5}
      sx={{ maxWidth: 546, maxHeight: 546, borderRadius: 5 }}
    >
      <Grid
        item
        marginTop={2}
        marginBottom={2}
        marginLeft={5}
        marginRight={2}
        sx={{
          bgcolor: "#1976d2",
          minWidth: 247,
          minHeight: 20,
          maxWidth: 546,
          maxHeight: 546,
          borderRadius: 5,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            bgcolor: "#1976d2",
            borderRadius: 5,
            marginLeft: 5,
          }}
          elevation={100}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="user profile">
                M
              </Avatar>
            }
            action={
              <Grid>
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Add Profile Picture</MenuItem>
                  <MenuItem onClick={handleClose}>Edit User Name</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Increase Credit Limit
                  </MenuItem>
                </Menu>
              </Grid>
            }
            title="Muhammad"
            subheader="Member since September 14, 2016"
          />
          <CardContent>
            <Grid item>
              <CustomStyledCard
                heading="Your Current Balance"
                subs={"$ 4300"}
              ></CustomStyledCard>
              <CustomStyledCard
                heading="Your credit limit"
                subs={"$ 6000"}
              ></CustomStyledCard>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
