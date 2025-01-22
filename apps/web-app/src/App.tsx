import { isEmpty } from 'common';

const App = () => {
  return (
    <>
      <p>undefined isEmpty?{isEmpty(undefined) ? 'true' : 'false'}</p>
    </>
  );
};

export default App;
