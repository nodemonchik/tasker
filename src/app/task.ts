export class Task {
  id: number;
  title: string;
  completed: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
