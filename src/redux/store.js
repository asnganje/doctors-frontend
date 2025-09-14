import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import authReducer from "./slices/authSlice";
import doctorsReducer from "./slices/doctorsSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token"],
};

const doctorsPersistConfig = {
  key:"doctors",
  storage,
  whitelist: ["list"]
}
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedDoctorsReducer = persistReducer(doctorsPersistConfig, doctorsReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    doctors: persistedDoctorsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/FLUSH",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(store);
