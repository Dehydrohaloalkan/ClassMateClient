import CoursesPage from './components/Courses/CoursesPage';
import SchedulePage from './components/Schedule/SchedulePage';

function App() {
    return (
        <div className='container p-15'>
            <SchedulePage />
            <CoursesPage />
        </div>
    );
}

export default App;
