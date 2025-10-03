import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { OperatorWithAddon } from '@/types/operators';

type OperatorsState = {
  items: OperatorWithAddon[];
};

const initialState: OperatorsState = {
  items: [],
};

const operatorsSlice = createSlice({
  name: 'operators',
  initialState,
  reducers: {
    setOperators(state, action: PayloadAction<{ items: OperatorWithAddon[] }>) {
      state.items = action.payload.items;
    },
  },
});

export const { setOperators } = operatorsSlice.actions;
export default operatorsSlice.reducer;
