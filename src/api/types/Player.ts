/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { BuzzshotApi } from "@fern-api/buzzshot";

export interface Player {
    addedAt?: string;
    updatedAt?: string;
    player?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    phone: string;
    extraFields: BuzzshotApi.ExtraFieldsItem[];
    signature?: string;
}