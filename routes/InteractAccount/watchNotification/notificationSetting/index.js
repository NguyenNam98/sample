import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
import FormWatchNotification from 'components/ActionComponent/watchNotification/formWatchNotification'

export default function NotificationSetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    return (
        <ProcessSetting typeAction={TypeActionAccount.CHECK_NOTIFICATION}>
              <FormWatchNotification register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}
