export type SubjectType = {
    startTime: Date;
    endTime: Date;
    title: string;
    room: string;
    absence?: boolean;
    grade?: number;
};

export type DiaryType = {
    date: Date;
    subjects: SubjectType[];
};
