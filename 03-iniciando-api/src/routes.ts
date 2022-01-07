import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    educator: 'Robbie',
    name: 'TypeScript',
    duration: 12
  });

  return response.send();
}
