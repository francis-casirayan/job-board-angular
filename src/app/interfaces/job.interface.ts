export interface Job{
    email: string;
    title: string;
    description: string;
}


export interface JobResponse{
    data: Job[];
    message: string;
    success: boolean;
}
