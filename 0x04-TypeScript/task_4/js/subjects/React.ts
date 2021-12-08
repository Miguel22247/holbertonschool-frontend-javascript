namespace Subjects {
  // Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  // Class React
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }
    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingReact > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }
}