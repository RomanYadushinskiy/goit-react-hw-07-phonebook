// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       state.items.unshift(action.payload);
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { setFilter, addContact, deleteContact } = contactsSlice.actions;
// export const getContacts = state => state.contacts.items;
// export const getFilter = state => state.contacts.filter;

// export default contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: {
//     value: '',
//   },
//   reducers: {
//     setFilter(state, action) {
//       state.value = action.payload;
//     },
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export const getFilter = state => state.filter.value;
// export const filterReduser = filterSlice.reducer;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://62fce052b9e38585cd47e248.mockapi.io/api/v1',
//   }),
//   tagTypes: ['contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['contacts'],
//     }),

//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['contacts'],
//     }),

//     addContact: builder.mutation({
//       query: values => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: values,
//       }),
//       invalidatesTags: ['contacts'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useDeleteContactMutation,
//   useAddContactMutation,
// } = contactsApi;