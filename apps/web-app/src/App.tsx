import { isEmpty } from 'common';

const App = () => {
  return (
    <>
      <p>undefined isBlank: {isEmpty(undefined) ? 'true' : 'false'}</p>
    </>
  );
};

export default App;
