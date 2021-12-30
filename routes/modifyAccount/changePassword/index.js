import GridContainer from "@jumbo/components/GridContainer";
import PageContainer from "@jumbo/components/PageComponents/layouts/PageContainer";
import { Grid } from "@material-ui/core";
import React from "react";
import TableChangePassword from "./tablePassword";
import SettingChangePassword from "./settingPassword";

const breadcrumbs = [
  { label: "Trang chủ", link: "/" },
  { label: "Sửa tài khoản", link: "/modifyAccount/2fa" },
  { label: "Đổi mật khẩu", isActive: true }
];
const ChangePassword = () => {
  return (
    <PageContainer heading="Đổi mật khẩu" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={8}>
          <TableChangePassword />
        </Grid>
        <Grid item xs={4}>
          <SettingChangePassword />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default ChangePassword;
