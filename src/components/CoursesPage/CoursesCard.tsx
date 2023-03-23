import { CourseType } from '../../types/Courses';
import TableCard from '../TableCard/TableCard';
import { TableHeaderItem } from '../../types/TableCard';
type Props = {
    items: CourseType[];
};

const tableHeader: TableHeaderItem<CourseType>[] = [
    {
        title: 'Тип',
        key: (item) => item.type,
        fit: true,
    },
    {
        title: 'Название',
        key: (item) => item.title,
    },
    {
        title: 'Преподаватель',
        key: (item) => item.teacher,
    },
    {
        title: 'Дата начала',
        key: (item) => item.startDate.toLocaleDateString('ru-RU'),
        fit: true,
    },
    {
        title: 'Дата окончания',
        key: (item) => item.endDate.toLocaleDateString('ru-RU'),
        fit: true,
    },
];

function CoursesCard({ items }: Props) {
    return (
        <TableCard<CourseType>
            tableHeader={tableHeader}
            tableItems={items}
            emptyRowText='Текущих курсов нет'
            addIndexes
        />
    );
}

export default CoursesCard;
