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
 * @interface GetPlaceQueryCostOfLiving200ResponseDataHousing
 */
export interface GetPlaceQueryCostOfLiving200ResponseDataHousing {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataHousing
   */
  rentCityCenter1Bedroom: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataHousing
   */
  rentOutsideOfCenter1Bedroom: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataHousing
   */
  rentCityCenter3Bedrooms: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataHousing
   */
  rentOutsideOfCenter3Bedrooms: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataHousing
   */
  buyCityCenter: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataHousing
   */
  buyOutsideOfCenter: number | null
}

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200ResponseDataHousing interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200ResponseDataHousing(
  value: object,
): value is GetPlaceQueryCostOfLiving200ResponseDataHousing {
  if (
    !('rentCityCenter1Bedroom' in value) ||
    value['rentCityCenter1Bedroom'] === undefined
  )
    return false
  if (
    !('rentOutsideOfCenter1Bedroom' in value) ||
    value['rentOutsideOfCenter1Bedroom'] === undefined
  )
    return false
  if (
    !('rentCityCenter3Bedrooms' in value) ||
    value['rentCityCenter3Bedrooms'] === undefined
  )
    return false
  if (
    !('rentOutsideOfCenter3Bedrooms' in value) ||
    value['rentOutsideOfCenter3Bedrooms'] === undefined
  )
    return false
  if (!('buyCityCenter' in value) || value['buyCityCenter'] === undefined)
    return false
  if (
    !('buyOutsideOfCenter' in value) ||
    value['buyOutsideOfCenter'] === undefined
  )
    return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseDataHousingFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataHousing {
  return GetPlaceQueryCostOfLiving200ResponseDataHousingFromJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataHousingFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200ResponseDataHousing {
  if (json == null) {
    return json
  }
  return {
    rentCityCenter1Bedroom: json['rent_city_center_1_bedroom'],
    rentOutsideOfCenter1Bedroom: json['rent_outside_of_center_1_bedroom'],
    rentCityCenter3Bedrooms: json['rent_city_center_3_bedrooms'],
    rentOutsideOfCenter3Bedrooms: json['rent_outside_of_center_3_bedrooms'],
    buyCityCenter: json['buy_city_center'],
    buyOutsideOfCenter: json['buy_outside_of_center'],
  }
}

export function GetPlaceQueryCostOfLiving200ResponseDataHousingToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataHousing {
  return GetPlaceQueryCostOfLiving200ResponseDataHousingToJSONTyped(json, false)
}

export function GetPlaceQueryCostOfLiving200ResponseDataHousingToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200ResponseDataHousing | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    rent_city_center_1_bedroom: value['rentCityCenter1Bedroom'],
    rent_outside_of_center_1_bedroom: value['rentOutsideOfCenter1Bedroom'],
    rent_city_center_3_bedrooms: value['rentCityCenter3Bedrooms'],
    rent_outside_of_center_3_bedrooms: value['rentOutsideOfCenter3Bedrooms'],
    buy_city_center: value['buyCityCenter'],
    buy_outside_of_center: value['buyOutsideOfCenter'],
  }
}
