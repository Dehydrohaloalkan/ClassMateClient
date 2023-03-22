import Schedule from './components/Schedule/Schedule';
import { ScheduleType } from './types/Schedule';

type Props = ScheduleType[];

const data: Props = [
    {
        date: new Date('01.01.2002'),
        subjects: [
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
    },
    {
        date: new Date('01.02.2002'),
        subjects: [
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
    },
    {
        date: new Date('01.03.2002'),
        subjects: [
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
    },
    {
        date: new Date('01.04.2002'),
        subjects: [
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
    },
    {
        date: new Date('01.05.2002'),
        subjects: [
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
    },
    {
        date: new Date('01.06.2002'),
        subjects: [],
    },
];

function App() {
    return (
        <div className='container p-15'>
            <Schedule schedule={data} />
        </div>
    );
}

export default App;
