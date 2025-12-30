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
import type { GetSkillQuery200ResponseDataDataInner } from './get-skill-query200-response-data-data-inner'
import {
  GetSkillQuery200ResponseDataDataInnerFromJSON,
  GetSkillQuery200ResponseDataDataInnerFromJSONTyped,
  GetSkillQuery200ResponseDataDataInnerToJSON,
  GetSkillQuery200ResponseDataDataInnerToJSONTyped,
} from './get-skill-query200-response-data-data-inner'

/**
 *
 * @export
 * @interface GetSkillSearch200Response
 */
export interface GetSkillSearch200Response {
  /**
   *
   * @type {number}
   * @memberof GetSkillSearch200Response
   */
  code: GetSkillSearch200ResponseCodeEnum
  /**
   *
   * @type {string}
   * @memberof GetSkillSearch200Response
   */
  message: GetSkillSearch200ResponseMessageEnum
  /**
   *
   * @type {Array<GetSkillQuery200ResponseDataDataInner>}
   * @memberof GetSkillSearch200Response
   */
  data: Array<GetSkillQuery200ResponseDataDataInner>
}

/**
 * @export
 */
export const GetSkillSearch200ResponseCodeEnum = {
  NUMBER_0: 0,
} as const
export type GetSkillSearch200ResponseCodeEnum =
  (typeof GetSkillSearch200ResponseCodeEnum)[keyof typeof GetSkillSearch200ResponseCodeEnum]

/**
 * @export
 */
export const GetSkillSearch200ResponseMessageEnum = {
  Success: 'Success',
} as const
export type GetSkillSearch200ResponseMessageEnum =
  (typeof GetSkillSearch200ResponseMessageEnum)[keyof typeof GetSkillSearch200ResponseMessageEnum]

/**
 * Check if a given object implements the GetSkillSearch200Response interface.
 */
export function instanceOfGetSkillSearch200Response(
  value: object,
): value is GetSkillSearch200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetSkillSearch200ResponseFromJSON(
  json: any,
): GetSkillSearch200Response {
  return GetSkillSearch200ResponseFromJSONTyped(json, false)
}

export function GetSkillSearch200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillSearch200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: (json['data'] as Array<any>).map(
      GetSkillQuery200ResponseDataDataInnerFromJSON,
    ),
  }
}

export function GetSkillSearch200ResponseToJSON(
  json: any,
): GetSkillSearch200Response {
  return GetSkillSearch200ResponseToJSONTyped(json, false)
}

export function GetSkillSearch200ResponseToJSONTyped(
  value?: GetSkillSearch200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    code: value['code'],
    message: value['message'],
    data: (value['data'] as Array<any>).map(
      GetSkillQuery200ResponseDataDataInnerToJSON,
    ),
  }
}
