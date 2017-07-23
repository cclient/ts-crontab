'use strict';

class JobStatus {
    private _statusmap
    public constructor() {
        this._statusmap = new Map()
    }
    public Start(name: string): void {
        this._statusmap.set(name, true)
    };
    public End(name: string): void {
        this._statusmap.set(name, false)
    };
    public GetStatus(key: string): string {
        return this._statusmap.get(key)
    }
}

interface ITask {
    start(): void;
    end(): void;
}

export default class Task implements ITask {
    static jobstatus = new JobStatus()
    private _jobName: string;
    private _isRunning: boolean;
    private _run: Function
    constructor(name: string, run: Function) {
        this._isRunning = false;
        this._jobName = name;
        this._run = run
    }
    public start(): void {
        let self = this
        let status = Task.jobstatus.GetStatus(self._jobName)
        console.log(self._jobName + "   status " + status + " " + (new Date()).toString())
        if (!status) {
            Task.jobstatus.Start(self._jobName)
            self._isRunning = true;
            return self._run()
                .then((info) => {
                    console.log(self._jobName + " success ")
                    self.end()
                }).catch((info) => {
                    console.log(self._jobName + " fail" + JSON.stringify(info))
                    self.end()
                })
        } else {
            return;
        }
    }
    public end(): void {
        let self = this
        Task.jobstatus.End(self._jobName)
        if (this._isRunning) {
            this._isRunning = false
            console.log(this._jobName + " end")
        }
    }
}