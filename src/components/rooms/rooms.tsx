import { ReactElement, useState } from "react";
import SectionTitle from "../section-title/section-title";
import styles from "./rooms.module.scss";
import { useRooms } from "../../data-access/rooms/use-rooms";
import {  Tab, Tabs } from "@mui/material";
import RoomItem from "../room-item/room-item";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Rooms(): ReactElement {
  const roomsList = useRooms();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className={styles.rooms}>
      <div className="container">
        <SectionTitle
          title="Рабочие комнаты"
          subtitle="Территория"
          theme="light"
        />
        <div className={styles.rooms__inner}>
          <div className={styles.rooms__tabs}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ color: "#fff" }}
            >
              {roomsList.length > 0 &&
                roomsList.map((item, index) => (
                  <Tab
                    key={item.id}
                    label={`0${index + 1}. ${item.name}`}
                    style={{
                      fontFamily: "Montserrat Alternates",
                      fontWeight: 900,
                      color: "#fff",
                      textAlign: "left",
                    }}
                    {...a11yProps(index)}
                  />
                ))}
            </Tabs>
          </div>
          <div className={styles.rooms__list}>
            {roomsList.length > 0 &&
              roomsList.map((item, index) => (
                <TabPanel value={value} index={index}>
                  <RoomItem key={item.id} item={item} />
                </TabPanel>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
