import React from 'react';
import { useForm } from 'react-hook-form';
import FormSharePost from 'components/ActionComponent/sharePost/formSharePost';
import ModalScript from 'components/ModalScript';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';

function SettingShare(props) {
    const { position, data,  changeSettingActions, handleCloseSetting, } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            timeOut: data[position]?.timeOut || ' ',
            listProfile: data[position]?.listProfile.join('\n') || '',
        },
        mode: 'onChange',
    });
    const handleClickFinish = dataForm => {
        let data = {
            action: TypeActionAccount.SHARE,
            listProfile: dataForm.listProfile.split('\n'),
            timeOut: Number(dataForm.timeOut),
            name: 'Chia sẻ bài viết',
        };
        changeSettingActions(data, position);
        handleCloseSetting();
    };

    return (
        <ModalScript {...props} handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormSharePost register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingShare;
