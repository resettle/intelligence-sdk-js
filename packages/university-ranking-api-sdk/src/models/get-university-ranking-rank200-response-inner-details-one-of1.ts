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
import type { GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation } from './get-university-ranking-rank200-response-inner-details-one-of-academic-reputation'
import {
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSONTyped,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSONTyped,
} from './get-university-ranking-rank200-response-inner-details-one-of-academic-reputation'

/**
 *
 * @export
 * @interface GetUniversityRankingRank200ResponseInnerDetailsOneOf1
 */
export interface GetUniversityRankingRank200ResponseInnerDetailsOneOf1 {
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf1
   */
  type: GetUniversityRankingRank200ResponseInnerDetailsOneOf1TypeEnum
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf1
   */
  overallScore?: number | null
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf1
   */
  teaching?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf1
   */
  research?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf1
   */
  citations?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf1
   */
  industryIncome?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf1
   */
  internationalOutlook?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
}

/**
 * @export
 */
export const GetUniversityRankingRank200ResponseInnerDetailsOneOf1TypeEnum = {
  Times: 'times',
} as const
export type GetUniversityRankingRank200ResponseInnerDetailsOneOf1TypeEnum =
  (typeof GetUniversityRankingRank200ResponseInnerDetailsOneOf1TypeEnum)[keyof typeof GetUniversityRankingRank200ResponseInnerDetailsOneOf1TypeEnum]

/**
 * Check if a given object implements the GetUniversityRankingRank200ResponseInnerDetailsOneOf1 interface.
 */
export function instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf1(
  value: object,
): value is GetUniversityRankingRank200ResponseInnerDetailsOneOf1 {
  if (!('type' in value) || value['type'] === undefined) return false
  return true
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOf1FromJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerDetailsOneOf1 {
  return GetUniversityRankingRank200ResponseInnerDetailsOneOf1FromJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOf1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingRank200ResponseInnerDetailsOneOf1 {
  if (json == null) {
    return json
  }
  return {
    type: json['type'],
    overallScore:
      json['overall_score'] == null ? undefined : json['overall_score'],
    teaching:
      json['teaching'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['teaching'],
          ),
    research:
      json['research'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['research'],
          ),
    citations:
      json['citations'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['citations'],
          ),
    industryIncome:
      json['industry_income'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['industry_income'],
          ),
    internationalOutlook:
      json['international_outlook'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['international_outlook'],
          ),
  }
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOf1ToJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerDetailsOneOf1 {
  return GetUniversityRankingRank200ResponseInnerDetailsOneOf1ToJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOf1ToJSONTyped(
  value?: GetUniversityRankingRank200ResponseInnerDetailsOneOf1 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    type: value['type'],
    overall_score: value['overallScore'],
    teaching:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['teaching'],
      ),
    research:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['research'],
      ),
    citations:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['citations'],
      ),
    industry_income:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['industryIncome'],
      ),
    international_outlook:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['internationalOutlook'],
      ),
  }
}
