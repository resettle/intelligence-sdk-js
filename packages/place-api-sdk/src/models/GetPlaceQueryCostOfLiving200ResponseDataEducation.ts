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
 * @interface GetPlaceQueryCostOfLiving200ResponseDataEducation
 */
export interface GetPlaceQueryCostOfLiving200ResponseDataEducation {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataEducation
   */
  preschool: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataEducation
   */
  internationalPrimarySchool: number | null
}

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200ResponseDataEducation interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200ResponseDataEducation(
  value: object,
): value is GetPlaceQueryCostOfLiving200ResponseDataEducation {
  if (!('preschool' in value) || value['preschool'] === undefined) return false
  if (
    !('internationalPrimarySchool' in value) ||
    value['internationalPrimarySchool'] === undefined
  )
    return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseDataEducationFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataEducation {
  return GetPlaceQueryCostOfLiving200ResponseDataEducationFromJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataEducationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200ResponseDataEducation {
  if (json == null) {
    return json
  }
  return {
    preschool: json['preschool'],
    internationalPrimarySchool: json['international_primary_school'],
  }
}

export function GetPlaceQueryCostOfLiving200ResponseDataEducationToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataEducation {
  return GetPlaceQueryCostOfLiving200ResponseDataEducationToJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataEducationToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200ResponseDataEducation | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    preschool: value['preschool'],
    international_primary_school: value['internationalPrimarySchool'],
  }
}
