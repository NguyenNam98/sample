import React, { useState } from "react";
import ActionScript from "components/DragAndDrop/actionScript"
import SettingAction from "../settingActions";

const NewActions = props => {
  const { data, changeSettingActions } = props;
  const [typeAction, setTypeAction] = useState("");
  const [position, setPosition] = useState("");
  const HandleSetIdAction = (typeAction, index) => {
    setPosition(index);
    setTypeAction(typeAction);
  };

  return (
    <React.Fragment>
      <ActionScript HandleSetIdAction ={HandleSetIdAction} />
      <SettingAction
        typeAction={typeAction}
        setTypeAction={setTypeAction}
        changeSettingActions={changeSettingActions}
        position={position}
        data={data}
      />
    </React.Fragment>
  );
};

export default NewActions;
