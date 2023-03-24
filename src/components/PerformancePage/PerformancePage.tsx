import { PerformanceItem } from '../../types/Performance';
import PerformanceCard from './PerformanceCard';

type Props = {};

const data: PerformanceItem[] = [
    // {
    //     subjectTitle: 'Математика',
    //     subjectId: 1,
    //     date: new Date('01.01.2002'),
    //     grade: 10,
    // },
    // {
    //     subjectTitle: 'Математика',
    //     subjectId: 1,
    //     date: new Date('01.02.2002'),
    //     grade: 3,
    // },
    // {
    //     subjectTitle: 'Русский язык',
    //     subjectId: 2,
    //     date: new Date('01.02.2002'),
    //     absence: true,
    // },
    // {
    //     subjectTitle: 'Английский язык',
    //     subjectId: 3,
    //     date: new Date('01.03.2002'),
    //     grade: 10,
    // },
    // {
    //     subjectTitle: 'Физика',
    //     subjectId: 4,
    //     date: new Date('01.05.2002'),
    //     grade: 2,
    // },
    // {
    //     subjectTitle: 'Химия',
    //     subjectId: 5,
    //     date: new Date('02.10.2002'),
    //     absence: true,
    // },
];

function PerformancePage({}: Props) {
    return (
        <div className='container'>
            <h1 className='text-center text-muted'>Оценки и посещаемость</h1>
            <PerformanceCard items={data} />{' '}
        </div>
    );
}

export default PerformancePage;
