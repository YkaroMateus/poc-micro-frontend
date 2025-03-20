import { lazy } from 'react';
import loadMFE from './load-mfe';

const RemoteButton = loadMFE(lazy(() => import('remote/Button')));

export const App = () => {
  return (
    <div>
      <div style={{ padding: '4px 0px' }}>
        <div style={{ padding: '4px 0px', textAlign: 'center' }}>
          <h4>Host Application</h4>
          <RemoteButton
            label="Remote Button Test"
            onClick={() => alert('Clicked remote button!')}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
