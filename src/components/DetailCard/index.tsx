import { List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { GithubUserType, RepoType } from '../../types/types';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const DetailCard = ({ user }: { user: GithubUserType }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="user-login" className={classes.avatar}>
                        {user && user.login && user.login.length > 0 ? user.login[0] : ''}
                    </Avatar>
                }
                title={user.login}
                subheader={user.name}
            />
            <CardMedia
                className={classes.media}
                image={user.avatar_url}
                title={user.login}
            />
            <CardContent>
                <List dense disablePadding>
                    <ListItem>
                        <ListItemText primary="Repositories" />
                        <ListItemSecondaryAction>
                            <ListItemText primary={user.public_repos} />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Followers" />
                        <ListItemSecondaryAction>
                            <ListItemText primary={user.followers} />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}

export default DetailCard;