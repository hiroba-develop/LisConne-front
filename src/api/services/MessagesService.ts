/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageDetails } from '../models/MessageDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessagesService {
    /**
     * メッセージ一覧取得
     * Retrieve a list of messages based on search criteria.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static getMessages({
        companyId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/messages',
            headers: {
                'CompanyID': companyId,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `Pet not found`,
                422: `Validation exception`,
            },
        });
    }
    /**
     * お問い合わせ情報の送信
     * 指定された情報を基にお問い合わせを登録します。
     * @returns any Successful operation
     * @throws ApiError
     */
    public static createMessage({
        companyId,
        requestBody,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        requestBody?: MessageDetails,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/messages',
            headers: {
                'CompanyID': companyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid ID supplied`,
                404: `Pet not found`,
                422: `Validation exception`,
            },
        });
    }
    /**
     * メッセージ削除
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static deleteMessage({
        companyId,
        messageId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        /**
         * メッセージデータの一意の識別子
         */
        messageId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/messages/{MessageID}',
            path: {
                'MessageID': messageId,
            },
            headers: {
                'CompanyID': companyId,
            },
            errors: {
                400: `無効なリクエストが送信された場合に返されるエラーメッセージ`,
                401: `ユーザーが認証されていない場合に返されるエラーメッセージ`,
                500: `サーバー内部でエラーが発生した場合に返されるエラーメッセージ`,
            },
        });
    }
}
