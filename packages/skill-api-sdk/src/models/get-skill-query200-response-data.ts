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
import type { GetSkillQuery200ResponseDataDataInner } from './get-skill-query200-response-data-data-inner'
import {
  GetSkillQuery200ResponseDataDataInnerFromJSON,
  GetSkillQuery200ResponseDataDataInnerFromJSONTyped,
  GetSkillQuery200ResponseDataDataInnerToJSON,
  GetSkillQuery200ResponseDataDataInnerToJSONTyped,
} from './get-skill-query200-response-data-data-inner'
import type { GetSkillQuery200ResponseDataMetadata } from './get-skill-query200-response-data-metadata'
import {
  GetSkillQuery200ResponseDataMetadataFromJSON,
  GetSkillQuery200ResponseDataMetadataFromJSONTyped,
  GetSkillQuery200ResponseDataMetadataToJSON,
  GetSkillQuery200ResponseDataMetadataToJSONTyped,
} from './get-skill-query200-response-data-metadata'

/**
 *
 * @export
 * @interface GetSkillQuery200ResponseData
 */
export interface GetSkillQuery200ResponseData {
  /**
   *
   * @type {GetSkillQuery200ResponseDataMetadata}
   * @memberof GetSkillQuery200ResponseData
   */
  metadata: GetSkillQuery200ResponseDataMetadata
  /**
   *
   * @type {Array<GetSkillQuery200ResponseDataDataInner>}
   * @memberof GetSkillQuery200ResponseData
   */
  data: Array<GetSkillQuery200ResponseDataDataInner>
}

/**
 * Check if a given object implements the GetSkillQuery200ResponseData interface.
 */
export function instanceOfGetSkillQuery200ResponseData(
  value: object,
): value is GetSkillQuery200ResponseData {
  if (!('metadata' in value) || value['metadata'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetSkillQuery200ResponseDataFromJSON(
  json: any,
): GetSkillQuery200ResponseData {
  return GetSkillQuery200ResponseDataFromJSONTyped(json, false)
}

export function GetSkillQuery200ResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillQuery200ResponseData {
  if (json == null) {
    return json
  }
  return {
    metadata: GetSkillQuery200ResponseDataMetadataFromJSON(json['metadata']),
    data: (json['data'] as Array<any>).map(
      GetSkillQuery200ResponseDataDataInnerFromJSON,
    ),
  }
}

export function GetSkillQuery200ResponseDataToJSON(
  json: any,
): GetSkillQuery200ResponseData {
  return GetSkillQuery200ResponseDataToJSONTyped(json, false)
}

export function GetSkillQuery200ResponseDataToJSONTyped(
  value?: GetSkillQuery200ResponseData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    metadata: GetSkillQuery200ResponseDataMetadataToJSON(value['metadata']),
    data: (value['data'] as Array<any>).map(
      GetSkillQuery200ResponseDataDataInnerToJSON,
    ),
  }
}
