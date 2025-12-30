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
import type { GetSkillChanges200ResponseDataInner } from './GetSkillChanges200ResponseDataInner'
import {
  GetSkillChanges200ResponseDataInnerFromJSON,
  GetSkillChanges200ResponseDataInnerFromJSONTyped,
  GetSkillChanges200ResponseDataInnerToJSON,
  GetSkillChanges200ResponseDataInnerToJSONTyped,
} from './GetSkillChanges200ResponseDataInner'

/**
 *
 * @export
 * @interface GetSkillChanges200Response
 */
export interface GetSkillChanges200Response {
  /**
   *
   * @type {number}
   * @memberof GetSkillChanges200Response
   */
  code: number
  /**
   *
   * @type {string}
   * @memberof GetSkillChanges200Response
   */
  message: string | null
  /**
   *
   * @type {Array<GetSkillChanges200ResponseDataInner>}
   * @memberof GetSkillChanges200Response
   */
  data: Array<GetSkillChanges200ResponseDataInner>
}

/**
 * Check if a given object implements the GetSkillChanges200Response interface.
 */
export function instanceOfGetSkillChanges200Response(
  value: object,
): value is GetSkillChanges200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetSkillChanges200ResponseFromJSON(
  json: any,
): GetSkillChanges200Response {
  return GetSkillChanges200ResponseFromJSONTyped(json, false)
}

export function GetSkillChanges200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillChanges200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: (json['data'] as Array<any>).map(
      GetSkillChanges200ResponseDataInnerFromJSON,
    ),
  }
}

export function GetSkillChanges200ResponseToJSON(
  json: any,
): GetSkillChanges200Response {
  return GetSkillChanges200ResponseToJSONTyped(json, false)
}

export function GetSkillChanges200ResponseToJSONTyped(
  value?: GetSkillChanges200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    code: value['code'],
    message: value['message'],
    data: (value['data'] as Array<any>).map(
      GetSkillChanges200ResponseDataInnerToJSON,
    ),
  }
}
