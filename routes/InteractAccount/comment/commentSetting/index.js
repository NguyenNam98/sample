import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
import FormCommentPost from 'components/ActionComponent/commentPost/formCommentPost';

export default function CommentSetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    return (
        <ProcessSetting typeAction={TypeActionAccount.COMMENT}>
            <FormCommentPost register={register} onSubmit={handleSubmit} errors={errors} />
        </ProcessSetting>
    );
}
