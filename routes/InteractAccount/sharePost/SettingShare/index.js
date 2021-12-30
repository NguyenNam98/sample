import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
import FormSharePost from 'components/ActionComponent/sharePost/formSharePost';

export default function SettingShare() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    return (
        <ProcessSetting typeAction={TypeActionAccount.SHARE}>
             <FormSharePost  register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}
