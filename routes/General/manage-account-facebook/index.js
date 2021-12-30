import React from 'react';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import { Box, Card, CardHeader } from '@material-ui/core';

import AccountsList from 'components/Table/AccountsList';

import TitleCard from 'components/TitleCard';

const useStyles = makeStyles(theme => ({
    badge: {
        color: theme.palette.common.white,
        fontSize: 12,
        height: 24,
    },
    dots: {
        height: 8,
        width: 8,
        borderRadius: '50%',
        marginRight: 10,
    },
    tag_danger: {
        backgroundColor: theme.palette.error.main,
    },
    tag_success: {
        backgroundColor: theme.palette.success.main,
    },
    // hide:{
    //   display:none
    // }
}));

const ManagaAccountFacebook = () => {
    const classes = useStyles();
    const configTable = {
        isOpenButton: true,
        isSelect: true,
        buttonShowInfo: true,
    };
    const columns = [
        {
            name: 'Live',
            selector: row => (
                <Box className={clsx(classes.dots, classes[`tag_${row.status === 0 ? 'success' : 'danger'}`])} />
            ),
            width: '60px',
            maxWidth: '60px',
        },
        {
            name: 'User ID',
            selector: row => row.uuid,
        },
        {
            name: 'Password',
            selector: (row, index) => '*****',
            width: '150px',
            maxWidth: '150px',
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: '2FA',
            selector: (row, index) => row['2fa_key'],
        },
        // {
        //   name: "Friends",
        //   selector: row => 0,
        //   width: "80px",
        //   maxWidth: "80px"
        // },
        // {
        //   name: "Groups",
        //   selector: row => 0,
        //   width: "80px",
        //   maxWidth: "80px"
        // }
    ];
    return (
        <PageContainer heading="Quản lý tài khoản">
            <Card>
                <CardHeader title={<TitleCard text="Quản lý tài khoản" />} className={classes.card} />

                <AccountsList
                    columns={columns}
                    configTable={configTable}
                    // componentSubHeader={<SubHeader />}
                    subHeader={true}
                    modifyTable={true}
                    filter={true}
                    filterSearch={true}
                    filterStatus={true}
                    selectByNumber={true}
                />
            </Card>
        </PageContainer>
    );
};

export default ManagaAccountFacebook;
