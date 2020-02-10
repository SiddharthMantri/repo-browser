import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardActionArea, Button, Typography, CardMedia } from '@material-ui/core';
import { SearchResultType } from '../../types/types';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: "12px"
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
});

const UserCard = ({ user, onClick }: { user: SearchResultType, onClick: any }) => {
    const classes = useStyles();
    const onClickLoad = () => {
        onClick(user.login)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={user.login}
                    height="140"
                    image={user.avatar_url}
                    title={user.avatar_url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {user.login}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={onClickLoad}>
                    View profile
                </Button>
            </CardActions>
        </Card>
    );
}
export default UserCard