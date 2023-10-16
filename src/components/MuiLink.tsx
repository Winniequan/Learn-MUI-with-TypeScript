import React from 'react'
import {Stack, Link, Typography} from "@mui/material"
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row">
      <Link href="#">
        <Typography variant='h6'>Link</Typography>
      </Link>
      <Link href="#" underline="none">
       
        <Typography variant='body2'>
            Link 
        </Typography>
      </Link>
      <Link href="#" color="secondary" underline="hover">
        Secondary
      </Link>
    </Stack>
  );
}
