import { ScheduleType, SubjectType } from '../../types/Schedule';
import { TableHeaderItem } from '../../types/TableCard';
import TableCard from '../TableCard/TableCard';

type Props = {
    item: ScheduleType;
};

const tableHeader: TableHeaderItem<SubjectType>[] = [
    {
        title: 'Начало',
        key: (item) =>
            item.startTime.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
            }),
        fit: true,
    },
    {
        title: 'Конец',
        key: (item) =>
            item.endTime.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
            }),
        fit: true,
    },
    {
        title: 'Предмет',
        key: (item) => item.title,
    },
    {
        title: 'Аудитория',
        key: (item) => item.room,
        fit: true,
    },
];

const getWeekDay = (date: Date): string => {
    let weekDay = date.toLocaleString('ru-RU', { weekday: 'long' });
    return weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
};

function ScheduleCard({ item }: Props) {
    return (
        <TableCard<SubjectType>
            tableHeader={tableHeader}
            tableItems={item.subjects}
            emptyRowText='В этот день занятий нет'
            header={
                <>
                    <h4>{getWeekDay(item.date)}</h4>
                    <h5>{item.date.toLocaleDateString('ru-RU')}</h5>
                </>
            }
            headerJustifyContent='justify-content-between'
        />
    );
}

export default ScheduleCard;
