import type { PropsWithChildren } from "react";

export interface PageWrapperProps extends PropsWithChildren {}

export function PageWrapper(props: PageWrapperProps) {
  return <div className='page-wrapper p-2'>{props.children}</div>;
}
