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
import type { GetOccupationQuery200ResponseData } from './get-occupation-query200-response-data'
import {
  GetOccupationQuery200ResponseDataFromJSON,
  GetOccupationQuery200ResponseDataFromJSONTyped,
  GetOccupationQuery200ResponseDataToJSON,
  GetOccupationQuery200ResponseDataToJSONTyped,
} from './get-occupation-query200-response-data'

/**
 *
 * @export
 * @interface GetOccupationQuery200Response
 */
export interface GetOccupationQuery200Response {
  /**
   *
   * @type {number}
   * @memberof GetOccupationQuery200Response
   */
  code: GetOccupationQuery200ResponseCodeEnum
  /**
   *
   * @type {string}
   * @memberof GetOccupationQuery200Response
   */
  message: GetOccupationQuery200ResponseMessageEnum
  /**
   *
   * @type {GetOccupationQuery200ResponseData}
   * @memberof GetOccupationQuery200Response
   */
  data: GetOccupationQuery200ResponseData
}

/**
 * @export
 */
export const GetOccupationQuery200ResponseCodeEnum = {
  NUMBER_0: 0,
} as const
export type GetOccupationQuery200ResponseCodeEnum =
  (typeof GetOccupationQuery200ResponseCodeEnum)[keyof typeof GetOccupationQuery200ResponseCodeEnum]

/**
 * @export
 */
export const GetOccupationQuery200ResponseMessageEnum = {
  Success: 'Success',
} as const
export type GetOccupationQuery200ResponseMessageEnum =
  (typeof GetOccupationQuery200ResponseMessageEnum)[keyof typeof GetOccupationQuery200ResponseMessageEnum]

/**
 * Check if a given object implements the GetOccupationQuery200Response interface.
 */
export function instanceOfGetOccupationQuery200Response(
  value: object,
): value is GetOccupationQuery200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetOccupationQuery200ResponseFromJSON(
  json: any,
): GetOccupationQuery200Response {
  return GetOccupationQuery200ResponseFromJSONTyped(json, false)
}

export function GetOccupationQuery200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetOccupationQuery200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: GetOccupationQuery200ResponseDataFromJSON(json['data']),
  }
}

export function GetOccupationQuery200ResponseToJSON(
  json: any,
): GetOccupationQuery200Response {
  return GetOccupationQuery200ResponseToJSONTyped(json, false)
}

export function GetOccupationQuery200ResponseToJSONTyped(
  value?: GetOccupationQuery200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    code: value['code'],
    message: value['message'],
    data: GetOccupationQuery200ResponseDataToJSON(value['data']),
  }
}
