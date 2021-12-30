import React from 'react';
import { useForm } from 'react-hook-form';
import FormJoinGroup from 'components/ActionComponent/joinGroup/formJoinGroup';
import ModalScript from 'components/ModalScript';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';

function SettingJoinGroup(props) {
    const { position, data,  changeSettingActions, handleCloseSetting, } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            groupIds: data[position]?.groupIds.join('\n') || '',
            timeOut: data[position]?.timeOut || '',
            numberGroup: data[position]?.numberGroup || '',
        },
        mode: 'onChange',
    });
    const handleClickFinish = dataForm => {
        let data = {
            action: TypeActionAccount.JOIN_GROUPS,
            groupIds: dataForm.groupIds.split('\n'),
            timeOut:Number(dataForm.timeOut),
            numberGroup:Number(dataForm.numberGroup),
            name: 'Tham gia nhóm',
        };
        changeSettingActions(data, position);
        handleCloseSetting();
    };

    return (
        <ModalScript {...props} handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormJoinGroup register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingJoinGroup;
