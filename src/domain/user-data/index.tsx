import { Grid } from '@material-ui/core';
import React from 'react';
import DetailCard from '../../components/DetailCard';
import OrgsCard from '../../components/OrgsCard';
import ReposCard from '../../components/ReposCard';
import { GithubUserType, Orgs, RepoType } from '../../types/types';

const UserData = ({ user, orgs, repos, classes }: { user: GithubUserType, orgs: Array<Orgs>, repos: Array<RepoType>, classes: Record<"toolbar" | "resultContainer" | "scrollableResults", string> }) => (
    <>
        <Grid item xs={12} lg={4}>
            <DetailCard user={user} />
        </Grid>
        <Grid item xs={12} lg={4}>
            <OrgsCard orgs={orgs} classes={classes} />
        </Grid>
        <Grid item xs={12} lg={4}>
            <ReposCard repos={repos} classes={classes} />
        </Grid>
    </>
)
export default UserData