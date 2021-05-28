import { configureStore } from '@reduxjs/toolkit';

import appReducer from '../slice/appSlice';
import userReducer from '../slice/userSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});