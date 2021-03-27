import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    media: {
        height: 140,
    },
});

const AdminMenuCard = ({title, body, onClick, imageSrc}) => {
    const classes = useStyles();
    return (
        <div style={{paddingRight: 10, width: '50%'}}>
            <Card className={classes.root}>
                <CardActionArea onClick={onClick}>
                    <CardMedia
                        className={classes.media}
                        image={imageSrc}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{color: '#151719'}}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="middle" color="primary" onClick={onClick}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Manage
                        </Typography>
                    </Button>
                </CardActions>
            </Card>
        </div>

    );
}

export default AdminMenuCard;
