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
 * @interface GetSkillChanges200ResponseDataInnerDetailsOneOf1
 */
export interface GetSkillChanges200ResponseDataInnerDetailsOneOf1 {
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf1
   */
  type: GetSkillChanges200ResponseDataInnerDetailsOneOf1TypeEnum
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf1
   */
  id: string
}

/**
 * @export
 */
export const GetSkillChanges200ResponseDataInnerDetailsOneOf1TypeEnum = {
  Remove: 'remove',
} as const
export type GetSkillChanges200ResponseDataInnerDetailsOneOf1TypeEnum =
  (typeof GetSkillChanges200ResponseDataInnerDetailsOneOf1TypeEnum)[keyof typeof GetSkillChanges200ResponseDataInnerDetailsOneOf1TypeEnum]

/**
 * Check if a given object implements the GetSkillChanges200ResponseDataInnerDetailsOneOf1 interface.
 */
export function instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf1(
  value: object,
): value is GetSkillChanges200ResponseDataInnerDetailsOneOf1 {
  if (!('type' in value) || value['type'] === undefined) return false
  if (!('id' in value) || value['id'] === undefined) return false
  return true
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf1FromJSON(
  json: any,
): GetSkillChanges200ResponseDataInnerDetailsOneOf1 {
  return GetSkillChanges200ResponseDataInnerDetailsOneOf1FromJSONTyped(
    json,
    false,
  )
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillChanges200ResponseDataInnerDetailsOneOf1 {
  if (json == null) {
    return json
  }
  return {
    type: json['type'],
    id: json['id'],
  }
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf1ToJSON(
  json: any,
): GetSkillChanges200ResponseDataInnerDetailsOneOf1 {
  return GetSkillChanges200ResponseDataInnerDetailsOneOf1ToJSONTyped(
    json,
    false,
  )
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf1ToJSONTyped(
  value?: GetSkillChanges200ResponseDataInnerDetailsOneOf1 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    type: value['type'],
    id: value['id'],
  }
}
