import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
    startDate: Date;
    endDate: Date;
};

function ScheduleHeader({ startDate, endDate }: Props) {
    return (
        <div className='row justify-content-md-center'>
            <div className='col col-lg-2 position-relative'>
                <button className='btn btn-outline-info position-absolute top-50 start-50 translate-middle'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </div>
            <div className='col-md-auto'>
                <h1 className='text-center text-muted'>
                    Расписание с{' '}
                    <ins>{startDate.toLocaleDateString('ru-RU')}</ins> по{' '}
                    <ins>{endDate.toLocaleDateString('ru-RU')}</ins>
                </h1>
            </div>
            <div className='col col-lg-2 position-relative'>
                <button className='btn btn-outline-info position-absolute top-50 start-50 translate-middle'>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
}

export default ScheduleHeader;
