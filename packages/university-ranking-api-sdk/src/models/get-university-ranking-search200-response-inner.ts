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
 * @interface GetUniversityRankingSearch200ResponseInner
 */
export interface GetUniversityRankingSearch200ResponseInner {
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingSearch200ResponseInner
   */
  universityId: string
  /**
   * Unique slug for display purpose
   * @type {string}
   * @memberof GetUniversityRankingSearch200ResponseInner
   */
  slug: string
  /**
   * The commonly used name of the university
   * @type {string}
   * @memberof GetUniversityRankingSearch200ResponseInner
   */
  name: string
  /**
   * Aliases of the university, different rankings might provide their own slightly modified version
   * @type {Array<string>}
   * @memberof GetUniversityRankingSearch200ResponseInner
   */
  aliases: Array<string>
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingSearch200ResponseInner
   */
  domain: string | null
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingSearch200ResponseInner
   */
  countryCode: string | null
}

/**
 * Check if a given object implements the GetUniversityRankingSearch200ResponseInner interface.
 */
export function instanceOfGetUniversityRankingSearch200ResponseInner(
  value: object,
): value is GetUniversityRankingSearch200ResponseInner {
  if (!('universityId' in value) || value['universityId'] === undefined)
    return false
  if (!('slug' in value) || value['slug'] === undefined) return false
  if (!('name' in value) || value['name'] === undefined) return false
  if (!('aliases' in value) || value['aliases'] === undefined) return false
  if (!('domain' in value) || value['domain'] === undefined) return false
  if (!('countryCode' in value) || value['countryCode'] === undefined)
    return false
  return true
}

export function GetUniversityRankingSearch200ResponseInnerFromJSON(
  json: any,
): GetUniversityRankingSearch200ResponseInner {
  return GetUniversityRankingSearch200ResponseInnerFromJSONTyped(json, false)
}

export function GetUniversityRankingSearch200ResponseInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingSearch200ResponseInner {
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
  }
}

export function GetUniversityRankingSearch200ResponseInnerToJSON(
  json: any,
): GetUniversityRankingSearch200ResponseInner {
  return GetUniversityRankingSearch200ResponseInnerToJSONTyped(json, false)
}

export function GetUniversityRankingSearch200ResponseInnerToJSONTyped(
  value?: GetUniversityRankingSearch200ResponseInner | null,
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
  }
}
