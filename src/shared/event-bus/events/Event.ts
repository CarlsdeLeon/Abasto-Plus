export class Event {
    constructor(private name: string, private data: any) {}

    getName(): string {
        return this.name;
    }

    getData(): any {
        return this.data;
    }
}