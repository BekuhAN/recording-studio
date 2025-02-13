import { useEffect, useState } from "react";
import { api } from "../api";
import { Client } from "../../interfaces/client";

export const useClients = () => {
  const [clients, setClients] = useState<Array<Client>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<Client>({ path: "clients" });
      setClients(items);
    };
    get();
  }, []);
  return clients;
};
