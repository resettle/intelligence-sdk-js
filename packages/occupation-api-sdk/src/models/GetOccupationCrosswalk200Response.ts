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
import type { GetOccupationCrosswalk200ResponseDataInner } from './GetOccupationCrosswalk200ResponseDataInner'
import {
  GetOccupationCrosswalk200ResponseDataInnerFromJSON,
  GetOccupationCrosswalk200ResponseDataInnerFromJSONTyped,
  GetOccupationCrosswalk200ResponseDataInnerToJSON,
  GetOccupationCrosswalk200ResponseDataInnerToJSONTyped,
} from './GetOccupationCrosswalk200ResponseDataInner'

/**
 *
 * @export
 * @interface GetOccupationCrosswalk200Response
 */
export interface GetOccupationCrosswalk200Response {
  /**
   *
   * @type {number}
   * @memberof GetOccupationCrosswalk200Response
   */
  code: number
  /**
   *
   * @type {string}
   * @memberof GetOccupationCrosswalk200Response
   */
  message: string
  /**
   *
   * @type {Array<GetOccupationCrosswalk200ResponseDataInner>}
   * @memberof GetOccupationCrosswalk200Response
   */
  data: Array<GetOccupationCrosswalk200ResponseDataInner>
}

/**
 * Check if a given object implements the GetOccupationCrosswalk200Response interface.
 */
export function instanceOfGetOccupationCrosswalk200Response(
  value: object,
): value is GetOccupationCrosswalk200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetOccupationCrosswalk200ResponseFromJSON(
  json: any,
): GetOccupationCrosswalk200Response {
  return GetOccupationCrosswalk200ResponseFromJSONTyped(json, false)
}

export function GetOccupationCrosswalk200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetOccupationCrosswalk200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: (json['data'] as Array<any>).map(
      GetOccupationCrosswalk200ResponseDataInnerFromJSON,
    ),
  }
}

export function GetOccupationCrosswalk200ResponseToJSON(
  json: any,
): GetOccupationCrosswalk200Response {
  return GetOccupationCrosswalk200ResponseToJSONTyped(json, false)
}

export function GetOccupationCrosswalk200ResponseToJSONTyped(
  value?: GetOccupationCrosswalk200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    code: value['code'],
    message: value['message'],
    data: (value['data'] as Array<any>).map(
      GetOccupationCrosswalk200ResponseDataInnerToJSON,
    ),
  }
}
