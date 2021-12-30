import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import { Box, Card, CardHeader, Grid } from "@material-ui/core";
import AccountsList from "components/Table/AccountsList";
import TitleCard from "components/TitleCard";
import GridContainer from "@jumbo/components/GridContainer";

const useStyles = makeStyles(theme => ({
  badge: {
    color: theme.palette.common.white,
    fontSize: 12,
    height: 24
  },
  dots: {
    height: 8,
    width: 8,
    borderRadius: "50%",
    marginRight: 10
  },
  tag_danger: {
    backgroundColor: theme.palette.error.main
  },
  tag_success: {
    backgroundColor: theme.palette.success.main
  }
}));

const TableListAccount = () => {
  const configTable = {
    isOpenButton: false,
    isSelect: true,
    isUnmount : true
  };
  const classes = useStyles();
  const columns = [
    {
      name: "Live",
      selector: row => (
        <Box
          className={clsx(
            classes.dots,
            classes[`tag_${row.status === 0 ? "success" : "danger"}`]
          )}
        />
      ),
      width: "60px",
      maxWidth: "60px"
    },
    {
      name: "User ID",
      selector: row => row.uuid
    },
    {
      name: "Password",
      selector: row => "*******",
      width: "90px",
      maxWidth: "90px"
    },
    {
      name: "Email",
      selector: row => row.email
    },
    {
      name: "Name",
      selector: row => row.name
    }
  ];
  return (
    <Card>
      <CardHeader
        title={<TitleCard text="Danh sách tài khoản" />}
        className={classes.card}
      />
      <GridContainer style={{ padding: "20px" }}>
        <Grid item xs={12}>
          <AccountsList
            columns={columns}
            configTable={configTable}
            filter={true}
            subHeader={true}
            filterSearch ={true}
            filterStatus ={true}
            selectByNumber={true}
          />
        </Grid>
      </GridContainer>
    </Card>
  );
};
export default TableListAccount;
