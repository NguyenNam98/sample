import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
import FormWatchStory from 'components/ActionComponent/watchStory/formSufferStory';

export default function StorySetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    return (
        <ProcessSetting typeAction={TypeActionAccount.STORY}>
            <FormWatchStory register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}
