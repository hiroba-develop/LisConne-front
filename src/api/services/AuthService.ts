/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Email } from '../models/Email';
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { ResetPasswordConfirm } from '../models/ResetPasswordConfirm';
import type { ResponseStatus } from '../models/ResponseStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * ログイン
     * ログイン画面でユーザー名とパスワードを入力してログインします。
     * @returns LoginResponse Successful operation
     * @throws ApiError
     */
    public static login({
        requestBody,
    }: {
        requestBody?: LoginRequest,
    }): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
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
     * パスワード再設定用のリンクを送信
     * ユーザーのメールアドレスを入力して、パスワード再設定用のリンクを送信します。
     * @returns ResponseStatus 成功したリクエストが送信された場合に返されるエラーメッセージ
     * @throws ApiError
     */
    public static sendResetPasswordLink({
        requestBody,
    }: {
        requestBody?: Email,
    }): CancelablePromise<ResponseStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/reset-password/request',
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
     * パスワードを再設定する
     * 再設定リンクで提供されたトークンを使用して、新しいパスワードを設定します。
     * @returns ResponseStatus 成功したリクエストが送信された場合に返されるエラーメッセージ
     * @throws ApiError
     */
    public static resetPasswordConfirm({
        requestBody,
    }: {
        /**
         * 新しいパスワードとトークンを送信します。
         */
        requestBody?: ResetPasswordConfirm,
    }): CancelablePromise<ResponseStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/reset-password/confirm',
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
