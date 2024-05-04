import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, of, switchMap } from 'rxjs';
import { sleep } from '../utils/sleep';

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

  tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  async getAllTasks() {
    await sleep(2)
    
    return this.http
      .get<Task[]>(`${this.baseUrl}/tasks`)
      .pipe(
        filter(tasks => tasks.length > 0)
        , map(tasks => tasks.map(task => ({ ...task, title: task.title.toLowerCase() })))
      )
      .subscribe(tasks => this.tasks = tasks )
  }

  addTask(task: NewTask) {
    this.http.post(`${this.baseUrl}/tasks`, task).subscribe(task => {
      this.getAllTasks()
    })
  }

  deleteTask(id: number) {
    this.http.delete(`${this.baseUrl}/tasks/${id}`).subscribe(task => {
      this.getAllTasks()
    })
  }

}
