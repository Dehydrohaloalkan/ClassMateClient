import CoursesPage from './components/CoursesPage/CoursesPage';
import SubGroupPage from './components/Group/SubGroupPage';
import WholeGroupPage from './components/Group/WholeGroupPage';

import SchedulePage from './components/SchedulePage/SchedulePage';

function App() {
    return (
        <div className='container p-15'>
            {/* <TableCard /> */}

            <WholeGroupPage />

            <SchedulePage />
            <CoursesPage />
            {/* <SubGroupPage /> */}
        </div>
    );
}

export default App;
