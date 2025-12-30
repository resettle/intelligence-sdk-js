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

import type { GetUniversityRankingRank200ResponseInnerDetailsOneOf } from './GetUniversityRankingRank200ResponseInnerDetailsOneOf'
import {
  GetUniversityRankingRank200ResponseInnerDetailsOneOfFromJSON,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfFromJSONTyped,
  GetUniversityRankingRank200ResponseInnerDetailsOneOfToJSON,
  instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf,
} from './GetUniversityRankingRank200ResponseInnerDetailsOneOf'
import type { GetUniversityRankingRank200ResponseInnerDetailsOneOf1 } from './GetUniversityRankingRank200ResponseInnerDetailsOneOf1'
import {
  GetUniversityRankingRank200ResponseInnerDetailsOneOf1FromJSON,
  GetUniversityRankingRank200ResponseInnerDetailsOneOf1FromJSONTyped,
  GetUniversityRankingRank200ResponseInnerDetailsOneOf1ToJSON,
  instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf1,
} from './GetUniversityRankingRank200ResponseInnerDetailsOneOf1'
import type { GetUniversityRankingRank200ResponseInnerDetailsOneOf2 } from './GetUniversityRankingRank200ResponseInnerDetailsOneOf2'
import {
  GetUniversityRankingRank200ResponseInnerDetailsOneOf2FromJSON,
  GetUniversityRankingRank200ResponseInnerDetailsOneOf2FromJSONTyped,
  GetUniversityRankingRank200ResponseInnerDetailsOneOf2ToJSON,
  instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf2,
} from './GetUniversityRankingRank200ResponseInnerDetailsOneOf2'

/**
 * @type GetUniversityRankingRank200ResponseInnerDetails
 * The scoring and ranking details
 * @export
 */
export type GetUniversityRankingRank200ResponseInnerDetails =
  | GetUniversityRankingRank200ResponseInnerDetailsOneOf
  | GetUniversityRankingRank200ResponseInnerDetailsOneOf1
  | GetUniversityRankingRank200ResponseInnerDetailsOneOf2

export function GetUniversityRankingRank200ResponseInnerDetailsFromJSON(
  json: any,
): GetUniversityRankingRank200ResponseInnerDetails {
  return GetUniversityRankingRank200ResponseInnerDetailsFromJSONTyped(
    json,
    false,
  )
}

export function GetUniversityRankingRank200ResponseInnerDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUniversityRankingRank200ResponseInnerDetails {
  if (json == null) {
    return json
  }
  if (typeof json !== 'object') {
    return json
  }
  if (instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf(json)) {
    return GetUniversityRankingRank200ResponseInnerDetailsOneOfFromJSONTyped(
      json,
      true,
    )
  }
  if (instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf1(json)) {
    return GetUniversityRankingRank200ResponseInnerDetailsOneOf1FromJSONTyped(
      json,
      true,
    )
  }
  if (instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf2(json)) {
    return GetUniversityRankingRank200ResponseInnerDetailsOneOf2FromJSONTyped(
      json,
      true,
    )
  }
  return {} as any
}

export function GetUniversityRankingRank200ResponseInnerDetailsToJSON(
  json: any,
): any {
  return GetUniversityRankingRank200ResponseInnerDetailsToJSONTyped(json, false)
}

export function GetUniversityRankingRank200ResponseInnerDetailsToJSONTyped(
  value?: GetUniversityRankingRank200ResponseInnerDetails | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }
  if (typeof value !== 'object') {
    return value
  }
  if (instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf(value)) {
    return GetUniversityRankingRank200ResponseInnerDetailsOneOfToJSON(
      value as GetUniversityRankingRank200ResponseInnerDetailsOneOf,
    )
  }
  if (instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf1(value)) {
    return GetUniversityRankingRank200ResponseInnerDetailsOneOf1ToJSON(
      value as GetUniversityRankingRank200ResponseInnerDetailsOneOf1,
    )
  }
  if (instanceOfGetUniversityRankingRank200ResponseInnerDetailsOneOf2(value)) {
    return GetUniversityRankingRank200ResponseInnerDetailsOneOf2ToJSON(
      value as GetUniversityRankingRank200ResponseInnerDetailsOneOf2,
    )
  }
  return {}
}
