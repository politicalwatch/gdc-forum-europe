/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.aglty.io',
        pathname: '**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**'
      }
    ],
    imageSizes: [24, 64, 300]
  }
  // output: 'standalone'  // enable to generate a static site and deploy with Docker
};
