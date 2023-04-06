/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { BuzzshotApi } from "@fern-api/buzzshot";
import * as core from "../../core";

export const Photo: core.serialization.ObjectSchema<serializers.Photo.Raw, BuzzshotApi.Photo> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        addedAt: core.serialization.property("added_at", core.serialization.string().optional()),
        originalImage: core.serialization.property("original_image", core.serialization.string()),
        processed: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("..")).ProcessedPhotoDetails)
        ),
    });

export declare namespace Photo {
    interface Raw {
        id?: string | null;
        added_at?: string | null;
        original_image: string;
        processed: serializers.ProcessedPhotoDetails.Raw[];
    }
}
