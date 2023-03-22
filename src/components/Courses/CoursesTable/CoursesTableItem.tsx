import { CourseType } from '../../../types/Courses';

type Props = {
    item: CourseType;
};

function CoursesTableItem({ item }: Props) {
    return (
        <tr>
            <td className='text-start'>{item.type}</td>
            <td className='text-start'>{item.title}</td>
            <td className='text-start'>
                {item.startDate.toLocaleDateString('ru-RU')}
            </td>
            <td className='text-start'>
                {item.endDate.toLocaleDateString('ru-RU')}
            </td>
            <td className='text-start'>{item.teacher}</td>
        </tr>
    );
}

export default CoursesTableItem;
