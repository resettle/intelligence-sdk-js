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
 * @interface GetSkillSubCategories200Response
 */
export interface GetSkillSubCategories200Response {
  /**
   *
   * @type {number}
   * @memberof GetSkillSubCategories200Response
   */
  code: number
  /**
   *
   * @type {string}
   * @memberof GetSkillSubCategories200Response
   */
  message: string
  /**
   *
   * @type {Array<string>}
   * @memberof GetSkillSubCategories200Response
   */
  data: Array<string>
}

/**
 * Check if a given object implements the GetSkillSubCategories200Response interface.
 */
export function instanceOfGetSkillSubCategories200Response(
  value: object,
): value is GetSkillSubCategories200Response {
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('message' in value) || value['message'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetSkillSubCategories200ResponseFromJSON(
  json: any,
): GetSkillSubCategories200Response {
  return GetSkillSubCategories200ResponseFromJSONTyped(json, false)
}

export function GetSkillSubCategories200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillSubCategories200Response {
  if (json == null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
    data: json['data'],
  }
}

export function GetSkillSubCategories200ResponseToJSON(
  json: any,
): GetSkillSubCategories200Response {
  return GetSkillSubCategories200ResponseToJSONTyped(json, false)
}

export function GetSkillSubCategories200ResponseToJSONTyped(
  value?: GetSkillSubCategories200Response | null,
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
