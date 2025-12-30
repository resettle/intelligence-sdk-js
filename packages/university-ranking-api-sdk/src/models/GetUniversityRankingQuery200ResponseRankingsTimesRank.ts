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
 * The Times rank of the university
 * @export
 * @interface GetUniversityRankingQuery200ResponseRankingsTimesRank
 */
export interface GetUniversityRankingQuery200ResponseRankingsTimesRank {
  /**
   * The rank value if the rank type is exact, the lower limit if the rank type is either close ranged or open ranged
   * @type {number}
   * @memberof GetUniversityRankingQuery200ResponseRankingsTimesRank
   */
  rank: number
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingQuery200ResponseRankingsTimesRank
   */
  rank2?: number | null
  /**
   * The type of the ranking, can be exact (still possible to have multiple universities with the same rank value), close ranged (e.g. rank 101-150 means the university is ranked between 101-150 inclusive), or open-ranged (e.g. rank 1001+ means the university is ranked after 1001 inclusive)
   * @type {string}
   * @memberof GetUniversityRankingQuery200ResponseRankingsTimesRank
   */
  type: GetUniversityRankingQuery200ResponseRankingsTimesRankTypeEnum
}

/**
 * @export
 */
export const GetUniversityRankingQuery200ResponseRankingsTimesRankTypeEnum = {
  Exact: 'exact',
  CloseRanged: 'close-ranged',
  OpenRanged: 'open-ranged',
} as const
export type GetUniversityRankingQuery200ResponseRankingsTimesRankTypeEnum =
  (typeof GetUniversityRankingQuery200ResponseRankingsTimesRankTypeEnum)[keyof typeof GetUniversityRankingQuery200ResponseRankingsTimesRankTypeEnum]

/**
 * Check if a given object implements the GetUniversityRankingQuery200ResponseRankingsTimesRank interface.
 */
export function instanceOfGetUniversityRankingQuery200ResponseRankingsTimesRank(
  value: object,
): value is GetUniversityRankingQuery200ResponseRankingsTimesRank {
  if (!('rank' in value) || value['rank'] === undefined) return false
  if (!('type' in value) || value['type'] === undefined) return false
  return true
}

export function GetUniversityRankingQuery200ResponseRankingsTimesRankFromJSON(
  json: any,
): GetUniversityRankingQuery200ResponseRankingsTimesRank {
  return GetUniversityRankingQuery200ResponseRankingsTimesRankFromJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingQuery200ResponseRankingsTimesRankFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingQuery200ResponseRankingsTimesRank {
  if (json == null) {
    return json
  }
  return {
    rank: json['rank'],
    rank2: json['rank2'] == null ? undefined : json['rank2'],
    type: json['type'],
  }
}

export function GetUniversityRankingQuery200ResponseRankingsTimesRankToJSON(
  json: any,
): GetUniversityRankingQuery200ResponseRankingsTimesRank {
  return GetUniversityRankingQuery200ResponseRankingsTimesRankToJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingQuery200ResponseRankingsTimesRankToJSONTyped(
  value?: GetUniversityRankingQuery200ResponseRankingsTimesRank | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    rank: value['rank'],
    rank2: value['rank2'],
    type: value['type'],
  }
}
