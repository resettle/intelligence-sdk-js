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
import type { GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationRank } from './get-university-ranking-rank200-response-inner-details-one-of-academic-reputation-rank'
import {
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationRankFromJSON,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationRankFromJSONTyped,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationRankToJSON,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationRankToJSONTyped,
} from './get-university-ranking-rank200-response-inner-details-one-of-academic-reputation-rank'

/**
 *
 * @export
 * @interface GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
 */
export interface GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation {
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationRank}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
   */
  rank: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationRank
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
   */
  score?: number | null
}

/**
 * Check if a given object implements the GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation interface.
 */
export function instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation(
  value: object,
): value is GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation {
  if (!('rank' in value) || value['rank'] === undefined) return false
  return true
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation {
  return GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation {
  if (json == null) {
    return json
  }
  return {
    rank: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationRankFromJSON(
      json['rank'],
    ),
    score: json['score'] == null ? undefined : json['score'],
  }
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation {
  return GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSONTyped(
  value?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    rank: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationRankToJSON(
      value['rank'],
    ),
    score: value['score'],
  }
}
