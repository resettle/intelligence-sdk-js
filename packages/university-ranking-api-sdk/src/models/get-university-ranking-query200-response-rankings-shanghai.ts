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
import type { GetUniversityRankingQuery200ResponseRankingsShanghaiRank } from './get-university-ranking-query200-response-rankings-shanghai-rank'
import {
  GetUniversityRankingQuery200ResponseRankingsShanghaiRankFromJSON,
  GetUniversityRankingQuery200ResponseRankingsShanghaiRankFromJSONTyped,
  GetUniversityRankingQuery200ResponseRankingsShanghaiRankToJSON,
  GetUniversityRankingQuery200ResponseRankingsShanghaiRankToJSONTyped,
} from './get-university-ranking-query200-response-rankings-shanghai-rank'
import type { GetUniversityRankingRank200ResponseInnerDetails } from './get-university-ranking-rank200-response-inner-details'
import {
  GetUniversityRankingRank200ResponseInnerDetailsFromJSON,
  GetUniversityRankingRank200ResponseInnerDetailsFromJSONTyped,
  GetUniversityRankingRank200ResponseInnerDetailsToJSON,
  GetUniversityRankingRank200ResponseInnerDetailsToJSONTyped,
} from './get-university-ranking-rank200-response-inner-details'

/**
 * The Shanghai ranking information of the university
 * @export
 * @interface GetUniversityRankingQuery200ResponseRankingsShanghai
 */
export interface GetUniversityRankingQuery200ResponseRankingsShanghai {
  /**
   *
   * @type {GetUniversityRankingQuery200ResponseRankingsShanghaiRank}
   * @memberof GetUniversityRankingQuery200ResponseRankingsShanghai
   */
  rank: GetUniversityRankingQuery200ResponseRankingsShanghaiRank
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetails}
   * @memberof GetUniversityRankingQuery200ResponseRankingsShanghai
   */
  details: GetUniversityRankingRank200ResponseInnerDetails
}

/**
 * Check if a given object implements the GetUniversityRankingQuery200ResponseRankingsShanghai interface.
 */
export function instanceOfGetUniversityRankingQuery200ResponseRankingsShanghai(
  value: object,
): value is GetUniversityRankingQuery200ResponseRankingsShanghai {
  if (!('rank' in value) || value['rank'] === undefined) return false
  if (!('details' in value) || value['details'] === undefined) return false
  return true
}

export function GetUniversityRankingQuery200ResponseRankingsShanghaiFromJSON(
  json: any,
): GetUniversityRankingQuery200ResponseRankingsShanghai {
  return GetUniversityRankingQuery200ResponseRankingsShanghaiFromJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingQuery200ResponseRankingsShanghaiFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingQuery200ResponseRankingsShanghai {
  if (json == null) {
    return json
  }
  return {
    rank: GetUniversityRankingQuery200ResponseRankingsShanghaiRankFromJSON(
      json['rank'],
    ),
    details: GetUniversityRankingRank200ResponseInnerDetailsFromJSON(
      json['details'],
    ),
  }
}

export function GetUniversityRankingQuery200ResponseRankingsShanghaiToJSON(
  json: any,
): GetUniversityRankingQuery200ResponseRankingsShanghai {
  return GetUniversityRankingQuery200ResponseRankingsShanghaiToJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingQuery200ResponseRankingsShanghaiToJSONTyped(
  value?: GetUniversityRankingQuery200ResponseRankingsShanghai | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    rank: GetUniversityRankingQuery200ResponseRankingsShanghaiRankToJSON(
      value['rank'],
    ),
    details: GetUniversityRankingRank200ResponseInnerDetailsToJSON(
      value['details'],
    ),
  }
}
