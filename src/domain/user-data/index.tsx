import { Grid } from '@material-ui/core';
import React from 'react';
import DetailCard from '../../components/DetailCard';
import OrgsCard from '../../components/OrgsCard';
import ReposCard from '../../components/ReposCard';
import { GithubUserType, Orgs, RepoType } from '../../types/types';
import ErrorBoundary from '../../components/ErrorBoundary';

const UserData = ({ user, orgs, repos, classes }: { user: GithubUserType, orgs: Array<Orgs>, repos: Array<RepoType>, classes: Record<"toolbar" | "resultContainer" | "scrollableResults", string> }) => (
    <>
        <Grid item xs={12} lg={4}>
            <ErrorBoundary>
                <DetailCard user={user} />
            </ErrorBoundary>
        </Grid>
        <Grid item xs={12} lg={4}>
            <ErrorBoundary>
                <OrgsCard orgs={orgs} classes={classes} />
            </ErrorBoundary>
        </Grid>
        <Grid item xs={12} lg={4}>
            <ErrorBoundary>
                <ReposCard repos={repos} classes={classes} />
            </ErrorBoundary>
        </Grid>
    </>
)
export default UserData