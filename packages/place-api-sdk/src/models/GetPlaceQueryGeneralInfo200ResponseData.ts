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
 * @interface GetPlaceQueryGeneralInfo200ResponseData
 */
export interface GetPlaceQueryGeneralInfo200ResponseData {
  /**
   * The name of the place
   * @type {string}
   * @memberof GetPlaceQueryGeneralInfo200ResponseData
   */
  name: string
  /**
   * The aliases of the place in different cultures and languages
   * @type {Array<string>}
   * @memberof GetPlaceQueryGeneralInfo200ResponseData
   */
  aliases: Array<string>
  /**
   * The ISO 3166-1 alpha-2 country code of the place
   * @type {string}
   * @memberof GetPlaceQueryGeneralInfo200ResponseData
   */
  countryCode: string
  /**
   * The latitude of the place
   * @type {number}
   * @memberof GetPlaceQueryGeneralInfo200ResponseData
   */
  latitude: number
  /**
   * The longitude of the place
   * @type {number}
   * @memberof GetPlaceQueryGeneralInfo200ResponseData
   */
  longitude: number
  /**
   * The population of the place
   * @type {string}
   * @memberof GetPlaceQueryGeneralInfo200ResponseData
   */
  population: string
  /**
   * The elevation of the place
   * @type {number}
   * @memberof GetPlaceQueryGeneralInfo200ResponseData
   */
  elevation: number
  /**
   *
   * @type {string}
   * @memberof GetPlaceQueryGeneralInfo200ResponseData
   */
  placeId: string
}

/**
 * Check if a given object implements the GetPlaceQueryGeneralInfo200ResponseData interface.
 */
export function instanceOfGetPlaceQueryGeneralInfo200ResponseData(
  value: object,
): value is GetPlaceQueryGeneralInfo200ResponseData {
  if (!('name' in value) || value['name'] === undefined) return false
  if (!('aliases' in value) || value['aliases'] === undefined) return false
  if (!('countryCode' in value) || value['countryCode'] === undefined)
    return false
  if (!('latitude' in value) || value['latitude'] === undefined) return false
  if (!('longitude' in value) || value['longitude'] === undefined) return false
  if (!('population' in value) || value['population'] === undefined)
    return false
  if (!('elevation' in value) || value['elevation'] === undefined) return false
  if (!('placeId' in value) || value['placeId'] === undefined) return false
  return true
}

export function GetPlaceQueryGeneralInfo200ResponseDataFromJSON(
  json: any,
): GetPlaceQueryGeneralInfo200ResponseData {
  return GetPlaceQueryGeneralInfo200ResponseDataFromJSONTyped(json, false)
}

export function GetPlaceQueryGeneralInfo200ResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryGeneralInfo200ResponseData {
  if (json == null) {
    return json
  }
  return {
    name: json['name'],
    aliases: json['aliases'],
    countryCode: json['country_code'],
    latitude: json['latitude'],
    longitude: json['longitude'],
    population: json['population'],
    elevation: json['elevation'],
    placeId: json['place_id'],
  }
}

export function GetPlaceQueryGeneralInfo200ResponseDataToJSON(
  json: any,
): GetPlaceQueryGeneralInfo200ResponseData {
  return GetPlaceQueryGeneralInfo200ResponseDataToJSONTyped(json, false)
}

export function GetPlaceQueryGeneralInfo200ResponseDataToJSONTyped(
  value?: GetPlaceQueryGeneralInfo200ResponseData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    name: value['name'],
    aliases: value['aliases'],
    country_code: value['countryCode'],
    latitude: value['latitude'],
    longitude: value['longitude'],
    population: value['population'],
    elevation: value['elevation'],
    place_id: value['placeId'],
  }
}
