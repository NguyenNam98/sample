import React from "react";
import SettingAddFriend from "./settingAddFriend";
import SettingComment from "./settingComment";
import SettingReaction from "./settingReaction";
import SettingSuffer from "./settingSuffer";
import SettingAccept from "./settingAcceptFriend";
import SettingPassword from "./settingPassword";
import SettingReject from "./settingRejectFriend";
import SettingStory from "./settingStory";
import SettingVideo from "./SettingVideo";
import SettingJoinGroup from "./settingJoinGroup";
import SettingShare from "./settingShare";
import SettingPosting from "./settingPosting"

import { TypeActionAccount } from "@jumbo/constants/electron/TypeActionAccount";

const SettingAction = props => {
  const {
    typeAction,
    position,
    changeSettingActions,
    setTypeAction,
    data
  } = props;
  const handleCloseSetting = () => {
    setTypeAction("");
  };
  switch (typeAction) {
    case TypeActionAccount.COMMENT:
      return (
        <SettingComment
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
    case TypeActionAccount.SURFNEWFEED:
      return (
        <SettingSuffer
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
    case TypeActionAccount.LIKE:
      return (
        <SettingReaction
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
    case TypeActionAccount.ADDFRIEND:
      return (
        <SettingAddFriend
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
    case TypeActionAccount.CHANGE_2FA:
      return <div />;
    case TypeActionAccount.JOIN_GROUPS:
      return (
        <SettingJoinGroup
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
    case TypeActionAccount.CHECK_NOTIFICATION:
      return <div />;
    case TypeActionAccount.CHANGE_PASSWORD:
      return (
        <SettingPassword
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
    case TypeActionAccount.REJECT_FRIEND:
      return (
        <SettingReject
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
    case TypeActionAccount.SHARE:
      return (
        <SettingShare
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
    case TypeActionAccount.STORY:
      return (
        <SettingStory
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
    case TypeActionAccount.WATCH_VIDEO:
      return (
        <SettingVideo
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
    case TypeActionAccount.ACCEPT_FRIEND:
      return (
        <SettingAccept
          open={true}
          handleCloseSetting={handleCloseSetting}
          changeSettingActions={changeSettingActions}
          position={position}
          data={data}
        />
      );
      case TypeActionAccount.POSTING:
        return (
          <SettingPosting
            open={true}
            handleCloseSetting={handleCloseSetting}
            changeSettingActions={changeSettingActions}
            position={position}
            data={data}
          />
        );
    default:
      return <div />;
  }
};
export default SettingAction;
