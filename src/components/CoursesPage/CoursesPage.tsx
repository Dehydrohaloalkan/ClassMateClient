import { CourseType } from '../../types/Courses';
import CoursesCard from './CoursesCard';

type Props = {};

const data: CourseType[] = [
    {
        title: 'Математика',
        startDate: new Date('01.01.2003'),
        endDate: new Date('01.01.2004'),
        teacher: 'Пупкин И.Д.',
        type: 'ЛК',
    },
    {
        title: 'Русский Язык',
        startDate: new Date('01.01.2003'),
        endDate: new Date('01.01.2004'),
        teacher: 'Длиннофамилова И.Д.',
        type: 'ЛК',
    },
    {
        title: 'Математика',
        startDate: new Date('01.01.2003'),
        endDate: new Date('01.01.2004'),
        teacher: 'Пупкин И.Д.',
        type: 'ЛК',
    },
    {
        title: 'Математика',
        startDate: new Date('01.01.2003'),
        endDate: new Date('01.01.2004'),
        teacher: 'Пупкин И.Д.',
        type: 'ЛК',
    },
];

function CoursesPage({}: Props) {
    return (
        <div className='container'>
            <h1 className='text-center text-muted'>Курсы</h1>
            <CoursesCard items={data} />
        </div>
    );
}

export default CoursesPage;
