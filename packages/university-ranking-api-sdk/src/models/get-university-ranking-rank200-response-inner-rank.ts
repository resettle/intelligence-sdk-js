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
 * The rank of the university
 * @export
 * @interface GetUniversityRankingRank200ResponseInnerRank
 */
export interface GetUniversityRankingRank200ResponseInnerRank {
  /**
   * The rank value if the rank type is exact, the lower limit if the rank type is either close ranged or open ranged
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerRank
   */
  rank: number
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerRank
   */
  rank2?: number | null
  /**
   * The type of the ranking, can be exact (still possible to have multiple universities with the same rank value), close ranged (e.g. rank 101-150 means the university is ranked between 101-150 inclusive), or open-ranged (e.g. rank 1001+ means the university is ranked after 1001 inclusive)
   * @type {string}
   * @memberof GetUniversityRankingRank200ResponseInnerRank
   */
  type: GetUniversityRankingRank200ResponseInnerRankTypeEnum
}

/**
 * @export
 */
export const GetUniversityRankingRank200ResponseInnerRankTypeEnum = {
  Exact: 'exact',
  CloseRanged: 'close-ranged',
  OpenRanged: 'open-ranged',
} as const
export type GetUniversityRankingRank200ResponseInnerRankTypeEnum =
  (typeof GetUniversityRankingRank200ResponseInnerRankTypeEnum)[keyof typeof GetUniversityRankingRank200ResponseInnerRankTypeEnum]

/**
 * Check if a given object implements the GetUniversityRankingRank200ResponseInnerRank interface.
 */
export function instanceOfGetUniversityRankingRank200ResponseInnerRank(
  value: object,
): value is GetUniversityRankingRank200ResponseInnerRank {
  if (!('rank' in value) || value['rank'] === undefined) return false
  if (!('type' in value) || value['type'] === undefined) return false
  return true
}

export function GetUniversityRankingRank200ResponseInnerRankFromJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerRank {
  return GetUniversityRankingRank200ResponseInnerRankFromJSONTyped(json, false)
}

export function GetUniversityRankingRank200ResponseInnerRankFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingRank200ResponseInnerRank {
  if (json == null) {
    return json
  }
  return {
    rank: json['rank'],
    rank2: json['rank2'] == null ? undefined : json['rank2'],
    type: json['type'],
  }
}

export function GetUniversityRankingRank200ResponseInnerRankToJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerRank {
  return GetUniversityRankingRank200ResponseInnerRankToJSONTyped(json, false)
}

export function GetUniversityRankingRank200ResponseInnerRankToJSONTyped(
  value?: GetUniversityRankingRank200ResponseInnerRank | null,
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
