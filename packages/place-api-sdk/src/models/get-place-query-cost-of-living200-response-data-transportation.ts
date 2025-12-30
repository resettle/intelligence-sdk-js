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
 * @interface GetPlaceQueryCostOfLiving200ResponseDataTransportation
 */
export interface GetPlaceQueryCostOfLiving200ResponseDataTransportation {
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataTransportation
   */
  oneWayTicket: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataTransportation
   */
  monthlyPass: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataTransportation
   */
  taxiStart: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataTransportation
   */
  taxi1Mile: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataTransportation
   */
  taxi1HourWaiting: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataTransportation
   */
  gasoline: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataTransportation
   */
  compactCar: number | null
  /**
   *
   * @type {number}
   * @memberof GetPlaceQueryCostOfLiving200ResponseDataTransportation
   */
  midCar: number | null
}

/**
 * Check if a given object implements the GetPlaceQueryCostOfLiving200ResponseDataTransportation interface.
 */
export function instanceOfGetPlaceQueryCostOfLiving200ResponseDataTransportation(
  value: object,
): value is GetPlaceQueryCostOfLiving200ResponseDataTransportation {
  if (!('oneWayTicket' in value) || value['oneWayTicket'] === undefined)
    return false
  if (!('monthlyPass' in value) || value['monthlyPass'] === undefined)
    return false
  if (!('taxiStart' in value) || value['taxiStart'] === undefined) return false
  if (!('taxi1Mile' in value) || value['taxi1Mile'] === undefined) return false
  if (!('taxi1HourWaiting' in value) || value['taxi1HourWaiting'] === undefined)
    return false
  if (!('gasoline' in value) || value['gasoline'] === undefined) return false
  if (!('compactCar' in value) || value['compactCar'] === undefined)
    return false
  if (!('midCar' in value) || value['midCar'] === undefined) return false
  return true
}

export function GetPlaceQueryCostOfLiving200ResponseDataTransportationFromJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataTransportation {
  return GetPlaceQueryCostOfLiving200ResponseDataTransportationFromJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataTransportationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlaceQueryCostOfLiving200ResponseDataTransportation {
  if (json == null) {
    return json
  }
  return {
    oneWayTicket: json['one_way_ticket'],
    monthlyPass: json['monthly_pass'],
    taxiStart: json['taxi_start'],
    taxi1Mile: json['taxi_1_mile'],
    taxi1HourWaiting: json['taxi_1_hour_waiting'],
    gasoline: json['gasoline'],
    compactCar: json['compact_car'],
    midCar: json['mid_car'],
  }
}

export function GetPlaceQueryCostOfLiving200ResponseDataTransportationToJSON(
  json: any,
): GetPlaceQueryCostOfLiving200ResponseDataTransportation {
  return GetPlaceQueryCostOfLiving200ResponseDataTransportationToJSONTyped(
    json,
    false,
  )
}

export function GetPlaceQueryCostOfLiving200ResponseDataTransportationToJSONTyped(
  value?: GetPlaceQueryCostOfLiving200ResponseDataTransportation | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    one_way_ticket: value['oneWayTicket'],
    monthly_pass: value['monthlyPass'],
    taxi_start: value['taxiStart'],
    taxi_1_mile: value['taxi1Mile'],
    taxi_1_hour_waiting: value['taxi1HourWaiting'],
    gasoline: value['gasoline'],
    compact_car: value['compactCar'],
    mid_car: value['midCar'],
  }
}
