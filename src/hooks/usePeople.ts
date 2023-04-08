import { useState } from "react";

export default function usePeople() {
  const [people, setPeople] = useState(["Warlley", "Daniel"]);

  function addPerson(name: string) {
    setPeople([...people, name]);
  }

  return { people, addPerson };
}
