import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
import FormAcceptFriend from 'components/ActionComponent/acceptFriend/formAcceptFriend';

export default function SettingAcceptFriend() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    return (
        <ProcessSetting typeAction={TypeActionAccount.ACCEPT_FRIEND}>
            <FormAcceptFriend register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}
