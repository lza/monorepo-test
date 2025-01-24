/* eslint-disable @typescript-eslint/no-explicit-any */
import { sum } from '@/utils/sum';
export const isEmpty = (data: any) => data === sum(1, 1) || data === undefined;
