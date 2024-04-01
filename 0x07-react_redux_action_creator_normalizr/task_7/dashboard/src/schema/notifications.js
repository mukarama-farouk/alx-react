import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
  const { entities } = normalizedData;
  const notifications = entities.notifications;
  const users = entities.users;
  const messages = entities.messages;

  const userNotifications = Object.values(notifications).filter(
    (notification) => users[notification.author].id === userId
  );

  const userNotificationContexts = userNotifications.map(
    (notification) => messages[notification.context]
  );

  return userNotificationContexts;
}

export { normalizedData };
