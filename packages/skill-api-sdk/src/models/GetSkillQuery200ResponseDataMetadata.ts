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
 * @interface GetSkillQuery200ResponseDataMetadata
 */
export interface GetSkillQuery200ResponseDataMetadata {
  /**
   *
   * @type {number}
   * @memberof GetSkillQuery200ResponseDataMetadata
   */
  limit: number
  /**
   *
   * @type {string}
   * @memberof GetSkillQuery200ResponseDataMetadata
   */
  orderBy: GetSkillQuery200ResponseDataMetadataOrderByEnum
  /**
   *
   * @type {string}
   * @memberof GetSkillQuery200ResponseDataMetadata
   */
  orderByDirection: GetSkillQuery200ResponseDataMetadataOrderByDirectionEnum
  /**
   *
   * @type {string}
   * @memberof GetSkillQuery200ResponseDataMetadata
   */
  cursor: string | null
  /**
   *
   * @type {string}
   * @memberof GetSkillQuery200ResponseDataMetadata
   */
  nextCursor: string | null
}

/**
 * @export
 */
export const GetSkillQuery200ResponseDataMetadataOrderByEnum = {
  Id: 'id',
} as const
export type GetSkillQuery200ResponseDataMetadataOrderByEnum =
  (typeof GetSkillQuery200ResponseDataMetadataOrderByEnum)[keyof typeof GetSkillQuery200ResponseDataMetadataOrderByEnum]

/**
 * @export
 */
export const GetSkillQuery200ResponseDataMetadataOrderByDirectionEnum = {
  Asc: 'asc',
  Desc: 'desc',
} as const
export type GetSkillQuery200ResponseDataMetadataOrderByDirectionEnum =
  (typeof GetSkillQuery200ResponseDataMetadataOrderByDirectionEnum)[keyof typeof GetSkillQuery200ResponseDataMetadataOrderByDirectionEnum]

/**
 * Check if a given object implements the GetSkillQuery200ResponseDataMetadata interface.
 */
export function instanceOfGetSkillQuery200ResponseDataMetadata(
  value: object,
): value is GetSkillQuery200ResponseDataMetadata {
  if (!('limit' in value) || value['limit'] === undefined) return false
  if (!('orderBy' in value) || value['orderBy'] === undefined) return false
  if (!('orderByDirection' in value) || value['orderByDirection'] === undefined)
    return false
  if (!('cursor' in value) || value['cursor'] === undefined) return false
  if (!('nextCursor' in value) || value['nextCursor'] === undefined)
    return false
  return true
}

export function GetSkillQuery200ResponseDataMetadataFromJSON(
  json: any,
): GetSkillQuery200ResponseDataMetadata {
  return GetSkillQuery200ResponseDataMetadataFromJSONTyped(json, false)
}

export function GetSkillQuery200ResponseDataMetadataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSkillQuery200ResponseDataMetadata {
  if (json == null) {
    return json
  }
  return {
    limit: json['limit'],
    orderBy: json['order_by'],
    orderByDirection: json['order_by_direction'],
    cursor: json['cursor'],
    nextCursor: json['next_cursor'],
  }
}

export function GetSkillQuery200ResponseDataMetadataToJSON(
  json: any,
): GetSkillQuery200ResponseDataMetadata {
  return GetSkillQuery200ResponseDataMetadataToJSONTyped(json, false)
}

export function GetSkillQuery200ResponseDataMetadataToJSONTyped(
  value?: GetSkillQuery200ResponseDataMetadata | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    limit: value['limit'],
    order_by: value['orderBy'],
    order_by_direction: value['orderByDirection'],
    cursor: value['cursor'],
    next_cursor: value['nextCursor'],
  }
}
