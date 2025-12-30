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

import type { GetSkillChanges200ResponseDataInnerDetailsOneOf } from './GetSkillChanges200ResponseDataInnerDetailsOneOf'
import {
  GetSkillChanges200ResponseDataInnerDetailsOneOfFromJSON,
  GetSkillChanges200ResponseDataInnerDetailsOneOfFromJSONTyped,
  GetSkillChanges200ResponseDataInnerDetailsOneOfToJSON,
  instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf,
} from './GetSkillChanges200ResponseDataInnerDetailsOneOf'
import type { GetSkillChanges200ResponseDataInnerDetailsOneOf1 } from './GetSkillChanges200ResponseDataInnerDetailsOneOf1'
import {
  GetSkillChanges200ResponseDataInnerDetailsOneOf1FromJSON,
  GetSkillChanges200ResponseDataInnerDetailsOneOf1FromJSONTyped,
  GetSkillChanges200ResponseDataInnerDetailsOneOf1ToJSON,
  instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf1,
} from './GetSkillChanges200ResponseDataInnerDetailsOneOf1'
import type { GetSkillChanges200ResponseDataInnerDetailsOneOf2 } from './GetSkillChanges200ResponseDataInnerDetailsOneOf2'
import {
  GetSkillChanges200ResponseDataInnerDetailsOneOf2FromJSON,
  GetSkillChanges200ResponseDataInnerDetailsOneOf2FromJSONTyped,
  GetSkillChanges200ResponseDataInnerDetailsOneOf2ToJSON,
  instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf2,
} from './GetSkillChanges200ResponseDataInnerDetailsOneOf2'
import type { GetSkillChanges200ResponseDataInnerDetailsOneOf3 } from './GetSkillChanges200ResponseDataInnerDetailsOneOf3'
import {
  GetSkillChanges200ResponseDataInnerDetailsOneOf3FromJSON,
  GetSkillChanges200ResponseDataInnerDetailsOneOf3FromJSONTyped,
  GetSkillChanges200ResponseDataInnerDetailsOneOf3ToJSON,
  instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf3,
} from './GetSkillChanges200ResponseDataInnerDetailsOneOf3'

/**
 * @type GetSkillChanges200ResponseDataInnerDetails
 * The details of the skill change, its content depends on the type of the skill change
 * @export
 */
export type GetSkillChanges200ResponseDataInnerDetails =
  | GetSkillChanges200ResponseDataInnerDetailsOneOf
  | GetSkillChanges200ResponseDataInnerDetailsOneOf1
  | GetSkillChanges200ResponseDataInnerDetailsOneOf2
  | GetSkillChanges200ResponseDataInnerDetailsOneOf3

export function GetSkillChanges200ResponseDataInnerDetailsFromJSON(
  json: any,
): GetSkillChanges200ResponseDataInnerDetails {
  return GetSkillChanges200ResponseDataInnerDetailsFromJSONTyped(json, false)
}

export function GetSkillChanges200ResponseDataInnerDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillChanges200ResponseDataInnerDetails {
  if (json == null) {
    return json
  }
  if (typeof json !== 'object') {
    return json
  }
  if (instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf(json)) {
    return GetSkillChanges200ResponseDataInnerDetailsOneOfFromJSONTyped(
      json,
      true,
    )
  }
  if (instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf1(json)) {
    return GetSkillChanges200ResponseDataInnerDetailsOneOf1FromJSONTyped(
      json,
      true,
    )
  }
  if (instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf2(json)) {
    return GetSkillChanges200ResponseDataInnerDetailsOneOf2FromJSONTyped(
      json,
      true,
    )
  }
  if (instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf3(json)) {
    return GetSkillChanges200ResponseDataInnerDetailsOneOf3FromJSONTyped(
      json,
      true,
    )
  }
  return {} as any
}

export function GetSkillChanges200ResponseDataInnerDetailsToJSON(
  json: any,
): any {
  return GetSkillChanges200ResponseDataInnerDetailsToJSONTyped(json, false)
}

export function GetSkillChanges200ResponseDataInnerDetailsToJSONTyped(
  value?: GetSkillChanges200ResponseDataInnerDetails | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }
  if (typeof value !== 'object') {
    return value
  }
  if (instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf(value)) {
    return GetSkillChanges200ResponseDataInnerDetailsOneOfToJSON(
      value as GetSkillChanges200ResponseDataInnerDetailsOneOf,
    )
  }
  if (instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf1(value)) {
    return GetSkillChanges200ResponseDataInnerDetailsOneOf1ToJSON(
      value as GetSkillChanges200ResponseDataInnerDetailsOneOf1,
    )
  }
  if (instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf2(value)) {
    return GetSkillChanges200ResponseDataInnerDetailsOneOf2ToJSON(
      value as GetSkillChanges200ResponseDataInnerDetailsOneOf2,
    )
  }
  if (instanceOfGetSkillChanges200ResponseDataInnerDetailsOneOf3(value)) {
    return GetSkillChanges200ResponseDataInnerDetailsOneOf3ToJSON(
      value as GetSkillChanges200ResponseDataInnerDetailsOneOf3,
    )
  }
  return {}
}
