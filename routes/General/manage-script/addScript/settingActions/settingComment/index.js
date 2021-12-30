
import React from "react";
import { TypeActionAccount } from "@jumbo/constants/electron/TypeActionAccount";
import { useForm } from "react-hook-form";
import FormCommentPost from "components/ActionComponent/commentPost/formCommentPost";
import ModalScript from "components/ModalScript";

function SettingComment(props) {
    const {
        changeSettingActions,
        handleCloseSetting,
        position,
        data
    } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            count: data[position]?.count || "",
            comments: data[position]?.comments.join("\n") || "",
            timeOut: data[position]?.timeOut || ""
        },
        mode: 'onChange',
    })
    const handleClickFinish = dataForm => {
        let data = {
            action: TypeActionAccount.COMMENT,
            count: Number(dataForm.count),
            timeOut: Number(dataForm.timeOut),
            comments: dataForm.comments.split("\n"),
            name: "Bình Luận"
        };
        changeSettingActions(data, position);
        handleCloseSetting();
    };

    return (
        <ModalScript {...props} handleClickFinish={handleSubmit(handleClickFinish)}>
            <FormCommentPost register={register} onSubmit={handleSubmit} errors={errors} />
        </ModalScript>
    );
}

export default SettingComment;
