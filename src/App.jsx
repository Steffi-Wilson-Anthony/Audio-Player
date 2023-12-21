import List from './components/List'
import Title from './components/Title'
import Popup from './components/Popup'
import {useState} from 'react'

const App = () => {
  const [triggerButton, setTrigger] = useState(false);
  
  const updateTrigger = (value) => {
    setTrigger(value);
  }
  return (
    <div>
      <Title/>
      <Popup trigger={triggerButton} setTrigger={setTrigger}/>
      <List updateTrigger = {updateTrigger}/>
    </div>
  )
};
export default App;
