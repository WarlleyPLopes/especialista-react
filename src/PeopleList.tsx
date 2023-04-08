import usePeople from "./hooks/usePeople"

export default function PeopleList() {
  const { people, addPerson } = usePeople()
  return <>
    <ul>
      {people.map((person, idx) => <li key={idx}>{person}</li>)}
    </ul>
    <button onClick={() => addPerson('Angelo')}>
      adicionar pessoa
    </button>
  </>
}