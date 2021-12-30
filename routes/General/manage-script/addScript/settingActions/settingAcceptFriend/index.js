import React from 'react';
import { useForm } from 'react-hook-form';
import FormAcceptFriend from 'components/ActionComponent/acceptFriend/formAcceptFriend';
import ModalScript from 'components/ModalScript';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';

function SettingAccept(props) {
    const { position, data, changeSettingActions, handleCloseSetting } = props;
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
            action: TypeActionAccount.ACCEPT_FRIEND,
            count: Number(dataForm.count),
            name: "Đồng ý kết bạn"
          };
          changeSettingActions(data, position);
          handleCloseSetting();
    };

    return (
        <ModalScript {...props}  handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormAcceptFriend register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingAccept;
