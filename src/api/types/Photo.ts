/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { BuzzshotApi } from "@fern-api/buzzshot";

export interface Photo {
    id?: string;
    addedAt?: string;
    originalImage: string;
    processed: BuzzshotApi.ProcessedPhotoDetails[];
}