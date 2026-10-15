import type { DatePresetId } from '../../common/DateFilter';
export declare const FORMAT = "YYYY-MM-DD";
export declare function createPresetDateRange(preset: DatePresetId): string | null;
export declare function createCustomDateRange(start?: string, end?: string): string | null;
