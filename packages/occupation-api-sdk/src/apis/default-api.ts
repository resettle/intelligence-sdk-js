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
  GetOccupationCrosswalk200Response,
  GetOccupationCrosswalkFromParameter,
  GetOccupationQuery200Response,
} from '../models/index'
import {
  GetOccupationCrosswalk200ResponseFromJSON,
  GetOccupationCrosswalk200ResponseToJSON,
  GetOccupationCrosswalkFromParameterFromJSON,
  GetOccupationCrosswalkFromParameterToJSON,
  GetOccupationQuery200ResponseFromJSON,
  GetOccupationQuery200ResponseToJSON,
} from '../models/index'
import * as runtime from '../runtime'

export interface GetOccupationCrosswalkRequest {
  from: GetOccupationCrosswalkFromParameter
  to: GetOccupationCrosswalkToEnum
}

export interface GetOccupationQueryRequest {
  classification: GetOccupationQueryClassificationEnum
  code?: string
  cursor?: string | null
  limit?: number
}

export interface GetOccupationSearchRequest {
  q: string
  classification?: GetOccupationSearchClassificationEnum
  fuzzy?: string | null
  limit?: number
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
  /**
   * Crosswalk occupation codes between classifications
   */
  async getOccupationCrosswalkRaw(
    requestParameters: GetOccupationCrosswalkRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetOccupationCrosswalk200Response>> {
    if (requestParameters['from'] == null) {
      throw new runtime.RequiredError(
        'from',
        'Required parameter "from" was null or undefined when calling getOccupationCrosswalk().',
      )
    }

    if (requestParameters['to'] == null) {
      throw new runtime.RequiredError(
        'to',
        'Required parameter "to" was null or undefined when calling getOccupationCrosswalk().',
      )
    }

    const queryParameters: any = {}

    if (requestParameters['from'] != null) {
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

      queryParameters['from'] = requestParameters['from']
    }

    if (requestParameters['to'] != null) {
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

      queryParameters['to'] = requestParameters['to']
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-RapidAPI-Key'] =
        await this.configuration.apiKey('X-RapidAPI-Key') // RapidAuth authentication
    }

    let urlPath = `/occupation/crosswalk`

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
      GetOccupationCrosswalk200ResponseFromJSON(jsonValue),
    )
  }

  /**
   * Crosswalk occupation codes between classifications
   */
  async getOccupationCrosswalk(
    requestParameters: GetOccupationCrosswalkRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetOccupationCrosswalk200Response> {
    const response = await this.getOccupationCrosswalkRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * Query occupation codes
   */
  async getOccupationQueryRaw(
    requestParameters: GetOccupationQueryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetOccupationQuery200Response>> {
    if (requestParameters['classification'] == null) {
      throw new runtime.RequiredError(
        'classification',
        'Required parameter "classification" was null or undefined when calling getOccupationQuery().',
      )
    }

    const queryParameters: any = {}

    if (requestParameters['classification'] != null) {
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

      queryParameters['classification'] = requestParameters['classification']
    }

    if (requestParameters['code'] != null) {
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

      queryParameters['code'] = requestParameters['code']
    }

    if (requestParameters['cursor'] != null) {
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

      queryParameters['cursor'] = requestParameters['cursor']
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

    let urlPath = `/occupation/query`

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
      GetOccupationQuery200ResponseFromJSON(jsonValue),
    )
  }

  /**
   * Query occupation codes
   */
  async getOccupationQuery(
    requestParameters: GetOccupationQueryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetOccupationQuery200Response> {
    const response = await this.getOccupationQueryRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * Search occupation codes
   */
  async getOccupationSearchRaw(
    requestParameters: GetOccupationSearchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetOccupationCrosswalk200Response>> {
    if (requestParameters['q'] == null) {
      throw new runtime.RequiredError(
        'q',
        'Required parameter "q" was null or undefined when calling getOccupationSearch().',
      )
    }

    const queryParameters: any = {}

    if (requestParameters['classification'] != null) {
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

      queryParameters['classification'] = requestParameters['classification']
    }

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

    let urlPath = `/occupation/search`

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
      GetOccupationCrosswalk200ResponseFromJSON(jsonValue),
    )
  }

  /**
   * Search occupation codes
   */
  async getOccupationSearch(
    requestParameters: GetOccupationSearchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetOccupationCrosswalk200Response> {
    const response = await this.getOccupationSearchRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }
}

/**
 * @export
 */
export const GetOccupationCrosswalkToEnum = {
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
export type GetOccupationCrosswalkToEnum =
  (typeof GetOccupationCrosswalkToEnum)[keyof typeof GetOccupationCrosswalkToEnum]
/**
 * @export
 */
export const GetOccupationQueryClassificationEnum = {
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
export type GetOccupationQueryClassificationEnum =
  (typeof GetOccupationQueryClassificationEnum)[keyof typeof GetOccupationQueryClassificationEnum]
/**
 * @export
 */
export const GetOccupationSearchClassificationEnum = {
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
export type GetOccupationSearchClassificationEnum =
  (typeof GetOccupationSearchClassificationEnum)[keyof typeof GetOccupationSearchClassificationEnum]
