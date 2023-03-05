export interface ITask {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  endDate: Date;
  endTime: Date;
  notify: boolean;
}
