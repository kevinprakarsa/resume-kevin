import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        boxShadow: 'none'
    },
    pos: {
        marginBottom: 12,
    },
});

export default function ResumeCard({ ...props }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} variant="h6" align="left" gutterBottom>
                    {props.title}
                </Typography>
                <Typography className={classes.pos} align="left">
                    {props.description}
                </Typography>
                <Typography variant="body1" align="left">
                    {props.year}
                </Typography>
            </CardContent>
        </Card>
    );
}