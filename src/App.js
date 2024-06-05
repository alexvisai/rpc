import React, { useEffect } from 'react';
import * as Websocket from 'rpc-websockets';


const App = () => {
  useEffect(() => {
    const websocket = new Websocket.Client('ws://localhost:5000/');
    websocket.on('open', async () => {
      console.log("Open")
    });

    return () => {
      websocket.close();
    };
  }, []);

  return (
    <div>
      { }
    </div>
  );
};

export default App;
