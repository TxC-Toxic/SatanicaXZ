/// <reference types="node" />
import { URL } from 'url';
import { Agent } from 'https';
import Decoder from '../Binary/Decoder';
import { MessageType, MessageOptions, WAChat, WAMessageContent, WAMessageProto, WAMessage, WAMessageKey } from './Constants';
import KeyedDB from '@adiwajshing/keyed-db';
import { Response } from 'node-fetch';
export declare const Browsers: {
    ubuntu: (browser: any) => [string, string, string];
    macOS: (browser: any) => [string, string, string];
    baileys: (browser: any) => [string, string, string];
    /** The appropriate browser based on your OS & release */
    appropriate: (browser: any) => [string, string, string];
};
export declare const toNumber: (t: Long | number) => number;
export declare const waChatKey: (pin: boolean) => {
    key: (c: WAChat) => string;
    compare: (k1: string, k2: string) => number;
};
export declare const waMessageKey: {
    key: (m: WAMessage) => string;
    compare: (k1: string, k2: string) => number;
};
export declare const WA_MESSAGE_ID: (m: WAMessage) => string;
export declare const GET_MESSAGE_ID: (key: WAMessageKey) => string;
export declare const whatsappID: (jid: string) => string;
export declare const isGroupID: (jid: string) => boolean;
export declare const newMessagesDB: (messages?: WAMessage[]) => KeyedDB<WAMessageProto.WebMessageInfo, string>;
export declare function shallowChanges<T>(old: T, current: T, { lookForDeletedKeys }: {
    lookForDeletedKeys: boolean;
}): Partial<T>;
/** decrypt AES 256 CBC; where the IV is prefixed to the buffer */
export declare function aesDecrypt(buffer: Buffer, key: Buffer): Buffer;
/** decrypt AES 256 CBC */
export declare function aesDecryptWithIV(buffer: Buffer, key: Buffer, IV: Buffer): Buffer;
export declare function aesEncrypt(buffer: Buffer, key: Buffer): Buffer;
export declare function aesEncrypWithIV(buffer: Buffer, key: Buffer, IV: Buffer): Buffer;
export declare function hmacSign(buffer: Buffer, key: Buffer): Buffer;
export declare function sha256(buffer: Buffer): Buffer;
export declare function hkdf(buffer: Buffer, expandedLength: number, info?: any): Buffer;
export declare function randomBytes(length: any): Buffer;
/** unix timestamp of a date in seconds */
export declare const unixTimestampSeconds: (date?: Date) => number;
export declare const delay: (ms: number) => Promise<void>;
export declare const delayCancellable: (ms: number) => {
    delay: Promise<void>;
    cancel: () => void;
};
export declare function promiseTimeout<T>(ms: number, promise: (resolve: (v?: T) => void, reject: (error: any) => void) => void): Promise<T>;
export declare function generateMessageTag(epoch?: number): string;
export declare function generateClientID(): string;
export declare function generateMessageID(): string;
export declare function decryptWA(message: string | Buffer, macKey: Buffer, encKey: Buffer, decoder: Decoder, fromMe?: boolean): [string, Object, [number, number]?];
/** generates all the keys required to encrypt/decrypt & sign a media message */
export declare function getMediaKeys(buffer: any, mediaType: MessageType): {
    iv: Buffer;
    cipherKey: Buffer;
    macKey: Buffer;
};
export declare const compressImage: (buffer: Buffer) => Promise<Buffer>;
export declare const generateProfilePicture: (buffer: Buffer) => Promise<{
    img: Buffer;
    preview: Buffer;
}>;
export declare const ProxyAgent: (host: string | URL) => Agent;
/** gets the SHA256 of the given media message */
export declare const mediaMessageSHA256B64: (message: WAMessageContent) => string;
export declare function getAudioDuration(buffer: Buffer): Promise<number>;
/** generates a thumbnail for a given media, if required */
export declare function generateThumbnail(buffer: Buffer, mediaType: MessageType, info: MessageOptions): Promise<void>;
/**
 * Decode a media message (video, image, document, audio) & return decrypted buffer
 * @param message the media message you want to decode
 */
export declare function decodeMediaMessageBuffer(message: WAMessageContent, fetchRequest: (host: string, method: string) => Promise<Response>): Promise<Buffer>;
export declare function extensionForMediaMessage(message: WAMessageContent): string;
