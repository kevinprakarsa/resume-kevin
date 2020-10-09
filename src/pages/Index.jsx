import React from 'react';
import Header from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Project from '../components/Project';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Index() {

    return (
        <div>
            <CssBaseline />
            <main>
                <Header />
                <Container maxWidth="md">
                    <Project />
                    <Resume />
                    <Contact />
                </Container>
            </main>
            <Footer />
        </div>
    );
}