import React, {useEffect, useState} from 'react';
import { SectionProps } from '../../../utils/SectionProps';
import classNames from "classnames";
import PsychologistService from "../../../utils/data/axios/services/PsychologistService";
import {CircularProgress, Typography} from "@material-ui/core";
import ApplicantCard from "../../elements/ApplicantCard";
import Button from "@material-ui/core/Button";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const ManagePsychologists = ({
                       className,
                       topOuterDivider,
                       bottomOuterDivider,
                       topDivider,
                       bottomDivider,
                       hasBgColor,
                       invertColor,
                       ...props
                   }) => {
    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );
    const innerClasses = classNames(
        'hero-inner section-inner row col-md-12',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const service = new PsychologistService();

    const [state, setState] = useState({
        applicants: [], loading: true, modalItem: {}, oldApplicants: null,
        loadingOldApplicants: false
    });

    const onResponse = (applicants) => {
        setState(prevState => {
            return {
                ...prevState,
                applicants: applicants,
                loading: false
            }
        })
    }

    useEffect(() => {
        service.getApplicants()
            .then(res => {
                onResponse(res.data);
            })
            .catch(err => {
                console.log(err.message);
                onResponse([]);
            })
    }, []);

    const getOldApplicants = () => {
        setState(prevState => {
            return {
                ...prevState,
                loadingOldApplicants: true
            }
        })
        service.getOldApplicants()
            .then(res => {
                setState(prevState => {
                    return {
                        ...prevState,
                        oldApplicants: res.data,
                        loadingOldApplicants: false
                    }
                })
            })
            .catch(err => {
                console.log(err.message);
                setState(prevState => {
                    return {
                        ...prevState,
                        loadingOldApplicants: false
                    }
                })
            })
    }

    const hideOlderApplicants = () => {
        setState(prevState => {
            return {
                ...prevState,
                oldApplicants: null
            }
        })
    };
    return (
        <section className={outerClasses}>
            <div className="container">
                <div className={innerClasses} style={{display: "flex", flexWrap: "wrap"}}>
                    {state.loading && <CircularProgress size={100} style={{marginLeft: "auto", marginRight: "auto"}}/>}
                    {state.applicants.length === 0 && !state.loading &&
                    <div style={{display: "flex", marginBottom: 20}}>
                        <Typography>There is no new applicant currently. To load older applicants, </Typography>
                        <Button onClick={getOldApplicants} style={{marginLeft: 10}} variant={"contained"}
                                color={"primary"}>Click here</Button>
                        {state.oldApplicants && state.oldApplicants.length > 0 &&
                        <Button onClick={hideOlderApplicants} style={{marginLeft: 10}} variant={"contained"}
                                color={"primary"}>Hide Older Applicants</Button>}
                    </div>
                    }
                    {state.loadingOldApplicants &&
                    <CircularProgress size={50} style={{marginLeft: "auto", marginRight: "auto"}}/>}
                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", width: '100%'}}>
                        {!state.loadingOldApplicants && state.oldApplicants &&
                        state.oldApplicants.map((item) => <ApplicantCard item={item}
                                                                         confirmCallback={() => service.confirmApplicant(item)}
                                                                         rejectCallback={() => service.rejectApplicant(item)}/>)
                        }
                        {state.oldApplicants && state.oldApplicants.length === 0 &&
                        <Typography>There is no older applicants neither</Typography>}
                        {
                            !state.loading &&
                            state.applicants.map((item) => <ApplicantCard item={item}
                                                                          confirmCallback={() => service.confirmApplicant(item)}
                                                                          rejectCallback={() => service.rejectApplicant(item)}/>)
                        }

                    </div>

                </div>
            </div>
        </section>
    );
};

ManagePsychologists.propTypes = propTypes;
ManagePsychologists.defaultProps = defaultProps;

export default ManagePsychologists;
