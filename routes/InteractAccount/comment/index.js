import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableComment from "./tableComment";
import CommentSetting from "./commentSetting";

const breadcrumbs = [
  { label: "Trang chủ", link: "/" },
  { label: "Tài khoản", link: "/interact/surf-newfeed" },
  { label: "Bình luận", isActive: true }
];

const Comment = () => {
  return (
    <PageContainer heading="Bình luận bài viết" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableComment />
        </Grid>
        <Grid item xs={4}>
          <CommentSetting />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Comment;
