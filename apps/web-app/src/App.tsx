import { isEmpty } from 'common';
const App = () => {
  return (
    <>
      <p>undefined is blank: {isEmpty(undefined) ? 'true' : 'false'}</p>
    </>
  );
};

export default App;
