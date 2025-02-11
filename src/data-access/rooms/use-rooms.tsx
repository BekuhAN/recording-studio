import { useEffect, useState } from "react";
import { api } from "../api";
import { Room } from "../../interfaces/room";

export const useRooms = () => {
  const [rooms, setRooms] = useState<Array<Room>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<Room>({ path: "rooms" });
      setRooms(items);
    };
    get();
  }, []);
  return rooms;
};
