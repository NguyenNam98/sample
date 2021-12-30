import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableAcceptFriend from "./acceptFriendTable";
import SettingAcceptTable from "./settingAcceptFriend";

const breadcrumbs = [
  { label: "Trang chủ", link: "/" },
  { label: "Bạn bè", link: "/interactFriend/add-friend" },
  { label: "Kết bạn", isActive: true }
];
const AcceptFriend = () => {
  return (
    <PageContainer heading="Đồng ý kết bạn" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableAcceptFriend />
        </Grid>
        <Grid item xs={4}>
          <SettingAcceptTable />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default AcceptFriend;
