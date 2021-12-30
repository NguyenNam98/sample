import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Card, CardHeader, Chip, Grid, Paper } from '@material-ui/core';
import GridContainer from '@jumbo/components/GridContainer';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import TitleCard from '../../../../components/TitleCard';

import TablNewScript from './tableNewScript/index';
import { menuActions } from './menuActions';
import { notificationError } from 'redux/actions/Notification';
import createAction from '../../../../helpers/createActions';
import { deleteAction, updateAction, setAllAction } from 'redux/actions/ActionFacebook';
import {changeCreateButton} from 'redux/actions/ChangeElementScript'

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            width: '100%',
        },
    },
    card: {
        '& .MuiCardHeader-title': {
            fontSize: '22px',
        },
    },
    action: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
        borderRadius: '10px',
        backgroundColor: '#E6E9ED',
        paddingLeft: 30,
        cursor: 'pointer',
    },
    avatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: '50%',
        cursor: 'pointer',
        marginRight: 15,
    },
}));

export default function AddScript(props) {
    const classes = useStyles();
    const {
        addNewScript,
        actions,
        handleAddNewAction,
        nameScript,
        setNameScript,
        handleModifyCurrentScript,
    } = props;

    const dispatch = useDispatch();
    const {isModifyBtn, nameElement} = useSelector(({elementInScript}) => elementInScript)
    const handleInputNameScript = e => {
        setNameScript(e.target.value);
    };
    const handleChooseAction = e => {
        let id = e.currentTarget.id;
        let newAction = createAction(Number(id));
        handleAddNewAction(newAction);
    };
    // tao moi script
    const handleClickCreateScript = () => {
        if (!nameScript) {
            let err = 'Vui lòng đặt tên cho kịch bản !';
            dispatch(notificationError(err));
        } else if (actions.length === 0) {
            let err = 'Vui lòng chọn tác vụ cho kịch bản !';
            dispatch(notificationError(err));
        } else {
            let itemErr = [];
            actions.forEach((item, index) => {
                if (
                    Object.values(item).some(k => {
                        return k.length === 0 || k ==='';
                    })
                ) {
                    itemErr.push(index + 1);
                }
            });
            if (itemErr.length === 0) {
                let script = {
                    name: nameScript,
                    actions: actions,
                };
                addNewScript(script);
            } else {
                let err = `Vui lòng cài đặt lại các tác vụ : ${itemErr.toString()} `;
                dispatch(notificationError(err));
            }
        }
    };
    // cai dat lai action
    const handleChangeSettingAction = (data, position) => {
        dispatch(updateAction(data, Number(position)))
    };
    // sua script trong list
    const handleModifyScript = () => {
        if (!nameScript) {
            let err = 'Vui lòng đặt tên cho kịch bản !';
            dispatch(notificationError(err));
        } else if (actions.length === 0) {
            let err = 'Vui lòng chọn tác vụ cho kịch bản !';
            dispatch(notificationError(err));
        } else {
            let itemErr = [];
            actions.forEach((item, index) => {
                
                if (
                    Object.values(item).some(k => {
                        return k.length === 0 || k ==='';
                    })
                ) {
                    itemErr.push(index + 1);
                }
            });
            if(itemErr.length === 0){

                let updateScript = {
                    name: nameScript,
                    actions: actions,
                };
                handleModifyCurrentScript(updateScript);
            }else{
                let err = `Vui lòng cài đặt lại các tác vụ : ${itemErr.toString()} `;
                dispatch(notificationError(err));
            }
        }
    };
    useEffect(() => {
        return () => {
            dispatch(setAllAction([]))
            dispatch(changeCreateButton())
        }
    }, [])

    return (
        <Card>
            <CardHeader title={<TitleCard text="Thêm kịch bản" />} className={classes.card} />
            <GridContainer style={{ padding: '20px' }}>
                <Grid item xs={10}>
                    <GridContainer className={classes.root}>
                        <Grid item xs={4}>
                            <Box
                                id="name-script"
                                component="p"
                                style={{
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    color: '#222',
                                    paddingLeft: '15px',
                                }}>
                                {nameElement}
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                maxRows={4}
                                value={nameScript}
                                onChange={handleInputNameScript}
                            />
                        </Grid>
                    </GridContainer>
                </Grid>
                <Grid item xs={12}>
                    { !isModifyBtn && (
                        <Box display="flex" justifyContent="flex-end">
                            <Chip
                                label="Tạo kịch bản"
                                clickable
                                color="primary"
                                onClick={handleClickCreateScript}
                                size="small"
                            />
                        </Box>
                    )}
                    {isModifyBtn && (
                        <Box display="flex" justifyContent="flex-end" onClick={handleModifyScript}>
                            <Chip label="Sửa kịch bản" clickable color="primary" />
                        </Box>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center" style={{ color: '#222' }}>
                        Danh sách nhiệm vụ cài đặt cho kịch bản
                    </Box>
                    <Paper>
                        <TablNewScript
                            data={actions}
                            changeSettingActions={handleChangeSettingAction}
                        />
                    </Paper>
                </Grid>
                <GridContainer
                    style={{
                        padding: '20px',
                        maxHeight: '400px',
                        overflowY: 'scroll',
                        marginTop: '20px',
                    }}>
                    {menuActions.map((action, index) => {
                        return (
                            <Grid item xs={12} key={index} onClick={handleChooseAction} id={action.id}>
                                <Box className={classes.action}>
                                    <Box className={classes.avatar} bgcolor={action.bgColor} color={action.color}>
                                        {action.icon}
                                    </Box>
                                    <Box fontSize={14} fontWeight={500} color="text.primary">
                                        {action.name}
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })}
                </GridContainer>
            </GridContainer>
        </Card>
    );
}
