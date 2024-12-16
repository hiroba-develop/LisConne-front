/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateTime } from './DateTime';
import type { Email } from './Email';
export type Order = {
    listID?: number;
    detailID?: number;
    originalFlg?: boolean;
    dealFlg?: boolean;
    orderFlg?: boolean;
    createUser?: Email;
    created?: DateTime;
};

