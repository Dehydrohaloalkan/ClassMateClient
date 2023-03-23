import { StudentType } from '../../types/Group';
import SubGroupCard from './SubGroupCard';
import WholeGroupCard from './WholeGroupCard';

type Props = {};

const data: StudentType[] = [
    {
        name: 'Евгений',
        isGroupLeader: false,
        isMarking: true,
        subGroup: false,
    },
    {
        name: 'Олег',
        isGroupLeader: true,
        isMarking: false,
        subGroup: false,
    },
    {
        name: 'Алексей',
        isGroupLeader: false,
        isMarking: false,
        subGroup: false,
    },
    {
        name: 'Алексей',
        isGroupLeader: false,
        isMarking: false,
        subGroup: false,
    },
    {
        name: 'Алексей',
        isGroupLeader: false,
        isMarking: false,
        subGroup: false,
    },
    {
        name: 'Алексей',
        isGroupLeader: false,
        isMarking: false,
        subGroup: false,
    },
    {
        name: 'Алексей',
        isGroupLeader: false,
        isMarking: false,
        subGroup: false,
    },
];

function GroupPage({}: Props) {
    return (
        <div className='container'>
            <h1 className='text-center text-muted'>Учащиеся</h1>
            <WholeGroupCard items={data} />

            <div className='row'>
                <div className='col g-4'>
                    <SubGroupCard
                        items={data.filter((item) => !item.subGroup)}
                        headerText='1 подгруппа'
                    />
                </div>
                <div className='col g-4'>
                    <SubGroupCard
                        items={data.filter((item) => item.subGroup)}
                        headerText='2 подгруппа'
                    />
                </div>
            </div>
        </div>
    );
}

export default GroupPage;
