import cron from "node-cron";
import { notifyApi } from "./notify.js";

type User = {
  name: string;
  birthDate: string; // "MM-DD"
};

const users: User[] = [
  { name: "Alice", birthDate: "09-18" },
  { name: "Bob", birthDate: "01-05" },
  { name: "Carol", birthDate: "12-25" },
];

async function sendBirthdayWishes(): Promise<void> {
  const today = new Date();
  const todayStr =
    `${String(today.getMonth() + 1).padStart(2, "0")}-` +
    String(today.getDate()).padStart(2, "0");

  const birthdayUsers = users.filter((user) => user.birthDate === todayStr);

  if (birthdayUsers.length === 0) {
    console.log(`No birthdays today (${todayStr}).`);
    return;
  }

  for (const user of birthdayUsers) {
    const message = `Happy Birthday, ${user.name}!`;
    console.log(message);
    await notifyApi(message);
  }
}

cron.schedule("0 9 * * *", () => {
  sendBirthdayWishes();
});

console.log("Birthday cron job scheduled: daily at 09:00");