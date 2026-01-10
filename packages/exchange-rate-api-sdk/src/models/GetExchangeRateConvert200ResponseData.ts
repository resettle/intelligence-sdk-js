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
 * @interface GetExchangeRateConvert200ResponseData
 */
export interface GetExchangeRateConvert200ResponseData {
  /**
   * The convert result
   * @type {number}
   * @memberof GetExchangeRateConvert200ResponseData
   */
  value: number
}

/**
 * Check if a given object implements the GetExchangeRateConvert200ResponseData interface.
 */
export function instanceOfGetExchangeRateConvert200ResponseData(
  value: object,
): value is GetExchangeRateConvert200ResponseData {
  if (!('value' in value) || value['value'] === undefined) return false
  return true
}

export function GetExchangeRateConvert200ResponseDataFromJSON(
  json: any,
): GetExchangeRateConvert200ResponseData {
  return GetExchangeRateConvert200ResponseDataFromJSONTyped(json, false)
}

export function GetExchangeRateConvert200ResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetExchangeRateConvert200ResponseData {
  if (json == null) {
    return json
  }
  return {
    value: json['value'],
  }
}

export function GetExchangeRateConvert200ResponseDataToJSON(
  json: any,
): GetExchangeRateConvert200ResponseData {
  return GetExchangeRateConvert200ResponseDataToJSONTyped(json, false)
}

export function GetExchangeRateConvert200ResponseDataToJSONTyped(
  value?: GetExchangeRateConvert200ResponseData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    value: value['value'],
  }
}
