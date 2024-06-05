import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { init } from "next/dist/compiled/webpack/webpack";

interface LabelState {
  value: string;
  loading: boolean;
}

const initialState: LabelState = {
  value: "",
  loading: false,
};

const labelSlice = createSlice({
  name: "label",
  initialState,
  reducers: {
    setLabelValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    initialize: (state) => {
      state.value = "";
    },
    // button loading
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLabelValue, initialize, setLoading } = labelSlice.actions;

export default labelSlice.reducer;
