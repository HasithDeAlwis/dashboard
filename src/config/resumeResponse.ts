export interface IResumeResponse {
    id: string;
    resume: [{
        data: Uint8Array
    }];
}

export default IResumeResponse;