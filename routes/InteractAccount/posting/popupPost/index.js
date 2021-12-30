import { Box, Dialog, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { CloseRounded } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
    closeModifyPopup,
    setContentPost,
    setNamePost,
    setPost,
    setUrlImgPost,
    updatePost,
} from 'redux/actions/PostsFacebook';
import GridContainer from '@jumbo/components/GridContainer';
import FormPost from 'components/ActionComponent/posting';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
    dialog: {
        '& .MuiDialog-paper': {
            // overflow: 'hidden',
        },
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '600px',
        },
    },
    tableTitle: {
        fontSize: '18px',
        paddingLeft: '24px',
        fontWeight: '700',
        color: '#555',
    },
    postContainer: {
        paddingLeft: '60px',
        width: '100%',
    },
}));

function ModifyPost(props) {
    const classes = useStyles();
    const { openModifyPost, postData } = props;
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    const { urlImg } = useSelector(({ postsFacebook }) => postsFacebook);
    useEffect(() => {
        dispatch(setUrlImgPost(postData.url_image));
        dispatch(setNamePost(postData.name));
        dispatch(setContentPost(postData.content));
        setValue('namePost', postData.name);
        setValue('contentPost', postData.content);
    }, [postData]);
    useEffect(() => {
        return () => {
            dispatch(setPost({}));
        };
    }, []);
    const funcSubmit = dataForm => {
        let data = {
            name: dataForm.namePost,
            content: dataForm.contentPost,
            url_image: urlImg.map(item => (item.path ? item.path : item)),
        };
        dispatch(setNamePost(dataForm.namePost));
        dispatch(setContentPost(dataForm.contentPost));
        dispatch(updatePost(data, postData._id));
    };
    return (
        <div>
            <Dialog
                fullWidth={true}
                open={openModifyPost}
                aria-labelledby="form-dialog-title"
                className={classes.dialog}
                scroll="paper">
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    style={{
                        paddingTop: '20px',
                        paddingRight: '20px',
                        cursor: 'pointer',
                    }}>
                    <CloseRounded
                        onClick={() => {
                            dispatch(closeModifyPopup());
                            dispatch(setPost({}));
                        }}
                    />
                </Box>
                <Box component="p" className={classes.tableTitle}>
                    Thông tin bài viết
                </Box>
                <GridContainer className={classes.postContainer}>
                    <Grid item xs={12}>
                        <FormPost
                            register={register}
                            errors={errors}
                            funcSubmit={handleSubmit(funcSubmit)}
                            nameButton={'Cập nhập'}
                        />
                    </Grid>
                </GridContainer>
            </Dialog>
        </div>
    );
}

export default ModifyPost;
