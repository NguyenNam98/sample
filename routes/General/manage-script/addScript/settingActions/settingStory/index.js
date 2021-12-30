import React from 'react';
import { useForm } from 'react-hook-form';
import FormWatchStory from 'components/ActionComponent/watchStory/formSufferStory';
import ModalScript from 'components/ModalScript';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';

function SettingStory(props) {
    const { position, data,  changeSettingActions, handleCloseSetting, } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            timeOut: data[position]?.timeOut || ' ',
        },
        mode: 'onChange',
    });
    const handleClickFinish = dataForm => {
        let data = {
            action: TypeActionAccount.STORY,
            timeOut: Number(dataForm.timeOut),
            name: 'Xem story',
        };
        changeSettingActions(data, position);
        handleCloseSetting();
    };

    return (
        <ModalScript {...props} handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormWatchStory register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingStory;
