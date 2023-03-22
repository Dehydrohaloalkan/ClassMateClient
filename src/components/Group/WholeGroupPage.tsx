import { StudentType } from '../../types/Group';
import GroupTable from './GroupTable/GroupTable';

type Props = {};

const items: StudentType[] = [
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

function WholeGroupPage({}: Props) {
    return (
        <div className='container'>
            <h1 className='text-center text-muted'>Учащиеся</h1>
            <GroupTable items={items} />
        </div>
    );
}

export default WholeGroupPage;
