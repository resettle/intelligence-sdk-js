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
 * @interface GetExchangeRateQuery200Response
 */
export interface GetExchangeRateQuery200Response {
  /**
   *
   * @type {number}
   * @memberof GetExchangeRateQuery200Response
   */
  code: number
  /**
   *
   * @type {string}
   * @memberof GetExchangeRateQuery200Response
   */
  message: string
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof GetExchangeRateQuery200Response
   */
  data: { [key: string]: number }
}

/**
 * Check if a given object implements the GetExchangeRateQuery200Response interface.
 */
export function instanceOfGetExchangeRateQuery200Response(
  value: object,
): value is GetExchangeRateQuery200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetExchangeRateQuery200ResponseFromJSON(
  json: any,
): GetExchangeRateQuery200Response {
  return GetExchangeRateQuery200ResponseFromJSONTyped(json, false)
}

export function GetExchangeRateQuery200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetExchangeRateQuery200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: json['data'],
  }
}

export function GetExchangeRateQuery200ResponseToJSON(
  json: any,
): GetExchangeRateQuery200Response {
  return GetExchangeRateQuery200ResponseToJSONTyped(json, false)
}

export function GetExchangeRateQuery200ResponseToJSONTyped(
  value?: GetExchangeRateQuery200Response | null,
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
