import { useEffect, useRef } from 'react';
import './App.css';
import PeopleList from './PeopleList';
import useCounter from './hooks/useCounter';

function App() {
  const number = useCounter(9)
  /* consr counter = {current:2} */
  const counter = useRef(2)
  const div = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (div.current) {
      div.current.style.backgroundColor = '#09f'
    }
  }, [])


  return (
    <div className="App" ref={div}>
      {number}
      <div style={{ backgroundColor: 'peachpuff' }}>
        {counter.current}
      </div>
      <PeopleList />
      <PeopleList />
    </div>
  );
}

export default App;
