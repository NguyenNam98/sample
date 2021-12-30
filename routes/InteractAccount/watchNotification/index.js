import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableNotification from "./notificationTable";
import SettingNotification from "./notificationSetting";

const Reaction = () => {
  const breadcrumbs = [
    { label: "Trang chủ", link: "/" },
    { label: "Tài khoản", link: "/interact/surf-newfeed" },
    { label: "Thông báo", isActive: true }
  ];
  return (
    <PageContainer heading="Xem thông báo" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableNotification />
        </Grid>
        <Grid item xs={4}>
          <SettingNotification />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Reaction;
