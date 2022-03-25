import EventContainer from "../../EventContainer";

export default abstract class AbstractSocketClient extends EventContainer {
    public abstract send(method: string, ...params: any[]): void;
}
