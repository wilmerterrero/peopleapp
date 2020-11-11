import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Swal from "sweetalert";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { ContactBar } from "./ContactBar";
import { Grid, Icon, IconButton, Typography } from "@material-ui/core";

const themes = localStorage.getItem("theme") || "#EE5B2D";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    contactImg: {
      padding: 70,
      margin: "auto",
    },
    items: {
      display: "flex",
      justifyContent: "space-between",
    },
    item: {
      padding: 3,
      color: themes,
    },
    contactHeader: {
      paddingTop: 20,
      paddingBottom: 20,
      "& > *": {
        textAlign: "center",
        fontWeight: "bold",
      },
      "& > p": {
        color: "#C9C6C6",
      },
    },
    contactInfo: {
      "& > *": {
        fontWeight: "bold",
      },
    },
    divider: {
      margin: `5px 0 0 ${theme.spacing(1)}px`,
      borderTop: `1px solid ${themes}`,
    },
    modal: {
      fontFamily: "Roboto",
    },
  })
);

interface Props {}

export const FullContact: React.FC<Props> = () => {

  const { id }: any = useParams();

  let fullcontact: any[] = JSON.parse(localStorage.getItem("contacts") || "[]");
  const contactById = fullcontact.filter((e) => e.id === id);

  const [contact, setContact]: any = React.useState<any>({});

  React.useEffect(() => {
    if (contactById) {
      setContact(contactById[0]);
    }
    //eslint-disable-next-line
  }, []);

  const classes = useStyles();
  const history = useHistory();

  const deleteContact = (id: any) => {
      const getContact = fullcontact.filter((contact: any) => contact.id !== id.id)
      setContact(getContact);
      localStorage.setItem('contacts', JSON.stringify(getContact))
  }
   
  const onClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    Swal({
      title: "Are you sure?",
      text: "You wont be able to revert this!",
      icon: "warning",
      dangerMode: true,
      className: `${classes.modal}`,
    }).then((result) => {
      if (result) {
        deleteContact(contact);
        history.push('/');
      }
    });
  };

  const { name, phone, mobile, birthdate, workmail, email, address }: any = contact;

  return (
    <>
      <ContactBar id={id} />
      <div className={classes.root}>
        <div className={classes.items}>
          <IconButton className={`far fa-star ${classes.item}`} />
          <IconButton
            className={`far fa-trash-alt ${classes.item}`}
            onClick={onClickDelete}
          />
        </div>
        <Avatar className={classes.contactImg} />
        <div className={classes.contactHeader}>
          <Typography variant="h5">
              {name}
          </Typography>
          <Typography variant="body1">
              {birthdate}
           </Typography>
        </div>
        <hr className={classes.divider} />
        <div className={classes.contactInfo}>
          <Grid container>
            <Grid item xs={3}>
              <Icon
                className={`far fa-comment-dots`}
                style={{ color: themes }}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {mobile}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                style={{ color: "#939090", float: "right", fontWeight: "bold" }}
              >
                mobile
              </Typography>
            </Grid>
          </Grid>
        </div>
        <hr className={classes.divider} />
        <div className={classes.contactInfo}>
          <Grid container>
            <Grid item xs={3}>
              <Icon
                className={`far fa-comment-dots`}
                style={{ color: themes }}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {phone}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                style={{ color: "#939090", float: "right", fontWeight: "bold" }}
              >
                phone
              </Typography>
            </Grid>
          </Grid>
        </div>
        <hr className={classes.divider} />
        <div className={classes.contactInfo}>
          <Grid container>
            <Grid item xs={8} style={{ paddingLeft: 98 }}>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {email}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                style={{ color: "#939090", float: "right", fontWeight: "bold" }}
              >
                email
              </Typography>
            </Grid>
          </Grid>
        </div>
        <hr className={classes.divider} />
        <div className={classes.contactInfo}>
          <Grid container>
            <Grid item xs={8} style={{ paddingLeft: 98 }}>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {workmail}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                style={{ color: "#939090", float: "right", fontWeight: "bold" }}
              >
                email
              </Typography>
            </Grid>
          </Grid>
        </div>
        <hr className={classes.divider} />
        <div className={classes.contactInfo}>
          <Grid container>
            <Grid item xs={3}>
              <Icon
                className={`fas fa-map-marked-alt`}
                style={{ color: themes }}
              />
            </Grid>
            <Grid item xs={2} style={{ paddingRight: 162 }}>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {address}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                style={{ color: "#939090", float: "right", fontWeight: "bold" }}
              >
                address
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
