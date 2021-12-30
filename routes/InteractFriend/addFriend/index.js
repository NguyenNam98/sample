import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableAddFriend from "./tableAddFriend";
import AddFriendSetting from "./settingAddFriend";

const breadcrumbs = [
  { label: "Trang chủ", link: "/" },
  { label: "Bạn bè", link: "/interactFriend/add-friend" },
  { label: "Thêm bạn", isActive: true }
];
const AddFriend = () => {
  return (
    <PageContainer heading="Thêm bạn bè" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableAddFriend />
        </Grid>
        <Grid item xs={4}>
          <AddFriendSetting />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default AddFriend;
