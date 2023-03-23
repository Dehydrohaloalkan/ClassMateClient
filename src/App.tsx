import CoursesPage from './components/Courses/CoursesPage';
import SubGroupPage from './components/Group/SubGroupPage';
import WholeGroupPage from './components/Group/WholeGroupPage';
import SchedulePage from './components/Schedule/SchedulePage';
import TableCard from './components/TableCard/TableCard';

function App() {
    return (
        <div className='container p-15'>
            {/* <TableCard /> */}
            <WholeGroupPage />
            <SubGroupPage />
            <SchedulePage />
            <CoursesPage />
        </div>
    );
}

export default App;
