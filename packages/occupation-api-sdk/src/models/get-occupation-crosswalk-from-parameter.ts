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
import type { GetOccupationCrosswalkFromParameterAnyOf } from './get-occupation-crosswalk-from-parameter-any-of'
import {
  GetOccupationCrosswalkFromParameterAnyOfFromJSON,
  GetOccupationCrosswalkFromParameterAnyOfFromJSONTyped,
  GetOccupationCrosswalkFromParameterAnyOfToJSON,
  GetOccupationCrosswalkFromParameterAnyOfToJSONTyped,
} from './get-occupation-crosswalk-from-parameter-any-of'

/**
 *
 * @export
 * @interface GetOccupationCrosswalkFromParameter
 */
export interface GetOccupationCrosswalkFromParameter {
  /**
   * The occupation classification
   * @type {string}
   * @memberof GetOccupationCrosswalkFromParameter
   */
  classification: GetOccupationCrosswalkFromParameterClassificationEnum
  /**
   * The code of the occupation under the classification
   * @type {string}
   * @memberof GetOccupationCrosswalkFromParameter
   */
  code: string
}

/**
 * @export
 */
export const GetOccupationCrosswalkFromParameterClassificationEnum = {
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
export type GetOccupationCrosswalkFromParameterClassificationEnum =
  (typeof GetOccupationCrosswalkFromParameterClassificationEnum)[keyof typeof GetOccupationCrosswalkFromParameterClassificationEnum]

/**
 * Check if a given object implements the GetOccupationCrosswalkFromParameter interface.
 */
export function instanceOfGetOccupationCrosswalkFromParameter(
  value: object,
): value is GetOccupationCrosswalkFromParameter {
  if (!('classification' in value) || value['classification'] === undefined)
    return false
  if (!('code' in value) || value['code'] === undefined) return false
  return true
}

export function GetOccupationCrosswalkFromParameterFromJSON(
  json: any,
): GetOccupationCrosswalkFromParameter {
  return GetOccupationCrosswalkFromParameterFromJSONTyped(json, false)
}

export function GetOccupationCrosswalkFromParameterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetOccupationCrosswalkFromParameter {
  if (json == null) {
    return json
  }
  return {
    classification: json['classification'],
    code: json['code'],
  }
}

export function GetOccupationCrosswalkFromParameterToJSON(
  json: any,
): GetOccupationCrosswalkFromParameter {
  return GetOccupationCrosswalkFromParameterToJSONTyped(json, false)
}

export function GetOccupationCrosswalkFromParameterToJSONTyped(
  value?: GetOccupationCrosswalkFromParameter | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    classification: value['classification'],
    code: value['code'],
  }
}
