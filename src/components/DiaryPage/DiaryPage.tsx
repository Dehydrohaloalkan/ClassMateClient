import { DiaryType } from '../../types/Diary';
import DiaryHeader from './DiaryHeader';
import DiaryCard from './DiaryCard';

type Props = {};

const data: DiaryType[] = [
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
                grade: 7,
            },
            {
                startTime: new Date('01.01.2002'),
                endTime: new Date('01.01.2002'),
                title: 'Математика',
                room: '104-4',
                grade: 9,
            },
            {
                startTime: new Date('01.01.2002'),
                endTime: new Date('01.01.2002'),
                title: 'Математика',
                room: '104-4',
                grade: 8,
            },
            {
                startTime: new Date('01.01.2002'),
                endTime: new Date('01.01.2002'),
                title: 'Математика',
                room: '104-4',
                grade: 9,
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
                grade: 10,
            },
            {
                startTime: new Date('01.01.2002'),
                endTime: new Date('01.01.2002'),
                title: 'Математика',
                room: '104-4',
                absence: true,
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
                absence: true,
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
                absence: true,
            },
            {
                startTime: new Date('01.01.2002'),
                endTime: new Date('01.01.2002'),
                title: 'Математика',
                room: '104-4',
                absence: true,
            },
            {
                startTime: new Date('01.01.2002'),
                endTime: new Date('01.01.2002'),
                title: 'Математика',
                room: '104-4',
                absence: true,
            },
            {
                startTime: new Date('01.01.2002'),
                endTime: new Date('01.01.2002'),
                title: 'Математика',
                room: '104-4',
                absence: true,
            },
        ],
    },
    {
        date: new Date('01.06.2002'),
        subjects: [],
    },
];

function DiaryPage({}: Props) {
    return (
        <div className='container p-4'>
            <DiaryHeader startDate={data[0].date} endDate={data[5].date} />
            <div className='row'>
                <div className='col g-4'>
                    <DiaryCard item={data[0]} />
                </div>
                <div className='col g-4'>
                    <DiaryCard item={data[1]} />
                </div>
            </div>
            <div className='row '>
                <div className='col g-4'>
                    <DiaryCard item={data[2]} />
                </div>
                <div className='col g-4'>
                    <DiaryCard item={data[3]} />
                </div>
            </div>
            <div className='row '>
                <div className='col g-4'>
                    <DiaryCard item={data[4]} />
                </div>
                <div className='col g-4'>
                    <DiaryCard item={data[5]} />
                </div>
            </div>
        </div>
    );
}

export default DiaryPage;
