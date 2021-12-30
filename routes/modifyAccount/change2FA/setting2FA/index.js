import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';

import ProcessSetting from 'components/ProcessSetting';
import FormChangeFA from 'components/ActionComponent/change2FA/formChange2FA';

export default function Change2FA() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    return (
        <ProcessSetting typeAction={TypeActionAccount.CHANGE_2FA}>
            <FormChangeFA register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}
