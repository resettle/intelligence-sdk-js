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
import type { GetSkillQuery200ResponseData } from './get-skill-query200-response-data'
import {
  GetSkillQuery200ResponseDataFromJSON,
  GetSkillQuery200ResponseDataFromJSONTyped,
  GetSkillQuery200ResponseDataToJSON,
  GetSkillQuery200ResponseDataToJSONTyped,
} from './get-skill-query200-response-data'

/**
 *
 * @export
 * @interface GetSkillQuery200Response
 */
export interface GetSkillQuery200Response {
  /**
   *
   * @type {number}
   * @memberof GetSkillQuery200Response
   */
  code: GetSkillQuery200ResponseCodeEnum
  /**
   *
   * @type {string}
   * @memberof GetSkillQuery200Response
   */
  message: GetSkillQuery200ResponseMessageEnum
  /**
   *
   * @type {GetSkillQuery200ResponseData}
   * @memberof GetSkillQuery200Response
   */
  data: GetSkillQuery200ResponseData
}

/**
 * @export
 */
export const GetSkillQuery200ResponseCodeEnum = {
  NUMBER_0: 0,
} as const
export type GetSkillQuery200ResponseCodeEnum =
  (typeof GetSkillQuery200ResponseCodeEnum)[keyof typeof GetSkillQuery200ResponseCodeEnum]

/**
 * @export
 */
export const GetSkillQuery200ResponseMessageEnum = {
  Success: 'Success',
} as const
export type GetSkillQuery200ResponseMessageEnum =
  (typeof GetSkillQuery200ResponseMessageEnum)[keyof typeof GetSkillQuery200ResponseMessageEnum]

/**
 * Check if a given object implements the GetSkillQuery200Response interface.
 */
export function instanceOfGetSkillQuery200Response(
  value: object,
): value is GetSkillQuery200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetSkillQuery200ResponseFromJSON(
  json: any,
): GetSkillQuery200Response {
  return GetSkillQuery200ResponseFromJSONTyped(json, false)
}

export function GetSkillQuery200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillQuery200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: GetSkillQuery200ResponseDataFromJSON(json['data']),
  }
}

export function GetSkillQuery200ResponseToJSON(
  json: any,
): GetSkillQuery200Response {
  return GetSkillQuery200ResponseToJSONTyped(json, false)
}

export function GetSkillQuery200ResponseToJSONTyped(
  value?: GetSkillQuery200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    code: value['code'],
    message: value['message'],
    data: GetSkillQuery200ResponseDataToJSON(value['data']),
  }
}
