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
 * @interface GetPlaceQueryCostOfLiving200ResponseDataGrocery
 */
export interface GetPlaceQueryCostOfLiving200ResponseDataGrocery {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  milk: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  bread: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  rice: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  eggs: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  cheese: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  chickenFillets: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  beefRound: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  apples: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  bananas: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  oranges: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  tomatoes: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  potatoes: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  onions: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  lettuce: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  water: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  wine: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  domesticBeer: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  importedBeer: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataGrocery
   */
  cigarettes: number | null
}

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200ResponseDataGrocery interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200ResponseDataGrocery(
  value: object,
): value is GetPlaceQueryCostOfLiving200ResponseDataGrocery {
  if (!('milk' in value) || value['milk'] === undefined) return false
  if (!('bread' in value) || value['bread'] === undefined) return false
  if (!('rice' in value) || value['rice'] === undefined) return false
  if (!('eggs' in value) || value['eggs'] === undefined) return false
  if (!('cheese' in value) || value['cheese'] === undefined) return false
  if (!('chickenFillets' in value) || value['chickenFillets'] === undefined)
    return false
  if (!('beefRound' in value) || value['beefRound'] === undefined) return false
  if (!('apples' in value) || value['apples'] === undefined) return false
  if (!('bananas' in value) || value['bananas'] === undefined) return false
  if (!('oranges' in value) || value['oranges'] === undefined) return false
  if (!('tomatoes' in value) || value['tomatoes'] === undefined) return false
  if (!('potatoes' in value) || value['potatoes'] === undefined) return false
  if (!('onions' in value) || value['onions'] === undefined) return false
  if (!('lettuce' in value) || value['lettuce'] === undefined) return false
  if (!('water' in value) || value['water'] === undefined) return false
  if (!('wine' in value) || value['wine'] === undefined) return false
  if (!('domesticBeer' in value) || value['domesticBeer'] === undefined)
    return false
  if (!('importedBeer' in value) || value['importedBeer'] === undefined)
    return false
  if (!('cigarettes' in value) || value['cigarettes'] === undefined)
    return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseDataGroceryFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataGrocery {
  return GetPlaceQueryCostOfLiving200ResponseDataGroceryFromJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataGroceryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200ResponseDataGrocery {
  if (json == null) {
    return json
  }
  return {
    milk: json['milk'],
    bread: json['bread'],
    rice: json['rice'],
    eggs: json['eggs'],
    cheese: json['cheese'],
    chickenFillets: json['chicken_fillets'],
    beefRound: json['beef_round'],
    apples: json['apples'],
    bananas: json['bananas'],
    oranges: json['oranges'],
    tomatoes: json['tomatoes'],
    potatoes: json['potatoes'],
    onions: json['onions'],
    lettuce: json['lettuce'],
    water: json['water'],
    wine: json['wine'],
    domesticBeer: json['domestic_beer'],
    importedBeer: json['imported_beer'],
    cigarettes: json['cigarettes'],
  }
}

export function GetPlaceQueryCostOfLiving200ResponseDataGroceryToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataGrocery {
  return GetPlaceQueryCostOfLiving200ResponseDataGroceryToJSONTyped(json, false)
}

export function GetPlaceQueryCostOfLiving200ResponseDataGroceryToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200ResponseDataGrocery | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    milk: value['milk'],
    bread: value['bread'],
    rice: value['rice'],
    eggs: value['eggs'],
    cheese: value['cheese'],
    chicken_fillets: value['chickenFillets'],
    beef_round: value['beefRound'],
    apples: value['apples'],
    bananas: value['bananas'],
    oranges: value['oranges'],
    tomatoes: value['tomatoes'],
    potatoes: value['potatoes'],
    onions: value['onions'],
    lettuce: value['lettuce'],
    water: value['water'],
    wine: value['wine'],
    domestic_beer: value['domesticBeer'],
    imported_beer: value['importedBeer'],
    cigarettes: value['cigarettes'],
  }
}
