import { ScheduleType } from '../../../types/Schedule';
import ScheduleTableDateHeader from './ScheduleTableDateHeader';
import ScheduleTableEmptyRow from './ScheduleTableEmptyRow';
import ScheduleTableHeader from './ScheduleTableHeader';
import ScheduleTableItem from './ScheduleTableItem';

type Props = {
    item: ScheduleType;
};

export default function ScheduleTable({ item }: Props) {
    const getWeekDay = (date: Date): string => {
        let weekDay = date.toLocaleString('ru-RU', { weekday: 'long' });
        return weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
    };

    return (
        <div className='card shadow '>
            <div className='card-body'>
                <table className='table table-bordered border-secondary table-striped'>
                    <thead>
                        <ScheduleTableDateHeader
                            dayOfWeek={getWeekDay(item.date)}
                            date={item.date}
                        />
                        <ScheduleTableHeader />
                    </thead>
                    <tbody>
                        {item.subjects.length ? (
                            item.subjects.map((item) => {
                                return <ScheduleTableItem item={item} />;
                            })
                        ) : (
                            <ScheduleTableEmptyRow />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
