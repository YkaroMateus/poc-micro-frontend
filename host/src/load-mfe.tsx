/* eslint-disable react/function-component-definition */
import { ElementType, Suspense } from 'react';

import ErrorBoundary from 'components/ErrorBoundary';

const loadMFE = (LazyComponent: ElementType) => {
  return function Loader(props: Record<string, unknown>) {
    return (
      <ErrorBoundary
        fallback={<div>Ocorreu algum erro ao conectar com o módulo remoto</div>}
      >
        <Suspense fallback="Loading remote button...">
          <LazyComponent {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
};

export default loadMFE;
