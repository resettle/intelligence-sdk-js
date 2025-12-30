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
 * @interface GetUniversityRankingRank200ResponseInnerDetailsOneOf2
 */
export interface GetUniversityRankingRank200ResponseInnerDetailsOneOf2 {
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf2
   */
  type: GetUniversityRankingRank200ResponseInnerDetailsOneOf2TypeEnum
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf2
   */
  overallScore?: number | null
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf2
   */
  alumniScore?: number | null
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf2
   */
  awardScore?: number | null
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf2
   */
  hiciScore?: number | null
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf2
   */
  nnsScore?: number | null
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf2
   */
  pubScore?: number | null
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf2
   */
  pcpScore?: number | null
}

/**
 * @export
 */
export const GetUniversityRankingRank200ResponseInnerDetailsOneOf2TypeEnum = {
  Shanghai: 'shanghai',
} as const
export type GetUniversityRankingRank200ResponseInnerDetailsOneOf2TypeEnum =
  (typeof GetUniversityRankingRank200ResponseInnerDetailsOneOf2TypeEnum)[keyof typeof GetUniversityRankingRank200ResponseInnerDetailsOneOf2TypeEnum]

/**
 * Check if a given object implements the GetUniversityRankingRank200ResponseInnerDetailsOneOf2 interface.
 */
export function instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf2(
  value: object,
): value is GetUniversityRankingRank200ResponseInnerDetailsOneOf2 {
  if (!('type' in value) || value['type'] === undefined) return false
  return true
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOf2FromJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerDetailsOneOf2 {
  return GetUniversityRankingRank200ResponseInnerDetailsOneOf2FromJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOf2FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingRank200ResponseInnerDetailsOneOf2 {
  if (json == null) {
    return json
  }
  return {
    type: json['type'],
    overallScore:
      json['overall_score'] == null ? undefined : json['overall_score'],
    alumniScore:
      json['alumni_score'] == null ? undefined : json['alumni_score'],
    awardScore: json['award_score'] == null ? undefined : json['award_score'],
    hiciScore: json['hici_score'] == null ? undefined : json['hici_score'],
    nnsScore: json['nns_score'] == null ? undefined : json['nns_score'],
    pubScore: json['pub_score'] == null ? undefined : json['pub_score'],
    pcpScore: json['pcp_score'] == null ? undefined : json['pcp_score'],
  }
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOf2ToJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerDetailsOneOf2 {
  return GetUniversityRankingRank200ResponseInnerDetailsOneOf2ToJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOf2ToJSONTyped(
  value?: GetUniversityRankingRank200ResponseInnerDetailsOneOf2 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    type: value['type'],
    overall_score: value['overallScore'],
    alumni_score: value['alumniScore'],
    award_score: value['awardScore'],
    hici_score: value['hiciScore'],
    nns_score: value['nnsScore'],
    pub_score: value['pubScore'],
    pcp_score: value['pcpScore'],
  }
}
