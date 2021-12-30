import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableStory from "./stotyTable";
import SettingStory from "./storySetting";

const Reaction = () => {
  const breadcrumbs = [
    { label: "Trang chủ", link: "/" },
    { label: "Tài khoản", link: "/interact/surf-newfeed" },
    { label: "Story", isActive: true }
  ];
  return (
    <PageContainer heading="Xem story" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableStory />
        </Grid>
        <Grid item xs={4}>
          <SettingStory />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Reaction;
