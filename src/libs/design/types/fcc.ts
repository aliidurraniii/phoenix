import type { FunctionComponent, PropsWithChildren } from 'react';

export type FCC<P extends object = object> = FunctionComponent<PropsWithChildren<P>>;
