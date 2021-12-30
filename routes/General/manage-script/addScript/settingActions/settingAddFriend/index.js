import React from 'react';
import { useForm } from 'react-hook-form';
import FormAddFriend from 'components/ActionComponent/addFriend/formAddFriend';
import ModalScript from 'components/ModalScript';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';

function SettingAddFriend(props) {
    const { position, data,  changeSettingActions, handleCloseSetting, } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            timeOut: data[position]?.timeOut || ' ',
            listProfile: data[position]?.listProfile.join('\n') || '',
            numberFriend: data[position]?.numberFriend,
        },
        mode: 'onChange',
    });

    const handleClickFinish = dataForm => {
        let data = {
            action: TypeActionAccount.ADDFRIEND,
            listProfile: dataForm.listProfile.split('\n'),
            timeOut: Number(dataForm.timeOut),
            numberFriend: Number(dataForm.numberFriend),
            name: 'Thêm bạn bè',
        };
        changeSettingActions(data, position);
        handleCloseSetting();
    };

    return (
        <ModalScript {...props} handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormAddFriend register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingAddFriend;
