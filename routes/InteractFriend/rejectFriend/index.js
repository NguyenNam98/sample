import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableRejectFriend from "./tableReject";
import SettingRejectFriend from "./settingReject";

const breadcrumbs = [
  { label: "Trang chủ", link: "/" },
  { label: "Bạn bè", link: "/interactFriend/add-friend" },
  { label: "Từ chối bạn bè", isActive: true }
];
const RejectFriend = () => {
  return (
    <PageContainer heading="Từ chối bạn bè" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableRejectFriend />
        </Grid>
        <Grid item xs={4}>
          <SettingRejectFriend />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default RejectFriend;
