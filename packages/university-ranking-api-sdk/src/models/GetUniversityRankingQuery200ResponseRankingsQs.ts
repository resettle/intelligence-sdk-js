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
import type { GetUniversityRankingQuery200ResponseRankingsQsRank } from './GetUniversityRankingQuery200ResponseRankingsQsRank'
import {
  GetUniversityRankingQuery200ResponseRankingsQsRankFromJSON,
  GetUniversityRankingQuery200ResponseRankingsQsRankFromJSONTyped,
  GetUniversityRankingQuery200ResponseRankingsQsRankToJSON,
  GetUniversityRankingQuery200ResponseRankingsQsRankToJSONTyped,
} from './GetUniversityRankingQuery200ResponseRankingsQsRank'
import type { GetUniversityRankingRank200ResponseInnerDetails } from './GetUniversityRankingRank200ResponseInnerDetails'
import {
  GetUniversityRankingRank200ResponseInnerDetailsFromJSON,
  GetUniversityRankingRank200ResponseInnerDetailsFromJSONTyped,
  GetUniversityRankingRank200ResponseInnerDetailsToJSON,
  GetUniversityRankingRank200ResponseInnerDetailsToJSONTyped,
} from './GetUniversityRankingRank200ResponseInnerDetails'

/**
 * The QS ranking information of the university
 * @export
 * @interface GetUniversityRankingQuery200ResponseRankingsQs
 */
export interface GetUniversityRankingQuery200ResponseRankingsQs {
  /**
   *
   * @type {GetUniversityRankingQuery200ResponseRankingsQsRank}
   * @memberof GetUniversityRankingQuery200ResponseRankingsQs
   */
  rank: GetUniversityRankingQuery200ResponseRankingsQsRank
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetails}
   * @memberof GetUniversityRankingQuery200ResponseRankingsQs
   */
  details: GetUniversityRankingRank200ResponseInnerDetails
}

/**
 * Check if a given object implements the GetUniversityRankingQuery200ResponseRankingsQs interface.
 */
export function instanceOfGetUniversityRankingQuery200ResponseRankingsQs(
  value: object,
): value is GetUniversityRankingQuery200ResponseRankingsQs {
  if (!('rank' in value) || value['rank'] === undefined) return false
  if (!('details' in value) || value['details'] === undefined) return false
  return true
}

export function GetUniversityRankingQuery200ResponseRankingsQsFromJSON(
  json: any,
): GetUniversityRankingQuery200ResponseRankingsQs {
  return GetUniversityRankingQuery200ResponseRankingsQsFromJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingQuery200ResponseRankingsQsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingQuery200ResponseRankingsQs {
  if (json == null) {
    return json
  }
  return {
    rank: GetUniversityRankingQuery200ResponseRankingsQsRankFromJSON(
      json['rank'],
    ),
    details: GetUniversityRankingRank200ResponseInnerDetailsFromJSON(
      json['details'],
    ),
  }
}

export function GetUniversityRankingQuery200ResponseRankingsQsToJSON(
  json: any,
): GetUniversityRankingQuery200ResponseRankingsQs {
  return GetUniversityRankingQuery200ResponseRankingsQsToJSONTyped(json, false)
}

export function GetUniversityRankingQuery200ResponseRankingsQsToJSONTyped(
  value?: GetUniversityRankingQuery200ResponseRankingsQs | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    rank: GetUniversityRankingQuery200ResponseRankingsQsRankToJSON(
      value['rank'],
    ),
    details: GetUniversityRankingRank200ResponseInnerDetailsToJSON(
      value['details'],
    ),
  }
}
