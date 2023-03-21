import ScheduleTableDateHeader from './ScheduleTableDateHeader';
import ScheduleTableHeader from './ScheduleTableHeader';
import ScheduleTableItem from './ScheduleTableItem';

type Props = {
    item: {
        dayOfWeek: string;
        date: Date;
        subjectItems: {
            startTime: Date;
            endTime: Date;
            title: string;
            room: string;
        }[];
    };
};

export default function ScheduleTable({ item }: Props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <table className='table table-bordered border-secondary table-striped'>
                    <thead>
                        <ScheduleTableDateHeader
                            dayOfWeek={item.dayOfWeek}
                            date={item.date}
                        />
                        <ScheduleTableHeader />
                    </thead>
                    <tbody>
                        {item.subjectItems.map((item) => {
                            return (
                                <ScheduleTableItem
                                    startTime={item.startTime}
                                    endTime={item.endTime}
                                    title={item.title}
                                    room={item.room}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
