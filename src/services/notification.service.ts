import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
    if (!this.isNotificationPermitted()) {
      this.getNotificationPersmission()
    }
  }

  isNotificationPermitted(): boolean {
    if (typeof window !== "undefined") {
      if (Notification.permission === "granted") {
        return true
      } else return false
    }

    return false
  }

  getNotificationPersmission() {
    if (typeof window !== "undefined") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") console.log("Norification Granted!")
      })
    }
  }

  sendNotification(body?: string, img?: string) {
    if (typeof window !== "undefined") {
      if (Notification.permission === "granted") {
        const notificatin = new Notification("Tasko", { body, icon: img })
      } else console.error("Permission for Notification is not granted")
    }
  }
}
