import { useEffect, useState } from "react";
import { api } from "../api";
import { Equipment } from "../../interfaces/equipment";

export const useEquipments = () => {
  const [equipments, setEquipments] = useState<Array<Equipment>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<Equipment>({ path: "equipments" });
      setEquipments(items);
    };
    get();
  }, []);
  return equipments;
};
