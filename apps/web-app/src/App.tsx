import { isEmpty } from 'common';
import { add } from 'src/utils/arithmetic';
import clsx from 'clsx';
import ReactIcon from 'src/assets/react.svg?react';

const App = () => {
  const classes = clsx('rounded bg-blue-500 px-4 py-2 text-base text-white');
  return (
    <>
      <p className={classes}>
        undefined isEmpty?{isEmpty(undefined) ? 'true' : 'false'}
      </p>
      <p>1 + 2 = {add(1, 2)}</p>
      <div className="text-lg font-semibold text-green-500">
        <ReactIcon width="24px" height="24px" className="text-green-500" />
        Rendered from react app
      </div>
    </>
  );
};

export default App;
