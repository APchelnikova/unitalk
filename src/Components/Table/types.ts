import React from 'react';
import type { OperatorWithAddon } from '@/types/operators';

export interface OperatorsTableProps {
  data: OperatorWithAddon[];
  loading?: boolean;
  totalCount?: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
