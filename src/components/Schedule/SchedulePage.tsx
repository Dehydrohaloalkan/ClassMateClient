import { ScheduleType } from '../../types/Schedule';
import ScheduleTable from './ScheduleTable/ScheduleTable';
import ScheduleHeader from './ScheduleHeader';

type Props = {};

const schedule: ScheduleType[] = [
    {
        date: new Date('01.01.2002'),
        subjects: [
            {
                startTime: new Date('01.01.2002'),
                endTime: new Date('01.01.2002'),
                title: 'Английский Язык Английский Язык Английский Язык',
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

function SchedulePage({}: Props) {
    return (
        <div className='container p-4'>
            <ScheduleHeader
                startDate={schedule[0].date}
                endDate={schedule[5].date}
            />
            <div className='row'>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[0]} />
                </div>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[1]} />
                </div>
            </div>
            <div className='row '>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[2]} />
                </div>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[3]} />
                </div>
            </div>
            <div className='row '>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[4]} />
                </div>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[5]} />
                </div>
            </div>
        </div>
    );
}

export default SchedulePage;
