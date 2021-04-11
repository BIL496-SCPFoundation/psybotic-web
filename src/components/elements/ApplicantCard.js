import React, {useEffect, useState} from 'react';
import {Card, CardActionArea, CardActions, CardMedia, CircularProgress, Link, makeStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import noImage from '../../assets/images/no_image.png';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ReactComponent as NameIcon} from '../../assets/images/name.svg';
import {ReactComponent as OpinionIcon} from '../../assets/images/opinion.svg';
import {ReactComponent as AgeIcon} from '../../assets/images/age-group.svg';
import {ReactComponent as HistoryIcon} from '../../assets/images/history.svg';
import {ReactComponent as CVIcon} from '../../assets/images/cv.svg';

import '../../assets/less/ApplicantCard.css';
import firebase from "firebase";
import GetUser from "../../utils/GetUser";
import PsychologistService from "../../utils/data/axios/services/PsychologistService";
let storage = firebase.storage();
const psychologistService = new PsychologistService();
const storageHost = 'https://www.googleapis.com/storage/v1/b/psybotic.appspot.com/o/';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: 10
    },

}));

const ApplicantCard = ({item, confirmCallback, rejectCallback}) => {
    const user = GetUser();

    const classes = useStyles();

    const [state, setState] = useState({open: false, cvUrl: '#', isLoading: false, item: item})

    const handleOpen = () => {
        setState(prevState => {
            return {
                ...prevState,
                open: true
            }
        })
    }

    const setLoading = (value) => {
        setState(prevState => {
            return {
                ...prevState,
                isLoading: value
            }
        })
    }

    useEffect(() => {
        console.log(state.item)
    }, []);

    const setApproved = (value) => {
        setState(prevState => {
            return {
                ...prevState,
                item: {
                    ...prevState.item,
                    approved: value
                }
            }
        })
    }

    const setRejected = (value) => {
        setState(prevState => {
            return {
                ...prevState,
                item: {
                    ...prevState.item,
                    rejected: value
                }
            }
        })

    }

    const confirmApplicant = () => {
        setLoading(true);
        psychologistService.confirmApplicant(item)
            .then(res => {
                setApproved(true);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }

    const rejectApplicant = () => {
        setLoading(true);
        psychologistService.rejectApplicant(item)
            .then(res => {
                setRejected(true);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }

    const handleClose = () => {
        setState(prevState => {
            return {
                ...prevState,
                open: false
            }
        })
    }
    const bucket = firebase.storage().ref().bucket;
    const firebaseUrl = "https://firebasestorage.googleapis.com/v0/b/" + 'psybotic.appspot.com' + "/o/";
    const finalUrl = firebaseUrl + 'deneme.pdf';
        fetch(finalUrl, {headers: {'Authorization' : 'Firebase ' + user.token}})
            .then(res => res.json())
            .then(responseJson => {
                const url = finalUrl + "?alt=media&token=" + responseJson.downloadTokens;
                setState(prevState => {
                    return {
                        ...prevState,
                        cvUrl: url
                    }
                })
            })
    const preventDefault = (event) => event.preventDefault();

    const cancelDecision = () => {
        setLoading(true);
        psychologistService.cancelDecision(item)
            .then(res => {
                setState(prevState => {
                    return {
                        ...prevState,
                        isLoading: false,
                        item: {
                            ...prevState.item,
                            approved: false,
                            rejected: false,
                        }
                    }
                })
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false);
            });
    };
    return (
        <>
            <div style={{
                width: '33.3333%',
                paddingRight: 10,
                marginBottom: 20
            }}>
                <Card className={classes.root}>
                    <CardActionArea onClick={handleOpen}>
                        <CardMedia
                            className={classes.media}
                            image={item.imageURL ? item.imageURL : noImage}
                            title="Contemplative Reptile"
                        />
                        <CardContent style={{height: '150px', overflow: "hidden"}}>
                            <Typography gutterBottom variant="h6" component="h2" style={{color: '#151719'}}>
                                {item.firstName + ' ' + item.lastName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.biography}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {!state.item.approved && !state.item.rejected &&
                        <Button size="small" color="primary" onClick={confirmApplicant}>
                            Confirm
                        </Button>}
                        <Button size="small" color="primary" onClick={handleOpen}>
                            See more
                        </Button>
                        {!state.item.approved && !state.item.rejected &&
                        <Button size="small" color="primary" onClick={rejectApplicant}>
                            Reject
                        </Button>}

                    </CardActions>
                </Card>

            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={state.open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={state.open}>
                    <div className={'DetailsModel ' + classes.paper}>
                        <div className="LeftContainer">
                            <img src={item.imageURL ? item.imageURL : noImage} alt=""/>
                        </div>
                        <List
                            aria-labelledby="Applicant information"
                            className="RightContainer">
                            <List>
                                <Typography style={{fontSize: '0.8rem', marginLeft: 16}}
                                            className={'Label'}>Titles</Typography>
                                {item.titles && item.titles.map((title, index) => (
                                    <ListItem className="ListItem">
                                        <ListItemText className={'ListText'} primary={index + 1 + "-" + title}/>
                                    </ListItem>
                                ))}
                            </List>

                            <div className="NameContainer">
                                <ListItem className={'ListItem'}>
                                    <Typography className={'Label'}>First Name</Typography>
                                    <ListItemIcon className={'IconContainer'}>
                                        <NameIcon className={'Icon'}/>
                                    </ListItemIcon>
                                    <ListItemText className={'ListText'} primary={item.firstName}/>
                                </ListItem>
                                <ListItem className={'ListItem'}>
                                    <Typography className={'Label'}>Last Name</Typography>
                                    <ListItemIcon className={'IconContainer'}>
                                        <NameIcon className={'Icon'}/>
                                    </ListItemIcon>
                                    <ListItemText className={'ListText'} primary={item.lastName}/>
                                </ListItem>
                            </div>
                            <ListItem className={'ListItem'}>
                                <Typography className={'Label'}>Expertise</Typography>
                                <ListItemIcon className={'IconContainer'}>
                                    <OpinionIcon className={'Icon'}/>
                                </ListItemIcon>
                                <ListItemText className={'ListText'} primary={item.expertise}/>
                            </ListItem>
                            <ListItem className={'ListItem'}>
                                <Typography className={'Label'}>Age of Interest</Typography>
                                <ListItemIcon className={'IconContainer'}>
                                    <AgeIcon className={'Icon'}/>
                                </ListItemIcon>
                                <ListItemText className={'ListText'} primary={item.ageOfInterest}/>
                            </ListItem>
                            <List>
                                <Typography style={{fontSize: '0.8rem', marginLeft: 16}}
                                            className={'Label'}>Educations</Typography>
                                {item.educations && item.educations.map((education, index) => (
                                    <ListItem className="ListItem">
                                        <ListItemText className={'ListText'} primary={index + 1 + "-" + education}/>
                                    </ListItem>
                                ))}
                            </List>
                            <ListItem className={'ListItem'}>
                                <Typography className={'Label'}>Biography</Typography>
                                {/*<ListItemIcon className={'IconContainer'}>*/}
                                {/*    <HistoryIcon className={'Icon'}/>*/}
                                {/*</ListItemIcon>*/}
                                <ListItemText className={'ListText'} primary={item.biography}/>
                            </ListItem>
                            <div style={{display: "flex", marginBottom: 20, paddingBottom: 20}}>
                                {state.isLoading ?
                                    <CircularProgress/> :
                                    (!state.item.approved && !state.item.rejected) && <>
                                        <Button
                                            onClick={confirmApplicant} variant="contained" color={'primary'}
                                            style={{marginRight: 10}}>
                                            Confirm
                                        </Button>
                                        <Button
                                            onClick={rejectApplicant} variant="contained" color={'secondary'}>
                                            Reject
                                        </Button>
                                    </>
                                }
                                {!state.isLoading && state.item.approved && <Typography color={'primary'}>Approved</Typography>}
                                {!state.isLoading && state.item.rejected && <Typography color={'secondary'}>Rejected</Typography>}
                                {!state.isLoading && (state.item.approved || state.item.rejected) &&
                                <Button
                                    style={{marginLeft: 20}}
                                    onClick={cancelDecision} variant="contained" color={'secondary'}>
                                    Cancel Decision
                                </Button>}
                            </div>

                        </List>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <Typography className={'Label'}>Download CV</Typography>
                            <Link
                                target={'_blank'}
                                href={state.cvUrl}>
                                <CVIcon id={'download_icon'} style={{width: 100, height: 100}}/>
                            </Link>
                        </div>

                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default ApplicantCard;
