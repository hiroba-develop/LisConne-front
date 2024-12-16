/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CSV } from '../models/CSV';
import type { UpserteNameAndMemo } from '../models/UpserteNameAndMemo';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * 全ての受注分析データを取得する
     * 企業IDに紐づく全ての受注分析データを取得します。
     * @returns any Successful operation
     * @throws ApiError
     */
    public static getAllOrders({
        companyId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/',
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
     * 受注分析リストの名前とメモの内容を更新
     * 受注分析リストのIDを指定して、名前とメモの内容を更新します。
     * @returns any Successful operation
     * @throws ApiError
     */
    public static getPetById({
        companyId,
        orderId,
        requestBody,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        /**
         * 受注データの一意の識別子
         */
        orderId: number,
        requestBody?: UpserteNameAndMemo,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orders/{OrderID}',
            path: {
                'OrderID': orderId,
            },
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
     * 特定の受注データを取得
     * @returns any Successful operation
     * @throws ApiError
     */
    public static updatePetWithForm({
        companyId,
        orderId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        /**
         * 受注データの一意の識別子
         */
        orderId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{OrderID}',
            path: {
                'OrderID': orderId,
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
    /**
     * 受注分析データをアップロード
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static inportOrdersData({
        companyId,
        requestBody,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        requestBody?: CSV,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/inport/',
            headers: {
                'CompanyID': companyId,
            },
            body: requestBody,
            mediaType: 'text/csv',
            errors: {
                400: `無効なリクエストが送信された場合に返されるエラーメッセージ`,
                401: `ユーザーが認証されていない場合に返されるエラーメッセージ`,
                500: `サーバー内部でエラーが発生した場合に返されるエラーメッセージ`,
            },
        });
    }
    /**
     * 受注分析データテンプレートをダウンロード
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static exportOrdersTemplate({
        companyId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/inport/',
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
     * 特定の受注分析データをcsv形式でエクスポート
     * @returns any Successful operation
     * @throws ApiError
     */
    public static uploadFile({
        companyId,
        orderId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        /**
         * 受注データの一意の識別子
         */
        orderId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{OrderID}/export',
            path: {
                'OrderID': orderId,
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
