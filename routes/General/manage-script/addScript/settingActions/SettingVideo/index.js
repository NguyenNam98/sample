import React from 'react';
import { useForm } from 'react-hook-form';
import FormWatchVideo from 'components/ActionComponent/watchVideo/formWatchVideo';
import ModalScript from 'components/ModalScript';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';

function SettingVideo(props) {
    const { position, data, changeSettingActions, handleCloseSetting, } = props;
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
            action: TypeActionAccount.WATCH_VIDEO,
            timeOut: Number(dataForm.timeOut),
            name: 'Xem video',
        };
        changeSettingActions(data, position);
        handleCloseSetting();
    };

    return (
        <ModalScript {...props} handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormWatchVideo register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingVideo;
