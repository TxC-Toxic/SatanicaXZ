import { WAConnectOptions, WAOpenResult } from './Constants';
import { WAConnection as Base } from './1.Validation';
export declare class WAConnection extends Base {
    /** Connect to WhatsApp Web */
    connect(): Promise<WAOpenResult>;
    /** Meat of the connect logic */
    protected connectInternal(options: WAConnectOptions, delayMs?: number): Promise<{
        hasNewChats?: boolean;
        isNewUser: boolean;
    }>;
    /**
     * Sets up callbacks to receive chats, contacts & messages.
     * Must be called immediately after connect
     */
    protected receiveChatsAndContacts(waitOnlyForLast: boolean): {
        wait: Promise<{
            hasNewChats: boolean;
        }>;
        cancellations: any[];
    };
    private onMessageRecieved;
    /** Send a keep alive request every X seconds, server updates & responds with last seen */
    private startKeepAliveRequest;
}
