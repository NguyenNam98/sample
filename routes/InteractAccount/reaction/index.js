import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableReaction from "./tableReaction";
import ReactionSetting from "./reactionSetting";

const Reaction = () => {
  const breadcrumbs = [
    { label: "Trang chủ", link: "/" },
    { label: "Tài khoản", link: "/interact/surf-newfeed" },
    { label: "Cảm xúc", isActive: true }
  ];
  return (
    <PageContainer heading="Cảm xúc bài viết" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableReaction />
        </Grid>
        <Grid item xs={4}>
          <ReactionSetting />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Reaction;
