/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateTime } from './DateTime';
import type { Email } from './Email';
export type CorporateList = {
    corporateListID?: number;
    corporateListName?: string;
    memo?: string;
    createUser?: Email;
    created?: DateTime;
    condition?: string;
    uploadFlg?: boolean;
    /**
     * 企業リストに含まれる法人番号付与済みの企業数
     */
    numOfCorporates?: number;
};

