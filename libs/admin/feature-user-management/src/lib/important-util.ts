import { adminUtilUserStats } from "@fundamentalconf/admin/util-user-stats";
import { utilFormatNumber } from "@fundamentalconf/shared/util-format-number";

export function runImportantItil() {
    return adminUtilUserStats() + ' ' + utilFormatNumber(2000);
}