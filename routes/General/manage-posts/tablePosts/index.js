import { Card, CardHeader, Chip, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TitleCard from 'components/TitleCard';
import GridContainer from '@jumbo/components/GridContainer';
import { deletePosts, setCurrentIdPost, setPost, setUpdateButton } from 'redux/actions/PostsFacebook';
import TablePostComponent from 'components/Table/tablePosts';
import { EventName } from '@jumbo/constants/electron/EventName';
const { ipcRenderer } = window.require('electron');

const customStyles = {
    rows: {
        style: {
            height: '10px',
            minheight: '30px',
        },
    },
};
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
    header: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
    },
    actionsHeader: {
        display: 'flex',
        paddingLeft: '20%',
        alignItems: 'center',
    },
    stopScriptBtn: {
        paddingRight: '20px',
        paddingTop: '10px',
    },
}));

const TablePost = props => {
    const classes = useStyles();
    const { data } = props;
    const dispatch = useDispatch();
    const { dataPosts } = useSelector(({ postsFacebook }) => postsFacebook);
    const handleDeletePost = e => {
        let data = {
            ids: [e.currentTarget.id],
        };
        dispatch(deletePosts(data));
    };
    const handleModifyScript = e => {
        const { name, content, url_image } = dataPosts.find(item => item._id === e.currentTarget.id);
        let arrBase64 = ipcRenderer.sendSync(EventName.convertBase64, url_image);
        let post = {
            namePost: name,
            contentPost: content,
            urlImg: arrBase64,
        };
        dispatch(setPost(post));
        dispatch(setUpdateButton());
        dispatch(setCurrentIdPost(e.currentTarget.id));
    };
    const columns = [
        {
            name: 'STT',
            selector: (row, index) => index + 1,
            width: '60px',
        },
        {
            name: 'Tên bài viết',
            selector: row => row.name,
            maxWidth: ' 200px',
        },
        {
            name: 'Nội dung bài viết',
            selector: row => row.content,
            maxWidth: '200px',
        },
        {
            width: '60px',
            cell: row => {
                return (
                    <Chip
                        id={row._id}
                        onClick={handleModifyScript}
                        style={{
                            backgroundColor: '#59BACC',
                            cursor: 'pointer',
                        }}
                        label="Xem"
                        size="small"
                    />
                );
            },
        },
        {
            width: '60px',
            cell: (row, index) => {
                return (
                    <Chip
                        id={row._id}
                        onClick={handleDeletePost}
                        label="Xóa"
                        style={{
                            backgroundColor: '#E2574C',
                        }}
                        size="small"
                    />
                );
            },
        },
    ];
    return (
        <Card>
            <CardHeader title={<TitleCard text="Danh sách bài viết" />} className={classes.card} />
            <GridContainer style={{ padding: '20px' }}>
                <Grid item xs={12}>
                    <TablePostComponent data={data} columns={columns} selectableRows={false} pagination={true} />
                </Grid>
            </GridContainer>
        </Card>
    );
};

export default TablePost;
