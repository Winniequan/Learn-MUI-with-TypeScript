import React from "react";
import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={5} color="secondary">
        <MailIcon />
      </Badge>

      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>

      <Badge badgeContent={100} color="secondary" max={999}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" invisible={true}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={6} color="primary">
        <ShoppingCartIcon/>
      </Badge>
    </Stack>
  );
};
