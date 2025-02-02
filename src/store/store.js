import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import userReducer from '../features/userSlice'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['user']
}
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        user: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false  // Отключаем проверку сериализуемости для хранения
    })
})


export const persistor = persistStore(store)