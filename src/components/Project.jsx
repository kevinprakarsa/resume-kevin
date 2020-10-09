import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './Card/Project';

const useStyles = makeStyles((theme) => ({
    containerSpacing: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(6),
    },
    spacing: {
        paddingBottom: theme.spacing(5),
    },
    containerPadding: {
        paddingTop: 30
    }
}));

export default function Project() {
    const classes = useStyles();

    const project = [
        {
            id: 1,
            title: 'My Curriculum Vitae',
            description: <span>is a <b>Introduction About Me</b>.</span>,
            link: 'https://metrotechdigital.asia/',
            img: "https://res.cloudinary.com/metrotech-digital-asia/image/upload/v1600759250/official-web/new-portfolio/toko-digital1_jqychh.png"
        },
        {
            id: 2,
            title: 'My GitHub',
            description: <span>is a <b>GitHub Account</b> all my <b>PROJECT</b> in here.</span>,
            link: 'https://github.com/kevinprakarsa',
            img: "https://res.cloudinary.com/metrotech-digital-asia/image/upload/v1600759424/official-web/new-portfolio/toko-digital2_s7brx3.png"
        }
    ]

    return (
        <div>
            <Grid container className={classes.containerSpacing}>
                <Grid item xs>
                    <Typography variant="h3" align="left" color="textPrimary" className={classes.spacing}>
                        <b>PROJECTS</b>
                    </Typography>
                    <Grid container className={classes.containerPadding} spacing={3}>
                        {
                            project.map(x => (
                                <Grid item xs={12} lg={12} key={x.id}>
                                    <ProjectCard title={x.title} link={x.link} description={x.description} img={x.img} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}