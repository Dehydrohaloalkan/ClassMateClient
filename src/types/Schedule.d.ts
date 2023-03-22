export type SubjectType = {
    startTime: Date;
    endTime: Date;
    title: string;
    room: string;
};

export type ScheduleType = {
    date: Date;
    subjects: SubjectType[];
};
