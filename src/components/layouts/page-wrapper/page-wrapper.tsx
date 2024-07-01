import type { PropsWithChildren } from 'react';
import { Container } from '@mui/material';
export interface PageWrapperProps extends PropsWithChildren {}

export function PageWrapper(props: PageWrapperProps) {
  return (
    <div className='page-wrapper py-4'>
      <Container maxWidth="lg">{props.children}</Container>
    </div>
  );
}
