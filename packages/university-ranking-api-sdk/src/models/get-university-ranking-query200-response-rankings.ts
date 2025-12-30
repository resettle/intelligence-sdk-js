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
import type { GetUniversityRankingQuery200ResponseRankingsQs } from './get-university-ranking-query200-response-rankings-qs'
import {
  GetUniversityRankingQuery200ResponseRankingsQsFromJSON,
  GetUniversityRankingQuery200ResponseRankingsQsFromJSONTyped,
  GetUniversityRankingQuery200ResponseRankingsQsToJSON,
  GetUniversityRankingQuery200ResponseRankingsQsToJSONTyped,
} from './get-university-ranking-query200-response-rankings-qs'
import type { GetUniversityRankingQuery200ResponseRankingsShanghai } from './get-university-ranking-query200-response-rankings-shanghai'
import {
  GetUniversityRankingQuery200ResponseRankingsShanghaiFromJSON,
  GetUniversityRankingQuery200ResponseRankingsShanghaiFromJSONTyped,
  GetUniversityRankingQuery200ResponseRankingsShanghaiToJSON,
  GetUniversityRankingQuery200ResponseRankingsShanghaiToJSONTyped,
} from './get-university-ranking-query200-response-rankings-shanghai'
import type { GetUniversityRankingQuery200ResponseRankingsTimes } from './get-university-ranking-query200-response-rankings-times'
import {
  GetUniversityRankingQuery200ResponseRankingsTimesFromJSON,
  GetUniversityRankingQuery200ResponseRankingsTimesFromJSONTyped,
  GetUniversityRankingQuery200ResponseRankingsTimesToJSON,
  GetUniversityRankingQuery200ResponseRankingsTimesToJSONTyped,
} from './get-university-ranking-query200-response-rankings-times'

/**
 *
 * @export
 * @interface GetUniversityRankingQuery200ResponseRankings
 */
export interface GetUniversityRankingQuery200ResponseRankings {
  /**
   *
   * @type {GetUniversityRankingQuery200ResponseRankingsQs}
   * @memberof GetUniversityRankingQuery200ResponseRankings
   */
  qs?: GetUniversityRankingQuery200ResponseRankingsQs
  /**
   *
   * @type {GetUniversityRankingQuery200ResponseRankingsTimes}
   * @memberof GetUniversityRankingQuery200ResponseRankings
   */
  times?: GetUniversityRankingQuery200ResponseRankingsTimes
  /**
   *
   * @type {GetUniversityRankingQuery200ResponseRankingsShanghai}
   * @memberof GetUniversityRankingQuery200ResponseRankings
   */
  shanghai?: GetUniversityRankingQuery200ResponseRankingsShanghai
}

/**
 * Check if a given object implements the GetUniversityRankingQuery200ResponseRankings interface.
 */
export function instanceOfGetUniversityRankingQuery200ResponseRankings(
  value: object,
): value is GetUniversityRankingQuery200ResponseRankings {
  return true
}

export function GetUniversityRankingQuery200ResponseRankingsFromJSON(
  json: any,
): GetUniversityRankingQuery200ResponseRankings {
  return GetUniversityRankingQuery200ResponseRankingsFromJSONTyped(json, false)
}

export function GetUniversityRankingQuery200ResponseRankingsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingQuery200ResponseRankings {
  if (json == null) {
    return json
  }
  return {
    qs:
      json['qs'] == null
        ? undefined
        : GetUniversityRankingQuery200ResponseRankingsQsFromJSON(json['qs']),
    times:
      json['times'] == null
        ? undefined
        : GetUniversityRankingQuery200ResponseRankingsTimesFromJSON(
            json['times'],
          ),
    shanghai:
      json['shanghai'] == null
        ? undefined
        : GetUniversityRankingQuery200ResponseRankingsShanghaiFromJSON(
            json['shanghai'],
          ),
  }
}

export function GetUniversityRankingQuery200ResponseRankingsToJSON(
  json: any,
): GetUniversityRankingQuery200ResponseRankings {
  return GetUniversityRankingQuery200ResponseRankingsToJSONTyped(json, false)
}

export function GetUniversityRankingQuery200ResponseRankingsToJSONTyped(
  value?: GetUniversityRankingQuery200ResponseRankings | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    qs: GetUniversityRankingQuery200ResponseRankingsQsToJSON(value['qs']),
    times: GetUniversityRankingQuery200ResponseRankingsTimesToJSON(
      value['times'],
    ),
    shanghai: GetUniversityRankingQuery200ResponseRankingsShanghaiToJSON(
      value['shanghai'],
    ),
  }
}
