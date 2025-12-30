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
 * @interface GetSkillChanges200ResponseDataInnerDetailsOneOf3
 */
export interface GetSkillChanges200ResponseDataInnerDetailsOneOf3 {
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf3
   */
  type: GetSkillChanges200ResponseDataInnerDetailsOneOf3TypeEnum
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf3
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf3
   */
  from: string | null
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf3
   */
  to: string | null
}

/**
 * @export
 */
export const GetSkillChanges200ResponseDataInnerDetailsOneOf3TypeEnum = {
  Rename: 'rename',
} as const
export type GetSkillChanges200ResponseDataInnerDetailsOneOf3TypeEnum =
  (typeof GetSkillChanges200ResponseDataInnerDetailsOneOf3TypeEnum)[keyof typeof GetSkillChanges200ResponseDataInnerDetailsOneOf3TypeEnum]

/**
 * Check if a given object implements the GetSkillChanges200ResponseDataInnerDetailsOneOf3 interface.
 */
export function instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf3(
  value: object,
): value is GetSkillChanges200ResponseDataInnerDetailsOneOf3 {
  if (!('type' in value) || value['type'] === undefined) return false
  if (!('id' in value) || value['id'] === undefined) return false
  if (!('from' in value) || value['from'] === undefined) return false
  if (!('to' in value) || value['to'] === undefined) return false
  return true
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf3FromJSON(
  json: any,
): GetSkillChanges200ResponseDataInnerDetailsOneOf3 {
  return GetSkillChanges200ResponseDataInnerDetailsOneOf3FromJSONTyped(
    json,
    false,
  )
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf3FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillChanges200ResponseDataInnerDetailsOneOf3 {
  if (json == null) {
    return json
  }
  return {
    type: json['type'],
    id: json['id'],
    from: json['from'],
    to: json['to'],
  }
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf3ToJSON(
  json: any,
): GetSkillChanges200ResponseDataInnerDetailsOneOf3 {
  return GetSkillChanges200ResponseDataInnerDetailsOneOf3ToJSONTyped(
    json,
    false,
  )
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOf3ToJSONTyped(
  value?: GetSkillChanges200ResponseDataInnerDetailsOneOf3 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    type: value['type'],
    id: value['id'],
    from: value['from'],
    to: value['to'],
  }
}
