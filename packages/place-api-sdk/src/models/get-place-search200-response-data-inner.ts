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
 * @interface GetPlaceSearch200ResponseDataInner
 */
export interface GetPlaceSearch200ResponseDataInner {
  /**
   * The name of the place
   * @type {string}
   * @memberof GetPlaceSearch200ResponseDataInner
   */
  name: string
  /**
   * The aliases of the place in different cultures and languages
   * @type {Array<string>}
   * @memberof GetPlaceSearch200ResponseDataInner
   */
  aliases: Array<string>
  /**
   * The ISO 3166-1 alpha-2 country code of the place
   * @type {string}
   * @memberof GetPlaceSearch200ResponseDataInner
   */
  countryCode: string
  /**
   *
   * @type {string}
   * @memberof GetPlaceSearch200ResponseDataInner
   */
  placeId: string
  /**
   * Valid scopes of the place
   * @type {Array<string>}
   * @memberof GetPlaceSearch200ResponseDataInner
   */
  scopes: Array<GetPlaceSearch200ResponseDataInnerScopesEnum>
}

/**
 * @export
 */
export const GetPlaceSearch200ResponseDataInnerScopesEnum = {
  CostOfLiving: 'cost-of-living',
  GeneralInfo: 'general-info',
} as const
export type GetPlaceSearch200ResponseDataInnerScopesEnum =
  (typeof GetPlaceSearch200ResponseDataInnerScopesEnum)[keyof typeof GetPlaceSearch200ResponseDataInnerScopesEnum]

/**
 * Check if a given object implements the GetPlaceSearch200ResponseDataInner interface.
 */
export function instanceOfGetPlaceSearch200ResponseDataInner(
  value: object,
): value is GetPlaceSearch200ResponseDataInner {
  if (!('name' in value) || value['name'] === undefined) return false
  if (!('aliases' in value) || value['aliases'] === undefined) return false
  if (!('countryCode' in value) || value['countryCode'] === undefined)
    return false
  if (!('placeId' in value) || value['placeId'] === undefined) return false
  if (!('scopes' in value) || value['scopes'] === undefined) return false
  return true
}

export function GetPlaceSearch200ResponseDataInnerFromJSON(
  json: any,
): GetPlaceSearch200ResponseDataInner {
  return GetPlaceSearch200ResponseDataInnerFromJSONTyped(json, false)
}

export function GetPlaceSearch200ResponseDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceSearch200ResponseDataInner {
  if (json == null) {
    return json
  }
  return {
    name: json['name'],
    aliases: json['aliases'],
    countryCode: json['country_code'],
    placeId: json['place_id'],
    scopes: json['scopes'],
  }
}

export function GetPlaceSearch200ResponseDataInnerToJSON(
  json: any,
): GetPlaceSearch200ResponseDataInner {
  return GetPlaceSearch200ResponseDataInnerToJSONTyped(json, false)
}

export function GetPlaceSearch200ResponseDataInnerToJSONTyped(
  value?: GetPlaceSearch200ResponseDataInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    name: value['name'],
    aliases: value['aliases'],
    country_code: value['countryCode'],
    place_id: value['placeId'],
    scopes: value['scopes'],
  }
}
