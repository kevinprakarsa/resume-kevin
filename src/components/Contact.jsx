import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ContactCard from './Card/Contact';

const useStyles = makeStyles((theme) => ({
    containerSpacing: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(6),
    },
    spacing: {
        paddingBottom: theme.spacing(5),
    },
    containerPadding: {
        paddingTop: 20
    }
}));

export default function Resume() {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.containerSpacing}>
                <Grid item xs>
                    <Typography variant="h3" align="left" color="textPrimary" className={classes.spacing}>
                        <b>CONTACT</b>
                    </Typography>
                    <div>
                        <ContactCard />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}