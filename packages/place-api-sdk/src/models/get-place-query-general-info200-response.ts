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
import type { GetPlaceQueryGeneralInfo200ResponseData } from './get-place-query-general-info200-response-data'
import {
  GetPlaceQueryGeneralInfo200ResponseDataFromJSON,
  GetPlaceQueryGeneralInfo200ResponseDataFromJSONTyped,
  GetPlaceQueryGeneralInfo200ResponseDataToJSON,
  GetPlaceQueryGeneralInfo200ResponseDataToJSONTyped,
} from './get-place-query-general-info200-response-data'

/**
 *
 * @export
 * @interface GetPlaceQueryGeneralInfo200Response
 */
export interface GetPlaceQueryGeneralInfo200Response {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryGeneralInfo200Response
   */
  code: GetPlaceQueryGeneralInfo200ResponseCodeEnum
  /**
   *
   * @type {string}
   * @memberof GetPlaceQueryGeneralInfo200Response
   */
  message: GetPlaceQueryGeneralInfo200ResponseMessageEnum
  /**
   *
   * @type {GetPlaceQueryGeneralInfo200ResponseData}
   * @memberof GetPlaceQueryGeneralInfo200Response
   */
  data: GetPlaceQueryGeneralInfo200ResponseData
}

/**
 * @export
 */
export const GetPlaceQueryGeneralInfo200ResponseCodeEnum = {
  NUMBER_0: 0,
} as const
export type GetPlaceQueryGeneralInfo200ResponseCodeEnum =
  (typeof GetPlaceQueryGeneralInfo200ResponseCodeEnum)[keyof typeof GetPlaceQueryGeneralInfo200ResponseCodeEnum]

/**
 * @export
 */
export const GetPlaceQueryGeneralInfo200ResponseMessageEnum = {
  Success: 'Success',
} as const
export type GetPlaceQueryGeneralInfo200ResponseMessageEnum =
  (typeof GetPlaceQueryGeneralInfo200ResponseMessageEnum)[keyof typeof GetPlaceQueryGeneralInfo200ResponseMessageEnum]

/**
 * Check if a given object implements the GetPlaceQueryGeneralInfo200Response interface.
 */
export function instanceOfGetPlaceQueryGeneralInfo200Response(
  value: object,
): value is GetPlaceQueryGeneralInfo200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetPlaceQueryGeneralInfo200ResponseFromJSON(
  json: any,
): GetPlaceQueryGeneralInfo200Response {
  return GetPlaceQueryGeneralInfo200ResponseFromJSONTyped(json, false)
}

export function GetPlaceQueryGeneralInfo200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryGeneralInfo200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: GetPlaceQueryGeneralInfo200ResponseDataFromJSON(json['data']),
  }
}

export function GetPlaceQueryGeneralInfo200ResponseToJSON(
  json: any,
): GetPlaceQueryGeneralInfo200Response {
  return GetPlaceQueryGeneralInfo200ResponseToJSONTyped(json, false)
}

export function GetPlaceQueryGeneralInfo200ResponseToJSONTyped(
  value?: GetPlaceQueryGeneralInfo200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    code: value['code'],
    message: value['message'],
    data: GetPlaceQueryGeneralInfo200ResponseDataToJSON(value['data']),
  }
}
