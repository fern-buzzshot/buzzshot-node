/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { BuzzshotApi } from "@fern-api/buzzshot";

export interface PhotosResponse {
    count?: number;
    next?: string;
    previous?: string;
    results?: BuzzshotApi.Photo[];
}
