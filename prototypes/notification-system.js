// Notification Bell System - Shared Component
// Include this file in any page that needs notification functionality
// Usage: Add <script src="notification-system.js"></script> before closing </body>

window.NotificationSystem = {
  // Notification Bell Alpine Component
  notificationBell: function() {
    return {
      isOpen: false,
      notifications: [],
      
      get unreadCount() {
        return this.notifications.length;
      },

      init() {
        this.loadNotifications();
        // Create sample notifications if none exist (for demo)
        if (this.notifications.length === 0) {
          this.createSampleNotifications();
        }
      },

      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },

      loadNotifications() {
        const stored = localStorage.getItem('dqp10_notifications');
        if (stored) {
          try {
            this.notifications = JSON.parse(stored);
          } catch (e) {
            console.error('Error loading notifications:', e);
            this.notifications = [];
          }
        }
      },

      saveNotifications() {
        localStorage.setItem('dqp10_notifications', JSON.stringify(this.notifications));
      },

      confirmRead(notificationId) {
        const notif = this.notifications.find(n => n.id === notificationId);
        if (!notif) return;

        // Remove notification from list
        this.notifications = this.notifications.filter(n => n.id !== notificationId);
        this.saveNotifications();

        // Update task status to "chưa bắt đầu"
        this.updateTaskStatus(notif.taskId, 'chua-bat-dau');

        // Show success message
        this.$dispatch('notification-confirmed', { 
          taskName: notif.taskName,
          taskId: notif.taskId 
        });

        // Simple alert for now (can be replaced with toast notification)
        setTimeout(() => {
          alert(`✅ Đã xác nhận nhiệm vụ "${notif.taskName}"\n\nTrạng thái đã chuyển sang "Chưa bắt đầu"`);
        }, 100);
      },

      markAllRead() {
        if (this.notifications.length === 0) return;
        
        const count = this.notifications.length;
        if (confirm(`Xác nhận đánh dấu tất cả ${count} nhiệm vụ đã đọc?\n\nTất cả nhiệm vụ sẽ chuyển sang trạng thái "Chưa bắt đầu".`)) {
          // Update all task statuses
          this.notifications.forEach(notif => {
            this.updateTaskStatus(notif.taskId, 'chua-bat-dau');
          });
          
          // Clear all notifications
          this.notifications = [];
          this.saveNotifications();
          this.isOpen = false;

          alert(`✅ Đã xác nhận tất cả ${count} nhiệm vụ`);
        }
      },

      updateTaskStatus(taskId, newStatus) {
        // Get current activities from localStorage
        const activitiesData = localStorage.getItem('dqp10_activities');
        if (!activitiesData) return;

        try {
          const activities = JSON.parse(activitiesData);
          
          // Find and update the task
          let taskFound = false;
          activities.forEach(activity => {
            if (activity.tasks && Array.isArray(activity.tasks)) {
              const task = activity.tasks.find(t => t.id === taskId);
              if (task) {
                task.status = newStatus;
                task.acceptedAt = new Date().toISOString();
                taskFound = true;
              }
            }
          });
          
          // Save back to localStorage
          if (taskFound) {
            localStorage.setItem('dqp10_activities', JSON.stringify(activities));
          }
        } catch (e) {
          console.error('Error updating task status:', e);
        }
      },

      createSampleNotifications() {
        // Sample notifications for Nguyễn Văn Quang (Tổ 3)
        this.notifications = [
          {
            id: 'notif-001',
            taskId: 1001,
            activityId: 1,
            taskName: 'Chuẩn bị thiết bị huấn luyện',
            location: 'Sân trường THPT Trần Phú',
            deadline: '25/01/2026',
            teamInfo: 'Tổ 3',
            createdAt: '2026-01-20T10:00:00'
          },
          {
            id: 'notif-002',
            taskId: 1002,
            activityId: 1,
            taskName: 'Kiểm tra danh sách tham gia',
            location: 'Phòng họp phường',
            deadline: '23/01/2026',
            teamInfo: 'Tổ 3',
            createdAt: '2026-01-20T14:30:00'
          },
          {
            id: 'notif-003',
            taskId: 2001,
            activityId: 2,
            taskName: 'Tuần tra khu vực chợ',
            location: 'Chợ Phường 10',
            deadline: '24/01/2026',
            teamInfo: 'Tổ 3',
            createdAt: '2026-01-21T09:00:00'
          }
        ];
        
        this.saveNotifications();
      },

      // Helper: Add new notification programmatically
      addNotification(notification) {
        const newNotif = {
          id: 'notif-' + Date.now(),
          ...notification,
          createdAt: new Date().toISOString()
        };
        
        this.notifications.push(newNotif);
        this.saveNotifications();
      },

      // Helper: Clear all notifications
      clearAll() {
        this.notifications = [];
        this.saveNotifications();
      }
    };
  }
};

// Export for use in Alpine.js data
if (typeof window !== 'undefined') {
  window.notificationBell = window.NotificationSystem.notificationBell;
}

console.log('✅ Notification System loaded successfully');
