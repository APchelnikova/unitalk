import { api } from '../api/client';
import type {
  Operator,
  OperatorAddon,
  OperatorWithAddon,
  UseOperatorsProps,
} from '@/types/operators';

export async function fetchOperators({
  search,
  page,
  pageSize,
}: UseOperatorsProps): Promise<Operator[]> {
  try {
    const params = new URLSearchParams();
    if (search) params.append('search', search);

    params.append('page', page.toString());
    params.append('limit', pageSize.toString());

    const { data } = await api.get<Operator[]>(
      `/operator?${params.toString()}`
    );

    return data;
  } catch (error: any) {
    console.error('Error fetching operators:', error);
    if (error?.response?.status === 404) {
      return [];
    }

    throw new Error('Failed to fetch operators');
  }
}

export async function fetchOperatorsAddons(): Promise<OperatorAddon[]> {
  try {
    const { data } = await api.get<OperatorAddon[]>('/operatorAddon');
    return data;
  } catch (error) {
    console.error('Error fetching operators addon:', error);
    throw new Error('Failed to fetch operators addon');
  }
}

export async function fetchOperatorsWithAddons({
  search,
  page,
  pageSize,
}: UseOperatorsProps): Promise<{
  operatorsWithAddons: OperatorWithAddon[];
  totalCount: number;
}> {
  try {
    const [operators, addons, totalCount] = await Promise.all([
      fetchOperators({ search, page, pageSize }),
      fetchOperatorsAddons(),
      fetchAllOperators(search),
    ]);

    const byOpId = new Map<string, OperatorAddon>();
    addons.forEach(a => byOpId.set(a.id, a));

    return {
      operatorsWithAddons: operators.map(operator => {
        const addon = byOpId.get(operator.id);
        return {
          ...operator,
          text: addon?.text ?? '',
        };
      }),
      totalCount,
    };
  } catch (error) {
    console.error('Error fetching operators with addons:', error);
    throw new Error('Failed to fetch operators with addons');
  }
}

export async function fetchAllOperators(search?: string): Promise<number> {
  try {
    const params = new URLSearchParams();
    if (search) params.append('search', search);

    const { data } = await api.get<Operator[]>(
      `/operator?${params.toString()}`
    );
    return data.length;
  } catch (error: any) {
    console.error('Error fetching operators count:', error);
    if (error?.response?.status === 404) {
      return 0;
    }
    throw new Error('Failed to fetch operators count');
  }
}
