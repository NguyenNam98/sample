import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableVideo from "./videoTable";
import SettingVideo from "./videoSetting";

const Reaction = () => {
  const breadcrumbs = [
    { label: "Trang chủ", link: "/" },
    { label: "Tài khoản", link: "/interact/surf-newfeed" },
    { label: "Xem video", isActive: true }
  ];
  return (
    <PageContainer heading="Xem video" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableVideo />
        </Grid>
        <Grid item xs={4}>
          <SettingVideo />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Reaction;
