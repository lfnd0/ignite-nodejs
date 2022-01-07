interface ICourse {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {

  execute({ name, educator, duration = 8 }: ICourse) {
    console.log(name, educator, duration);
  };
}

export default new CreateCourseService();
