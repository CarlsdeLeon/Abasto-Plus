export class Event {
    constructor(private name: string, private payload: any) {}

    getName(): string {
        return this.name;
    }

    getData(): any {
        return this.payload;
    }
}