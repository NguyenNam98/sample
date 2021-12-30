import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormSufferNewfeed from 'components/ActionComponent/sufferNewfeed/formSufferNewfeed';
import ModalScript from 'components/ModalScript';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';

function SettingSuffer(props) {
    const { position, data, changeSettingActions, handleCloseSetting } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            time: data[position]?.time || ' ',
        },
        mode: 'onChange',
    });
    const handleClickFinish = dataForm => {
        let data = {
            action: TypeActionAccount.SURFNEWFEED,
            time: Number(dataForm.time),
            name: 'Lướt newfeed',
        };
        changeSettingActions(data, position);
        handleCloseSetting();
    };

    return (
        <ModalScript {...props} handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormSufferNewfeed register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingSuffer;
