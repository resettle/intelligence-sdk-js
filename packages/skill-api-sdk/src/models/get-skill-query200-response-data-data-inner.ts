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
 * @interface GetSkillQuery200ResponseDataDataInner
 */
export interface GetSkillQuery200ResponseDataDataInner {
  /**
   *
   * @type {string}
   * @memberof GetSkillQuery200ResponseDataDataInner
   */
  id: string
  /**
   * The name of the skill
   * @type {string}
   * @memberof GetSkillQuery200ResponseDataDataInner
   */
  name: string
  /**
   * The top level category of the skill
   * @type {string}
   * @memberof GetSkillQuery200ResponseDataDataInner
   */
  category: string
  /**
   * The secondary level category of the skill
   * @type {string}
   * @memberof GetSkillQuery200ResponseDataDataInner
   */
  subCategory: string
}

/**
 * Check if a given object implements the GetSkillQuery200ResponseDataDataInner interface.
 */
export function instanceOfGetSkillQuery200ResponseDataDataInner(
  value: object,
): value is GetSkillQuery200ResponseDataDataInner {
  if (!('id' in value) || value['id'] === undefined) return false
  if (!('name' in value) || value['name'] === undefined) return false
  if (!('category' in value) || value['category'] === undefined) return false
  if (!('subCategory' in value) || value['subCategory'] === undefined)
    return false
  return true
}

export function GetSkillQuery200ResponseDataDataInnerFromJSON(
  json: any,
): GetSkillQuery200ResponseDataDataInner {
  return GetSkillQuery200ResponseDataDataInnerFromJSONTyped(json, false)
}

export function GetSkillQuery200ResponseDataDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillQuery200ResponseDataDataInner {
  if (json == null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name'],
    category: json['category'],
    subCategory: json['sub_category'],
  }
}

export function GetSkillQuery200ResponseDataDataInnerToJSON(
  json: any,
): GetSkillQuery200ResponseDataDataInner {
  return GetSkillQuery200ResponseDataDataInnerToJSONTyped(json, false)
}

export function GetSkillQuery200ResponseDataDataInnerToJSONTyped(
  value?: GetSkillQuery200ResponseDataDataInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    id: value['id'],
    name: value['name'],
    category: value['category'],
    sub_category: value['subCategory'],
  }
}
