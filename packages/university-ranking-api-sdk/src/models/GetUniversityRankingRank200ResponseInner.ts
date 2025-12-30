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
import type { GetUniversityRankingRank200ResponseInnerDetails } from './GetUniversityRankingRank200ResponseInnerDetails'
import {
  GetUniversityRankingRank200ResponseInnerDetailsFromJSON,
  GetUniversityRankingRank200ResponseInnerDetailsFromJSONTyped,
  GetUniversityRankingRank200ResponseInnerDetailsToJSON,
  GetUniversityRankingRank200ResponseInnerDetailsToJSONTyped,
} from './GetUniversityRankingRank200ResponseInnerDetails'
import type { GetUniversityRankingRank200ResponseInnerRank } from './GetUniversityRankingRank200ResponseInnerRank'
import {
  GetUniversityRankingRank200ResponseInnerRankFromJSON,
  GetUniversityRankingRank200ResponseInnerRankFromJSONTyped,
  GetUniversityRankingRank200ResponseInnerRankToJSON,
  GetUniversityRankingRank200ResponseInnerRankToJSONTyped,
} from './GetUniversityRankingRank200ResponseInnerRank'

/**
 *
 * @export
 * @interface GetUniversityRankingRank200ResponseInner
 */
export interface GetUniversityRankingRank200ResponseInner {
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingRank200ResponseInner
   */
  universityId: string
  /**
   * Unique slug for display purpose
   * @type {string}
   * @memberof GetUniversityRankingRank200ResponseInner
   */
  slug: string
  /**
   * The commonly used name of the university
   * @type {string}
   * @memberof GetUniversityRankingRank200ResponseInner
   */
  name: string
  /**
   * Aliases of the university, different rankings might provide their own slightly modified version
   * @type {Array<string>}
   * @memberof GetUniversityRankingRank200ResponseInner
   */
  aliases: Array<string>
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingRank200ResponseInner
   */
  domain: string | null
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingRank200ResponseInner
   */
  countryCode: string | null
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerRank}
   * @memberof GetUniversityRankingRank200ResponseInner
   */
  rank: GetUniversityRankingRank200ResponseInnerRank
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetails}
   * @memberof GetUniversityRankingRank200ResponseInner
   */
  details: GetUniversityRankingRank200ResponseInnerDetails
}

/**
 * Check if a given object implements the GetUniversityRankingRank200ResponseInner interface.
 */
export function instanceOfGetUniversityRankingRank200ResponseInner(
  value: object,
): value is GetUniversityRankingRank200ResponseInner {
  if (!('universityId' in value) || value['universityId'] === undefined)
    return false
  if (!('slug' in value) || value['slug'] === undefined) return false
  if (!('name' in value) || value['name'] === undefined) return false
  if (!('aliases' in value) || value['aliases'] === undefined) return false
  if (!('domain' in value) || value['domain'] === undefined) return false
  if (!('countryCode' in value) || value['countryCode'] === undefined)
    return false
  if (!('rank' in value) || value['rank'] === undefined) return false
  if (!('details' in value) || value['details'] === undefined) return false
  return true
}

export function GetUniversityRankingRank200ResponseInnerFromJSON(
  json: any,
): GetUniversityRankingRank200ResponseInner {
  return GetUniversityRankingRank200ResponseInnerFromJSONTyped(json, false)
}

export function GetUniversityRankingRank200ResponseInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingRank200ResponseInner {
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
    rank: GetUniversityRankingRank200ResponseInnerRankFromJSON(json['rank']),
    details: GetUniversityRankingRank200ResponseInnerDetailsFromJSON(
      json['details'],
    ),
  }
}

export function GetUniversityRankingRank200ResponseInnerToJSON(
  json: any,
): GetUniversityRankingRank200ResponseInner {
  return GetUniversityRankingRank200ResponseInnerToJSONTyped(json, false)
}

export function GetUniversityRankingRank200ResponseInnerToJSONTyped(
  value?: GetUniversityRankingRank200ResponseInner | null,
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
    rank: GetUniversityRankingRank200ResponseInnerRankToJSON(value['rank']),
    details: GetUniversityRankingRank200ResponseInnerDetailsToJSON(
      value['details'],
    ),
  }
}
