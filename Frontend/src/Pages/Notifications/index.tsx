import { useAppSelector, useAppDispatch } from "@/Hooks/ReduxHooks";
import { H4, P, Small } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Paper } from "@/components/ui/paper";
import {
  selectNotifications,
  deleteNotification,
} from "@/features/Notifications/notificationsSlice";
import { X } from "lucide-react";

const Notifications = () => {
  const notifications = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();
  return (
    <Paper className="px-4 pt-2 pb-4 flex flex-col gap-3 min-h-full">
      <H4 className="px-4">Notifications</H4>
      <div className="flex flex-col gap-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className="w-full rounded-xl px-4 py-2 flex flex-col gap-1 border relative"
          >
            <P>{notification.msg}</P>
            <Small className="ml-auto text-gray-500">
              {notification.date.toISOString()}
            </Small>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1 right-3 rounded-md w-6 h-6"
              onClick={() => dispatch(deleteNotification(notification.id))}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default Notifications;
