import React, { useState } from "react";
import { Contact } from "./Contact";

import { FormControl, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const themes = localStorage.getItem("theme") || "#EE5B2D";

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
    noContacts: {
      display: 'flex'
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

    searchByName();
  };

  const searchByName = () => {
    if (search.contact.length >= 1) {
      const contactFound = contacts.filter((contact: IContact) =>
        contact.name.toLowerCase().includes(search.contact.toLowerCase())
      );
      setContacts(contactFound);
    }
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
        style={{ fontWeight: "bold", color: themes }}
      >
        My Contacts
      </Typography>
      {contacts ? (
        contacts.map((contact: IContact, index) => (
          <Contact key={index} contact={contact} />
        ))
      ) : (
        <div className={classes.noContacts}>
          <Typography variant="subtitle1" component="h2" style={{ fontWeight: 'bold' }}>
            Any contact yet&nbsp;
          </Typography>
          <Icon className="far fa-frown" />
        </div>
      )}
    </div>
  );
};
