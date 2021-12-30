import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
import FormRejectFriend from 'components/ActionComponent/rejectFriend/formRejectFriend';

export default function RejectFriend() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    return (
        <ProcessSetting typeAction={TypeActionAccount.REJECT_FRIEND}>
            <FormRejectFriend register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}
