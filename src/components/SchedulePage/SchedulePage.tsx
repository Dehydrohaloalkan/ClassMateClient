import { ScheduleType } from '../../types/Schedule';
import ScheduleHeader from './ScheduleHeader';
import ScheduleCard from './ScheduleCard';

type Props = {};

const data: ScheduleType[] = [
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
            <ScheduleHeader startDate={data[0].date} endDate={data[5].date} />
            <div className='row'>
                <div className='col g-4'>
                    <ScheduleCard item={data[0]} />
                </div>
                <div className='col g-4'>
                    <ScheduleCard item={data[1]} />
                </div>
            </div>
            <div className='row '>
                <div className='col g-4'>
                    <ScheduleCard item={data[2]} />
                </div>
                <div className='col g-4'>
                    <ScheduleCard item={data[3]} />
                </div>
            </div>
            <div className='row '>
                <div className='col g-4'>
                    <ScheduleCard item={data[4]} />
                </div>
                <div className='col g-4'>
                    <ScheduleCard item={data[5]} />
                </div>
            </div>
        </div>
    );
}

export default SchedulePage;
