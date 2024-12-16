/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OptoutService {
    /**
     * NG企業を検索結果から登録
     * Retrieve a list of corporations based on search criteria.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static postOptout({
        companyId,
        requestBody,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        requestBody?: {
            corporateid: number;
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/optout/',
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
    /**
     * NG企業一覧取得
     * Place a new order in the store
     * @returns any Successful operation
     * @throws ApiError
     */
    public static getOptoutList({
        companyId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/optout/',
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
    /**
     * NG企業一覧から削除
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static removeFromOptoutList({
        companyId,
        corporateId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        /**
         * 企業データの一意の識別子
         */
        corporateId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/optout/{CorporateID}',
            path: {
                'CorporateID': corporateId,
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
