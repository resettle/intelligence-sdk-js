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
/**
 *
 * @export
 * @interface GetSkillChanges200ResponseDataInnerDetailsOneOf2
 */
export interface GetSkillChanges200ResponseDataInnerDetailsOneOf2 {
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf2
   */
  type: GetSkillChanges200ResponseDataInnerDetailsOneOf2TypeEnum
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf2
   */
  fromId: string
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf2
   */
  toId: string
}

/**
 * @export
 */
export const GetSkillChanges200ResponseDataInnerDetailsOneOf2TypeEnum = {
  Merge: 'merge',
} as const
export type GetSkillChanges200ResponseDataInnerDetailsOneOf2TypeEnum =
  (typeof GetSkillChanges200ResponseDataInnerDetailsOneOf2TypeEnum)[keyof typeof GetSkillChanges200ResponseDataInnerDetailsOneOf2TypeEnum]

/**
 * Check if a given object implements the GetSkillChanges200ResponseDataInnerDetailsOneOf2 interface.
 */
export function instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf2(
  value: object,
): value is GetSkillChanges200ResponseDataInnerDetailsOneOf2 {
  if (!('type' in value) || value['type'] === undefined) return false
  if (!('fromId' in value) || value['fromId'] === undefined) return false
  if (!('toId' in value) || value['toId'] === undefined) return false
  return true
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf2FromJSON(
  json: any,
): GetSkillChanges200ResponseDataInnerDetailsOneOf2 {
  return GetSkillChanges200ResponseDataInnerDetailsOneOf2FromJSONTyped(
    json,
    false,
  )
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf2FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillChanges200ResponseDataInnerDetailsOneOf2 {
  if (json == null) {
    return json
  }
  return {
    type: json['type'],
    fromId: json['from_id'],
    toId: json['to_id'],
  }
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf2ToJSON(
  json: any,
): GetSkillChanges200ResponseDataInnerDetailsOneOf2 {
  return GetSkillChanges200ResponseDataInnerDetailsOneOf2ToJSONTyped(
    json,
    false,
  )
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf2ToJSONTyped(
  value?: GetSkillChanges200ResponseDataInnerDetailsOneOf2 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    type: value['type'],
    from_id: value['fromId'],
    to_id: value['toId'],
  }
}
