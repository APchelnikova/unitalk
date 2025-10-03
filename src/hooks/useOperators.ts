import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setOperators } from '../store/operatorsSlice.ts';
import { fetchOperatorsWithAddons } from '../services/operators.ts';
import type { AppDispatch } from '@/store';
import type { UseOperatorsProps } from '@/types/operators.ts';

export function useOperators({ search, page, pageSize }: UseOperatorsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const query = useQuery({
    queryKey: ['operators', { search, page, pageSize }],
    queryFn: () => fetchOperatorsWithAddons({ search, page, pageSize }),
    staleTime: 60_000,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(
        setOperators({
          items: query.data.operatorsWithAddons,
        }),
      );
    }
  }, [query.data, dispatch]);

  return {
    operators: query.data?.operatorsWithAddons || [],
    totalCount: query.data?.totalCount || 0,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
}
