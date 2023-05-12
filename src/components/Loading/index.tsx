import { useContext } from 'react';
import { ImSpinner8 } from 'react-icons/im';

import { Container, Overlay } from './styles';
import { LoadingContext } from '../../contexts/LoadingContext';

export function Loading() {
  const { loading } = useContext(LoadingContext);

  if (!loading) {
    return null;
  }

  return (
    <>
      <Overlay />
      <Container>
        <ImSpinner8 className="spinner" />
      </Container>
    </>
  );
}
