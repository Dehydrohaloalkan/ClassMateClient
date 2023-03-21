import ScheduleTable from './components/ScheduleTable/ScheduleTable';

type Props = {
    dayOfWeek: string;
    date: Date;
    subjectItems: {
        startTime: Date;
        endTime: Date;
        title: string;
        room: string;
    }[];
};

const data: Props = {
    dayOfWeek: 'Понедельник',
    date: new Date('01.01.2002'),
    subjectItems: [
        {
            startTime: new Date('01.01.2002'),
            endTime: new Date('01.01.2002'),
            title: 'Математика',
            room: '104-4',
        },
        {
            startTime: new Date('01.01.2002'),
            endTime: new Date('01.01.2002'),
            title: 'Математика',
            room: '104-4',
        },
        {
            startTime: new Date('01.01.2002'),
            endTime: new Date('01.01.2002'),
            title: 'Математика',
            room: '104-4',
        },
        {
            startTime: new Date('01.01.2002'),
            endTime: new Date('01.01.2002'),
            title: 'Математика',
            room: '104-4',
        },
    ],
};

function App() {
    return (
        <div className='container p-15'>
            <ScheduleTable item={data} />
        </div>
    );
}

export default App;
