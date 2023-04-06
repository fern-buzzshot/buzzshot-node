/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { BuzzshotApi } from "@fern-api/buzzshot";
import * as core from "../../core";

export const ExtraFieldsItem: core.serialization.ObjectSchema<
    serializers.ExtraFieldsItem.Raw,
    BuzzshotApi.ExtraFieldsItem
> = core.serialization.object({
    key: core.serialization.string(),
    label: core.serialization.string().optional(),
    value: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    present: core.serialization.boolean(),
});

export declare namespace ExtraFieldsItem {
    interface Raw {
        key: string;
        label?: string | null;
        value?: Record<string, unknown> | null;
        present: boolean;
    }
}