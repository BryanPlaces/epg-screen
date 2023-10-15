import React from 'react';
import DatesBar from "./components/DatesBar";
import TimesBar from "./components/TimesBar";
import Epg from "./components/Epg";

function App() {
  //const [channels, setChannels] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:1337/epg`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setChannels(data.channels);
  //   });
  // }, []);

  return (
    <div>
      <DatesBar focusKey={'DATESBAR'} />
      <Epg />
    </div>
  );
}

export default App;