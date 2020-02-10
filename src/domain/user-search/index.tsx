import React, { useState, useEffect } from 'react';
import { Grid, TextField, makeStyles, List, ListItem, LinearProgress } from '@material-ui/core';
import useAsyncInput from '../../hooks/useAsyncInput';
import UserCard from '../../components/UserCard';
import { SearchResultType, GithubUserType, Orgs, RepoType } from '../../types/types';
import API from '../../api';
import UserData from '../user-data';
import ErrorBoundary from '../../components/ErrorBoundary';


const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    resultContainer: {
        background: "white",
        height: `calc(100vh - 64px)`,
        padding: theme.spacing(2),
        width: '100%',
        borderRight: `1px solid ${theme.palette.grey[200]}`
    },
    scrollableResults: {
        maxHeight: `calc(100vh - 112px)`,
        overflow: 'scroll'
    }
}))

const UserSearch = () => {
    const classes = useStyles();
    const [searchString, onStringChange, response, loading] = useAsyncInput('');
    const [user, setUser] = useState<GithubUserType>({} as GithubUserType)
    const [orgs, setOrgs] = useState<Array<Orgs>>([] as Array<Orgs>)
    const [repos, setRepos] = useState<Array<RepoType>>([] as Array<RepoType>)
    const getRepos = (url: string) => {
        API.getRepos(url).then((repos) => {
            if (repos.status === 200) {
                setRepos(repos.data)
            }
        })
    }
    const loadUserData = (userString: string) => {
        API.userData(userString).then(([user, orgs]) => {
            if (user.status === 200) {
                setUser(user.data)
                getRepos(user.data.repos_url);
            }
            if (orgs.status === 200) {
                setOrgs(orgs.data)
            }
        })
    }
    useEffect(() => {
        if (searchString === '') {
            setUser({} as GithubUserType)
            setOrgs([] as Array<Orgs>)
            setRepos([] as Array<RepoType>)
        }
    }, [searchString])
    return (
        <Grid container spacing={0}>
            <Grid container item xs={3}>
                <div className={classes.resultContainer}>
                    <TextField value={searchString} onChange={onStringChange} fullWidth placeholder={"Start by typing a Github Username..."} />
                    {loading ? <LinearProgress /> : null}
                    <div className={classes.scrollableResults}>
                        <ErrorBoundary>
                            {response ? response.items.map((user: SearchResultType, i: number) => (
                                <UserCard user={user} key={i} onClick={loadUserData} />
                            )) : null}
                        </ErrorBoundary>
                    </div>
                </div>

            </Grid>
            <Grid container item xs={9} spacing={1}>
                <ErrorBoundary>
                    {user.login || orgs.length > 0 ? <UserData classes={classes} user={user} orgs={orgs} repos={repos} /> : null}
                </ErrorBoundary>
            </Grid>
        </Grid >
    )
}
export default UserSearch