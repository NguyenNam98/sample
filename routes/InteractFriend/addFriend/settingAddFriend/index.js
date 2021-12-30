import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
import FormAddFriend from 'components/ActionComponent/addFriend/formAddFriend';

export default function ReactionSetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    return (
        <ProcessSetting typeAction={TypeActionAccount.ADDFRIEND}>
           <FormAddFriend register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}
