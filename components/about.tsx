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

import cn from 'classnames';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles['row-wrapper']}>
        <p>
          With the aim of promoting collaboration at a global level for the defense of democracy,
          the European Forum of the Global Coalition for Democracy 2024 will be held on March 12 in
          Ca l'Alier, Barcelona. This strategic calendar allows the Forum to prepare the ground for
          the next Summit for Democracy in South Korea, which will be held on March 18 and 19.
        </p>
        <p>
          Intended as a week-long celebration of democracy, the Global Democracy Forum 2024 promises
          to be a landmark event in the pursuit of advancing democracy globally alongside the
          partner organizations of the Global Coalition for Democracy. The aim of this event is to
          provide a space for dialogue on democracy, bringing together a diverse, multi-sector group
          of democratic organisations, policy makers and democracy advocates from around the world,
          offering an in-depth exploration of the regional perspectives on democracy and culminating
          in a global meeting.
        </p>
        <p>
          The forum sessions will focus on discussing and reflecting on two main themes. On the one
          hand, panels will explore how younger generations perceive democracy, engage with
          technology, and confront the challenges of misinformation. On the other hand, they will
          delve into regional conceptions, practices and narratives about democracy, inspiring a
          renewed commitment to democratic principles and collective responsibility to strengthen
          governance.
        </p>
        <p>
          In Europe, the forum is organized by Political Watch, a think and do tank whose mission is
          to work to nurture the democracy of the future. The event will be held in Barcelona,
          ​​chosen to be the European Capital of Democracy, and will bring together in a space for
          debate and meeting organizations from all corners of Europe that are working to promote
          democratic values.
        </p>
      </div>
    </div>
  );
}
