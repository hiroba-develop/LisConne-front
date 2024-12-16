/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApproachService {
    /**
     * フォーム送信一覧取得
     * Retrieve a list of messages based on search criteria.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static getApproach({
        companyId,
        corporateName,
        startDate,
        endDate,
        status,
        corporateListId,
        messageId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        /**
         * 企業名
         */
        corporateName?: string,
        /**
         * 開始日
         */
        startDate?: string,
        /**
         * 終了日
         */
        endDate?: string,
        /**
         * ステータス
         */
        status?: number,
        /**
         * 企業名
         */
        corporateListId?: number,
        /**
         * メッセージID
         */
        messageId?: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/approach',
            headers: {
                'CompanyID': companyId,
            },
            query: {
                'corporate_name': corporateName,
                'start_date': startDate,
                'end_date': endDate,
                'status': status,
                'corporate_list_id': corporateListId,
                'message_id': messageId,
            },
            errors: {
                400: `無効なリクエストが送信された場合に返されるエラーメッセージ`,
                401: `ユーザーが認証されていない場合に返されるエラーメッセージ`,
                500: `サーバー内部でエラーが発生した場合に返されるエラーメッセージ`,
            },
        });
    }
    /**
     * フォーム送信情報の送信
     * 指定された情報を基にフォーム送信情報を登録します。
     * @returns any Successful operation
     * @throws ApiError
     */
    public static sendApproach({
        companyId,
        requestBody,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        requestBody?: {
            corporate_list_id: Array<number>;
            optout_list_id: Array<number>;
            message_id: number;
            status?: number;
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/approach',
            headers: {
                'CompanyID': companyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `無効なリクエストが送信された場合に返されるエラーメッセージ`,
                401: `ユーザーが認証されていない場合に返されるエラーメッセージ`,
                500: `サーバー内部でエラーが発生した場合に返されるエラーメッセージ`,
            },
        });
    }
}
