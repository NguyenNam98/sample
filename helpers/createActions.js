import { TypeActionAccount } from "@jumbo/constants/electron/TypeActionAccount";

export default function CreateAction(id) {
  switch (id) {
    case 1:
      return {
        action: TypeActionAccount.COMMENT,
        count: 1,
        timeOut: 1,
        comments: [],
        name: "Bình Luận"
      };
    case 2:
      return {
        action: TypeActionAccount.SURFNEWFEED,
        time: 1,
        name: "Lướt newfeed"
      };
    case 3:
      return {
        action: TypeActionAccount.LIKE,
        count: 1,
        timeOut: 2,
        typeLike: "like",
        name: "Like bài viết"
      };
    case 4:
      return {
        action: TypeActionAccount.ADDFRIEND,
        listProfile: [],
        timeOut: 2,
        numberFriend : 0,
        name: "Thêm bạn bè"
      };
    case 5:
      return {
        action: TypeActionAccount.SHARE,
        listProfile: [],
        timeOut: 2,
        name: "Chia sẻ bài viết"
      };
    case 6:
      return {
        action: TypeActionAccount.STORY,
        timeOut: 1,
        //listProfile: [],
        name: "Xem story"
      };
    case 7:
      return {
        action: TypeActionAccount.WATCH_VIDEO,
        timeOut: 1,
        name: "Xem video"
      };
    case 8:
      return {
        action: TypeActionAccount.CHECK_NOTIFICATION,
        name: "Xem thông báo"
      };
    case 9:
      return {
        action: TypeActionAccount.ACCEPT_FRIEND,
        count: "",
        name: "Đồng ý kết bạn"
      };
    case 10:
      return {
        action: TypeActionAccount.REJECT_FRIEND,
        count: "",
        name: "Từ chối bạn bè"
      };
    case 11:
      return {
        action: TypeActionAccount.CHANGE_2FA,
        name: "Tạo/đổi 2FA"
      };
    case 12:
      return {
        action: TypeActionAccount.CHANGE_PASSWORD,
        password: [],
        name: "Đổi mật khẩu"
      };
    case 13:
      return {
        action: TypeActionAccount.JOIN_GROUPS,
        groupIds: [],
        timeOut:0,
        numberGroup:0,
        name: "Tham gia nhóm"
      };
      case 14:
        return {
          action: TypeActionAccount.POSTING,
          selectedPosts:[],
          name :'Đăng bài'
        };
    default:
      break;
  }
}
