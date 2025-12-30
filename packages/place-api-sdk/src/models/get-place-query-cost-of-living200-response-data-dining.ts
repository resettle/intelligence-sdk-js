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
 * @interface GetPlaceQueryCostOfLiving200ResponseDataDining
 */
export interface GetPlaceQueryCostOfLiving200ResponseDataDining {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataDining
   */
  inexpensive: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataDining
   */
  midTier: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataDining
   */
  mcdonalds: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataDining
   */
  domesticBeer: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataDining
   */
  importedBeer: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataDining
   */
  cappuccino: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataDining
   */
  softDrink: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataDining
   */
  water: number | null
}

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200ResponseDataDining interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200ResponseDataDining(
  value: object,
): value is GetPlaceQueryCostOfLiving200ResponseDataDining {
  if (!('inexpensive' in value) || value['inexpensive'] === undefined)
    return false
  if (!('midTier' in value) || value['midTier'] === undefined) return false
  if (!('mcdonalds' in value) || value['mcdonalds'] === undefined) return false
  if (!('domesticBeer' in value) || value['domesticBeer'] === undefined)
    return false
  if (!('importedBeer' in value) || value['importedBeer'] === undefined)
    return false
  if (!('cappuccino' in value) || value['cappuccino'] === undefined)
    return false
  if (!('softDrink' in value) || value['softDrink'] === undefined) return false
  if (!('water' in value) || value['water'] === undefined) return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseDataDiningFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataDining {
  return GetPlaceQueryCostOfLiving200ResponseDataDiningFromJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataDiningFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200ResponseDataDining {
  if (json == null) {
    return json
  }
  return {
    inexpensive: json['inexpensive'],
    midTier: json['mid_tier'],
    mcdonalds: json['mcdonalds'],
    domesticBeer: json['domestic_beer'],
    importedBeer: json['imported_beer'],
    cappuccino: json['cappuccino'],
    softDrink: json['soft_drink'],
    water: json['water'],
  }
}

export function GetPlaceQueryCostOfLiving200ResponseDataDiningToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataDining {
  return GetPlaceQueryCostOfLiving200ResponseDataDiningToJSONTyped(json, false)
}

export function GetPlaceQueryCostOfLiving200ResponseDataDiningToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200ResponseDataDining | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    inexpensive: value['inexpensive'],
    mid_tier: value['midTier'],
    mcdonalds: value['mcdonalds'],
    domestic_beer: value['domesticBeer'],
    imported_beer: value['importedBeer'],
    cappuccino: value['cappuccino'],
    soft_drink: value['softDrink'],
    water: value['water'],
  }
}
