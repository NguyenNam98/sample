import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewAction } from 'redux/actions/ActionFacebook';
import { createScript, deleteScript, getScripts, updateScript } from 'redux/actions/Scripts';
import AddScript from './addScript';
import TableAccount from './tableAccounts';
import TableScript from './tableScripts';

const breadcrumbs = [
    { label: 'Trang chủ', link: '/' },
    { label: 'Quản lý', link: '/general/manage-account-facebook' },
    { label: 'Kịch bản', isActive: true },
];

const ManageScript = () => {
    const [scripts, setScripts] = useState([]);
    const [nameScript, setNameScript] = useState('');
    const [currentScriptModify, setCurrentScriptModify] = useState('');
    const { dataScripts } = useSelector(({ scripts }) => scripts);
    const {actions} = useSelector(({ actions }) => actions);
    const dispatch = useDispatch();
    const handleAddNewAction = data => {
        dispatch(addNewAction(data))
    };
    const handleAddNewScript = data => {
        dispatch(createScript(data));
        setNameScript('')
    };
    const handleDeleteScript = id => {
        const data = {
            ids: [id],
        };
        dispatch(deleteScript(data));
    };
    const handleModifyCurrentScript = data => {
        dispatch(updateScript(data, currentScriptModify));
        // setActions([]);
        setNameScript('');
    };
    useEffect(() => {
        dispatch(getScripts());
    }, []);
    useEffect(() => {
        setScripts(dataScripts);
    }, [dataScripts]);

    return (
        <PageContainer heading="Quản lý kịch bản" breadcrumbs={breadcrumbs}>
            <GridContainer>
                <Grid item xs={5}>
                    <AddScript
                        addNewScript={handleAddNewScript}
                        actions={actions}
                        handleAddNewAction={handleAddNewAction}
                        nameScript={nameScript}
                        setNameScript={setNameScript}
                        handleModifyCurrentScript={handleModifyCurrentScript}
                    />
                </Grid>
                <Grid item xs={7}>
                    <GridContainer>
                        <Grid item xs={12}>
                            <TableAccount />
                        </Grid>
                        <Grid item xs={12}>
                            <TableScript
                                data={scripts}
                                deleteScript={handleDeleteScript}
                                setNameScript={setNameScript}
                                scripts={scripts}
                                setCurrentScriptModify={setCurrentScriptModify}
                            />
                        </Grid>
                    </GridContainer>
                </Grid>
            </GridContainer>
        </PageContainer>
    );
};

export default ManageScript;
