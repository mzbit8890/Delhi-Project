import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import VendorReducer from "./VendorSlice";
import AdminReducer from "./AdminSlice";
import UserReducer from "./UserSlice";
import PropertyReducer from "./PropertySlice";
import BookingReducer from "./Booking/BookingSlice";
import BookingDateReducer from "./Booking/BookingDateSlice";
import bookingStatusReducer from "./Booking/BookingStatus";
const persistConfig = {
  key: "root",
  storage,
};

const persistedVendorReducer = persistReducer(persistConfig, VendorReducer);
const persistedAdminReducer = persistReducer(persistConfig, AdminReducer);
const persistedUserReducer = persistReducer(persistConfig, UserReducer);
const persistedPropertyReducer = persistReducer(persistConfig, PropertyReducer);
const store = configureStore({
  reducer: {
    vendor: persistedVendorReducer,
    admin: persistedAdminReducer,
    user: persistedUserReducer,
    property: persistedPropertyReducer,
    booking: BookingReducer,
    bookingDates: BookingDateReducer,
    bookingStatus: bookingStatusReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };