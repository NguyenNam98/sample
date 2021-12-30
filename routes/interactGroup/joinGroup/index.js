import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableJoinGroup from "./tableJoinGroup";
import SettingJoinGroup from "./settingJoinGroup";

const breadcrumbs = [
  { label: "Trang chủ", link: "/" },
  { label: "Nhóm", link: "/interactGroup/join-group" },
  { label: "Tham gia nhóm", isActive: true }
];
const JoinGroup = () => {
  return (
    <PageContainer heading="Tham gia nhóm" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableJoinGroup />
        </Grid>
        <Grid item xs={4}>
          <SettingJoinGroup />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default JoinGroup;
