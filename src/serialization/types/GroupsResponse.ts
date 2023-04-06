/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { BuzzshotApi } from "@fern-api/buzzshot";
import * as core from "../../core";

export const GroupsResponse: core.serialization.ObjectSchema<
    serializers.GroupsResponse.Raw,
    BuzzshotApi.GroupsResponse
> = core.serialization.object({
    count: core.serialization.number().optional(),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Group)).optional(),
});

export declare namespace GroupsResponse {
    interface Raw {
        count?: number | null;
        next?: string | null;
        previous?: string | null;
        results?: serializers.Group.Raw[] | null;
    }
}
