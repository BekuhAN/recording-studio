import { ReactElement, useState } from "react";
import styles from "./equipments.module.scss";
import SectionTitle from "../section-title/section-title";
import { useEquipments } from "../../data-access/equipments/use-equipments";

import { Tab, Tabs } from "@mui/material";

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

export default function Equipments(): ReactElement {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const equipmentsList = useEquipments();
  return (
    <section className={styles.equipments}>
      <div className="container equipments_restyle">
        <SectionTitle
          title="Оборудование нашей студии"
          subtitle="Что мы используем"
          theme="dark"
        />
        <div className={styles.equipments__inner}>
          <div className={styles.equipments__tabs}>
            <Tabs onChange={handleChange}>
              {equipmentsList.length > 0 &&
                equipmentsList.map((item, index) => (
                  <Tab
                    label={item.name}
                    value={index}
                    aria-selected={value === index}
                  />
                ))}
            </Tabs>
          </div>
          {equipmentsList.length > 0 &&
            equipmentsList.map((item, index) => (
              <TabPanel value={value} index={index}>
                <ul className={styles.equipments__list}>
                  {item.list.length > 0 &&
                    item.list.map((listItem) => (
                      <li className={styles.equipments__item}>{listItem}</li>
                    ))}
                </ul>
              </TabPanel>
            ))}
        </div>
      </div>
    </section>
  );
}
