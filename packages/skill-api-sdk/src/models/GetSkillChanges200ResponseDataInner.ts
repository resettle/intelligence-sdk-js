/*
 * MIT License
 *
 * Copyright (c) 2025 Resettle
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { mapValues } from '../runtime'
import type { GetSkillChanges200ResponseDataInnerDetails } from './GetSkillChanges200ResponseDataInnerDetails'
import {
  GetSkillChanges200ResponseDataInnerDetailsFromJSON,
  GetSkillChanges200ResponseDataInnerDetailsFromJSONTyped,
  GetSkillChanges200ResponseDataInnerDetailsToJSON,
  GetSkillChanges200ResponseDataInnerDetailsToJSONTyped,
} from './GetSkillChanges200ResponseDataInnerDetails'

/**
 *
 * @export
 * @interface GetSkillChanges200ResponseDataInner
 */
export interface GetSkillChanges200ResponseDataInner {
  /**
   * The type of the skill change, can be one of add, remove, merge or rename
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInner
   */
  type: GetSkillChanges200ResponseDataInnerTypeEnum
  /**
   *
   * @type {GetSkillChanges200ResponseDataInnerDetails}
   * @memberof GetSkillChanges200ResponseDataInner
   */
  details: GetSkillChanges200ResponseDataInnerDetails
}

/**
 * @export
 */
export const GetSkillChanges200ResponseDataInnerTypeEnum = {
  Add: 'add',
  Remove: 'remove',
  Merge: 'merge',
  Rename: 'rename',
} as const
export type GetSkillChanges200ResponseDataInnerTypeEnum =
  (typeof GetSkillChanges200ResponseDataInnerTypeEnum)[keyof typeof GetSkillChanges200ResponseDataInnerTypeEnum]

/**
 * Check if a given object implements the GetSkillChanges200ResponseDataInner interface.
 */
export function instanceOfGetSkillChanges200ResponseDataInner(
  value: object,
): value is GetSkillChanges200ResponseDataInner {
  if (!('type' in value) || value['type'] === undefined) return false
  if (!('details' in value) || value['details'] === undefined) return false
  return true
}

export function GetSkillChanges200ResponseDataInnerFromJSON(
  json: any,
): GetSkillChanges200ResponseDataInner {
  return GetSkillChanges200ResponseDataInnerFromJSONTyped(json, false)
}

export function GetSkillChanges200ResponseDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillChanges200ResponseDataInner {
  if (json == null) {
    return json
  }
  return {
    type: json['type'],
    details: GetSkillChanges200ResponseDataInnerDetailsFromJSON(
      json['details'],
    ),
  }
}

export function GetSkillChanges200ResponseDataInnerToJSON(
  json: any,
): GetSkillChanges200ResponseDataInner {
  return GetSkillChanges200ResponseDataInnerToJSONTyped(json, false)
}

export function GetSkillChanges200ResponseDataInnerToJSONTyped(
  value?: GetSkillChanges200ResponseDataInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    type: value['type'],
    details: GetSkillChanges200ResponseDataInnerDetailsToJSON(value['details']),
  }
}
