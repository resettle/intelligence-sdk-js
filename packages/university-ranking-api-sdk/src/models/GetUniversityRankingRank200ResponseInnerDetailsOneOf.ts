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
import type { GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation } from './GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation'
import {
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSONTyped,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSONTyped,
} from './GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation'

/**
 *
 * @export
 * @interface GetUniversityRankingRank200ResponseInnerDetailsOneOf
 */
export interface GetUniversityRankingRank200ResponseInnerDetailsOneOf {
  /**
   *
   * @type {string}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  type: GetUniversityRankingRank200ResponseInnerDetailsOneOfTypeEnum
  /**
   *
   * @type {number}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  overallScore?: number | null
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  academicReputation?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  employerReputation?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  facultyStudent?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  citationsPerFaculty?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  internationalFaculty?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  internationalStudents?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  internationalStudentsDiversity?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  internationalResearchNetwork?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  employmentOutcomes?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
  /**
   *
   * @type {GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation}
   * @memberof GetUniversityRankingRank200ResponseInnerDetailsOneOf
   */
  sustainability?: GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputation
}

/**
 * @export
 */
export const GetUniversityRankingRank200ResponseInnerDetailsOneOfTypeEnum = {
  Qs: 'qs',
} as const
export type GetUniversityRankingRank200ResponseInnerDetailsOneOfTypeEnum =
  (typeof GetUniversityRankingRank200ResponseInnerDetailsOneOfTypeEnum)[keyof typeof GetUniversityRankingRank200ResponseInnerDetailsOneOfTypeEnum]

/**
 * Check if a given object implements the GetUniversityRankingRank200ResponseInnerDetailsOneOf interface.
 */
export function instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf(
  value: object,
): value is GetUniversityRankingRank200ResponseInnerDetailsOneOf {
  if (!('type' in value) || value['type'] === undefined) return false
  return true
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOfFromJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerDetailsOneOf {
  return GetUniversityRankingRank200ResponseInnerDetailsOneOfFromJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingRank200ResponseInnerDetailsOneOf {
  if (json == null) {
    return json
  }
  return {
    type: json['type'],
    overallScore:
      json['overall_score'] == null ? undefined : json['overall_score'],
    academicReputation:
      json['academic_reputation'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['academic_reputation'],
          ),
    employerReputation:
      json['employer_reputation'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['employer_reputation'],
          ),
    facultyStudent:
      json['faculty_student'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['faculty_student'],
          ),
    citationsPerFaculty:
      json['citations_per_faculty'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['citations_per_faculty'],
          ),
    internationalFaculty:
      json['international_faculty'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['international_faculty'],
          ),
    internationalStudents:
      json['international_students'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['international_students'],
          ),
    internationalStudentsDiversity:
      json['international_students_diversity'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['international_students_diversity'],
          ),
    internationalResearchNetwork:
      json['international_research_network'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['international_research_network'],
          ),
    employmentOutcomes:
      json['employment_outcomes'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['employment_outcomes'],
          ),
    sustainability:
      json['sustainability'] == null
        ? undefined
        : GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationFromJSON(
            json['sustainability'],
          ),
  }
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOfToJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerDetailsOneOf {
  return GetUniversityRankingRank200ResponseInnerDetailsOneOfToJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingRank200ResponseInnerDetailsOneOfToJSONTyped(
  value?: GetUniversityRankingRank200ResponseInnerDetailsOneOf | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    type: value['type'],
    overall_score: value['overallScore'],
    academic_reputation:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['academicReputation'],
      ),
    employer_reputation:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['employerReputation'],
      ),
    faculty_student:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['facultyStudent'],
      ),
    citations_per_faculty:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['citationsPerFaculty'],
      ),
    international_faculty:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['internationalFaculty'],
      ),
    international_students:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['internationalStudents'],
      ),
    international_students_diversity:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['internationalStudentsDiversity'],
      ),
    international_research_network:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['internationalResearchNetwork'],
      ),
    employment_outcomes:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['employmentOutcomes'],
      ),
    sustainability:
      GetUniversityRankingRank200ResponseInnerDetailsOneOfAcademicReputationToJSON(
        value['sustainability'],
      ),
  }
}
