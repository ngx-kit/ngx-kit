/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export interface Schema {
    path?: string;
    appRoot?: string;
    sourceDir?: string;
    name: string;
    htmlTemplate?: string;
    skipImport?: boolean;
    /**
     * Allows specification of the declaring module.
     */
    module?: string;
    /**
     * Specifies if declaring module exports the component.
     */
    export?: boolean;
}
