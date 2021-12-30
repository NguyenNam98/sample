import { Box, Chip, Dialog, Grid, makeStyles } from '@material-ui/core';
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { CloseRounded } from '@material-ui/icons';
import { TypeActionAccount } from "@jumbo/constants/electron/TypeActionAccount";
import GridContainer from '@jumbo/components/GridContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'redux/actions/PostsFacebook';
import ButtonCenter from 'components/Button/ButtonCenter';
import DataTable from 'react-data-table-component';

const useStyles = makeStyles(theme => ({
    dialog: {
        '& .MuiDialog-paper': {
            overflowY: 'visible',
        },
    },
    tableTitle: {
        fontSize: '18px',
        padding: '20px',
        fontWeight: '700',
    },
}));

function SettingPosting(props) {
    const classes = useStyles();
    const { open, handleCloseSetting, changeSettingActions, position, data } = props;
    const dispatch = useDispatch();
    const { dataPosts } = useSelector(({ postsFacebook }) => postsFacebook);
    const [selectedRows, setSelectedRows] = useState([]);
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    const handleRowSelected = useCallback(
        state => {
            //dispatch(setSelectedPosts(state.selectedRows));
            setSelectedRows(state.selectedRows);
        },
        [dispatch],
    );
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
            name: 'Nội dung',
            selector: row => row.content,
            maxWidth: ' 300px',
        },
    ];
    const handlePreSelected = row => row.isSelected === true
    let tablePosts = useMemo(() => {
      
        let selectedPosts = data[position]?.selectedPosts
        let dataToTable = dataPosts.map(item => {
          for (let index = 0; index < selectedPosts.length; index++) {
              if (item.name === selectedPosts[index].name) {
                  item.isSelected = true;
                  break;
              }
              item.isSelected = false;
          }
          if(selectedPosts.length === 0){
              item.isSelected = false;
          }
          return item;
      });
      return (
          <DataTable
              data={dataToTable}
              columns={columns}
              selectableRows={true}
              pagination={false}
              onSelectedRowsChange={handleRowSelected}
              highlightOnHover
              fixedHeader
              fixedHeaderScrollHeight="300px"
              noDataComponent={
                  <div
                      style={{
                          height: '150px',
                          paddingTop: '60px',
                      }}>
                      Không có bài viết!
                  </div>
              }
              selectableRowSelected={handlePreSelected}
          />
      );
  }, [dataPosts]);
    const handleClickRun = () => {
      let tempSelected = selectedRows.map(item =>{
        return {name:item.name,content:item.content, url_image:item.url_image }
      })
        let data = {
          action: TypeActionAccount.POSTING,
          selectedPosts:tempSelected,
          name:'Đăng bài'
        };
        changeSettingActions(data, position);
        handleCloseSetting();
    };

    return (
        <Dialog fullWidth={true} maxWidth="sm" open={open} aria-labelledby="form-dialog-title" className={classes.dialog}>
            <Box
                display="flex"
                justifyContent="flex-end"
                style={{
                    paddingTop: '20px',
                    paddingRight: '20px',
                    cursor: 'pointer',
                }}>
                <CloseRounded onClick={handleCloseSetting} />
            </Box>
            <Box component="p" className={classes.tableTitle}>
                Chọn bài đăng
            </Box>
            <GridContainer style={{ padding: '20px 40px' }}>
                <Grid item xs={12}>
                  {tablePosts}
                </Grid>
                <Grid item xs={12}>
                    <ButtonCenter name={'Hoàn thành'} handleClick={handleClickRun} height={'24px'} />
                </Grid>
            </GridContainer>
        </Dialog>
    );
}

export default SettingPosting;
