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
import type { GetUniversityRankingQuery200ResponseRankingsTimesRank } from './get-university-ranking-query200-response-rankings-times-rank'
import {
  GetUniversityRankingQuery200ResponseRankingsTimesRankFromJSON,
  GetUniversityRankingQuery200ResponseRankingsTimesRankFromJSONTyped,
  GetUniversityRankingQuery200ResponseRankingsTimesRankToJSON,
  GetUniversityRankingQuery200ResponseRankingsTimesRankToJSONTyped,
} from './get-university-ranking-query200-response-rankings-times-rank'
import type { GetUniversityRankingRank200ResponseInnerDetails } from './get-university-ranking-rank200-response-inner-details'
import {
  GetUniversityRankingRank200ResponseInnerDetailsFromJSON,
  GetUniversityRankingRank200ResponseInnerDetailsFromJSONTyped,
  GetUniversityRankingRank200ResponseInnerDetailsToJSON,
  GetUniversityRankingRank200ResponseInnerDetailsToJSONTyped,
} from './get-university-ranking-rank200-response-inner-details'

/**
 * The Times ranking information of the university
 * @export
 * @interface GetUniversityRankingQuery200ResponseRankingsTimes
 */
export interface GetUniversityRankingQuery200ResponseRankingsTimes {
  /**
   *
   * @type {GetUniversityRankingQuery200ResponseRankingsTimesRank}
   * @memberof GetUniversityRankingQuery200ResponseRankingsTimes
   */
  rank: GetUniversityRankingQuery200ResponseRankingsTimesRank
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetails}
   * @memberof GetUniversityRankingQuery200ResponseRankingsTimes
   */
  details: GetUniversityRankingRank200ResponseInnerDetails
}

/**
 * Check if a given object implements the GetUniversityRankingQuery200ResponseRankingsTimes interface.
 */
export function instanceOfGetUniversityRankingQuery200ResponseRankingsTimes(
  value: object,
): value is GetUniversityRankingQuery200ResponseRankingsTimes {
  if (!('rank' in value) || value['rank'] === undefined) return false
  if (!('details' in value) || value['details'] === undefined) return false
  return true
}

export function GetUniversityRankingQuery200ResponseRankingsTimesFromJSON(
  json: any,
): GetUniversityRankingQuery200ResponseRankingsTimes {
  return GetUniversityRankingQuery200ResponseRankingsTimesFromJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingQuery200ResponseRankingsTimesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingQuery200ResponseRankingsTimes {
  if (json == null) {
    return json
  }
  return {
    rank: GetUniversityRankingQuery200ResponseRankingsTimesRankFromJSON(
      json['rank'],
    ),
    details: GetUniversityRankingRank200ResponseInnerDetailsFromJSON(
      json['details'],
    ),
  }
}

export function GetUniversityRankingQuery200ResponseRankingsTimesToJSON(
  json: any,
): GetUniversityRankingQuery200ResponseRankingsTimes {
  return GetUniversityRankingQuery200ResponseRankingsTimesToJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingQuery200ResponseRankingsTimesToJSONTyped(
  value?: GetUniversityRankingQuery200ResponseRankingsTimes | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    rank: GetUniversityRankingQuery200ResponseRankingsTimesRankToJSON(
      value['rank'],
    ),
    details: GetUniversityRankingRank200ResponseInnerDetailsToJSON(
      value['details'],
    ),
  }
}
