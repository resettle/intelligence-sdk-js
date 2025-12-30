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
 * @interface GetOccupationCrosswalk200ResponseDataInner
 */
export interface GetOccupationCrosswalk200ResponseDataInner {
  /**
   * The id of the occupation code in format {classification}-{code}
   * @type {string}
   * @memberof GetOccupationCrosswalk200ResponseDataInner
   */
  id: string
  /**
   * The occupation classification
   * @type {string}
   * @memberof GetOccupationCrosswalk200ResponseDataInner
   */
  classification: GetOccupationCrosswalk200ResponseDataInnerClassificationEnum
  /**
   * The code of the occupation under the classification
   * @type {string}
   * @memberof GetOccupationCrosswalk200ResponseDataInner
   */
  code: string
  /**
   * The name of the occupation
   * @type {string}
   * @memberof GetOccupationCrosswalk200ResponseDataInner
   */
  label: string
}

/**
 * @export
 */
export const GetOccupationCrosswalk200ResponseDataInnerClassificationEnum = {
  Isco2008: 'isco-2008',
  Ussoc2018: 'ussoc-2018',
  Uksoc2020: 'uksoc-2020',
  Nol2024: 'nol-2024',
  Noc2021: 'noc-2021',
  Osca2024: 'osca-2024',
  Ussoc2010: 'ussoc-2010',
  Noc2016: 'noc-2016',
  Anzsco2013: 'anzsco-2013',
  Anzsco2022: 'anzsco-2022',
} as const
export type GetOccupationCrosswalk200ResponseDataInnerClassificationEnum =
  (typeof GetOccupationCrosswalk200ResponseDataInnerClassificationEnum)[keyof typeof GetOccupationCrosswalk200ResponseDataInnerClassificationEnum]

/**
 * Check if a given object implements the GetOccupationCrosswalk200ResponseDataInner interface.
 */
export function instanceOfGetOccupationCrosswalk200ResponseDataInner(
  value: object,
): value is GetOccupationCrosswalk200ResponseDataInner {
  if (!('id' in value) || value['id'] === undefined) return false
  if (!('classification' in value) || value['classification'] === undefined)
    return false
  if (!('code' in value) || value['code'] === undefined) return false
  if (!('label' in value) || value['label'] === undefined) return false
  return true
}

export function GetOccupationCrosswalk200ResponseDataInnerFromJSON(
  json: any,
): GetOccupationCrosswalk200ResponseDataInner {
  return GetOccupationCrosswalk200ResponseDataInnerFromJSONTyped(json, false)
}

export function GetOccupationCrosswalk200ResponseDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetOccupationCrosswalk200ResponseDataInner {
  if (json == null) {
    return json
  }
  return {
    id: json['id'],
    classification: json['classification'],
    code: json['code'],
    label: json['label'],
  }
}

export function GetOccupationCrosswalk200ResponseDataInnerToJSON(
  json: any,
): GetOccupationCrosswalk200ResponseDataInner {
  return GetOccupationCrosswalk200ResponseDataInnerToJSONTyped(json, false)
}

export function GetOccupationCrosswalk200ResponseDataInnerToJSONTyped(
  value?: GetOccupationCrosswalk200ResponseDataInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    id: value['id'],
    classification: value['classification'],
    code: value['code'],
    label: value['label'],
  }
}
