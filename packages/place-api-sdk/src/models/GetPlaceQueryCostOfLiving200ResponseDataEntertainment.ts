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
 * @interface GetPlaceQueryCostOfLiving200ResponseDataEntertainment
 */
export interface GetPlaceQueryCostOfLiving200ResponseDataEntertainment {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataEntertainment
   */
  fitnessClub: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataEntertainment
   */
  tennisCourt: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataEntertainment
   */
  cinema: number | null
}

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200ResponseDataEntertainment interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200ResponseDataEntertainment(
  value: object,
): value is GetPlaceQueryCostOfLiving200ResponseDataEntertainment {
  if (!('fitnessClub' in value) || value['fitnessClub'] === undefined)
    return false
  if (!('tennisCourt' in value) || value['tennisCourt'] === undefined)
    return false
  if (!('cinema' in value) || value['cinema'] === undefined) return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseDataEntertainmentFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataEntertainment {
  return GetPlaceQueryCostOfLiving200ResponseDataEntertainmentFromJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataEntertainmentFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200ResponseDataEntertainment {
  if (json == null) {
    return json
  }
  return {
    fitnessClub: json['fitness_club'],
    tennisCourt: json['tennis_court'],
    cinema: json['cinema'],
  }
}

export function GetPlaceQueryCostOfLiving200ResponseDataEntertainmentToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataEntertainment {
  return GetPlaceQueryCostOfLiving200ResponseDataEntertainmentToJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataEntertainmentToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200ResponseDataEntertainment | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    fitness_club: value['fitnessClub'],
    tennis_court: value['tennisCourt'],
    cinema: value['cinema'],
  }
}
