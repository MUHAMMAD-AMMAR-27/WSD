import { createAppSlice } from "../../../src/app/createAppSlice.js";

const initialState = {
  notifications: [],
};

export const notificationSlice = createAppSlice({
  name: "wsd_notifications",
  initialState,
  reducers: (create) => ({
    queueNotification: create.reducer((state, action) => {
      const isSessionExpiredNotification = ({type, title}) => {
        return !!(type === 'warning' && title?.toLowerCase().includes("Session Expired".toLowerCase()));
      }

      if (isSessionExpiredNotification(action.payload)) {
        if (state.notifications.find(notification => isSessionExpiredNotification(notification))) {
          return;
        }
      }

      state.notifications.push({
        id: crypto.randomUUID(),
        type: "success",
        duration: 3000,
        ...action.payload,
      });
    }),

    removeNotification: create.reducer((state, action) => {
      state.notifications = state.notifications.filter((notification) => notification.id !== action.payload);
    }),

    clearNotifications: create.reducer((state) => {
      state.notifications = [];
    }),
  }),
  selectors: {
    selectNotifications: (state) => state.notifications,
  },
});

export const { queueNotification, removeNotification, clearNotifications } = notificationSlice.actions;

export const { selectNotifications } = notificationSlice.selectors;
