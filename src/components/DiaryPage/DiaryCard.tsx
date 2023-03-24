import { DiaryType, SubjectType } from '../../types/Diary';
import { TableHeaderItem, TableItemColor } from '../../types/TableCard';
import TableCard from '../TableCard/TableCard';

type Props = {
    item: DiaryType;
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
    {
        title: 'Отметка',
        key: (item) => item.grade?.toString() || '',
        fit: true,
    },
];

const getWeekDay = (date: Date): string => {
    let weekDay = date.toLocaleString('ru-RU', { weekday: 'long' });
    return weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
};

const rowColor = (item: SubjectType): TableItemColor => {
    if (item.absence) return 'table-danger';
    return '';
};

function DiaryCard({ item }: Props) {
    return (
        <TableCard<SubjectType>
            tableHeader={tableHeader}
            tableItems={item.subjects}
            emptyRowText='В этот день занятий нет'
            tableRowColor={rowColor}
            header={
                <>
                    <h4>{getWeekDay(item.date)}</h4>
                    <h5>{item.date.toLocaleDateString('ru-RU')}</h5>
                </>
            }
            headerJustifyContent='justify-content-between'
            footer={
                <span className='badge text-bg-danger m-1'>Отсутствие</span>
            }
        />
    );
}

export default DiaryCard;
