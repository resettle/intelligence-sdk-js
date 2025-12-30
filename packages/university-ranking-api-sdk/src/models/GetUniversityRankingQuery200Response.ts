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
import type { GetUniversityRankingQuery200ResponseRankings } from './GetUniversityRankingQuery200ResponseRankings'
import {
  GetUniversityRankingQuery200ResponseRankingsFromJSON,
  GetUniversityRankingQuery200ResponseRankingsFromJSONTyped,
  GetUniversityRankingQuery200ResponseRankingsToJSON,
  GetUniversityRankingQuery200ResponseRankingsToJSONTyped,
} from './GetUniversityRankingQuery200ResponseRankings'

/**
 *
 * @export
 * @interface GetUniversityRankingQuery200Response
 */
export interface GetUniversityRankingQuery200Response {
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingQuery200Response
   */
  universityId: string
  /**
   * Unique slug for display purpose
   * @type {string}
   * @memberof GetUniversityRankingQuery200Response
   */
  slug: string
  /**
   * The commonly used name of the university
   * @type {string}
   * @memberof GetUniversityRankingQuery200Response
   */
  name: string
  /**
   * Aliases of the university, different rankings might provide their own slightly modified version
   * @type {Array<string>}
   * @memberof GetUniversityRankingQuery200Response
   */
  aliases: Array<string>
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingQuery200Response
   */
  domain: string | null
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingQuery200Response
   */
  countryCode: string | null
  /**
   *
   * @type {GetUniversityRankingQuery200ResponseRankings}
   * @memberof GetUniversityRankingQuery200Response
   */
  rankings: GetUniversityRankingQuery200ResponseRankings
}

/**
 * Check if a given object implements the GetUniversityRankingQuery200Response interface.
 */
export function instanceOfGetUniversityRankingQuery200Response(
  value: object,
): value is GetUniversityRankingQuery200Response {
  if (!('universityId' in value) || value['universityId'] === undefined)
    return false
  if (!('slug' in value) || value['slug'] === undefined) return false
  if (!('name' in value) || value['name'] === undefined) return false
  if (!('aliases' in value) || value['aliases'] === undefined) return false
  if (!('domain' in value) || value['domain'] === undefined) return false
  if (!('countryCode' in value) || value['countryCode'] === undefined)
    return false
  if (!('rankings' in value) || value['rankings'] === undefined) return false
  return true
}

export function GetUniversityRankingQuery200ResponseFromJSON(
  json: any,
): GetUniversityRankingQuery200Response {
  return GetUniversityRankingQuery200ResponseFromJSONTyped(json, false)
}

export function GetUniversityRankingQuery200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingQuery200Response {
  if (json == null) {
    return json
  }
  return {
    universityId: json['university_id'],
    slug: json['slug'],
    name: json['name'],
    aliases: json['aliases'],
    domain: json['domain'],
    countryCode: json['country_code'],
    rankings: GetUniversityRankingQuery200ResponseRankingsFromJSON(
      json['rankings'],
    ),
  }
}

export function GetUniversityRankingQuery200ResponseToJSON(
  json: any,
): GetUniversityRankingQuery200Response {
  return GetUniversityRankingQuery200ResponseToJSONTyped(json, false)
}

export function GetUniversityRankingQuery200ResponseToJSONTyped(
  value?: GetUniversityRankingQuery200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    university_id: value['universityId'],
    slug: value['slug'],
    name: value['name'],
    aliases: value['aliases'],
    domain: value['domain'],
    country_code: value['countryCode'],
    rankings: GetUniversityRankingQuery200ResponseRankingsToJSON(
      value['rankings'],
    ),
  }
}
