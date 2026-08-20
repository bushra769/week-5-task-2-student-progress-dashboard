import ProgressBar from "./ProgressBar";

interface Student {
  id: number;
  name: string;
  completedCourses: number;
  pendingCourses: number;
  progress: number;
}

interface StudentCardProps {
  student: Student;
}

function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="student-card">
      <div className="student-header">
        <div className="student-avatar">
          {student.name.charAt(0)}
        </div>

        <div>
          <h3>{student.name}</h3>
          <p>Student</p>
        </div>
      </div>

      <div className="course-stats">
        <div className="course-stat completed">
          <span>Completed</span>
          <strong>{student.completedCourses}</strong>
        </div>

        <div className="course-stat pending">
          <span>Pending</span>
          <strong>{student.pendingCourses}</strong>
        </div>
      </div>

      <ProgressBar progress={student.progress} />
    </div>
  );
}

export default StudentCard;