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
import type { GetPlaceQueryCostOfLiving200ResponseData } from './get-place-query-cost-of-living200-response-data'
import {
  GetPlaceQueryCostOfLiving200ResponseDataFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataToJSONTyped,
} from './get-place-query-cost-of-living200-response-data'

/**
 *
 * @export
 * @interface GetPlaceQueryCostOfLiving200Response
 */
export interface GetPlaceQueryCostOfLiving200Response {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200Response
   */
  code: GetPlaceQueryCostOfLiving200ResponseCodeEnum
  /**
   *
   * @type {string}
   * @memberof GetPlaceQueryCostOfLiving200Response
   */
  message: GetPlaceQueryCostOfLiving200ResponseMessageEnum
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseData}
   * @memberof GetPlaceQueryCostOfLiving200Response
   */
  data: GetPlaceQueryCostOfLiving200ResponseData
}

/**
 * @export
 */
export const GetPlaceQueryCostOfLiving200ResponseCodeEnum = {
  NUMBER_0: 0,
} as const
export type GetPlaceQueryCostOfLiving200ResponseCodeEnum =
  (typeof GetPlaceQueryCostOfLiving200ResponseCodeEnum)[keyof typeof GetPlaceQueryCostOfLiving200ResponseCodeEnum]

/**
 * @export
 */
export const GetPlaceQueryCostOfLiving200ResponseMessageEnum = {
  Success: 'Success',
} as const
export type GetPlaceQueryCostOfLiving200ResponseMessageEnum =
  (typeof GetPlaceQueryCostOfLiving200ResponseMessageEnum)[keyof typeof GetPlaceQueryCostOfLiving200ResponseMessageEnum]

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200Response interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200Response(
  value: object,
): value is GetPlaceQueryCostOfLiving200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200Response {
  return GetPlaceQueryCostOfLiving200ResponseFromJSONTyped(json, false)
}

export function GetPlaceQueryCostOfLiving200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: GetPlaceQueryCostOfLiving200ResponseDataFromJSON(json['data']),
  }
}

export function GetPlaceQueryCostOfLiving200ResponseToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200Response {
  return GetPlaceQueryCostOfLiving200ResponseToJSONTyped(json, false)
}

export function GetPlaceQueryCostOfLiving200ResponseToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    code: value['code'],
    message: value['message'],
    data: GetPlaceQueryCostOfLiving200ResponseDataToJSON(value['data']),
  }
}
