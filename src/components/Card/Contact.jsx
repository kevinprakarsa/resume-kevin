import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        boxShadow: 'none'
    },
    title: {
        fontSize: 14,
    },
    content: {
        backgroundColor: '#E9E9E9',
        borderRadius: 20
    },
    base: {
        display: 'flex',
        justifyContent: 'center'
    },
    availableButton: {
        fontWeight: 'bold',
        backgroundColor: '#000',
        color: '#fff',
        textDecoration: 'none'
    },
    center: {
        alignSelf: 'center'
    },
    removeUnderline: {
        textDecoration: 'none'
    }
});

export default function ContactCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.base}>
                    <div style={{ marginRight: 30 }}>
                        <a href="mailto:EMAILADDRESS" className={classes.removeUnderline}>
                            <Button variant="contained" size="large" className={classes.availableButton}>AVAILABLE FOR HIRE</Button>
                        </a>
                    </div>
                    <div className={classes.center}>
                        <Typography className={classes.title}>
                            Want to work together ? Drop me a <b>MESSAGE</b>.
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}