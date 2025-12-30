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
import type { GetOccupationCrosswalk200ResponseDataInner } from './get-occupation-crosswalk200-response-data-inner'
import {
  GetOccupationCrosswalk200ResponseDataInnerFromJSON,
  GetOccupationCrosswalk200ResponseDataInnerFromJSONTyped,
  GetOccupationCrosswalk200ResponseDataInnerToJSON,
  GetOccupationCrosswalk200ResponseDataInnerToJSONTyped,
} from './get-occupation-crosswalk200-response-data-inner'
import type { GetOccupationQuery200ResponseDataMetadata } from './get-occupation-query200-response-data-metadata'
import {
  GetOccupationQuery200ResponseDataMetadataFromJSON,
  GetOccupationQuery200ResponseDataMetadataFromJSONTyped,
  GetOccupationQuery200ResponseDataMetadataToJSON,
  GetOccupationQuery200ResponseDataMetadataToJSONTyped,
} from './get-occupation-query200-response-data-metadata'

/**
 *
 * @export
 * @interface GetOccupationQuery200ResponseData
 */
export interface GetOccupationQuery200ResponseData {
  /**
   *
   * @type {GetOccupationQuery200ResponseDataMetadata}
   * @memberof GetOccupationQuery200ResponseData
   */
  metadata: GetOccupationQuery200ResponseDataMetadata
  /**
   *
   * @type {Array<GetOccupationCrosswalk200ResponseDataInner>}
   * @memberof GetOccupationQuery200ResponseData
   */
  data: Array<GetOccupationCrosswalk200ResponseDataInner>
}

/**
 * Check if a given object implements the GetOccupationQuery200ResponseData interface.
 */
export function instanceOfGetOccupationQuery200ResponseData(
  value: object,
): value is GetOccupationQuery200ResponseData {
  if (!('metadata' in value) || value['metadata'] === undefined) return false
  if (!('data' in value) || value['data'] === undefined) return false
  return true
}

export function GetOccupationQuery200ResponseDataFromJSON(
  json: any,
): GetOccupationQuery200ResponseData {
  return GetOccupationQuery200ResponseDataFromJSONTyped(json, false)
}

export function GetOccupationQuery200ResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetOccupationQuery200ResponseData {
  if (json == null) {
    return json
  }
  return {
    metadata: GetOccupationQuery200ResponseDataMetadataFromJSON(
      json['metadata'],
    ),
    data: (json['data'] as Array<any>).map(
      GetOccupationCrosswalk200ResponseDataInnerFromJSON,
    ),
  }
}

export function GetOccupationQuery200ResponseDataToJSON(
  json: any,
): GetOccupationQuery200ResponseData {
  return GetOccupationQuery200ResponseDataToJSONTyped(json, false)
}

export function GetOccupationQuery200ResponseDataToJSONTyped(
  value?: GetOccupationQuery200ResponseData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    metadata: GetOccupationQuery200ResponseDataMetadataToJSON(
      value['metadata'],
    ),
    data: (value['data'] as Array<any>).map(
      GetOccupationCrosswalk200ResponseDataInnerToJSON,
    ),
  }
}
