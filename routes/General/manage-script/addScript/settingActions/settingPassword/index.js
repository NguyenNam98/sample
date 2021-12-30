import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import FormChangePassword from 'components/ActionComponent/changePassword/formChangePassword';
import ModalScript from 'components/ModalScript';
function SettingPassword(props) {
    const { handleCloseSetting, changeSettingActions, position, data } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            password: data[position]?.password || '',
        },
        mode: 'onChange',
    });

    const handleClickFinish = dataForm => {
        let data = {
            action: TypeActionAccount.CHANGE_PASSWORD,
            password: dataForm.password.split('\n'),
            name: 'Đổi mật khẩu',
        };
        changeSettingActions(data, position);
        handleCloseSetting();
    };

    return (
        <ModalScript {...props} handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormChangePassword register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingPassword;
