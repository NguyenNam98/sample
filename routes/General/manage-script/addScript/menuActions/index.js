import {
  AccessTime,
  CommentOutlined,
  PersonAdd,
  EmojiEmotions,
  ShareOutlined,
  CameraFront,
  OndemandVideo,
  Notifications,
  CancelOutlined,
  MobileFriendly,
  ChangeHistory,
  VpnKey,
  GroupAdd,
  PostAddOutlined
} from "@material-ui/icons";
import React from "react";

export const menuActions = [
  {
    id: 1,
    name: "Bình luận bài viết",
    icon: <CommentOutlined />,
    bgColor: "#D7F5B1",
    color: "#5D9405"
  },
  {
    id: 2,
    name: "Lướt newfeed",
    icon: <AccessTime />,
    bgColor: "#FFDE99",
    color: "#D36F1A"
  },
  {
    id: 3,
    name: "Cảm xúc bài viết",
    icon: <EmojiEmotions />,
    bgColor: "#9BE7FD",
    color: "#0356AF"
  },
  {
    id: 4,
    name: "Thêm bạn bè",
    icon: <PersonAdd />,
    bgColor: "#F2E7FE",
    color: "#7F39FB"
  },
  {
    id: 5,
    name: "Chia sẻ bài viết",
    icon: <ShareOutlined />,
    bgColor: "#D7F5B1",
    color: "#5D9405"
  },
  {
    id: 6,
    name: "Xem story",
    icon: <CameraFront />,
    bgColor: "#FFDE99",
    color: "#D36F1A"
  },
  {
    id: 7,
    name: "Xem video",
    icon: <OndemandVideo />,
    bgColor: "#9BE7FD",
    color: "#0356AF"
  },
  {
    id: 8,
    name: "Xem thông báo",
    icon: <Notifications />,
    bgColor: "#F2E7FE",
    color: "#7F39FB"
  },
  {
    id: 9,
    name: "Đồng ý kết bạn",
    icon: <MobileFriendly />,
    bgColor: "#9BE7FD",
    color: "#0356AF"
  },
  {
    id: 10,
    name: "Từ chối bạn bè",
    icon: <CancelOutlined />,
    bgColor: "#FFDE99",
    color: "#D36F1A"
  },
  {
    id: 11,
    name: "Tạo/đổi 2FA",
    icon: <ChangeHistory />,
    bgColor: "#9BE7FD",
    color: "#0356AF"
  },
  {
    id: 12,
    name: "Đổi mật khẩu",
    icon: <VpnKey />,
    bgColor: "#FFDE99",
    color: "#D36F1A"
  },
  {
    id: 13,
    name: "Tham gia nhóm",
    icon: <GroupAdd />,
    bgColor: "#D7F5B1",
    color: "#5D9405"
  },
  {
    id: 14,
    name: "Đăng bài",
    icon: <PostAddOutlined />,
    bgColor: "#bae6e5",
    color: "#048c89"
  }
];
