import { isBlank } from 'common';

function App() {
  return (
    <>
      <p>undefined isBlank - {isBlank(undefined) ? 'true' : 'false'}</p>
    </>
  );
}

export default App;
