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

import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';
import About from '@components/about';
import { META_DESCRIPTION } from '@lib/constants';

export default function Conf() {
  const meta = {
    title: 'About | GDC Forum Europe 2024',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <Header hero="About" description="Coming soon!" />
        <About />
      </Layout>
    </Page>
  );
}
