import type { OperatorWithAddon } from '@/types/operators';

export interface OperatorsTableProps {
  data: OperatorWithAddon[];
  loading?: boolean;
  totalCount?: number;
}
