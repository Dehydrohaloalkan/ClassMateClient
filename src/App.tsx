import CoursesPage from './components/Courses/CoursesPage';
import SubGroupPage from './components/Group/SubGroupPage';
import WholeGroupPage from './components/Group/WholeGroupPage';

import SchedulePage from './components/SchedulePage/SchedulePage';

function App() {
    return (
        <div className='container p-15'>
            {/* <TableCard /> */}
            <SchedulePage />

            {/* <WholeGroupPage />
            <SubGroupPage /> */}

            {/* <CoursesPage /> */}
        </div>
    );
}

export default App;
