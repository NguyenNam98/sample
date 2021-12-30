import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
import FormWatchVideo from 'components/ActionComponent/watchVideo/formWatchVideo';

export default function VideoSetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    return (
        <ProcessSetting typeAction={TypeActionAccount.WATCH_VIDEO}>
           <FormWatchVideo register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}
