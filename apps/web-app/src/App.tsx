import { isEmpty } from 'common';

const App = () => {
  return (
    <>
      <p>undefine isEmpty: {isEmpty(undefined) ? 'true' : 'false'}</p>
    </>
  );
};

export default App;
