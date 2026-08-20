import SummaryCard from "./components/SummaryCard";
import StudentCard from "./components/StudentCard";
import students from "./data/students.json";

function App() {
  const totalStudents = students.length;

  const completedCourses = students.reduce(
    (total, student) => total + student.completedCourses,
    0
  );

  const pendingCourses = students.reduce(
    (total, student) => total + student.pendingCourses,
    0
  );

  const averageProgress = Math.round(
    students.reduce((total, student) => total + student.progress, 0) /
      students.length
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="welcome">Welcome back 👋</p>
          <h1>Student Progress Dashboard</h1>
          <p className="subtitle">
            Track your learning progress and course completion.
          </p>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="summary-grid">
          <SummaryCard
            title="Total Students"
            value={totalStudents}
            icon="👨‍🎓"
          />

          <SummaryCard
            title="Completed Courses"
            value={completedCourses}
            icon="✅"
          />

          <SummaryCard
            title="Pending Courses"
            value={pendingCourses}
            icon="📚"
          />

          <SummaryCard
            title="Average Progress"
            value={`${averageProgress}%`}
            icon="📈"
          />
        </section>

        <section className="students-section">
          <div className="section-heading">
            <div>
              <h2>Students</h2>
              <p>View individual learning progress</p>
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