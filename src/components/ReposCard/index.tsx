import React from 'react';
import { RepoType } from '../../types/types';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@material-ui/core';


const ReposCard = ({ repos, classes }: { repos: Array<RepoType>, classes: Record<"toolbar" | "resultContainer" | "scrollableResults", string> }) => (
    <Card>
        <CardContent className={classes.scrollableResults}>
            <Typography variant="h6">
                Public Repositories
            </Typography>
            {repos.length === 0 ?
                <Typography variant="body1">
                    This user does not have any public repositories
                </Typography>
                : null}
            <List dense disablePadding >
                {repos.map((repo, i) => (
                    <ListItem key={i}>
                        <ListItemText primary={repo.name} secondary={repo.description} />
                    </ListItem>
                ))}
            </List>
        </CardContent>
    </Card>
)
export default ReposCard