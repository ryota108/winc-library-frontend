import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Book from "../../commponents/Book";
import SimpleBottomNavigation from "../../commponents/BottomNavigation";
import RentalBook from "../../commponents/RentalBook";
import RequestBook from "../../commponents/RequestBook";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="mypage-tabs"
        >
          <Tab
            label={`借りている本(${2})`}
            {...a11yProps(0)}
            className="mypage-tab"
          />
          <Tab
            label="リクエストした本"
            {...a11yProps(1)}
            className="mypage-tab"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <RentalBook
          imgUrl="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7473/9784297127473_1_3.jpg?_ex=120x120"
          title="Web API:The Good Parts"
          author="山田太郎"
          rentalDate="2023/2/23"
          rentalTimeLimit={2}
          rentalRemain={3}
          rentalLimit="2023/2/10"
        />
        <RentalBook
          imgUrl="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/2011/9784297112011.jpg?_ex=200x200"
          title="Web API:The Good Parts"
          author="山田太郎"
          rentalDate="2023/2/22"
          rentalTimeLimit={3}
          rentalRemain={2}
          rentalLimit="2023/2/15"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RequestBook imgUrl="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6353/9784297126353_1_2.jpg?_ex=120x120"
          title="Web API:The Good Parts"
          author="山田太郎"
          requestDate="2022/10/23"/>
      </TabPanel>
      <SimpleBottomNavigation />
    </Box>
  );
}
