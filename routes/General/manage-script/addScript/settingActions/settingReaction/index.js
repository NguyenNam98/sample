import React from 'react';
import { useForm } from 'react-hook-form';
import FormReaction from 'components/ActionComponent/reaction/FormReaction';
import ModalScript from 'components/ModalScript';

function SettingSuffer(props) {
    const { position, data,  changeSettingActions, handleCloseSetting, } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            timeOut: data[position]?.timeOut || ' ',
            count: data[position]?.count || '',
        },
        mode: 'onChange',
    });
    const handleClickFinish = dataForm => {
        let data = {
            action: 'like',
            count: Number(dataForm.count),
            timeOut: Number(dataForm.timeOut),
            typeLike: 'like',
            name: 'Like bài viết',
        };
        changeSettingActions(data, position);
        handleCloseSetting();
    };
    return (
        <ModalScript {...props} handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormReaction register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingSuffer;
