import CoursesPage from './components/CoursesPage/CoursesPage';
import GroupPage from './components/Group/GroupPage';

import SchedulePage from './components/SchedulePage/SchedulePage';

function App() {
    return (
        <div className='container p-15'>
            {/* <TableCard /> */}
            <GroupPage />
            <SchedulePage />
            <CoursesPage />
            {/* <SubGroupPage /> */}
        </div>
    );
}

export default App;
