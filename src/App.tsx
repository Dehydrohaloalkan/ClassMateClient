import CoursesPage from './components/CoursesPage/CoursesPage';
import GroupPage from './components/Group/GroupPage';

import DiaryPage from './components/DiaryPage/DiaryPage';

function App() {
    return (
        <div className='container p-15'>
            {/* <TableCard /> */}
            <GroupPage />
            <DiaryPage />
            <CoursesPage />
            {/* <SubGroupPage /> */}
        </div>
    );
}

export default App;
