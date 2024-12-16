/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Corporates } from '../models/Corporates';
import type { CreateCorporateListRequest } from '../models/CreateCorporateListRequest';
import type { CSV } from '../models/CSV';
import type { GetAllCorporateListResponse } from '../models/GetAllCorporateListResponse';
import type { ResponseStatus } from '../models/ResponseStatus';
import type { UpserteNameAndMemo } from '../models/UpserteNameAndMemo';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CorporationsService {
    /**
     * 企業リスト情報一覧取得
     * 企業リストを全て取得します。
     * @returns GetAllCorporateListResponse Successful operation
     * @throws ApiError
     */
    public static getAllCorporateList({
        companyId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
    }): CancelablePromise<GetAllCorporateListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/corporations/',
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
     * 企業リスト作成
     * 企業リストを作成します。
     * @returns ResponseStatus 成功したリクエストが送信された場合に返されるエラーメッセージ
     * @throws ApiError
     */
    public static createCorporateList({
        companyId,
        requestBody,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        requestBody?: CreateCorporateListRequest,
    }): CancelablePromise<ResponseStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/corporations/',
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
     * 企業情報検索 ※NG企業検索にも利用
     * 検索条件をもとに企業情報を取得します。
     * @returns Corporates Successful operation
     * @throws ApiError
     */
    public static searchCorporates({
        companyId,
        corporateNumber,
        salesCode,
        employeeNumberCode,
        establishYear,
        industryCode,
        prefectureCode,
        capitalCode,
        scenarioCode,
        recuitCode,
        averageAgeCode,
        pvCountCode,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        corporateNumber?: number,
        /**
         * 売上
         */
        salesCode?: Array<number>,
        /**
         * 従業員数
         */
        employeeNumberCode?: Array<number>,
        /**
         * 設立年
         */
        establishYear?: Array<number>,
        /**
         * 業種コード
         */
        industryCode?: Array<number>,
        /**
         * 都道府県コード
         */
        prefectureCode?: Array<number>,
        /**
         * 資本金
         */
        capitalCode?: Array<number>,
        /**
         * シナリオコード
         */
        scenarioCode?: Array<number>,
        /**
         * 採用コード
         */
        recuitCode?: Array<number>,
        /**
         * 平均年齢
         */
        averageAgeCode?: Array<number>,
        /**
         * PV数
         */
        pvCountCode?: Array<number>,
    }): CancelablePromise<Corporates> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/corporations/seach/',
            headers: {
                'CompanyID': companyId,
            },
            query: {
                'corporateNumber': corporateNumber,
                'salesCode': salesCode,
                'employeeNumberCode': employeeNumberCode,
                'establishYear': establishYear,
                'industryCode': industryCode,
                'prefectureCode': prefectureCode,
                'capitalCode': capitalCode,
                'scenarioCode': scenarioCode,
                'recuitCode': recuitCode,
                'averageAgeCode': averageAgeCode,
                'pvCountCode': pvCountCode,
            },
            errors: {
                400: `無効なリクエストが送信された場合に返されるエラーメッセージ`,
                401: `ユーザーが認証されていない場合に返されるエラーメッセージ`,
                500: `サーバー内部でエラーが発生した場合に返されるエラーメッセージ`,
            },
        });
    }
    /**
     * 企業リストをアップロード ※NG企業にも利用
     * テンプレートに従って作成した企業リストをアップロードします。
     * @returns GetAllCorporateListResponse Successful operation
     * @throws ApiError
     */
    public static uploadCorporateList({
        companyId,
        requestBody,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        requestBody?: CSV,
    }): CancelablePromise<GetAllCorporateListResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/corporations/inport/',
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
     * 企業リストcsvテンプレートをダウンロード ※NG企業にも利用
     * テンプレートをダウンロードします。
     * @returns CSV Successful operation
     * @throws ApiError
     */
    public static exportCorporateListTemplate({
        companyId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
    }): CancelablePromise<CSV> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/corporations/inport/',
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
     * 企業リストの名前とメモの内容を追加・更新
     * 企業リストのIDを指定して、名前とメモの内容を追加・更新します。
     * @returns any Successful operation
     * @throws ApiError
     */
    public static upserteNameAndMemo({
        companyId,
        corporateListId,
        requestBody,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        /**
         * 企業リストデータの一意の識別子
         */
        corporateListId: number,
        requestBody?: UpserteNameAndMemo,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/corporations/{CorporateListID}',
            path: {
                'CorporateListID': corporateListId,
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
     * 企業詳細情報取得
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static getOrderById({
        companyId,
        corporateListId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        /**
         * 企業リストデータの一意の識別子
         */
        corporateListId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/corporations/{CorporateListID}',
            path: {
                'CorporateListID': corporateListId,
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
     * 特定の企業情報をcsv形式でエクスポート
     * This can only be done by the logged in user.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static createUser({
        companyId,
        corporateListId,
    }: {
        /**
         * 所属会社の一意の識別子
         */
        companyId: number,
        /**
         * 企業リストデータの一意の識別子
         */
        corporateListId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/corporations/{CorporateListID}/export',
            path: {
                'CorporateListID': corporateListId,
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
     * 企業の詳細情報取得
     * Creates list of users with given input array
     * @returns any Successful operation
     * @throws ApiError
     */
    public static createUsersWithListInput({
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
            method: 'GET',
            url: '/corporations/detail/{CorporateID}',
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
