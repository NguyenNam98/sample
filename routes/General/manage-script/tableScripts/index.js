import { Box, Card, CardHeader, Chip, Grid, makeStyles, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import {
    addListAccountAction,
    closedBrowser,
    openingBrowserWithAction,
    removeListAccountAction,
} from 'redux/actions/Accounts';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { notificationError } from 'redux/actions/Notification';
import TitleCard from 'components/TitleCard';
import GridContainer from '@jumbo/components/GridContainer';
import FilterComponent from 'components/Table/Filter';
import delay from 'helpers/delay';
import { NumberProcess, MaxNumberProcess } from '@jumbo/constants/NumberProcess';
import { setAllAction } from 'redux/actions/ActionFacebook';
import { changeModifyButton } from 'redux/actions/ChangeElementScript';

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
    processContainer:{
        "& .MuiSelect-select":{
            paddingLeft:"20px"
        }
    }
}));

const CoreTable = props => {
    const { data, deleteScript, scripts, setNameScript, setCurrentScriptModify } = props;
    const dispatch = useDispatch();
    const classes = useStyles();
    const [numberProcess, setNumberProcess] = useState(4);
    const { selectedAccount, dataAccounts } = useSelector(({ manageAccountFacebook }) => manageAccountFacebook);
    const handleDeleteScript = e => {
        deleteScript(e.currentTarget.id);
    };
    const handleModifyScript = e => {
        const currentChoseScript = scripts.find(item => item._id === e.currentTarget.id);
        setNameScript(currentChoseScript.name);
        dispatch(setAllAction(currentChoseScript.actions));
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        dispatch(changeModifyButton());
        setCurrentScriptModify(e.currentTarget.id);
    };
    const handleStopScript = () => {
        dataAccounts.forEach(account => {
            if (account.state !== 0 || account.state !== undefined) {
                dispatch(closedBrowser(account));
            }
            dispatch(removeListAccountAction(account));
        });
    };
    const handleChooseScript = async e => {
        let index = e.currentTarget.id;
        let scriptChose = data.find(item => item._id === index);
        const { actions } = scriptChose;
        if (selectedAccount.length === 0) {
            let err = ' Vui lòng chọn tài khoản !';
            dispatch(notificationError(err));
        } else {
            let account = selectedAccount.splice(0, numberProcess);
            selectedAccount.forEach(item =>
                dispatch(
                    addListAccountAction({
                        ...item,
                        actionType: TypeActionAccount.SCRIPT,
                        script: actions,
                    }),
                ),
            );
            for (let i = 0; i < numberProcess; i++) {
                const element = account[i];
                if (!element) return;
                element.i = i;
                dispatch(openingBrowserWithAction(element, TypeActionAccount.SCRIPT, actions));
                await delay(3000);
            }
        }
    };
    const columns = [
        {
            name: 'STT',
            selector: (row, index) => index + 1,
            width: '60px',
        },
        {
            name: 'Tên Kịch bản',
            selector: row => row.name,
            maxWidth: ' 300px',
        },
        {
            width: '100px',
            cell: (row, index) => {
                return (
                    <Chip
                        id={row._id}
                        // onDelete={handleDelete}
                        label="Thực hiện"
                        onClick={handleChooseScript}
                        style={{
                            backgroundColor: '#58AD69',
                        }}
                        size="small"
                    />
                );
            },
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
                        onClick={handleDeleteScript}
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
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = data.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));

    const subHeaderComponent = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };
        const handleChangeNumberProcess = e => {
            let value = e.target.value;
            setNumberProcess(value);
        };
        return (
            <React.Fragment>
                <Box className={classes.header}>
                    <Box >
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Số luồng"
                            style={{ width: '80px' }}
                            className={classes.processContainer}
                            defaultValue={numberProcess}
                            onChange={handleChangeNumberProcess}>
                            {/* genarate arr from number */}
                            {Array.from({ length: MaxNumberProcess }, (_, i) => i + 1).map(item => {
                                return (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                );
                            })}
                        </TextField>
                    </Box>
                    <Box className={classes.actionsHeader}>
                        <Box className={classes.stopScriptBtn}>
                            <Chip
                                style={{ backgroundColor: '#fc0345', color: '#fff' }}
                                label="Dừng tất cả"
                                size="small"
                                onClick={handleStopScript}
                            />
                        </Box>
                        <FilterComponent
                            setFilterText={setFilterText}
                            onClick={handleClear}
                            filterText={filterText}
                            title="Tìm kiếm kịch bản"
                            filter={true}
                            filterSearch={true}
                        />
                    </Box>
                </Box>
            </React.Fragment>
        );
    }, [filterText, resetPaginationToggle]);
    return (
        <Card>
            <CardHeader title={<TitleCard text="Danh sách kịch bản" />} className={classes.card} />
            <GridContainer style={{ padding: '20px' }}>
                <Grid item xs={12}>
                    <React.Fragment>
                        <DataTable
                            columns={columns}
                            data={filteredItems}
                            highlightOnHover
                            customStyles={customStyles}
                            fixedHeader
                            pagination
                            fixedHeaderScrollHeight="300px"
                            noDataComponent={
                                <div
                                    style={{
                                        height: '150px',
                                        paddingTop: '60px',
                                    }}>
                                    Không có kịch bản
                                </div>
                            }
                            paginationComponentOptions={{
                                rowsPerPageText: 'Hàng trên mỗi trang',
                                rangeSeparatorText: 'của',
                                noRowsPerPage: false,
                                selectAllRowsItem: false,
                                selectAllRowsItemText: 'tất cả',
                            }}
                            subHeader
                            subHeaderComponent={subHeaderComponent}
                        />
                    </React.Fragment>
                </Grid>
            </GridContainer>
        </Card>
    );
};

export default CoreTable;
