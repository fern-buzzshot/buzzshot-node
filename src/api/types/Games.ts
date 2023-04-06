/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { BuzzshotApi } from "@fern-api/buzzshot";

export interface Games {
    id?: number;
    addedAt?: string;
    updatedAt?: string;
    name?: string;
    date: string;
    time: string;
    startAt?: string;
    room?: string;
    extraFields: BuzzshotApi.ExtraFieldsItem[];
    complete: BuzzshotApi.GameComplete;
}