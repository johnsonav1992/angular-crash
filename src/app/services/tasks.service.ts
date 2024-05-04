import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, filter, map} from 'rxjs';
import { getRandomLoadTime } from '../utils/getRandomLoadTime';

export type Task = {
  id: number,
  title: string,
}

export type NewTask = Omit<Task, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseUrl = 'http://localhost:8080'

  tasks: Task[] | undefined;

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http
      .get<Task[]>(`${this.baseUrl}/tasks`)
      .pipe(
        delay(getRandomLoadTime())
        , filter(tasks => tasks.length > 0)
        , map(tasks => tasks.map(task => ({ ...task, title: task.title.toLowerCase() })))
      )
      .subscribe(tasks => this.tasks = tasks )
  }

  addTask(task: NewTask) {
    this.http.post(`${this.baseUrl}/tasks`, task).subscribe(() => {
      this.getAllTasks()
    })
  }

  deleteTask(id: number) {
    this.http.delete(`${this.baseUrl}/tasks/${id}`).subscribe(task => {
      this.getAllTasks()
    })
  }

}
