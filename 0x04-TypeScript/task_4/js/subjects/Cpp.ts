namespace Subjects {
  // Teacher interface
  export interface Teacher {
    experienceTeachingCpp?: number;
  }
  // Class React
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingCpp > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }
}