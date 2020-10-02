import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    large: {
        width: 100,
        height: 100,
    },
    styleRoot: {
        display: 'flex', 
        justifyContent: 'center'
    },
    styleSelf: {
        marginRight: 20, 
        alignSelf: 'center'
    }
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.styleRoot}>
                    <div className={classes.styleSelf}>
                        <Avatar alt="Remy Sharp" src={require("../assets/img/Kevin.jpg")} className={classes.large} />
                    </div>
                    <div>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Name Card
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Kevin Prakarsa Barrang Randa
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Graduated from Telkom University
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly usefull to the other.
                        <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}