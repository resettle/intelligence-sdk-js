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
import type { GetPlaceQueryCostOfLiving200ResponseDataClothing } from './get-place-query-cost-of-living200-response-data-clothing'
import {
  GetPlaceQueryCostOfLiving200ResponseDataClothingFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataClothingFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataClothingToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataClothingToJSONTyped,
} from './get-place-query-cost-of-living200-response-data-clothing'
import type { GetPlaceQueryCostOfLiving200ResponseDataDining } from './get-place-query-cost-of-living200-response-data-dining'
import {
  GetPlaceQueryCostOfLiving200ResponseDataDiningFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataDiningFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataDiningToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataDiningToJSONTyped,
} from './get-place-query-cost-of-living200-response-data-dining'
import type { GetPlaceQueryCostOfLiving200ResponseDataEducation } from './get-place-query-cost-of-living200-response-data-education'
import {
  GetPlaceQueryCostOfLiving200ResponseDataEducationFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataEducationFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataEducationToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataEducationToJSONTyped,
} from './get-place-query-cost-of-living200-response-data-education'
import type { GetPlaceQueryCostOfLiving200ResponseDataEntertainment } from './get-place-query-cost-of-living200-response-data-entertainment'
import {
  GetPlaceQueryCostOfLiving200ResponseDataEntertainmentFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataEntertainmentFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataEntertainmentToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataEntertainmentToJSONTyped,
} from './get-place-query-cost-of-living200-response-data-entertainment'
import type { GetPlaceQueryCostOfLiving200ResponseDataGrocery } from './get-place-query-cost-of-living200-response-data-grocery'
import {
  GetPlaceQueryCostOfLiving200ResponseDataGroceryFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataGroceryFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataGroceryToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataGroceryToJSONTyped,
} from './get-place-query-cost-of-living200-response-data-grocery'
import type { GetPlaceQueryCostOfLiving200ResponseDataHousing } from './get-place-query-cost-of-living200-response-data-housing'
import {
  GetPlaceQueryCostOfLiving200ResponseDataHousingFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataHousingFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataHousingToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataHousingToJSONTyped,
} from './get-place-query-cost-of-living200-response-data-housing'
import type { GetPlaceQueryCostOfLiving200ResponseDataIncome } from './get-place-query-cost-of-living200-response-data-income'
import {
  GetPlaceQueryCostOfLiving200ResponseDataIncomeFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataIncomeFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataIncomeToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataIncomeToJSONTyped,
} from './get-place-query-cost-of-living200-response-data-income'
import type { GetPlaceQueryCostOfLiving200ResponseDataMortgage } from './get-place-query-cost-of-living200-response-data-mortgage'
import {
  GetPlaceQueryCostOfLiving200ResponseDataMortgageFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataMortgageFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataMortgageToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataMortgageToJSONTyped,
} from './get-place-query-cost-of-living200-response-data-mortgage'
import type { GetPlaceQueryCostOfLiving200ResponseDataTransportation } from './get-place-query-cost-of-living200-response-data-transportation'
import {
  GetPlaceQueryCostOfLiving200ResponseDataTransportationFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataTransportationFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataTransportationToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataTransportationToJSONTyped,
} from './get-place-query-cost-of-living200-response-data-transportation'
import type { GetPlaceQueryCostOfLiving200ResponseDataUtilities } from './get-place-query-cost-of-living200-response-data-utilities'
import {
  GetPlaceQueryCostOfLiving200ResponseDataUtilitiesFromJSON,
  GetPlaceQueryCostOfLiving200ResponseDataUtilitiesFromJSONTyped,
  GetPlaceQueryCostOfLiving200ResponseDataUtilitiesToJSON,
  GetPlaceQueryCostOfLiving200ResponseDataUtilitiesToJSONTyped,
} from './get-place-query-cost-of-living200-response-data-utilities'

/**
 *
 * @export
 * @interface GetPlaceQueryCostOfLiving200ResponseData
 */
export interface GetPlaceQueryCostOfLiving200ResponseData {
  /**
   *
   * @type {string}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  placeId: string
  /**
   *
   * @type {string}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  currencyCode: string
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseDataDining}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  dining: GetPlaceQueryCostOfLiving200ResponseDataDining
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseDataGrocery}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  grocery: GetPlaceQueryCostOfLiving200ResponseDataGrocery
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseDataTransportation}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  transportation: GetPlaceQueryCostOfLiving200ResponseDataTransportation
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseDataUtilities}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  utilities: GetPlaceQueryCostOfLiving200ResponseDataUtilities
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseDataEntertainment}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  entertainment: GetPlaceQueryCostOfLiving200ResponseDataEntertainment
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseDataEducation}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  education: GetPlaceQueryCostOfLiving200ResponseDataEducation
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseDataClothing}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  clothing: GetPlaceQueryCostOfLiving200ResponseDataClothing
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseDataHousing}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  housing: GetPlaceQueryCostOfLiving200ResponseDataHousing
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseDataIncome}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  income: GetPlaceQueryCostOfLiving200ResponseDataIncome
  /**
   *
   * @type {GetPlaceQueryCostOfLiving200ResponseDataMortgage}
   * @memberof GetPlaceQueryCostOfLiving200ResponseData
   */
  mortgage: GetPlaceQueryCostOfLiving200ResponseDataMortgage
}

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200ResponseData interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200ResponseData(
  value: object,
): value is GetPlaceQueryCostOfLiving200ResponseData {
  if (!('placeId' in value) || value['placeId'] === undefined) return false
  if (!('currencyCode' in value) || value['currencyCode'] === undefined)
    return false
  if (!('dining' in value) || value['dining'] === undefined) return false
  if (!('grocery' in value) || value['grocery'] === undefined) return false
  if (!('transportation' in value) || value['transportation'] === undefined)
    return false
  if (!('utilities' in value) || value['utilities'] === undefined) return false
  if (!('entertainment' in value) || value['entertainment'] === undefined)
    return false
  if (!('education' in value) || value['education'] === undefined) return false
  if (!('clothing' in value) || value['clothing'] === undefined) return false
  if (!('housing' in value) || value['housing'] === undefined) return false
  if (!('income' in value) || value['income'] === undefined) return false
  if (!('mortgage' in value) || value['mortgage'] === undefined) return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseDataFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseData {
  return GetPlaceQueryCostOfLiving200ResponseDataFromJSONTyped(json, false)
}

export function GetPlaceQueryCostOfLiving200ResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200ResponseData {
  if (json == null) {
    return json
  }
  return {
    placeId: json['place_id'],
    currencyCode: json['currency_code'],
    dining: GetPlaceQueryCostOfLiving200ResponseDataDiningFromJSON(
      json['dining'],
    ),
    grocery: GetPlaceQueryCostOfLiving200ResponseDataGroceryFromJSON(
      json['grocery'],
    ),
    transportation:
      GetPlaceQueryCostOfLiving200ResponseDataTransportationFromJSON(
        json['transportation'],
      ),
    utilities: GetPlaceQueryCostOfLiving200ResponseDataUtilitiesFromJSON(
      json['utilities'],
    ),
    entertainment:
      GetPlaceQueryCostOfLiving200ResponseDataEntertainmentFromJSON(
        json['entertainment'],
      ),
    education: GetPlaceQueryCostOfLiving200ResponseDataEducationFromJSON(
      json['education'],
    ),
    clothing: GetPlaceQueryCostOfLiving200ResponseDataClothingFromJSON(
      json['clothing'],
    ),
    housing: GetPlaceQueryCostOfLiving200ResponseDataHousingFromJSON(
      json['housing'],
    ),
    income: GetPlaceQueryCostOfLiving200ResponseDataIncomeFromJSON(
      json['income'],
    ),
    mortgage: GetPlaceQueryCostOfLiving200ResponseDataMortgageFromJSON(
      json['mortgage'],
    ),
  }
}

export function GetPlaceQueryCostOfLiving200ResponseDataToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseData {
  return GetPlaceQueryCostOfLiving200ResponseDataToJSONTyped(json, false)
}

export function GetPlaceQueryCostOfLiving200ResponseDataToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200ResponseData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    place_id: value['placeId'],
    currency_code: value['currencyCode'],
    dining: GetPlaceQueryCostOfLiving200ResponseDataDiningToJSON(
      value['dining'],
    ),
    grocery: GetPlaceQueryCostOfLiving200ResponseDataGroceryToJSON(
      value['grocery'],
    ),
    transportation:
      GetPlaceQueryCostOfLiving200ResponseDataTransportationToJSON(
        value['transportation'],
      ),
    utilities: GetPlaceQueryCostOfLiving200ResponseDataUtilitiesToJSON(
      value['utilities'],
    ),
    entertainment: GetPlaceQueryCostOfLiving200ResponseDataEntertainmentToJSON(
      value['entertainment'],
    ),
    education: GetPlaceQueryCostOfLiving200ResponseDataEducationToJSON(
      value['education'],
    ),
    clothing: GetPlaceQueryCostOfLiving200ResponseDataClothingToJSON(
      value['clothing'],
    ),
    housing: GetPlaceQueryCostOfLiving200ResponseDataHousingToJSON(
      value['housing'],
    ),
    income: GetPlaceQueryCostOfLiving200ResponseDataIncomeToJSON(
      value['income'],
    ),
    mortgage: GetPlaceQueryCostOfLiving200ResponseDataMortgageToJSON(
      value['mortgage'],
    ),
  }
}
