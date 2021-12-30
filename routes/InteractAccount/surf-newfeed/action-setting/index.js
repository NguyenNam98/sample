import React from 'react';
import { useForm } from 'react-hook-form';
import FormSufferNewfeed from 'components/ActionComponent/sufferNewfeed/formSufferNewfeed';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import ProcessSetting from 'components/ProcessSetting';

function ActionSetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    return (
        <ProcessSetting typeAction={TypeActionAccount.SURFNEWFEED}>
           <FormSufferNewfeed register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}

export default ActionSetting;
