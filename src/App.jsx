
import ProfileCard from "./assets/components/ProfileCard";
import { courses } from "./data/courses";

function App() {
  return (
    <div>
      {courses.map((course) => (
        <ProfileCard
          key={course.id}
          name={course.name}
          image={course.image}
          html={course.html}
          php={course.php}
          js={course.js}
        />
      ))}
    </div>
  );
}

export default App;

