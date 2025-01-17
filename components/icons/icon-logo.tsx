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

export default function IconLogo({
  backgroundColor = 'transparent',
  foregroundColor = 'var(--gray1)',
  ...props
}) {
  return (
    <svg
      width="300"
      height="78.67"
      viewBox="0 0 300 78.67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle fill={foregroundColor} cx="41.34" cy="5.79" r="5.79" />
      <circle fill={foregroundColor} cx="12.85" cy="23.34" r="5.79" />
      <circle
        fill={foregroundColor}
        cx="13.8"
        cy="56.78"
        r="5.79"
        transform="translate(-23.1 11.47) rotate(-25.5)"
      />
      <circle
        fill={foregroundColor}
        cx="43.23"
        cy="72.68"
        r="5.79"
        transform="translate(-35.76 42.5) rotate(-38.34)"
      />
      <circle
        fill={foregroundColor}
        cx="71.72"
        cy="55.14"
        r="5.79"
        transform="translate(-18.43 47.61) rotate(-32.78)"
      />
      <path
        fill={foregroundColor}
        d="M84.36,35.82c-.04-.87-.84-1.5-1.7-1.36-12.47,2.14-22.51-3-27.57-13.93-.39-.83-1.44-1.1-2.17-.56-.07.05-.14.1-.2.14.56-.41,1.12-.83,1.65-1.29,4.19-3.53,7.46-8.47,9.51-14.64.23-.7-.1-1.45-.77-1.76-1-.47-1.8-.86-2.74-1.34-.78-.4-1.72-.03-2.02.79-4.38,11.87-13.85,17.99-25.84,16.91-.91-.08-1.67.69-1.57,1.6,0,.08.02.17.02.25-.07-.69-.16-1.38-.29-2.07-.96-5.39-3.61-10.7-7.92-15.55-.49-.55-1.31-.64-1.91-.22-.91.63-1.64,1.13-2.54,1.7-.73.47-.88,1.48-.33,2.15,8.09,9.73,8.66,20.99,1.72,30.84-.53.75-.23,1.79.61,2.16.08.03.15.07.23.1-.63-.29-1.28-.55-1.94-.79-5.15-1.86-11.06-2.22-17.43-.91-.72.15-1.21.81-1.14,1.54.1,1.1.16,1.99.21,3.05.04.87.84,1.5,1.7,1.36,12.47-2.14,22.51,3,27.57,13.92.39.83,1.43,1.1,2.17.56.07-.05.14-.1.2-.14-.56.41-1.12.83-1.65,1.29-4.19,3.53-7.46,8.47-9.51,14.64-.23.7.1,1.45.77,1.76,1,.47,1.8.86,2.74,1.34.78.4,1.72.03,2.02-.79,4.38-11.87,13.85-17.99,25.84-16.91.91.08,1.67-.69,1.57-1.6,0-.08-.02-.17-.02-.25.07.69.16,1.38.29,2.07.97,5.39,3.61,10.7,7.93,15.56.49.55,1.31.64,1.91.22.91-.63,1.64-1.13,2.54-1.7.73-.47.88-1.48.33-2.15-8.09-9.73-8.66-20.99-1.72-30.84.53-.75.23-1.79-.6-2.16-.08-.03-.15-.07-.23-.1.63.29,1.28.55,1.94.79,5.15,1.86,11.07,2.23,17.43.91.72-.15,1.21-.81,1.14-1.54-.1-1.1-.16-1.99-.21-3.05ZM52.4,20.36c-.11.07-.21.15-.32.22.11-.07.21-.14.32-.22ZM31.02,21.43c0-.13-.02-.26-.03-.39.01.13.02.26.03.39ZM31.08,22.98c0-.13,0-.26,0-.39,0,.13,0,.26,0,.39ZM31.06,22.2c0-.13-.01-.26-.02-.39,0,.13.01.26.02.39ZM32.18,58.12c.11-.07.21-.15.32-.22-.11.07-.21.15-.32.22ZM53.55,57.05c0,.13.02.26.03.39-.01-.13-.02-.26-.03-.39ZM53.49,55.5c0,.13,0,.26,0,.39,0-.13,0-.26,0-.39ZM53.51,56.27c0,.13.01.26.02.39,0-.13-.01-.26-.02-.39ZM59.61,37.79c-3.74,5.02-5.76,10.44-6.08,15.91-.03.47-.04.94-.04,1.41,0-.05,0-.09,0-.14,0-.74-.55-1.36-1.29-1.45-6.21-.73-11.92.23-16.81,2.69-.42.21-.84.44-1.24.67.04-.02.08-.05.12-.07.65-.36.91-1.16.61-1.84-2.48-5.74-6.16-10.21-10.74-13.22-.39-.26-.79-.51-1.2-.74.04.02.08.05.12.07.64.38,1.46.21,1.9-.39,3.73-5.01,5.76-10.44,6.08-15.91.03-.47.04-.94.04-1.41,0,.05,0,.09,0,.14,0,.74.55,1.36,1.29,1.45,6.21.72,11.92-.23,16.81-2.69.42-.21.84-.43,1.24-.67-.04.02-.08.05-.12.07-.65.36-.91,1.16-.61,1.84,2.48,5.74,6.16,10.21,10.74,13.21.39.26.79.51,1.2.74-.04-.02-.08-.05-.12-.07-.64-.38-1.46-.21-1.9.39ZM32.82,57.69c.11-.07.22-.14.33-.21-.11.07-.22.14-.33.21ZM33.48,57.27c.11-.07.22-.13.33-.2-.11.07-.22.13-.33.2ZM20.88,39.92c.12.06.23.11.35.17-.12-.06-.23-.11-.35-.17ZM21.58,40.27c.12.06.23.12.34.18-.11-.06-.23-.12-.34-.18ZM22.26,40.63c.11.06.23.12.34.19-.11-.06-.22-.13-.34-.19ZM51.75,20.79c-.11.07-.22.14-.33.21.11-.07.22-.14.33-.21ZM51.09,21.21c-.11.07-.22.13-.33.2.11-.07.22-.13.33-.2ZM63.35,38.38c.12.06.23.11.35.17-.12-.06-.23-.11-.35-.17ZM61.97,37.66c.11.06.23.13.34.19-.11-.06-.23-.13-.34-.19ZM62.65,38.03c.11.06.23.12.34.18-.12-.06-.23-.12-.34-.18Z"
      />
      <circle
        fill={foregroundColor}
        cx="70.78"
        cy="21.69"
        r="5.79"
        transform="translate(40.77 89.36) rotate(-83.13)"
      />
      <path
        fill={foregroundColor}
        d="M111.33,13.61h5.13c-.91,1.2-2.11,1.8-3.59,1.8-1.56,0-2.72-.4-3.48-1.19-.75-.79-1.13-1.99-1.13-3.59,0-1.39.34-2.49,1.01-3.29.68-.8,1.63-1.2,2.87-1.2.66,0,1.22.11,1.68.33.46.22.82.54,1.07.94h6.78c-.31-2.22-1.31-3.98-3-5.27-1.69-1.29-3.88-1.94-6.56-1.94-2.11,0-3.94.44-5.51,1.32-1.56.88-2.77,2.11-3.61,3.69-.84,1.58-1.26,3.39-1.26,5.42s.42,3.84,1.26,5.42c.84,1.58,2.05,2.82,3.62,3.69,1.57.88,3.42,1.32,5.55,1.32,2.4,0,4.38-.55,5.94-1.64,1.56-1.09,2.79-2.4,3.68-3.93v-6.43h-10.46v4.55Z"
      />
      <polygon
        fill={foregroundColor}
        points="137.46 16.04 131.26 16.04 131.26 .39 124.83 .39 124.83 20.91 137.46 20.91 137.46 16.04"
      />
      <path
        fill={foregroundColor}
        d="M143.88,19.75c1.61.91,3.39,1.36,5.32,1.36s3.68-.45,5.29-1.36c1.61-.91,2.89-2.16,3.83-3.77.94-1.6,1.41-3.41,1.41-5.42s-.47-3.82-1.41-5.42c-.94-1.6-2.21-2.85-3.81-3.75-1.6-.9-3.37-1.35-5.3-1.35s-3.7.45-5.32,1.35c-1.61.9-2.89,2.15-3.84,3.75-.95,1.6-1.42,3.41-1.42,5.42s.47,3.82,1.42,5.42c.95,1.6,2.23,2.86,3.84,3.77ZM146.21,7.22c.7-.82,1.69-1.23,2.98-1.23s2.26.41,2.96,1.23c.7.82,1.04,1.94,1.04,3.35s-.35,2.5-1.04,3.32c-.7.82-1.68,1.23-2.96,1.23s-2.29-.41-2.98-1.23c-.7-.82-1.04-1.93-1.04-3.32s.35-2.53,1.04-3.35Z"
      />
      <path
        fill={foregroundColor}
        d="M178.63,19.44c1.19-.98,1.78-2.36,1.78-4.16,0-1.18-.34-2.22-1.03-3.12-.69-.9-1.65-1.49-2.88-1.78,1.04-.27,1.88-.82,2.51-1.64.63-.82.94-1.83.94-3.03,0-1.74-.6-3.06-1.8-3.97-1.2-.91-2.84-1.36-4.93-1.36h-10.46v20.52h10.75c2.22,0,3.93-.49,5.11-1.46ZM169.19,5.49h2.49c.58,0,1.01.12,1.29.36.28.24.42.61.42,1.12s-.14.84-.42,1.07c-.28.23-.71.35-1.29.35h-2.49v-2.9ZM173.41,15.42c-.28.22-.71.33-1.29.33h-2.93v-2.9h2.93c1.14,0,1.71.49,1.71,1.48,0,.5-.14.86-.42,1.09Z"
      />
      <path
        fill={foregroundColor}
        d="M189.62,17.81h6.84l1.01,3.1h6.78L196.78.39h-7.42l-7.51,20.52h6.75l1.01-3.1ZM193.04,7.26l1.85,5.71h-3.71l1.85-5.71Z"
      />
      <polygon
        fill={foregroundColor}
        points="219.79 16.04 213.59 16.04 213.59 .39 207.15 .39 207.15 20.91 219.79 20.91 219.79 16.04"
      />
      <path
        fill={foregroundColor}
        d="M116.5,30.47c-1.61-.87-3.49-1.3-5.64-1.3h-8.55v20.52h8.55c2.14,0,4.02-.45,5.64-1.35,1.61-.9,2.85-2.13,3.72-3.69.87-1.56,1.3-3.32,1.3-5.27s-.43-3.73-1.3-5.27c-.87-1.55-2.11-2.75-3.72-3.62ZM113.73,42.76c-.85.79-2,1.19-3.45,1.19h-1.54v-9.16h1.54c1.45,0,2.6.4,3.45,1.19.85.79,1.27,1.92,1.27,3.39s-.43,2.6-1.27,3.39Z"
      />
      <polygon
        fill={foregroundColor}
        points="138.25 44.56 131 44.56 131 41.66 137.38 41.66 137.38 36.82 131 36.82 131 34.3 138.25 34.3 138.25 29.17 124.57 29.17 124.57 49.69 138.25 49.69 138.25 44.56"
      />
      <polygon
        fill={foregroundColor}
        points="166.06 49.69 166.06 29.17 158.21 29.17 153.81 41.49 149.29 29.17 141.4 29.17 141.4 49.69 147.84 49.69 147.84 39.46 151 49.69 156.5 49.69 159.66 39.46 159.66 49.69 166.06 49.69"
      />
      <path
        fill={foregroundColor}
        d="M188.36,44.76c.94-1.6,1.41-3.41,1.41-5.42s-.47-3.82-1.41-5.42c-.94-1.6-2.21-2.85-3.81-3.75-1.6-.9-3.37-1.35-5.3-1.35s-3.7.45-5.32,1.35c-1.61.9-2.89,2.15-3.84,3.75-.95,1.6-1.42,3.41-1.42,5.42s.47,3.82,1.42,5.42c.95,1.6,2.23,2.86,3.84,3.77,1.61.91,3.39,1.36,5.32,1.36s3.68-.45,5.29-1.36c1.61-.91,2.89-2.16,3.83-3.77ZM182.21,42.66c-.7.82-1.68,1.23-2.96,1.23s-2.29-.41-2.98-1.23c-.7-.82-1.04-1.93-1.04-3.32s.35-2.53,1.04-3.35c.7-.82,1.69-1.23,2.98-1.23s2.26.41,2.96,1.23c.7.82,1.04,1.94,1.04,3.35s-.35,2.5-1.04,3.32Z"
      />
      <path
        fill={foregroundColor}
        d="M211.88,41.75h-6.78c-.31.68-.75,1.2-1.32,1.58-.57.38-1.22.57-1.96.57-1.08,0-1.94-.41-2.56-1.22-.63-.81-.94-1.9-.94-3.27s.31-2.46.94-3.27c.63-.81,1.48-1.22,2.56-1.22.73,0,1.39.19,1.96.57.57.38,1.01.9,1.32,1.58h6.78c-.29-1.62-.87-3.04-1.75-4.26-.88-1.22-2.02-2.16-3.42-2.83-1.4-.67-2.99-1-4.77-1-2.07,0-3.86.44-5.39,1.32-1.53.88-2.7,2.11-3.52,3.69-.82,1.58-1.23,3.39-1.23,5.42s.41,3.84,1.23,5.42c.82,1.58,1.99,2.82,3.52,3.69,1.53.88,3.32,1.32,5.39,1.32,1.78,0,3.37-.33,4.77-1,1.4-.67,2.54-1.61,3.42-2.83.88-1.22,1.46-2.64,1.75-4.26Z"
      />
      <path
        fill={foregroundColor}
        d="M231.13,39.54c.76-1.06,1.14-2.28,1.14-3.65,0-1.27-.29-2.42-.88-3.43-.59-1.01-1.47-1.82-2.65-2.41-1.18-.59-2.6-.88-4.26-.88h-9.56v20.52h6.43v-7.36h.03l3.85,7.36h7.07l-4.46-7.85c1.43-.46,2.53-1.23,3.29-2.29ZM225.3,37.62c-.31.28-.77.42-1.39.42h-2.55v-3.48h2.55c.6,0,1.06.15,1.38.46.32.31.48.73.48,1.28,0,.6-.15,1.04-.46,1.32Z"
      />
      <path
        fill={foregroundColor}
        d="M241.84,29.17l-7.51,20.52h6.75l1.01-3.1h6.84l1.01,3.1h6.78l-7.48-20.52h-7.42ZM243.67,41.75l1.85-5.71,1.85,5.71h-3.71Z"
      />
      <path
        fill={foregroundColor}
        d="M267.63,34.91c.73,0,1.39.19,1.96.57.57.38,1.01.9,1.32,1.58h6.78c-.29-1.62-.87-3.04-1.75-4.26-.88-1.22-2.02-2.16-3.42-2.83-1.4-.67-2.99-1-4.77-1-2.07,0-3.86.44-5.39,1.32-1.53.88-2.7,2.11-3.52,3.69-.82,1.58-1.23,3.39-1.23,5.42s.41,3.84,1.23,5.42c.82,1.58,1.99,2.82,3.52,3.69,1.53.88,3.32,1.32,5.39,1.32,1.78,0,3.37-.33,4.77-1,1.4-.67,2.54-1.61,3.42-2.83.88-1.22,1.46-2.64,1.75-4.26h-6.78c-.31.68-.75,1.2-1.32,1.58-.57.38-1.22.57-1.96.57-1.08,0-1.94-.41-2.56-1.22-.63-.81-.94-1.9-.94-3.27s.31-2.46.94-3.27c.63-.81,1.48-1.22,2.56-1.22Z"
      />
      <polygon
        fill={foregroundColor}
        points="292.76 29.17 289.48 36.44 286.21 29.17 278.85 29.17 286.21 43.46 286.21 49.69 292.64 49.69 292.64 43.46 300 29.17 292.76 29.17"
      />
      <path
        fill={foregroundColor}
        d="M108.35,61.43c1.11-.65,2.37-.98,3.77-.98s2.71.33,3.76.98c1.05.65,1.85,1.58,2.4,2.79h3.14c-.75-1.94-1.94-3.43-3.57-4.49-1.63-1.05-3.54-1.58-5.73-1.58-1.86,0-3.55.44-5.08,1.32-1.53.88-2.73,2.11-3.61,3.67-.88,1.56-1.32,3.32-1.32,5.28s.44,3.71,1.32,5.27c.88,1.55,2.09,2.77,3.61,3.64,1.53.87,3.22,1.31,5.08,1.31,2.19,0,4.1-.52,5.73-1.57,1.63-1.05,2.82-2.53,3.57-4.45h-3.14c-.56,1.21-1.36,2.13-2.4,2.78-1.05.64-2.3.96-3.76.96s-2.66-.33-3.77-.98c-1.11-.65-1.99-1.58-2.62-2.78-.63-1.2-.95-2.59-.95-4.19s.32-3.02.95-4.22c.63-1.2,1.51-2.12,2.62-2.78Z"
      />
      <path
        fill={foregroundColor}
        d="M139.51,59.49c-1.54-.87-3.24-1.31-5.12-1.31s-3.56.44-5.09,1.31c-1.54.87-2.75,2.09-3.64,3.65-.89,1.56-1.34,3.32-1.34,5.28s.45,3.72,1.34,5.28c.89,1.56,2.11,2.78,3.64,3.66,1.53.87,3.23,1.31,5.09,1.31s3.59-.44,5.12-1.31c1.53-.87,2.74-2.09,3.63-3.64.88-1.55,1.32-3.32,1.32-5.3s-.44-3.74-1.32-5.3c-.88-1.55-2.09-2.77-3.63-3.64ZM140.82,72.62c-.64,1.21-1.53,2.14-2.65,2.79-1.12.65-2.38.98-3.78.98s-2.66-.33-3.78-.98c-1.12-.65-2.01-1.58-2.65-2.79-.64-1.21-.96-2.61-.96-4.2s.32-3.02.96-4.22c.64-1.2,1.52-2.12,2.63-2.78,1.11-.65,2.38-.98,3.8-.98s2.69.33,3.8.98c1.11.65,1.99,1.58,2.63,2.78.64,1.2.96,2.6.96,4.22s-.32,2.99-.96,4.2Z"
      />
      <path
        fill={foregroundColor}
        d="M152.47,58.52l-7.25,19.94h2.76l1.61-4.46h8.75l1.61,4.46h2.76l-7.22-19.94h-3.02ZM150.34,71.88l3.63-10.13,3.63,10.13h-7.25Z"
      />
      <polygon
        fill={foregroundColor}
        points="168.35 58.41 165.73 58.41 165.73 78.47 175.37 78.47 175.37 76.34 168.35 76.34 168.35 58.41"
      />
      <rect fill={foregroundColor} x="178.88" y="58.41" width="2.62" height="20.06" />
      <polygon
        fill={foregroundColor}
        points="185.45 60.54 190.94 60.54 190.94 78.47 193.56 78.47 193.56 60.54 199.03 60.54 199.03 58.41 185.45 58.41 185.45 60.54"
      />
      <rect fill={foregroundColor} x="202.97" y="58.41" width="2.62" height="20.06" />
      <path
        fill={foregroundColor}
        d="M224.27,59.49c-1.54-.87-3.24-1.31-5.12-1.31s-3.56.44-5.09,1.31c-1.54.87-2.75,2.09-3.64,3.65-.89,1.56-1.34,3.32-1.34,5.28s.45,3.72,1.34,5.28c.89,1.56,2.11,2.78,3.64,3.66,1.53.87,3.23,1.31,5.09,1.31s3.59-.44,5.12-1.31c1.53-.87,2.74-2.09,3.63-3.64.88-1.55,1.32-3.32,1.32-5.3s-.44-3.74-1.32-5.3c-.88-1.55-2.09-2.77-3.63-3.64ZM225.58,72.62c-.64,1.21-1.53,2.14-2.65,2.79-1.12.65-2.38.98-3.78.98s-2.66-.33-3.78-.98c-1.12-.65-2.01-1.58-2.65-2.79-.64-1.21-.96-2.61-.96-4.2s.32-3.02.96-4.22c.64-1.2,1.52-2.12,2.63-2.78,1.11-.65,2.38-.98,3.8-.98s2.69.33,3.8.98c1.11.65,1.99,1.58,2.63,2.78.64,1.2.96,2.6.96,4.22s-.32,2.99-.96,4.2Z"
      />
      <polygon
        fill={foregroundColor}
        points="245.82 74.32 235.29 58.38 232.67 58.38 232.67 78.47 235.29 78.47 235.29 62.49 245.82 78.47 248.44 78.47 248.44 58.38 245.82 58.38 245.82 74.32"
      />
    </svg>
  );
}
