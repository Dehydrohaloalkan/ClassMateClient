import CoursesPage from './components/CoursesPage/CoursesPage';
import GroupPage from './components/GroupPage/GroupPage';
import DiaryPage from './components/DiaryPage/DiaryPage';
import PerformancePage from './components/PerformancePage/PerformancePage';

function App() {
    return (
        <div className='container p-15'>
            <PerformancePage />

            <GroupPage />
            <DiaryPage />
            <CoursesPage />
        </div>
    );
}

export default App;
