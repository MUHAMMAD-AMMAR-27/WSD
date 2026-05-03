import { createAppSlice } from "../../app/createAppSlice.ts"

const initialState = {
    countries: []
}

export const countriesSlice = createAppSlice({
  name: "countries",
  initialState,
  reducers: create => ({
    setCountries: create.reducer((state, action) => {
      state.countries = action.payload
    }),
  }),
  selectors: {
    selectAllCountries: state => state.countries,
  },
});

export const { setCountries } = countriesSlice.actions;

export const { selectAllCountries } = countriesSlice.selectors;