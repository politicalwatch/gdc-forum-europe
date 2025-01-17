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

import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { NAVIGATION } from '@lib/constants';
import styles from './layout.module.css';
import Logo from './icons/icon-logo';
import IconLogoPoliticalWatchCompact from './icons/icon-logo-political-watch-compact';
import { SkipNavContent } from './skip-nav';
import MobileMenu from './mobile-menu';
import Footer from './footer';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
  isLive?: boolean;
};

export default function Layout({
  children,
  className,
  hideNav,
  layoutStyles,
  isLive = false
}: Props) {
  const router = useRouter();
  const activeRoute = router.asPath;
  return (
    <>
      <div className={styles.background}>
        {!hideNav && (
          <header className={cn(styles.header)}>
            <MobileMenu key={router.asPath} />
            <div className={styles['header-logos']}>
              <Link href="/" legacyBehavior>
                <a className={styles.logo}>
                  <Logo />
                </a>
              </Link>
              <Link href="/" legacyBehavior>
                <a className={styles['logo-pw']}>
                  <IconLogoPoliticalWatchCompact />
                </a>
              </Link>
            </div>
            <div className={styles.tabs}>
              {NAVIGATION.map(({ name, route }) => (
                <a
                  key={name}
                  href={route}
                  className={cn(styles.tab, {
                    [styles['tab-active']]: activeRoute.startsWith(route)
                  })}
                >
                  {name}
                </a>
              ))}
            </div>

            {/* {(hmsConfig.hmsIntegration && isLive && !disableCta.includes(activeRoute)) ||
            activeRoute === '/' ? (
              <div className={cn(styles['header-right'])}>
                {activeRoute === '/' ? <DemoButton /> : <RoomCta />}
              </div>
            ) : (
              <div />
            )} */}
            <div />
          </header>
        )}
        {/* <ViewSource /> */}
        <div className={styles.page}>
          <main className={styles.main} style={layoutStyles}>
            <SkipNavContent />
            <div className={cn(styles.full, className)}>{children}</div>
          </main>
          {!activeRoute.startsWith('/stage') && <Footer />}
        </div>
      </div>
    </>
  );
}
