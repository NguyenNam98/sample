import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import CreatePost from './createPost';
import TablePosts from './tablePosts';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'redux/actions/PostsFacebook';

const breadcrumbs = [
    { label: 'Trang chủ', link: '/' },
    { label: 'Quản lý', link: '/general/manage-account-facebook' },
    { label: 'Bài đăng', isActive: true },
];

const ManagePosts = () => {
    const dispatch = useDispatch();
    const { dataPosts } = useSelector(({ postsFacebook }) => postsFacebook);
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    // useEffect(() => {
    //     setScripts(dataScripts);
    // }, [dataScripts]);
    return (
        <PageContainer heading="Quản lý bài viết" breadcrumbs={breadcrumbs}>
            <GridContainer>
                <Grid item xs={5}>
                    <CreatePost />
                </Grid>
                <Grid item xs={7}>
                    <TablePosts data={dataPosts} />
                </Grid>
            </GridContainer>
        </PageContainer>
    );
};

export default ManagePosts;
