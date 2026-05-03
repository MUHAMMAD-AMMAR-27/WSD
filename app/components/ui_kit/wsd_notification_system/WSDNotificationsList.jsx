import React from "react";
/*
import { removeNotification, selectNotifications } from "./wsdNotificationsSlice.js";
*/
import WSDFloatingNotification from "./WSDFloatingNotification.jsx";
import { useAppDispatch, useAppSelector } from "../../../src/app/hooks.js";

const WSDDashboardFloatingNotificationsList = () => {
  // const dispatch = useAppDispatch();
/*
  const notifications = useAppSelector(selectNotifications);
*/

  // if (!notifications.length) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    {/*  {notifications.map((notification) => (
        <WSDFloatingNotification
          key={notification.id}
          show
          {...notification}
          onClose={() => {
            dispatch(removeNotification(notification.id));
          }}
        />
      ))}*/}
    </div>
  );
};

export default WSDDashboardFloatingNotificationsList;
