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

export const SITE_URL = 'https://gdc-forum-europe.politicalwatch.es';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'GloDemCoalition';
export const BRAND_NAME = 'GDC Forum Europe';
export const SITE_NAME_MULTILINE = ['Global Democracy Coalition', 'Forum Europe'];
export const SITE_NAME = 'GDC Forum Europe';
export const META_DESCRIPTION =
  'Intended as a week-long celebration of democracy, the Global Democracy Forum 2024 promises to be a landmark event in the pursuit of advancing democracy globally alongside the partner organizations of the Global Coalition for Democracy. The aim of this event is to provide a space for dialogue on democracy, bringing together a diverse, multi-sector group of democratic organisations, policy makers and democracy advocates from around the world, offering an in-depth exploration of the regional perspectives on democracy and culminating in a global meeting.';
export const SITE_DESCRIPTION = 'A week-long celebration of democracy.';
export const DATE = '12 March 2024';
export const SHORT_DATE = 'Mar 12 - 9:00am PST';
export const FULL_DATE = 'Mar 12th 9am Central European Standard Time (GMT+1)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/politicalwatch/gdc-forum-europe';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Live Stage',
    route: '/stage/main'
  },
  {
    name: 'About',
    route: '/about'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  }
];

export type TicketGenerationState = 'default' | 'loading';
