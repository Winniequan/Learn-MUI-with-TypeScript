import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">Subtittle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        If you don't already have a React project, you can create one using
        Create React App or your preferred method. Open your terminal and run
        the following commands:
      </Typography>
      <Typography variant="body2">
        In your React project directory, you need to install Material-UI and its
        dependencies. You can do this using npm or yarn. Run one of the
        following commands:
      </Typography>
    </div>
  );
}
