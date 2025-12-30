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
 * @interface GetSkillChanges200ResponseDataInnerDetailsOneOf
 */
export interface GetSkillChanges200ResponseDataInnerDetailsOneOf {
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf
   */
  type: GetSkillChanges200ResponseDataInnerDetailsOneOfTypeEnum
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200ResponseDataInnerDetailsOneOf
   */
  name: string | null
}

/**
 * @export
 */
export const GetSkillChanges200ResponseDataInnerDetailsOneOfTypeEnum = {
  Add: 'add',
} as const
export type GetSkillChanges200ResponseDataInnerDetailsOneOfTypeEnum =
  (typeof GetSkillChanges200ResponseDataInnerDetailsOneOfTypeEnum)[keyof typeof GetSkillChanges200ResponseDataInnerDetailsOneOfTypeEnum]

/**
 * Check if a given object implements the GetSkillChanges200ResponseDataInnerDetailsOneOf interface.
 */
export function instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf(
  value: object,
): value is GetSkillChanges200ResponseDataInnerDetailsOneOf {
  if (!('type' in value) || value['type'] === undefined) return false
  if (!('id' in value) || value['id'] === undefined) return false
  if (!('name' in value) || value['name'] === undefined) return false
  return true
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOfFromJSON(
  json: any,
): GetSkillChanges200ResponseDataInnerDetailsOneOf {
  return GetSkillChanges200ResponseDataInnerDetailsOneOfFromJSONTyped(
    json,
    false,
  )
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillChanges200ResponseDataInnerDetailsOneOf {
  if (json == null) {
    return json
  }
  return {
    type: json['type'],
    id: json['id'],
    name: json['name'],
  }
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOfToJSON(
  json: any,
): GetSkillChanges200ResponseDataInnerDetailsOneOf {
  return GetSkillChanges200ResponseDataInnerDetailsOneOfToJSONTyped(json, false)
}

export function GetSkillChanges200ResponseDataInnerDetailsOneOfToJSONTyped(
  value?: GetSkillChanges200ResponseDataInnerDetailsOneOf | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    type: value['type'],
    id: value['id'],
    name: value['name'],
  }
}
