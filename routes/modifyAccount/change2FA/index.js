import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import Table2FA from "./table2FA";
import Setting2FA from "./setting2FA";

const breadcrumbs = [
  { label: "Trang chủ", link: "/" },
  { label: "Sửa tài khoản", link: "/modifyAccount/2fa" },
  { label: "Đổi 2FA", isActive: true }
];
const Change2FA = () => {
  return (
    <PageContainer heading="Tạo, đổi 2FA" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <Table2FA />
        </Grid>
        <Grid item xs={4}>
          <Setting2FA />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Change2FA;
