import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableAccount from "./tableAccount";
import PostSetting from "./settingPost";

const Reaction = () => {
  const breadcrumbs = [
    { label: "Trang chủ", link: "/" },
    { label: "Tài khoản", link: "/interact/surf-newfeed" },
    { label: "Đăng bài", isActive: true }
  ];
  return (
    <PageContainer heading="Đăng bài" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={7}>
          <TableAccount />
        </Grid>
        <Grid item xs={5}>
          <PostSetting />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Reaction;
