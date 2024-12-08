import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { <FTName | camelcase>InitialState } from './<FTName>.constants';

export const <FTName | camelcase>Slice = createSlice({
  name: '<FTName | camelcase>',
  initialState: <FTName | camelcase>InitialState,
  reducers: {
    reducers: {
      set: (state, { payload }: PayloadAction<unknown>) => {
        state.field = payload;
      },
    },
  },
});

const { actions, reducer } = <FTName | camelcase>Slice;
export const {} = actions;
export { reducer as <FTName | camelcase>Reducer };
