import React from 'react';
import Categories from './Categories';
import BlogList from './../pages/BlogList';
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import AddNew from './../pages/AddNew';
import BlogEdit from './../pages/BlogEdit';

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width = {4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width = {12}>
                        <Route exact path ="/" component = {BlogList} />
                        <Route exact path ="/blogs" component = {BlogList} />
                        <Route path ="/blogs/edit/:name" component = {BlogEdit} />
                        <Route path ="/blogs/addnew" component = {AddNew} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
