import React, { useState } from "react";
import { Contact } from "./Contact";

import { FormControl, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    searchField: {
      height: 4,
      "&::placeholder": {
        fontWeight: "bold",
      },
    },
  })
);

export const Contacts: React.FC = () => {
  let initialContacts: any = JSON.parse(localStorage.getItem("contacts")!);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [search, setSearch] = React.useState({
    contact: "",
  });

  React.useEffect(() => {
    if (typeof initialContacts === "object") {
      setContacts(initialContacts);
    }
    //eslint-disable-next-line
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          name="contact"
          onChange={onChange}
          type="text"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "#A7B8B7" }} />
              </InputAdornment>
            ),
            classes: { input: classes.searchField },
          }}
          variant="outlined"
        />
      </FormControl>
      <Typography
        variant="subtitle1"
        component="h2"
        style={{ fontWeight: "bold", color: "#EE5B2D" }}
      >
        My Contacts
      </Typography>
      {contacts ? (
        contacts.map((contact: IContact, index) => (
          <Contact key={index} contact={contact} />
        ))
      ) : (
        <Typography variant="subtitle1" component="h2">
          Any contact yet.
        </Typography>
      )}
    </div>
  );
};
