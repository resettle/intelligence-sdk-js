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
 * @interface GetSkillCategories200Response
 */
export interface GetSkillCategories200Response {
  /**
   *
   * @type {number}
   * @memberof GetSkillCategories200Response
   */
  code: GetSkillCategories200ResponseCodeEnum
  /**
   *
   * @type {string}
   * @memberof GetSkillCategories200Response
   */
  message: GetSkillCategories200ResponseMessageEnum
  /**
   *
   * @type {Array<string>}
   * @memberof GetSkillCategories200Response
   */
  data: Array<string>
}

/**
 * @export
 */
export const GetSkillCategories200ResponseCodeEnum = {
  NUMBER_0: 0,
} as const
export type GetSkillCategories200ResponseCodeEnum =
  (typeof GetSkillCategories200ResponseCodeEnum)[keyof typeof GetSkillCategories200ResponseCodeEnum]

/**
 * @export
 */
export const GetSkillCategories200ResponseMessageEnum = {
  Success: 'Success',
} as const
export type GetSkillCategories200ResponseMessageEnum =
  (typeof GetSkillCategories200ResponseMessageEnum)[keyof typeof GetSkillCategories200ResponseMessageEnum]

/**
 * Check if a given object implements the GetSkillCategories200Response interface.
 */
export function instanceOfGetSkillCategories200Response(
  value: object,
): value is GetSkillCategories200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetSkillCategories200ResponseFromJSON(
  json: any,
): GetSkillCategories200Response {
  return GetSkillCategories200ResponseFromJSONTyped(json, false)
}

export function GetSkillCategories200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillCategories200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: json['data'],
  }
}

export function GetSkillCategories200ResponseToJSON(
  json: any,
): GetSkillCategories200Response {
  return GetSkillCategories200ResponseToJSONTyped(json, false)
}

export function GetSkillCategories200ResponseToJSONTyped(
  value?: GetSkillCategories200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    code: value['code'],
    message: value['message'],
    data: value['data'],
  }
}
