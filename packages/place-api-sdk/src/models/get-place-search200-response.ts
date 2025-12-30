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
import type { GetPlaceSearch200ResponseDataInner } from './get-place-search200-response-data-inner'
import {
  GetPlaceSearch200ResponseDataInnerFromJSON,
  GetPlaceSearch200ResponseDataInnerFromJSONTyped,
  GetPlaceSearch200ResponseDataInnerToJSON,
  GetPlaceSearch200ResponseDataInnerToJSONTyped,
} from './get-place-search200-response-data-inner'

/**
 *
 * @export
 * @interface GetPlaceSearch200Response
 */
export interface GetPlaceSearch200Response {
  /**
   *
   * @type {number}
   * @memberof GetPlaceSearch200Response
   */
  code: GetPlaceSearch200ResponseCodeEnum
  /**
   *
   * @type {string}
   * @memberof GetPlaceSearch200Response
   */
  message: GetPlaceSearch200ResponseMessageEnum
  /**
   *
   * @type {Array<GetPlaceSearch200ResponseDataInner>}
   * @memberof GetPlaceSearch200Response
   */
  data: Array<GetPlaceSearch200ResponseDataInner>
}

/**
 * @export
 */
export const GetPlaceSearch200ResponseCodeEnum = {
  NUMBER_0: 0,
} as const
export type GetPlaceSearch200ResponseCodeEnum =
  (typeof GetPlaceSearch200ResponseCodeEnum)[keyof typeof GetPlaceSearch200ResponseCodeEnum]

/**
 * @export
 */
export const GetPlaceSearch200ResponseMessageEnum = {
  Success: 'Success',
} as const
export type GetPlaceSearch200ResponseMessageEnum =
  (typeof GetPlaceSearch200ResponseMessageEnum)[keyof typeof GetPlaceSearch200ResponseMessageEnum]

/**
 * Check if a given object implements the GetPlaceSearch200Response interface.
 */
export function instanceOfGetPlaceSearch200Response(
  value: object,
): value is GetPlaceSearch200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetPlaceSearch200ResponseFromJSON(
  json: any,
): GetPlaceSearch200Response {
  return GetPlaceSearch200ResponseFromJSONTyped(json, false)
}

export function GetPlaceSearch200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceSearch200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: (json['data'] as Array<any>).map(
      GetPlaceSearch200ResponseDataInnerFromJSON,
    ),
  }
}

export function GetPlaceSearch200ResponseToJSON(
  json: any,
): GetPlaceSearch200Response {
  return GetPlaceSearch200ResponseToJSONTyped(json, false)
}

export function GetPlaceSearch200ResponseToJSONTyped(
  value?: GetPlaceSearch200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    code: value['code'],
    message: value['message'],
    data: (value['data'] as Array<any>).map(
      GetPlaceSearch200ResponseDataInnerToJSON,
    ),
  }
}
