import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableShare from "./shareTable";
import SettingShare from "./SettingShare";

const SharePost = () => {
  const breadcrumbs = [
    { label: "Trang chủ", link: "/" },
    { label: "Tài khoản", link: "/interact/surf-newfeed" },
    { label: "Chia sẻ", isActive: true }
  ];
  return (
    <PageContainer heading="Chia sẻ bài viết" breadcrumbs={breadcrumbs} age>
      <GridContainer>
        <Grid item xs={8}>
          <TableShare />
        </Grid>
        <Grid item xs={4}>
          <SettingShare />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default SharePost;
