import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisitIcon from '@material-ui/icons/AddToHomeScreen';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(4)
    },
    base: {
        minWidth: 275,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 20,
        textAlign: 'left',
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(7),
        boxShadow: '-9px 9px 20px rgb(51 51 51 / 17%), -10px 8px 40px rgb(232 232 232 / 23%)'
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        lineHeight: 2.2,
        textAlign: 'left',
        paddingRight: theme.spacing(5)
    },
    img: {
        maxHeight: 280,
        boxShadow: '-10px 12px 7px rgb(218 218 218 / 25%), 8px 3px 20px rgb(226 226 226 / 23%)',
        marginBottom: '-10px',
        marginRight: '-2px'
    },
    buttonSpacing: {
        paddingTop: theme.spacing(5)
    },
    button: {
        backgroundColor: '#555555',
        color: '#fff',
    },
    buttonIcon: {
        marginRight: 10
    },
    removeUnderline: {
        textDecoration: 'none'
    }
}));

export default function ProjectCard({ ...props }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.base}>
                <Grid container>
                    <Grid item xs>
                        <CardContent>
                            <Typography variant="h4" className={classes.title}>
                                {props.title}
                            </Typography>
                            <Typography variant="body2" className={classes.description}>
                                {props.description}
                            </Typography>
                            <div className={classes.buttonSpacing}>
                                <a href={props.link} target="_blank" rel="noopener noreferrer" className={classes.removeUnderline}>
                                    <Button variant="contained" size="large" className={classes.button}>
                                        <VisitIcon className={classes.buttonIcon} /> Visit Website
                                    </Button>
                                </a>
                            </div>
                        </CardContent>
                    </Grid>
                    <Grid item xs>
                        <img src={props.img} className={classes.img} alt="" />
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}