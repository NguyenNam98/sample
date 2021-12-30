import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableAccount from "./account-list";
import ActionSetting from "./action-setting";

const breadcrumbs = [
  { label: "Trang chủ", link: "/" },
  { label: "Tài khoản", link: "/interact/surf-newfeed" },
  { label: "Lướt newfeed", isActive: true }
];
const SurfNewfeed = () => {
  return (
    <PageContainer heading="Lướt newfeed" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableAccount />
        </Grid>
        <Grid item xs={4}>
          <ActionSetting />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default SurfNewfeed;
