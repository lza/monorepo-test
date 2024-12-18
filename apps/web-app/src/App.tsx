import { isBlank } from 'common';

const App = () => {
  return (
    <>
      <p>undefined isBlank - {isBlank(undefined) ? 'true' : 'false'}</p>
    </>
  );
};
export default App;
