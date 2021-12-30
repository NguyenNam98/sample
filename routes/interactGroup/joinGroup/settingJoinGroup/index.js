import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
import InputText from 'components/InputData/inputText';
import InputNumber from 'components/InputData/inputNumber';
import { regexExceptVietNamese } from 'helpers/regex';
import FormJoinGroup from 'components/ActionComponent/joinGroup/formJoinGroup';

export default function ReactionSetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    return (
        <ProcessSetting typeAction={TypeActionAccount.JOIN_GROUPS}>
            <FormJoinGroup register={register} onSubmit={handleSubmit} errors={errors}/>
        </ProcessSetting>
    );
}
