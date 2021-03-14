import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { BaseBar } from "./BaseBar";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const themeLS = localStorage.getItem("theme") || "#EE5B2D";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    options: {
      "& > *": {
        margin: 6,
        fontFamily: "Roboto",
        color: "#fff",
        cursor: "pointer",
      },
    },
  })
);

export const Config: React.FC = () => {
  const themes = {
    primary: "#EE5B2D",
    secundary: "#2196F3",
    dark: "#000000",
    neon: "#6f1adf"
  };

  const [theme, setTheme] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);

  const classes = useStyles();
  const history = useHistory();

  const { primary, secundary, dark, neon } = themes;

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const selectedTheme = e.currentTarget.id;

    switch (selectedTheme) {
      case "primary":
        setTheme(primary);
        break;
      case "secundary":
        setTheme(secundary);
        break;
      case "dark":
        setTheme(dark);
        break;
      case "neon":
        setTheme(neon)
        break;
      default:
        break;
    }

    localStorage.setItem("theme", theme);

    setAlert(true);

    setTimeout(() => {
      history.push("/");
    }, 1500);

  }

  return (
    <>
      <BaseBar title="Config" />
      <div className={classes.root}>
        {alert && (
          <Alert severity="success">
            Theme configuration success! You will referer to the home page
          </Alert>
        )}
        <Typography
          variant="h6"
          component="h2"
          style={{ fontWeight: "bold", color: themeLS }}
        >
          Choose your favorite theme
        </Typography>
        <div className={classes.options}>
          <Box id="primary" onClick={onClick} bgcolor="#EE5B2D" p={2}>
            Primary
          </Box>
          <Box id="secundary" onClick={onClick} bgcolor="#2196F3" p={2}>
            Secundary
          </Box>
          <Box id="dark" onClick={onClick} bgcolor="#000000" p={2}>
            Dark
          </Box>
          <Box id="neon" onClick={onClick} bgcolor="#6f1adf" p={2}>
            Neon
          </Box>
        </div>
      </div>
    </>
  );
};
