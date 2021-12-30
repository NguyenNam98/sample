import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
import FormReaction from 'components/ActionComponent/reaction/FormReaction';

export default function ReactionSetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    return (
        <ProcessSetting typeAction={TypeActionAccount.LIKE}>
          <FormReaction  register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}
