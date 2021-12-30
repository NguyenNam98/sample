import React from 'react';
import { useForm } from 'react-hook-form';
import FormRejectFriend from 'components/ActionComponent/rejectFriend/formRejectFriend';
import ModalScript from 'components/ModalScript';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';

function SettingReject(props) {
    const { position, data,  changeSettingActions, handleCloseSetting, } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            count: data[position]?.count || 0,
        },
        mode: 'onChange',
    });
    const handleClickFinish = dataForm => {
        let data = {
            action: TypeActionAccount.REJECT_FRIEND,
            count: Number(dataForm.count),
            name: 'Từ chối bạn bè',
        };

        changeSettingActions(data, position);
        handleCloseSetting();
    };
    return (
        <ModalScript {...props} handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormRejectFriend register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingReject;
