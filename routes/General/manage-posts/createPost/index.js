import React, { useEffect, useState } from 'react';
import { Card, CardHeader, Grid, makeStyles } from '@material-ui/core';
import TitleCard from 'components/TitleCard';
import GridContainer from '@jumbo/components/GridContainer';
import { useForm } from 'react-hook-form';
import { createPost, setContentPost, setCreateButton, setNamePost, setPost, updatePost } from 'redux/actions/PostsFacebook';
import { useDispatch, useSelector } from 'react-redux';
import FormPost from 'components/ActionComponent/posting';
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
}));
const CreatePost = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { namePost, contentPost, urlImg, isUpdateButton, idCurrentPost } = useSelector(
        ({ postsFacebook }) => postsFacebook,
    );
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    const funcSubmit = dataForm => {
        let data = {
            name: dataForm.namePost,
            content: dataForm.contentPost,
            url_image: urlImg.map(item => (item.path ? item.path : item)),
        };
        dispatch(setNamePost(dataForm.namePost));
        dispatch(setContentPost(dataForm.contentPost));
        if (isUpdateButton) {
            dispatch(updatePost(data, idCurrentPost));
        } else {
            dispatch(createPost(data));
        }
    };
    useEffect(() => {
        setValue('namePost', namePost);
        setValue('contentPost', contentPost);
    }, [namePost, contentPost]);
    useEffect(() => {
        return () => {
            dispatch(setPost({}));
            dispatch(setCreateButton());
        };
    }, []);
    return (
        <Card>
            <CardHeader title={<TitleCard text="Thêm bài viết" />} className={classes.card} />
            <GridContainer>
                <Grid xs={12} item>
                    <FormPost
                        errors={errors}
                        register={register}
                        funcSubmit={handleSubmit(funcSubmit)}
                        nameButton={isUpdateButton ? 'Cập nhập' : 'Tạo bài viết'}
                    />
                </Grid>
            </GridContainer>
        </Card>
    );
};

export default CreatePost;
