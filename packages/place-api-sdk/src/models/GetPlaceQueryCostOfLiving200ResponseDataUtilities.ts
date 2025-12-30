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
 * @interface GetPlaceQueryCostOfLiving200ResponseDataUtilities
 */
export interface GetPlaceQueryCostOfLiving200ResponseDataUtilities {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataUtilities
   */
  basic: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataUtilities
   */
  mobile: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataUtilities
   */
  internet: number | null
}

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200ResponseDataUtilities interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200ResponseDataUtilities(
  value: object,
): value is GetPlaceQueryCostOfLiving200ResponseDataUtilities {
  if (!('basic' in value) || value['basic'] === undefined) return false
  if (!('mobile' in value) || value['mobile'] === undefined) return false
  if (!('internet' in value) || value['internet'] === undefined) return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseDataUtilitiesFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataUtilities {
  return GetPlaceQueryCostOfLiving200ResponseDataUtilitiesFromJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataUtilitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200ResponseDataUtilities {
  if (json == null) {
    return json
  }
  return {
    basic: json['basic'],
    mobile: json['mobile'],
    internet: json['internet'],
  }
}

export function GetPlaceQueryCostOfLiving200ResponseDataUtilitiesToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataUtilities {
  return GetPlaceQueryCostOfLiving200ResponseDataUtilitiesToJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataUtilitiesToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200ResponseDataUtilities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    basic: value['basic'],
    mobile: value['mobile'],
    internet: value['internet'],
  }
}
