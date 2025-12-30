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
 * @interface GetPlaceQueryCostOfLiving200ResponseDataClothing
 */
export interface GetPlaceQueryCostOfLiving200ResponseDataClothing {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataClothing
   */
  jeans: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataClothing
   */
  summerDress: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataClothing
   */
  runningShoes: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataClothing
   */
  businessShoes: number | null
}

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200ResponseDataClothing interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200ResponseDataClothing(
  value: object,
): value is GetPlaceQueryCostOfLiving200ResponseDataClothing {
  if (!('jeans' in value) || value['jeans'] === undefined) return false
  if (!('summerDress' in value) || value['summerDress'] === undefined)
    return false
  if (!('runningShoes' in value) || value['runningShoes'] === undefined)
    return false
  if (!('businessShoes' in value) || value['businessShoes'] === undefined)
    return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseDataClothingFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataClothing {
  return GetPlaceQueryCostOfLiving200ResponseDataClothingFromJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataClothingFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200ResponseDataClothing {
  if (json == null) {
    return json
  }
  return {
    jeans: json['jeans'],
    summerDress: json['summer_dress'],
    runningShoes: json['running_shoes'],
    businessShoes: json['business_shoes'],
  }
}

export function GetPlaceQueryCostOfLiving200ResponseDataClothingToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataClothing {
  return GetPlaceQueryCostOfLiving200ResponseDataClothingToJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataClothingToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200ResponseDataClothing | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    jeans: value['jeans'],
    summer_dress: value['summerDress'],
    running_shoes: value['runningShoes'],
    business_shoes: value['businessShoes'],
  }
}
