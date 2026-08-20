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
      <div className="student-top">
        <div className="avatar">
          {student.name.charAt(0)}
        </div>

        <div>
          <h3>{student.name}</h3>
          <p>Student ID: #{student.id}</p>
        </div>
      </div>

      <div className="course-info">
        <div>
          <span>Completed Courses</span>
          <strong>{student.completedCourses}</strong>
        </div>

        <div>
          <span>Pending Courses</span>
          <strong>{student.pendingCourses}</strong>
        </div>
      </div>

      <div className="progress-header">
        <span>Overall Progress</span>
        <strong>{student.progress}%</strong>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${student.progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default StudentCard;