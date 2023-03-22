import { ScheduleType } from '../../types/Schedule';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import ScheduleHeader from './ScheduleHeader';

type Props = {
    schedule: ScheduleType[];
};

function Schedule({ schedule }: Props) {
    return (
        <div className='container p-4'>
            <ScheduleHeader
                startDate={schedule[0].date}
                endDate={schedule[5].date}
            />
            <div className='row'>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[0]} />
                </div>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[1]} />
                </div>
            </div>
            <div className='row '>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[2]} />
                </div>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[3]} />
                </div>
            </div>
            <div className='row '>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[4]} />
                </div>
                <div className='col g-4'>
                    <ScheduleTable item={schedule[5]} />
                </div>
            </div>
        </div>
    );
}

export default Schedule;
