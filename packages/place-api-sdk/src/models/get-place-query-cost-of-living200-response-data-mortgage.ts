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
 * @interface GetPlaceQueryCostOfLiving200ResponseDataMortgage
 */
export interface GetPlaceQueryCostOfLiving200ResponseDataMortgage {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataMortgage
   */
  interestRate: number | null
}

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200ResponseDataMortgage interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200ResponseDataMortgage(
  value: object,
): value is GetPlaceQueryCostOfLiving200ResponseDataMortgage {
  if (!('interestRate' in value) || value['interestRate'] === undefined)
    return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseDataMortgageFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataMortgage {
  return GetPlaceQueryCostOfLiving200ResponseDataMortgageFromJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataMortgageFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200ResponseDataMortgage {
  if (json == null) {
    return json
  }
  return {
    interestRate: json['interest_rate'],
  }
}

export function GetPlaceQueryCostOfLiving200ResponseDataMortgageToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataMortgage {
  return GetPlaceQueryCostOfLiving200ResponseDataMortgageToJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataMortgageToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200ResponseDataMortgage | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    interest_rate: value['interestRate'],
  }
}
