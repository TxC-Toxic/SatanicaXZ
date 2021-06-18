import { WAConnection as Base } from './3.Connect';
import { WAMessageStatusUpdate, WAMessage, WAContact, WAChat, WA_MESSAGE_STATUS_TYPE, PresenceUpdate, BaileysEvent, DisconnectReason, WAOpenResult, AuthenticationCredentials, WAParticipantAction, WAGroupMetadata, WAUser, WAChatUpdate, BlocklistUpdate, WAContactUpdate } from './Constants';
export declare class WAConnection extends Base {
    constructor();
    /** Get the URL to download the profile picture of a person/group */
    getProfilePicture(jid: string | null): Promise<string>;
    protected applyingPresenceUpdate(update: PresenceUpdate): Partial<WAChat>;
    protected forwardStatusUpdate(update: WAMessageStatusUpdate): void;
    /** inserts an empty chat into the DB */
    protected chatAdd(jid: string, name?: string): Promise<WAChat>;
    protected contactAddOrGet(jid: string): WAContact;
    /** find a chat or return an error */
    protected assertChatGet: (jid: any) => WAChat;
    /** Adds the given message to the appropriate chat, if the chat doesn't exist, it is created */
    protected chatAddMessageAppropriate(message: WAMessage): Promise<void>;
    protected chatAddMessage(message: WAMessage, chat: WAChat): void;
    protected emitParticipantsUpdate: (jid: string, participants: string[], action: WAParticipantAction) => void;
    protected emitGroupUpdate: (jid: string, update: Partial<WAGroupMetadata>) => void;
    protected chatUpdatedMessage(messageIDs: string[], status: WA_MESSAGE_STATUS_TYPE, chat: WAChat): void;
    protected chatUpdateTime: (chat: any, stamp: number) => 2 | 1;
    /** sets the profile picture of a chat */
    protected setProfilePicture(chat: WAChat): Promise<void>;
    /** when the connection has opened successfully */
    on(event: 'open', listener: (result: WAOpenResult) => void): this;
    /** when the connection is opening */
    on(event: 'connecting', listener: () => void): this;
    /** when the connection has been validated */
    on(event: 'connection-validated', listener: (user: WAUser) => void): this;
    /** when the connection has closed */
    on(event: 'close', listener: (err: {
        reason?: DisconnectReason | string;
        isReconnecting: boolean;
    }) => void): this;
    /** when the socket is closed */
    on(event: 'ws-close', listener: (err: {
        reason?: DisconnectReason | string;
    }) => void): this;
    /** when WA updates the credentials */
    on(event: 'credentials-updated', listener: (auth: AuthenticationCredentials) => void): this;
    /** when a new QR is generated, ready for scanning */
    on(event: 'qr', listener: (qr: string) => void): this;
    /** when the connection to the phone changes */
    on(event: 'connection-phone-change', listener: (state: {
        connected: boolean;
    }) => void): this;
    /**
     * when a user's presence is updated
     * @deprecated use `chat-update`
     * */
    on(event: 'user-presence-update', listener: (update: PresenceUpdate) => void): this;
    /**
     * when a user's status is updated
     * @deprecated use `contact-update`
     */
    on(event: 'user-status-update', listener: (update: {
        jid: string;
        status?: string;
    }) => void): this;
    /** when a user's status is updated */
    on(event: 'contact-update', listener: (update: WAContactUpdate) => void): this;
    /** when a new chat is added */
    on(event: 'chat-new', listener: (chat: WAChat) => void): this;
    /** when contacts are sent by WA */
    on(event: 'contacts-received', listener: (u: {
        updatedContacts: Partial<WAContact>[];
    }) => void): this;
    /** when chats are sent by WA, and when all messages are received */
    on(event: 'chats-received', listener: (update: {
        hasNewChats?: boolean;
        hasReceivedLastMessage?: boolean;
        chatsWithMissingMessages: {
            jid: string;
            count: number;
        }[];
    }) => void): this;
    /** when multiple chats are updated (new message, updated message, deleted, pinned, etc) */
    on(event: 'chats-update', listener: (chats: WAChatUpdate[]) => void): this;
    /** when a chat is updated (new message, updated message, deleted, pinned, presence updated etc) */
    on(event: 'chat-update', listener: (chat: WAChatUpdate) => void): this;
    /**
     * when a new message is relayed
     * @deprecated use `chat-update`
     * */
    on(event: 'message-new', listener: (message: WAMessage) => void): this;
    /**
     * when a message object itself is updated (receives its media info or is deleted)
     * @deprecated use `chat-update`
     * */
    on(event: 'message-update', listener: (message: WAMessage) => void): this;
    /** when a message's status is updated (deleted, delivered, read, sent etc.) */
    on(event: 'message-status-update', listener: (message: WAMessageStatusUpdate) => void): this;
    /** when participants are added to a group */
    on(event: 'group-participants-update', listener: (update: {
        jid: string;
        participants: string[];
        actor?: string;
        action: WAParticipantAction;
    }) => void): this;
    /** when the group is updated */
    on(event: 'group-update', listener: (update: Partial<WAGroupMetadata> & {
        jid: string;
        actor?: string;
    }) => void): this;
    /** when WA sends back a pong */
    on(event: 'received-pong', listener: () => void): this;
    /** when a user is blocked or unblockd */
    on(event: 'blocklist-update', listener: (update: BlocklistUpdate) => void): this;
    on(event: BaileysEvent | string, listener: (json: any) => void): this;
    emit(event: BaileysEvent | string, ...args: any[]): boolean;
}
