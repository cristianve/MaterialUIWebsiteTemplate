import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';




export default function MediaCard(props) {

    return (

        <Card sx={{ maxWidth: 345, height: 220, paddingLeft: 2, paddingTop: 2 }} elevation={12}>
            <Avatar
                sx={{ bgcolor: blue[500], width: 50, height: 50, padding: 1}}
                alt="Remy Sharp"
                src={props.icon}
            />

            <CardContent align="left"  >
                <Typography component={'span'} gutterBottom variant="h5" fontWeight={700} >
                    {props.name}
                </Typography>
                <br/>
                <Typography component={'span'} variant={'body2'} color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>

        </Card>

    );
}
