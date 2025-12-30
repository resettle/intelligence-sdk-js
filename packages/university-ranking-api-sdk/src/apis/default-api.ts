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

import type {
  GetUniversityRankingQuery200Response,
  GetUniversityRankingRank200ResponseInner,
  GetUniversityRankingSearch200ResponseInner,
} from '../models/index'
import {
  GetUniversityRankingQuery200ResponseFromJSON,
  GetUniversityRankingQuery200ResponseToJSON,
  GetUniversityRankingRank200ResponseInnerFromJSON,
  GetUniversityRankingRank200ResponseInnerToJSON,
  GetUniversityRankingSearch200ResponseInnerFromJSON,
  GetUniversityRankingSearch200ResponseInnerToJSON,
} from '../models/index'
import * as runtime from '../runtime'

export interface GetUniversityRankingQueryRequest {
  universityId: string
}

export interface GetUniversityRankingRankRequest {
  ranking: GetUniversityRankingRankRankingEnum
  value: number
}

export interface GetUniversityRankingSearchRequest {
  q: string
  fuzzy?: string | null
  countryCode?: string
  limit?: number
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
  /**
   * Query university
   */
  async getUniversityRankingQueryRaw(
    requestParameters: GetUniversityRankingQueryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetUniversityRankingQuery200Response>> {
    if (requestParameters['universityId'] == null) {
      throw new runtime.RequiredError(
        'universityId',
        'Required parameter "universityId" was null or undefined when calling getUniversityRankingQuery().',
      )
    }

    const queryParameters: any = {}

    if (requestParameters['universityId'] != null) {
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

      queryParameters['university_id'] = requestParameters['universityId']
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-RapidAPI-Key'] =
        await this.configuration.apiKey('X-RapidAPI-Key') // RapidAuth authentication
    }

    let urlPath = `/university-ranking/query`

    const response = await this.request(
      {
        path: urlPath,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetUniversityRankingQuery200ResponseFromJSON(jsonValue),
    )
  }

  /**
   * Query university
   */
  async getUniversityRankingQuery(
    requestParameters: GetUniversityRankingQueryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetUniversityRankingQuery200Response> {
    const response = await this.getUniversityRankingQueryRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * Retrieve universities details by ranking type and rank
   */
  async getUniversityRankingRankRaw(
    requestParameters: GetUniversityRankingRankRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<
    runtime.ApiResponse<Array<GetUniversityRankingRank200ResponseInner>>
  > {
    if (requestParameters['ranking'] == null) {
      throw new runtime.RequiredError(
        'ranking',
        'Required parameter "ranking" was null or undefined when calling getUniversityRankingRank().',
      )
    }

    if (requestParameters['value'] == null) {
      throw new runtime.RequiredError(
        'value',
        'Required parameter "value" was null or undefined when calling getUniversityRankingRank().',
      )
    }

    const queryParameters: any = {}

    if (requestParameters['ranking'] != null) {
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

      queryParameters['ranking'] = requestParameters['ranking']
    }

    if (requestParameters['value'] != null) {
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

      queryParameters['value'] = requestParameters['value']
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-RapidAPI-Key'] =
        await this.configuration.apiKey('X-RapidAPI-Key') // RapidAuth authentication
    }

    let urlPath = `/university-ranking/rank`

    const response = await this.request(
      {
        path: urlPath,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(GetUniversityRankingRank200ResponseInnerFromJSON),
    )
  }

  /**
   * Retrieve universities details by ranking type and rank
   */
  async getUniversityRankingRank(
    requestParameters: GetUniversityRankingRankRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<GetUniversityRankingRank200ResponseInner>> {
    const response = await this.getUniversityRankingRankRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * Search universities
   */
  async getUniversityRankingSearchRaw(
    requestParameters: GetUniversityRankingSearchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<
    runtime.ApiResponse<Array<GetUniversityRankingSearch200ResponseInner>>
  > {
    if (requestParameters['q'] == null) {
      throw new runtime.RequiredError(
        'q',
        'Required parameter "q" was null or undefined when calling getUniversityRankingSearch().',
      )
    }

    const queryParameters: any = {}

    if (requestParameters['q'] != null) {
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

      queryParameters['q'] = requestParameters['q']
    }

    if (requestParameters['fuzzy'] != null) {
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

      queryParameters['fuzzy'] = requestParameters['fuzzy']
    }

    if (requestParameters['countryCode'] != null) {
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

      queryParameters['country_code'] = requestParameters['countryCode']
    }

    if (requestParameters['limit'] != null) {
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

      queryParameters['limit'] = requestParameters['limit']
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-RapidAPI-Key'] =
        await this.configuration.apiKey('X-RapidAPI-Key') // RapidAuth authentication
    }

    let urlPath = `/university-ranking/search`

    const response = await this.request(
      {
        path: urlPath,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(GetUniversityRankingSearch200ResponseInnerFromJSON),
    )
  }

  /**
   * Search universities
   */
  async getUniversityRankingSearch(
    requestParameters: GetUniversityRankingSearchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<GetUniversityRankingSearch200ResponseInner>> {
    const response = await this.getUniversityRankingSearchRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }
}

/**
 * @export
 */
export const GetUniversityRankingRankRankingEnum = {
  Qs: 'qs',
  Times: 'times',
  Shanghai: 'shanghai',
} as const
export type GetUniversityRankingRankRankingEnum =
  (typeof GetUniversityRankingRankRankingEnum)[keyof typeof GetUniversityRankingRankRankingEnum]
