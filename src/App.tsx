import students from "./data/students.json";
import StudentCard from "./components/StudentCard";
import SummaryCard from "./components/SummaryCard";

function App() {
  const totalStudents = students.length;

  const totalCompleted = students.reduce(
    (total, student) => total + student.completedCourses,
    0
  );

  const totalPending = students.reduce(
    (total, student) => total + student.pendingCourses,
    0
  );

  const averageProgress = Math.round(
    students.reduce((total, student) => total + student.progress, 0) /
      students.length
  );

  return (
    <div className="dashboard">
      <header className="header">
        <div>
          <p className="small-title">IT CLUB • SUMMER INTERNSHIP 2026</p>
          <h1>Student Progress Dashboard</h1>
          <p className="subtitle">
            Track student learning progress, completed courses and pending
            courses.
          </p>
        </div>
      </header>

      <main className="container">
        <section className="summary-grid">
          <SummaryCard
            title="Total Students"
            value={totalStudents}
            icon="👩‍🎓"
          />

          <SummaryCard
            title="Completed Courses"
            value={totalCompleted}
            icon="✅"
          />

          <SummaryCard
            title="Pending Courses"
            value={totalPending}
            icon="📚"
          />

          <SummaryCard
            title="Average Progress"
            value={averageProgress}
            icon="📈"
          />
        </section>

        <section className="students-section">
          <div className="section-heading">
            <div>
              <h2>Students</h2>
              <p>Learning progress of all students</p>
            </div>
          </div>

          <div className="students-grid">
            {students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;