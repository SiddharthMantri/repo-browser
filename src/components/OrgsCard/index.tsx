import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import { Orgs } from '../../types/types';


const OrgsCard = ({ orgs, classes }: { orgs: Array<Orgs>, classes: Record<"toolbar" | "resultContainer" | "scrollableResults", string> }) => (
    <Card>
        <CardContent className={classes.scrollableResults}>
            <Typography variant='h6'>
                Organisations
            </Typography>
            {orgs.length === 0 ?
                <Typography variant="body1">
                    This user is not part of any Github Organisations
                </Typography>
                : null}
            <List dense disablePadding>
                {orgs.map((org, i) => (
                    <ListItem key={i}>
                        <ListItemText primary={org.login} secondary={org.description} />
                    </ListItem>
                ))}
            </List>
        </CardContent>
    </Card>
)
export default OrgsCard;