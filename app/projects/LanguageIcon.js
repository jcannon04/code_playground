import React from 'react'

function LanguageIcon({ languageId }) {
    let icon = null;
    switch (languageId) {
        case 10:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
              <path
                fill="#323330"
                d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
              ></path>
            </svg>
          );
          break;
        case 50:
          icon =  (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path
                fill="#659AD3"
                d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
              ></path>
              <path
                fill="#03599C"
                d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
              ></path>
              <path
                fill="#fff"
                d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
              ></path>
            </svg>
          );
          break;
        case 54:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path
                fill="#D26383"
                d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
              ></path>
              <path
                fill="#9C033A"
                d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
              ></path>
              <path
                fill="#fff"
                d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
              ></path>
              <path
                d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"
                fill="#fff"
              ></path>
            </svg>
          );
          break;
        case 86:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <g fill="none">
                <path
                  d="M64 0C28.712 0 0 28.6 0 63.751c0 35.155 28.712 63.753 64 63.753s64-28.598 64-63.753C128 28.6 99.288 0 64 0"
                  fill="#FFF"
                ></path>
                <path
                  d="M61.659 64.898a265.825 265.825 0 00-1.867 4.12c-2.322 5.241-4.894 11.62-5.834 15.706-.337 1.455-.546 3.258-.542 5.258 0 .79.043 1.622.11 2.469a30.74 30.74 0 0010.533 1.87 30.796 30.796 0 009.642-1.566 18.09 18.09 0 01-2.011-2.12c-4.11-5.221-6.403-12.872-10.031-25.737M46.485 38.96c-7.85 5.51-12.986 14.6-13.005 24.9.019 10.145 5.001 19.116 12.653 24.65 1.877-7.789 6.582-14.92 13.637-29.214a114.691 114.691 0 00-1.43-3.72c-1.955-4.884-4.776-10.556-7.294-13.124-1.283-1.342-2.84-2.502-4.561-3.492"
                  fill="#91DC47"
                ></path>
                <path
                  d="M90.697 98.798c-4.05-.506-7.392-1.116-10.317-2.144a36.708 36.708 0 01-16.32 3.807c-20.293 0-36.742-16.383-36.745-36.602 0-10.97 4.852-20.805 12.528-27.512-2.053-.495-4.194-.783-6.38-.779-10.782.101-22.162 6.044-26.9 22.095-.443 2.337-.337 4.103-.337 6.197 0 31.818 25.895 57.613 57.835 57.613 19.561 0 36.841-9.682 47.305-24.489-5.66 1.405-11.103 2.077-15.763 2.091-1.747 0-3.387-.093-4.906-.277"
                  fill="#63B132"
                ></path>
                <path
                  d="M79.829 87.634c.357.176 1.167.464 2.293.783 7.579-5.542 12.504-14.469 12.523-24.558h-.003c-.028-16.82-13.693-30.43-30.582-30.462a30.765 30.765 0 00-9.602 1.554c6.21 7.05 9.196 17.127 12.084 28.148l.005.013c.005.009.924 3.06 2.501 7.11 1.566 4.042 3.797 9.048 6.23 12.696 1.597 2.444 3.354 4.2 4.551 4.716"
                  fill="#90B4FE"
                ></path>
                <path
                  d="M17.057 30.311c5.463-3.408 11.04-4.637 15.908-4.593 6.722.02 12.008 2.096 14.544 3.516.612.352 1.194.73 1.764 1.12a36.714 36.714 0 0114.786-3.096c20.295.003 36.747 16.386 36.75 36.601-.003 10.192-4.188 19.408-10.934 26.044a45.3 45.3 0 005.225.29c6.406.004 13.329-1.404 18.52-5.753 3.384-2.84 6.22-6.998 7.792-13.233.307-2.408.484-4.856.484-7.347 0-31.817-25.892-57.614-57.835-57.614-19.372 0-36.508 9.5-47.004 24.065z"
                  fill="#5881D8"
                ></path>
              </g>
            </svg>
          );
          break;
        case 51:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path
                fill="#9B4F96"
                d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
              ></path>
              <path
                fill="#68217A"
                d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
              ></path>
              <path
                fill="#fff"
                d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
              ></path>
            </svg>
          );
          break;
        case 57:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <linearGradient
                id="elixir-original-a"
                gradientUnits="userSpaceOnUse"
                x1="835.592"
                y1="-36.546"
                x2="821.211"
                y2="553.414"
                gradientTransform="matrix(.1297 0 0 .2 -46.03 17.198)"
              >
                <stop offset="0" stop-color="#d9d8dc"></stop>
                <stop offset="1" stop-color="#fff" stop-opacity=".385"></stop>
              </linearGradient>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="url(#elixir-original-a)"
                d="M64.4.5C36.7 13.9 1.9 83.4 30.9 113.9c26.8 33.5 85.4 1.3 68.4-40.5-21.5-36-35-37.9-34.9-72.9z"
              ></path>
              <linearGradient
                id="elixir-original-b"
                gradientUnits="userSpaceOnUse"
                x1="942.357"
                y1="-40.593"
                x2="824.692"
                y2="472.243"
                gradientTransform="matrix(.1142 0 0 .2271 -47.053 17.229)"
              >
                <stop offset="0" stop-color="#8d67af" stop-opacity=".672"></stop>
                <stop offset="1" stop-color="#9f8daf"></stop>
              </linearGradient>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="url(#elixir-original-b)"
                d="M64.4.2C36.8 13.6 1.9 82.9 31 113.5c10.7 12.4 28 16.5 37.7 9.1 26.4-18.8 7.4-53.1 10.4-78.5C68.1 33.9 64.2 11.3 64.4.2z"
              ></path>
              <linearGradient
                id="elixir-original-c"
                gradientUnits="userSpaceOnUse"
                x1="924.646"
                y1="120.513"
                x2="924.646"
                y2="505.851"
                gradientTransform="matrix(.1227 0 0 .2115 -46.493 17.206)"
              >
                <stop offset="0" stop-color="#26053d" stop-opacity=".762"></stop>
                <stop offset="1" stop-color="#b7b4b4" stop-opacity=".278"></stop>
              </linearGradient>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="url(#elixir-original-c)"
                d="M56.7 4.3c-22.3 15.9-28.2 75-24.1 94.2 8.2 48.1 75.2 28.3 69.6-16.5-6-29.2-48.8-39.2-45.5-77.7z"
              ></path>
              <linearGradient
                id="elixir-original-d"
                gradientUnits="userSpaceOnUse"
                x1="428.034"
                y1="198.448"
                x2="607.325"
                y2="559.255"
                gradientTransform="matrix(.1848 0 0 .1404 -42.394 17.138)"
              >
                <stop offset="0" stop-color="#91739f" stop-opacity=".46"></stop>
                <stop offset="1" stop-color="#32054f" stop-opacity=".54"></stop>
              </linearGradient>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="url(#elixir-original-d)"
                d="M78.8 49.8c10.4 13.4 12.7 22.6 6.8 27.9-27.7 19.4-61.3 7.4-54-37.3C22.1 63 4.5 96.8 43.3 101.6c20.8 3.6 54 2 58.9-16.1-.2-15.9-10.8-22.9-23.4-35.7z"
              ></path>
              <linearGradient
                id="elixir-original-e"
                gradientUnits="userSpaceOnUse"
                x1="907.895"
                y1="540.636"
                x2="590.242"
                y2="201.281"
                gradientTransform="matrix(.1418 0 0 .1829 -45.23 17.18)"
              >
                <stop offset="0" stop-color="#463d49" stop-opacity=".331"></stop>
                <stop offset="1" stop-color="#340a50" stop-opacity=".821"></stop>
              </linearGradient>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="url(#elixir-original-e)"
                d="M38.1 36.4c-2.9 21.2 35.1 77.9 58.3 71-17.7 35.6-56.9-21.2-64-41.7 1.5-11 2.2-16.4 5.7-29.3z"
              ></path>
              <linearGradient
                id="elixir-original-f"
                gradientUnits="userSpaceOnUse"
                x1="1102.297"
                y1="100.542"
                x2="1008.071"
                y2="431.648"
                gradientTransform="matrix(.106 0 0 .2448 -47.595 17.242)"
              >
                <stop offset="0" stop-color="#715383" stop-opacity=".145"></stop>
                <stop offset="1" stop-color="#f4f4f4" stop-opacity=".234"></stop>
              </linearGradient>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="url(#elixir-original-f)"
                d="M60.4 49.7c.8 7.9 3.9 20.5 0 28.8S38.7 102 43.6 115.3c11.4 24.8 37.1-4.4 36.9-19 1.1-11.8-6.6-38.7-1.8-52.5L76.5 41l-13.6-4c-2.2 3.2-3 7.5-2.5 12.7z"
              ></path>
              <linearGradient
                id="elixir-original-g"
                gradientUnits="userSpaceOnUse"
                x1="1354.664"
                y1="140.06"
                x2="1059.233"
                y2="84.466"
                gradientTransform="matrix(.09173 0 0 .2828 -48.536 17.28)"
              >
                <stop offset="0" stop-color="#a5a1a8" stop-opacity=".356"></stop>
                <stop offset="1" stop-color="#370c50" stop-opacity=".582"></stop>
              </linearGradient>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="url(#elixir-original-g)"
                d="M65.3 10.8C36 27.4 48 53.4 49.3 81.6l19.1-55.4c-1.4-5.7-2.3-9.5-3.1-15.4z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#330A4C"
                fill-opacity=".316"
                d="M68.3 26.1c-14.8 11.7-14.1 31.3-18.6 54 8.1-21.3 4.1-38.2 18.6-54z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#FFF"
                d="M45.8 119.7c8 1.1 12.1 2.2 12.5 3 .3 4.2-11.1 1.2-12.5-3z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#EDEDED"
                fill-opacity=".603"
                d="M49.8 10.8c-6.9 7.7-14.4 21.8-18.2 29.7-1 6.5-.5 15.7.6 23.5.9-18.2 7.5-39.2 17.6-53.2z"
              ></path>
            </svg>
          );
          break;
        case 87:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path
                fill="#378BBA"
                d="M0 64.5L60.7 3.8v30.4L30.4 64.5l30.4 30.4v30.4L0 64.5z"
              ></path>
              <path
                fill="#378BBA"
                d="M39.1 64.5l21.7-21.7v43.4L39.1 64.5z"
              ></path>
              <path
                fill="#30B9DB"
                d="M128 64.5L65.1 3.8v30.4l30.4 30.4-30.4 30.3v30.4L128 64.5z"
              ></path>
            </svg>
          );
          break;
        case 60:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <g fill="#00acd7" fill-rule="evenodd">
                <path d="M11.156 54.829c-.243 0-.303-.122-.182-.303l1.273-1.637c.12-.182.424-.303.666-.303H34.55c.243 0 .303.182.182.364l-1.03 1.576c-.121.181-.424.363-.606.363zM2.004 60.404c-.242 0-.303-.12-.182-.303l1.273-1.636c.121-.182.424-.303.667-.303h27.636c.242 0 .364.182.303.364l-.485 1.454c-.06.243-.303.364-.545.364zM16.67 65.98c-.242 0-.302-.182-.181-.364l.848-1.515c.122-.182.364-.363.607-.363h12.12c.243 0 .364.181.364.424l-.12 1.454c0 .243-.243.425-.425.425zM79.58 53.738c-3.819.97-6.425 1.697-10.182 2.666-.91.243-.97.303-1.758-.606-.909-1.03-1.576-1.697-2.848-2.303-3.819-1.878-7.516-1.333-10.97.91-4.121 2.666-6.242 6.605-6.182 11.514.06 4.849 3.394 8.849 8.182 9.516 4.121.545 7.576-.91 10.303-4 .545-.667 1.03-1.394 1.636-2.243H56.064c-1.272 0-1.575-.788-1.151-1.818.788-1.879 2.242-5.03 3.09-6.606.183-.364.607-.97 1.516-.97h22.06c-.12 1.637-.12 3.273-.363 4.91-.667 4.363-2.303 8.363-4.97 11.878-4.364 5.758-10.06 9.333-17.273 10.303-5.939.788-11.454-.364-16.302-4-4.485-3.394-7.03-7.879-7.697-13.454-.788-6.606 1.151-12.546 5.151-17.758 4.303-5.636 10-9.212 16.97-10.485 5.697-1.03 11.151-.363 16.06 2.97 3.212 2.121 5.515 5.03 7.03 8.545.364.546.122.849-.606 1.03z"></path>
                <path
                  d="M99.64 87.253c-5.515-.122-10.546-1.697-14.788-5.334-3.576-3.09-5.818-7.03-6.545-11.697-1.091-6.848.787-12.909 4.909-18.302 4.424-5.819 9.757-8.849 16.97-10.122 6.181-1.09 12-.484 17.272 3.091 4.788 3.273 7.757 7.697 8.545 13.515 1.03 8.182-1.333 14.849-6.97 20.546-4 4.06-8.909 6.606-14.545 7.757-1.636.303-3.273.364-4.848.546zm14.424-24.485c-.06-.788-.06-1.394-.182-2-1.09-6-6.606-9.394-12.363-8.06-5.637 1.272-9.273 4.848-10.606 10.545-1.091 4.727 1.212 9.515 5.575 11.454 3.334 1.455 6.667 1.273 9.879-.363 4.788-2.485 7.394-6.364 7.697-11.576z"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
          );
          break;
        case 62:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path
                fill="#0074BD"
                d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
              ></path>
              <path
                fill="#EA2D2E"
                d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
              ></path>
              <path
                fill="#0074BD"
                d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
              ></path>
              <path
                fill="#EA2D2E"
                d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
              ></path>
              <path
                fill="#0074BD"
                d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
              ></path>
            </svg>
          );
          break;
        case 63:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
              <path
                fill="#323330"
                d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
              ></path>
            </svg>
          );
          break;
        case 78:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <linearGradient
                id="kotlin-original-a"
                gradientUnits="userSpaceOnUse"
                x1="-11.899"
                y1="48.694"
                x2="40.299"
                y2="-8.322"
              >
                <stop offset="0" stop-color="#1c93c1"></stop>
                <stop offset=".163" stop-color="#2391c0"></stop>
                <stop offset=".404" stop-color="#378bbe"></stop>
                <stop offset=".696" stop-color="#587eb9"></stop>
                <stop offset=".995" stop-color="#7f6cb1"></stop>
              </linearGradient>
              <path fill="url(#kotlin-original-a)" d="M0 0h65.4L0 64.4z"></path>
              <linearGradient
                id="kotlin-original-b"
                gradientUnits="userSpaceOnUse"
                x1="43.553"
                y1="149.174"
                x2="95.988"
                y2="94.876"
              >
                <stop offset="0" stop-color="#1c93c1"></stop>
                <stop offset=".216" stop-color="#2d8ebf"></stop>
                <stop offset=".64" stop-color="#587eb9"></stop>
                <stop offset=".995" stop-color="#7f6cb1"></stop>
              </linearGradient>
              <path
                fill="url(#kotlin-original-b)"
                d="M128 128L64.6 62.6 0 128z"
              ></path>
              <linearGradient
                id="kotlin-original-c"
                gradientUnits="userSpaceOnUse"
                x1="3.24"
                y1="95.249"
                x2="92.481"
                y2="2.116"
              >
                <stop offset="0" stop-color="#c757a7"></stop>
                <stop offset=".046" stop-color="#ca5a9e"></stop>
                <stop offset=".241" stop-color="#d66779"></stop>
                <stop offset=".428" stop-color="#e17357"></stop>
                <stop offset=".6" stop-color="#e97c3a"></stop>
                <stop offset=".756" stop-color="#ef8324"></stop>
                <stop offset=".888" stop-color="#f28817"></stop>
                <stop offset=".982" stop-color="#f48912"></stop>
              </linearGradient>
              <path
                fill="url(#kotlin-original-c)"
                d="M0 128L128 0H64.6L0 63.7z"
              ></path>
            </svg>
          );
          break;
        case 64:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <style></style>
              <path
                fill="navy"
                d="M127.3 15.1c0-7.9-6.4-14.3-14.3-14.3S98.6 7.1 98.6 15.1 105 29.4 113 29.4s14.3-6.4 14.3-14.3"
              ></path>
              <path
                fill="navy"
                d="M64 15.1c-27 0-49 21.9-49 49s21.9 49 49 49 49-21.9 49-49-22-49-49-49zm6 28.6c0-7.9 6.4-14.3 14.3-14.3s14.3 6.4 14.3 14.3S92.2 58 84.3 58 70 51.6 70 43.7z"
              ></path>
              <path
                fill="gray"
                d="M66.3 128l-.1-1.5c1.8-.1 3.6-.2 5.4-.4l.2 1.5c-1.8.2-3.7.3-5.5.4zm-5.6 0c-1.9-.1-3.7-.3-5.6-.5l.2-1.5c1.8.2 3.6.4 5.4.5v1.5zm16.6-1.4l-.3-1.4c1.8-.4 3.5-.8 5.3-1.4l.4 1.4c-1.7.6-3.5 1.1-5.4 1.4zm-27.7-.2c-1.8-.4-3.6-.9-5.4-1.5l.5-1.4c1.7.6 3.5 1 5.3 1.5l-.4 1.4zm38.4-3l-.6-1.4c1.7-.7 3.3-1.4 5-2.3l.7 1.3c-1.7.9-3.4 1.7-5.1 2.4zm-49-.4c-1.7-.7-3.4-1.5-5-2.4l.7-1.3c1.6.9 3.3 1.6 4.9 2.4L39 123zm59-4.7l-.8-1.2c1.5-1 3-2 4.5-3.1l.9 1.2c-1.5 1.1-3.1 2.1-4.6 3.1zm-68.8-.6c-1.6-1-3.1-2.1-4.5-3.2l.9-1.2c1.4 1.1 2.9 2.2 4.4 3.2l-.8 1.2zm77.7-6.1l-1-1.1c1.3-1.2 2.7-2.5 3.9-3.8l1.1 1c-1.3 1.3-2.7 2.6-4 3.9zm-86.5-.7c-1.4-1.3-2.7-2.6-3.9-4l1.1-1c1.2 1.3 2.5 2.7 3.8 3.9l-1 1.1zm94.1-7.5l-1.2-.9c1.1-1.4 2.2-2.9 3.2-4.4l1.2.8c-1 1.5-2.1 3.1-3.2 4.5zm-101.6-.8c-1.1-1.5-2.2-3-3.2-4.6l1.2-.8c1 1.5 2 3 3.1 4.5l-1.1.9zm107.7-8.5l-1.3-.7c.9-1.6 1.6-3.3 2.4-4.9l1.3.5-2.4 5.1zM7 93.1c-.8-1.7-1.6-3.4-2.3-5.1l1.3-.5c.7 1.7 1.4 3.3 2.3 5l-1.3.6zm117.9-9.3l-1.4-.5c.6-1.7 1-3.5 1.5-5.3l1.4.3c-.4 1.9-.9 3.7-1.5 5.5zm-122.1-1c-.5-1.8-1-3.6-1.4-5.4l1.4-.3c.4 1.8.8 3.5 1.4 5.3l-1.4.4zm124.6-9.9l-1.5-.2c.2-1.8.4-3.6.5-5.4l1.5.1c0 1.8-.2 3.7-.5 5.5zM.5 71.9C.2 70 .1 68.2 0 66.3l1.5-.1c.1 1.8.2 3.6.4 5.4l-1.4.3zm126-10.1c-.1-1.8-.2-3.6-.4-5.4l1.5-.2c.2 1.8.4 3.7.4 5.6h-1.5zm-125-1L0 60.7c.1-1.9.3-3.7.5-5.6l1.5.3c-.2 1.8-.4 3.6-.5 5.4zM125.2 51c-.4-1.8-.8-3.6-1.4-5.3l1.4-.4c.5 1.8 1 3.6 1.4 5.4l-1.4.3zM3 50l-1.4-.3c.4-1.8.9-3.6 1.5-5.4l1.4.5C3.9 46.5 3.4 48.2 3 50zm119-9.4c-.7-1.7-1.4-3.4-2.3-5l1.3-.7c.8 1.7 1.6 3.4 2.3 5.1l-1.3.6zm-115.6-1L5 39.1c.7-1.7 1.5-3.4 2.4-5l1.3.7c-.8 1.5-1.6 3.2-2.3 4.8zm5.1-9.6l-1.2-.8c1-1.6 2.1-3.1 3.2-4.5l1.2.9c-1.2 1.4-2.2 2.9-3.2 4.4zm6.7-8.6l-1.1-1c1.3-1.4 2.6-2.7 4-3.9l1 1.1c-1.4 1.2-2.7 2.5-3.9 3.8zm8.1-7.3l-.9-1.2c1.5-1.1 3-2.2 4.6-3.2l.8 1.2c-1.6 1.1-3.1 2.1-4.5 3.2zm67-5.4c-1.6-.8-3.3-1.6-4.9-2.3l.5-1.4c1.7.7 3.4 1.5 5 2.4l-.6 1.3zm-57.8-.4L34.8 7c1.7-.8 3.4-1.6 5.1-2.3l.6 1.3c-1.7.7-3.4 1.5-5 2.3zm47.7-3.8c-1.7-.6-3.5-1-5.3-1.4l.3-1.4c1.8.4 3.6.9 5.4 1.5l-.4 1.3zm-37.6-.3l-.4-1.4c1.8-.5 3.6-1 5.4-1.4l.3 1.4c-1.8.4-3.6.9-5.3 1.4zm27-2.2c-1.8-.2-3.6-.4-5.4-.5l.1-1.5c1.9.1 3.7.3 5.6.5L72.6 2zm-16.3-.1L56.1.4c1.8-.2 3.7-.4 5.6-.4l.1 1.5c-1.9 0-3.7.2-5.5.4z"
              ></path>
            </svg>
          );
          break;
        case 79:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <g fill="#0b5a9d">
                <path d="M63.877 125.392c-32.671 0-60.37-27.594-60.627-60.469a59.94 59.94 0 0117.506-42.759 60.939 60.939 0 0143.279-18.36 60.081 60.081 0 0142.647 17.71 60.145 60.145 0 0118.157 42.522c.151 33.604-26.864 61.021-60.469 61.363h-.493zm.19-118.406a57.774 57.774 0 00-41.01 17.427 56.775 56.775 0 00-16.63 40.484c.236 31.159 26.495 57.286 57.43 57.286h.414c31.863-.29 57.504-26.266 57.385-58.128a56.97 56.97 0 00-17.217-40.273A56.7 56.7 0 0064.068 6.986z"></path>
                <path d="M16.89 82.383V46.865h8.64v3.183h-4.583v29.218h4.584v3.183l-8.642-.066zM46.213 64.272c0 6.478-3.933 10.167-9.26 10.167s-8.877-4.156-8.877-9.831c0-5.939 3.722-10.121 9.167-10.121s8.97 4.36 8.97 9.785zm-14.415.29c0 3.932 1.973 7.05 5.36 7.05s5.333-3.183 5.333-7.195c0-3.643-1.796-7.083-5.334-7.083s-5.392 3.328-5.392 7.307l.033-.08zM49.205 55.158c1.69-.29 3.407-.434 5.123-.428a9.17 9.17 0 015.537 1.223 4.062 4.062 0 012.006 3.61 4.48 4.48 0 01-3.183 4.183c2.269.46 3.9 2.46 3.9 4.775a5.016 5.016 0 01-1.861 3.978c-1.368 1.21-3.643 1.796-7.162 1.796a33.966 33.966 0 01-4.327-.257l-.033-18.88zm3.499 7.622h1.795c2.433 0 3.801-1.145 3.801-2.782 0-1.638-1.368-2.644-3.61-2.644a9.779 9.779 0 00-2.006.145l.02 5.28zm0 8.878c.618.065 1.243.092 1.86.078 2.263 0 4.262-.861 4.262-3.182s-1.94-3.183-4.373-3.183h-1.75v6.287zM69.54 54.901h3.517v12.554c0 5.334-2.577 7.116-6.365 7.116a9.313 9.313 0 01-2.973-.507l.428-2.834c.703.224 1.44.335 2.183.349 2.006 0 3.183-.921 3.183-4.262l.026-12.416zM83.067 65.357v2.434h-7.32v-2.434h7.32zM100.158 73.63c-1.585.632-3.281.921-4.978.862-6.129 0-9.851-3.834-9.851-9.707-.283-5.353 3.827-9.923 9.18-10.206.375-.02.757-.02 1.131.006a11.112 11.112 0 014.775.862l-.783 2.801a9.476 9.476 0 00-3.788-.75c-3.932 0-6.76 2.467-6.76 7.116 0 4.235 2.499 6.971 6.734 6.971a9.806 9.806 0 003.834-.717l.506 2.762zM111.2 46.766v35.61h-8.641v-3.182h4.583V49.949h-4.583v-3.183h8.64z"></path>
              </g>
            </svg>
          );
          break;
        case 68:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <defs>
                <path
                  id="php-original-a"
                  d="M64.026 96.076c33.676 0 60.976-14.361 60.976-32.076s-27.3-32.075-60.976-32.075S3.051 46.285 3.051 64s27.3 32.076 60.975 32.076"
                ></path>
              </defs>
              <defs>
                <path
                  id="php-original-c"
                  d="M2.998 31.924h122.004v64.1H2.998z"
                ></path>
              </defs>
              <clipPath id="php-original-b">
                <use xlinkHref="#php-original-a" overflow="visible"></use>
              </clipPath>
              <clipPath id="php-original-d" clip-path="url(#php-original-b)">
                <use xlinkHref="#php-original-c" overflow="visible"></use>
              </clipPath>
              <g clip-path="url(#php-original-d)">
                <defs>
                  <path
                    id="php-original-e"
                    d="M2.998 31.924h122.004v64.1H2.998z"
                  ></path>
                </defs>
                <clipPath id="php-original-f">
                  <use xlinkHref="#php-original-e" overflow="visible"></use>
                </clipPath>
                <g clip-path="url(#php-original-f)">
                  <image
                    overflow="visible"
                    width="1160"
                    height="609"
                    xlinkHref="data:image/jpeg;base64,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 Hnfonne2dsuvF1nS2yxbKurKXWdRdZ0tssaspqyy6sprWdRdZ0assutZ1F1nRrWdS61nRrWdRrWd S63jZrNkYzrNZzrNmc6yZzrNZzrNZliZzrNTOsmZZZnOskzrNTOs2TOskllZliZlhJZWZYkllZli SWVmWJJZYEoS0KEBKlkAoRAqWQESWKlkJYJZEliyWElkSWGZZGc6yuc6yZxvEYzrKgAO/wDQO/nc QmPOvRfOts9WXXi6zV1ZYtlXVlLrOous1dWWNWU1ZZdWU1rNjWs6LrOpdazTWs6jWs2XesaNazY/ S40u7mxqSFzcjFzZJckzc1M6zWZcpM6zWZYZlzZM6zUzrJM6zZM6ySXNSWJmWEzrNSWJM6zUliTO s1JYkllgShLQoQEqWQChECpZARJYqWQlglkSWLJYSWRJcklzLM6yZzrJjOsxjOsqAA7/ANA7+dxC Y869F862z1c614tlW6zotljVzpbZY1ZV1c6i6zous6i6zpdXOo1c6NazZdazo1c6jWsal1rGjdzY 3rFN3FXTIuURlBm5qRCZubGbDMuamdZqZsSZsrMsMyyzMsJmypnWUksJmypLEmbKksSZsqSxJLLA lCWhQgJUsgFCIFSyBISxUshLBLIksWSwksiZ1kmdZlmdZM51kxnWIznWVAAd/wCgd/O4hMedei+d bZ2y7caudRbKurnUWyrqyxdZ0Wyy6spq51GrnS6udRq50a1jUutY0bubGtY0bubLrWKbuKbZsVBZ IWSUiDNzUiJJc1IhM2WTNhM2VM2EzZZM6ySWVmWJM6zUlhM2JJZUzYkllSWJIWBKEtChASpZAKEQ SpYJZCWKlkJYQRJYslhJZEzYTOsyzNhnOsmMbxGc6yoADv8A0Dv53EJjzr0XzrbO2Xbi2WNWVbZY 1c6W6zY1c6NXNXWs2NXOjVzqXVzo1c6jVzTdzZd3NN3NjWsU3cpds01cU0zDUgskLJKREkQZuaZu RmyyZsJmypmxJEqS5GbKkRJLKmbCSxJnWaksSSypmxILAlCVSUAJYIBUsgJUsEshLFSyECSyEsWS yJnWSSwzLJc51kmNZM41mMSxQAHf+gd/O4hMec+jec7Z3Wbtxq51Fsq6ubGrKurmmrLGrnS3WbGr nRq5sbuautZsa1jRq5q7ubG7im7ixu4ptku2UaZGpJWpIiIWSCJTKDNlkiEiVJcjNlkiElhM2WSX JJZUlyjNlSWEiJJZZJYQWBKssoShALBASpYBLAJZCWKlkQElkILJZEzYSXJJZLnOsmc6yYzrEZli gAO/9A7+dxCY859G842z1ZduLZYus1dWWLrNXVzTVljVzpbZY1c01rNNXOpdXNN3Go1c01rFl3cU 3cU2zY0g0yNMjUgsgskqyQuUESxEJEpmwkRJLmmbCS5pmxJLkZsqSxJEqSxJLKkuUZsAAFiWiUJQ IJQhLAJYBCIFgiAkslksESJLCZ1kmdZlzLkmNZMZ1mXAAAHf+gd/O4hJ8Q65U6igoqgBQUFEUCiq CgoKQoAUFABQAAAIAEAgAQEFQEBAQIgICFICABAkBBSAAEAoCkQAAKAEQAAEAEQALAQEBBEgIEgQ AAD64fTB/9oACAECAAEFAP8AljGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGR kZGMYxjPu/8AnqV/z1K/46lf8dSv+OpX/HUr/jqV2fUrs+pXZ9Suz6ldl1K7LqV2XUrsupXZdSux 6ldj1K7HqV2PUrsepXY9Sux6ldj1K7HqV2PUrsepXY9Sux6ldj1K7HqV2PUrsepXY9Sux6ldj1K7 HqV/z1K//9oACAEDAAEFAL9HWta1rWta1rWta1rWta1rW/iL1KvUq9Sr1KvUr/rqV/11K/66lf8A XUr/AK6lf9dSv++pX/fUr/vqV/31K/76ldp1K7TqV2nUrtOpXadSu06ldp1K7TqV2nUrtOpXadSu 06ldp1K7TqV2nUrtOpXadSu06ldp1K7TqV2nUr/rqV//2gAIAQEAAQUA7S2dn675u9d83eu+bvXf N3rvm713zd655u9d83euebvXPN3rnm71zzd655u9c82euebPXPNnrnmz1zzZ655s9c82et+bPXPN nrnmz1zzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nn rfmz1vzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nnr fmz1vzZ635s9b82et+bPXPNnrnmz1zzZ635s9c82euebPXPNnrnmz1zzZ655s9c82euebvXPN3rn m71zzd655u9d83euebvXfN3rvm713zd675u9d83eu+bvXfOHr3nD17zh695w9e84evecPXvOXr/n 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 Qv4arxV4qqqqv0PjjwTte74nM4icTiczmJxETiJxOInGJGMYxjGMYxjGMYxixZxYs4vFXiqvFXm8 Veaq8Xm8VfwtVVXiqqqqr0/jjwTte7ROZzEROYicRE4nERE4icSJEnGMYxjGMYxjGMZxixZxV4qq vF4qrxVXiqqrzeavFX8JVVV4qqqqq9P448E7Xu+IiJzOYnE4iJxEREROIiIk6GJGMYxjGMYxixjO KsXirzV4qrxVXi8VebzVVeb+Gq8VVVVVVXp/HHgna93zOYicxOInERERERERERE5kScYxjGMYxjG cWLOaqqqqqqqqqrxV4q81V5vQq/havFVVVVVV6fxx4J2vd9CcRETicRE4iIiIiJxEREREScYxjGM YxjGMZxYqqqqqqqqqqqqqqvF4qqvTq/havFVVVVVV6fxx4J2vdxOZzERE4iIiIiIiIiIiIiIk4kS JGMYxjGMYsWc2Kqqqqqqqqqqqqq8VVVebzVVfwtXiqqqqqq9P448E7Xu4nM5iIicRERERERERERE REREiRIxjGMYxjFixVVVVVVVVVVVXiqqrxVVV5vNXir+Eq8VVVVVVXp/HHgnad3E5nM5icRERERE RERERERERESJxIxjGMWcVViqqqqqqqqqqqqqqrxV5vN5q8Vfwt4q8VVVVXp/HHgnad2iInM5icRO IiIiIiIiIiIiIiIiRIxjGMWLFVVVVVVVVVVVVVVXirxV5vNVV5q/hKvFVVVVVV6fxx4J2ndoiJxE 5icROIiIiIiIiIiIiIiIiREjGMWLFiqqqqqqqqqqqqqqrxV4q81eKqr0L+EvNVVVVVV6fxx4J2nd oiIiJzE4icREREREREREREREREREjFiqqqqqqqqqqqqqqqqrxV4q81VVVXoX8JeavFVVVV6fxx4J 2ndoiIiJzE4iIiIiIiIiIiIiIiIiIiIxVVVVVVVVVVVVVVVVVVVXirxVVV4q81fwlXirxVVVVen8 ceCdp3aIiIicxOIiIiIiIiIiIiIiIiIiIiVq1VVVVVVVVVVVVVVVVVVV4q8VVVVVeav4SrxV4qqq qvT+OPBO07tEROInMTiJxEREREREREREREREREStWrVVVVVVVVVVVVVVVVV4q8Veaqqqr0L+EvNV VVVVV6fxx4J2ndoiJzOYnETiIiIiIiIiIiIiIiIlRK1rVqrVVVVVVVVVVVVVVVXirxV5q8VVXmr+ EvNVVVVVV6fxx4J2ndxOInM5icROIiIiIiIiIiIiIiIiVK1rWtWrVVVVVVVVVVVVVVVXirxV5vNX i81fwlXiqqqqqq9P448E7Tu4nM5nMTiIiIiIiIiIiIiIiIiVLxrWta1rVq1VVVVVVVVVVVVVVVXi rzebzV4q/hKvFXiqqqq9P448E7Xu4nM5iIicRERERERERERERERESpWta1rWta1aqqqqqqqqqqqq qqqrxVVV5vNVVX8JV4qqqqqqvT+OPBO17tOZzEROYiIiIiJxEREREREvMrWta1rWtatbzaqqqqvF VVVVVeKq8VVVebzeKv4WrxVVVVVVen8ceCdr3fM5iInE5icRERERERERETiJeda1rWta1rW8W81V VVVVXiqqrxV5vFVV5vQv4arxVVVVVVen8ceCdr3fETmInMTiIiJxEREROIiIl6ErWta1rWta1rVq 3m1VVeKqqqrxVVV4q81eLxV5q/havFVVVVVV6fxx4J2vd8TmcziInETiIiInETiIiIlS861rWta1 rWta1vNq1VVVVV4qqqqqrxVXi81eL+JqqqqqqqqvT+OPBO17tE5nMRE6ETiJxE4iInE5iVK3jWta 1rWta1rebWreKvFVVVVVV4q9GqvN5q8VfwlVVXiqqqqr0/jjwTte7nTiJzE4nMTiInERE4nMrWta 1rWta1rWta1a1vN4qqvFVeKvN4q81V6dX8LV4q8VVVVVen8ceCdr3c6E4nM5iczmJxETmcTjW8a1 rWta1rWta1rWta3i3i8W81V4q8VV4qrxebxV5v4arxV4qqqqv0PjjwT/AKz/AOPtV7We1ntd7Ye2 Htl7ae2ntt7ce3Ht17ee3nt9+gfoX6F+ifo36N+kfpX6Z+mfp36h+ofqX6p+qfq36x+sfrX61+uf rn65+vfr369+vfr369+vfrn65+ufrX61+sfrH6t+qfqn6l+ofqH6d+mfpn6V+kfo36N+ifoX6F+g e33t57ee3Xtx7ce23tp7ae2Xth7Ye13tZ7We1XtR7Ue03tR7Ue1HtR7Ue1HtR7Ue1HtR7Ue1HtR7 Ue1HtN7Te03tN7Te0ntJ7Se0ntF7Re0XtB7Qe0Hs97Pezns57NezHst7Leynsl7Iex3sZ7Few3sJ 7Af+fv8Az9/5+/8AP3/n7/z9/wCfvJfQ/wD6n//aAAgBAgIGPwD4YIIIIIIIIIIIIIIIIIIIIIII IIIWLop0U6KdFOinRTop0U6KdFOinRTop0U6KdFPxFPxFPxFfbiK+3EU/EU/EU/EU/EU/EU/EU/E U/EU/EU/EU/EU/EU/EU/EU/EU/8AX+T0PQ2bNmzZs2bNGjRo0aNGjRZZZZZo0aNGjRo0bNmzZs2b Nnoeh6Hoeh6GzZs2bNGjRo0WWWWWX8n/2gAIAQMCBj8A/ZcyKZFMimRTIpkUyKZFMimRTIpkUyKZ FMimRTIpkUyKZFMimRTIpkUyKZFMiq6ZMmTJkyZKKKKKKKKKKK+CiiiiiiiiijJkyZMmTJkwYMmT JkyUUUUUUV+D/9oACAEBAQY/AFGX9kRmThV7jyFXuPIVe48hV7jyFUt5CqW8hVLeQqlvIVS3kKpb yFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLgKpcBVLeQqlvIV S3kKpbyFUt5CqW8hVLeQqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuA qlwFUuAqlwFUuAqlwFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqXAVS4CqW8hVLeQqlvIVS3kKpbyFU t5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLeQq9x5Cq3HkKvceQq 9x5Cr3HkKvceQq9x5Cr3HkKvceWAq9x5YCr3HlgKvceWAq9x5YCr3HlgKvceWArNx5YCs3HlgKzc eWArNx5YCs3HlgKzceWArNx5YCs3HlgK3ceWArdx5YCt3HlgK3ceWArd15YCu3XlgK7deWArt15Y Cu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7 deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15 YCu3XlgK7deWArt15YDtL7u8rfUjcSSTV/gjSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7r Ee5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sX lO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucq dLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR 7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU 7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0 sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHu cqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5Tu sR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSx eU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5y p0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6x HucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSw/wAv6+P5/wCCTESYiTESYiTE SYiTESYiTESoiVESoiVESoiVESoiVESoiVES4iXES4iXES4iXES4iXES4jwiPCI8IjwiPCI8B4Dw HgPAeA8B4jxHiPEeI8R4jwHgPAeA8B4DwHgPCI8IjwiPCIlxEuIlxEuIlxEuIlxEuIlxEqIlREqI lREqIlREqIlREqIlREmIkxEmIkxEmIkxEmIkxEmIkxEiIkREiIkREiIkREiIkREiIkREiIkREiIk REiIkREiIkREiIkREiIkREiIkREiIkREiIkREiIkREiIkREiIkREiI9eI9eI9eI9eI9eI9eI9eI9 eI9eI9aI9aI9b7D1vsPW+w9X7D1fsPV+w9X7D1fsPV+w9X7Dd/8AF/X+v8i/b+r5+Py+P4+fn/TP /9k="
                    transform="matrix(.106 0 0 -.106 2.825 96.168)"
                  ></image>
                </g>
              </g>
              <path
                fill="#6181B6"
                d="M64.026 93.694c32.36 0 58.594-13.295 58.594-29.694S96.387 34.306 64.026 34.306 5.433 47.601 5.433 64s26.233 29.694 58.593 29.694z"
              ></path>
              <path
                fill="#fff"
                d="M75.896 73.598l2.906-14.958c.656-3.377.11-5.896-1.62-7.486-1.677-1.54-4.523-2.288-8.703-2.288h-5.033l1.44-7.412a.955.955 0 00-.935-1.135h-6.947a.954.954 0 00-.936.771l-3.086 15.881c-.28-1.787-.973-3.323-2.079-4.591-2.038-2.332-5.261-3.515-9.58-3.515H27.856a.951.951 0 00-.935.771L20.674 81.78a.953.953 0 00.935 1.134h7.002a.953.953 0 00.936-.771l1.511-7.775h5.213c2.735 0 5.032-.296 6.827-.881 1.834-.596 3.522-1.607 5.011-3.001a15.364 15.364 0 002.96-3.676l-1.248 6.424a.95.95 0 00.935 1.134h6.947a.954.954 0 00.936-.771l3.429-17.645h4.767c2.031 0 2.626.404 2.787.578.147.159.452.718.11 2.48l-2.764 14.223a.95.95 0 00.935 1.134h7.058a.951.951 0 00.935-.769zm-32.208-12.36c-.437 2.242-1.259 3.842-2.444 4.755-1.205.927-3.132 1.397-5.727 1.397h-3.104l2.244-11.548h4.012c2.948 0 4.136.63 4.612 1.158.662.734.802 2.199.407 4.238zm61.916-8.858c-2.038-2.332-5.261-3.515-9.581-3.515H82.559a.952.952 0 00-.936.771L75.375 81.78a.953.953 0 00.935 1.134h7.003a.953.953 0 00.935-.771l1.512-7.775h5.212c2.735 0 5.033-.296 6.827-.881 1.835-.596 3.522-1.607 5.011-3.001 1.241-1.141 2.264-2.421 3.037-3.806a15.404 15.404 0 001.65-4.588c.797-4.094.16-7.363-1.893-9.712zm-7.262 8.858c-.437 2.242-1.259 3.842-2.444 4.755-1.204.927-3.131 1.397-5.727 1.397h-3.104l2.245-11.548h4.012c2.948 0 4.136.63 4.612 1.158.662.734.801 2.199.406 4.238z"
              ></path>
              <path
                fill="#000004"
                d="M38.67 54.89c2.66 0 4.434.491 5.32 1.474.885.982 1.097 2.668.633 5.057-.484 2.488-1.416 4.264-2.798 5.328-1.382 1.063-3.485 1.595-6.308 1.595h-4.26l2.614-13.453h4.799v-.001zM21.609 81.962h7.002l1.661-8.546h5.998c2.646 0 4.823-.277 6.532-.834 1.709-.556 3.263-1.488 4.661-2.797a14.369 14.369 0 002.85-3.569c.727-1.3 1.242-2.734 1.547-4.305.741-3.811.182-6.778-1.676-8.904s-4.812-3.189-8.862-3.189H27.856l-6.247 32.144zm35.394-40.691h6.947l-1.661 8.546h6.189c3.894 0 6.58.68 8.059 2.037 1.479 1.359 1.921 3.561 1.33 6.603l-2.906 14.959h-7.058l2.763-14.223c.314-1.618.199-2.722-.347-3.311-.546-.587-1.708-.882-3.485-.882h-5.553l-3.578 18.416h-6.947l6.247-32.145zM93.324 54.89c2.66 0 4.434.491 5.319 1.474.887.982 1.097 2.668.634 5.057-.484 2.488-1.417 4.264-2.799 5.328-1.382 1.063-3.484 1.595-6.308 1.595h-4.259l2.614-13.453h4.799v-.001zm-17.06 27.072h7.002l1.661-8.546h5.997c2.646 0 4.823-.277 6.532-.834 1.71-.556 3.264-1.488 4.661-2.797a14.35 14.35 0 002.851-3.569c.726-1.3 1.242-2.734 1.547-4.305.74-3.811.182-6.778-1.676-8.904s-4.812-3.189-8.863-3.189H82.511l-6.247 32.144z"
              ></path>
            </svg>
          );
          break;
        case 70:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <linearGradient
                id="python-original-a"
                gradientUnits="userSpaceOnUse"
                x1="70.252"
                y1="1237.476"
                x2="170.659"
                y2="1151.089"
                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
              >
                <stop offset="0" stop-color="#5A9FD4"></stop>
                <stop offset="1" stop-color="#306998"></stop>
              </linearGradient>
              <linearGradient
                id="python-original-b"
                gradientUnits="userSpaceOnUse"
                x1="209.474"
                y1="1098.811"
                x2="173.62"
                y2="1149.537"
                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
              >
                <stop offset="0" stop-color="#FFD43B"></stop>
                <stop offset="1" stop-color="#FFE873"></stop>
              </linearGradient>
              <path
                fill="url(#python-original-a)"
                d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                transform="translate(0 10.26)"
              ></path>
              <path
                fill="url(#python-original-b)"
                d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                transform="translate(0 10.26)"
              ></path>
              <radialGradient
                id="python-original-c"
                cx="1825.678"
                cy="444.45"
                r="26.743"
                gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop>
                <stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop>
              </radialGradient>
              <path
                opacity=".444"
                fill="url(#python-original-c)"
                d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
              ></path>
            </svg>
          );
          break;
        case 71:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <linearGradient
                id="python-original-a"
                gradientUnits="userSpaceOnUse"
                x1="70.252"
                y1="1237.476"
                x2="170.659"
                y2="1151.089"
                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
              >
                <stop offset="0" stop-color="#5A9FD4"></stop>
                <stop offset="1" stop-color="#306998"></stop>
              </linearGradient>
              <linearGradient
                id="python-original-b"
                gradientUnits="userSpaceOnUse"
                x1="209.474"
                y1="1098.811"
                x2="173.62"
                y2="1149.537"
                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
              >
                <stop offset="0" stop-color="#FFD43B"></stop>
                <stop offset="1" stop-color="#FFE873"></stop>
              </linearGradient>
              <path
                fill="url(#python-original-a)"
                d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                transform="translate(0 10.26)"
              ></path>
              <path
                fill="url(#python-original-b)"
                d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                transform="translate(0 10.26)"
              ></path>
              <radialGradient
                id="python-original-c"
                cx="1825.678"
                cy="444.45"
                r="26.743"
                gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop>
                <stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop>
              </radialGradient>
              <path
                opacity=".444"
                fill="url(#python-original-c)"
                d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
              ></path>
            </svg>
          );
          break;
        case 80:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <defs>
                <linearGradient
                  id="r-original-a"
                  x1=".741"
                  x2="590.86"
                  y1="3.666"
                  y2="593.79"
                  gradientTransform="matrix(.2169 0 0 .14527 -.16 14.112)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#cbced0" offset="0"></stop>
                  <stop stop-color="#84838b" offset="1"></stop>
                </linearGradient>
                <linearGradient
                  id="r-original-b"
                  x1="301.03"
                  x2="703.07"
                  y1="151.4"
                  y2="553.44"
                  gradientTransform="matrix(.17572 0 0 .17931 -.16 14.112)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#276dc3" offset="0"></stop>
                  <stop stop-color="#165caa" offset="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M64 100.38c-35.346 0-64-19.19-64-42.863 0-23.672 28.654-42.863 64-42.863s64 19.19 64 42.863c0 23.672-28.654 42.863-64 42.863zm9.796-68.967c-26.866 0-48.646 13.119-48.646 29.303 0 16.183 21.78 29.303 48.646 29.303s46.693-8.97 46.693-29.303c0-20.327-19.827-29.303-46.693-29.303z"
                fill="url(#r-original-a)"
                fill-rule="evenodd"
              ></path>
              <path
                d="M97.469 81.033s3.874 1.169 6.124 2.308c.78.395 2.132 1.183 3.106 2.219a8.388 8.388 0 011.42 2.04l15.266 25.74-24.674.01-11.537-21.666s-2.363-4.06-3.817-5.237c-1.213-.982-1.73-1.331-2.929-1.331h-5.862l.004 28.219-21.833.009V41.26h43.844s19.97.36 19.97 19.359c0 18.999-19.082 20.413-19.082 20.413zm-9.497-24.137l-13.218-.009-.006 12.258 13.224-.005s6.124-.019 6.124-6.235c0-6.34-6.124-6.009-6.124-6.009z"
                fill="url(#r-original-b)"
                fill-rule="evenodd"
              ></path>
            </svg>
          );
          break;
        case 72:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <linearGradient
                id="ruby-original-a"
                gradientUnits="userSpaceOnUse"
                x1="157.08"
                y1="2382.05"
                x2="131.682"
                y2="2426.892"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#FB7655"></stop>
                <stop offset="0" stop-color="#FB7655"></stop>
                <stop offset=".41" stop-color="#E42B1E"></stop>
                <stop offset=".99" stop-color="#900"></stop>
                <stop offset="1" stop-color="#900"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-a)"
                d="M97.078 83.214L28.34 124.031l89.003-6.04 6.855-89.745z"
              ></path>
              <linearGradient
                id="ruby-original-b"
                gradientUnits="userSpaceOnUse"
                x1="169.731"
                y1="2419.72"
                x2="136.998"
                y2="2441.685"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#871101"></stop>
                <stop offset="0" stop-color="#871101"></stop>
                <stop offset=".99" stop-color="#911209"></stop>
                <stop offset="1" stop-color="#911209"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-b)"
                d="M117.488 117.93l-7.649-52.799-20.837 27.514z"
              ></path>
              <linearGradient
                id="ruby-original-c"
                gradientUnits="userSpaceOnUse"
                x1="143.542"
                y1="2380.69"
                x2="110.81"
                y2="2402.655"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#871101"></stop>
                <stop offset="0" stop-color="#871101"></stop>
                <stop offset=".99" stop-color="#911209"></stop>
                <stop offset="1" stop-color="#911209"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-c)"
                d="M117.592 117.93l-56.044-4.399-32.91 10.385z"
              ></path>
              <linearGradient
                id="ruby-original-d"
                gradientUnits="userSpaceOnUse"
                x1="74.817"
                y1="2435.622"
                x2="79.891"
                y2="2402.644"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#fff"></stop>
                <stop offset="0" stop-color="#fff"></stop>
                <stop offset=".23" stop-color="#E57252"></stop>
                <stop offset=".46" stop-color="#DE3B20"></stop>
                <stop offset=".99" stop-color="#A60003"></stop>
                <stop offset="1" stop-color="#A60003"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-d)"
                d="M28.717 123.928l14.001-45.867-30.81 6.588z"
              ></path>
              <linearGradient
                id="ruby-original-e"
                gradientUnits="userSpaceOnUse"
                x1="109.719"
                y1="2466.413"
                x2="111.589"
                y2="2432.757"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#fff"></stop>
                <stop offset="0" stop-color="#fff"></stop>
                <stop offset=".23" stop-color="#E4714E"></stop>
                <stop offset=".56" stop-color="#BE1A0D"></stop>
                <stop offset=".99" stop-color="#A80D00"></stop>
                <stop offset="1" stop-color="#A80D00"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-e)"
                d="M88.996 92.797l-12.882-50.46-36.866 34.558z"
              ></path>
              <linearGradient
                id="ruby-original-f"
                gradientUnits="userSpaceOnUse"
                x1="140.691"
                y1="2497.523"
                x2="146.289"
                y2="2473.401"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#fff"></stop>
                <stop offset="0" stop-color="#fff"></stop>
                <stop offset=".18" stop-color="#E46342"></stop>
                <stop offset=".4" stop-color="#C82410"></stop>
                <stop offset=".99" stop-color="#A80D00"></stop>
                <stop offset="1" stop-color="#A80D00"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-f)"
                d="M121.275 43.047L86.426 14.585l-9.704 31.373z"
              ></path>
              <linearGradient
                id="ruby-original-g"
                gradientUnits="userSpaceOnUse"
                x1="123.6"
                y1="2506.018"
                x2="147.719"
                y2="2518.077"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#fff"></stop>
                <stop offset="0" stop-color="#fff"></stop>
                <stop offset=".54" stop-color="#C81F11"></stop>
                <stop offset=".99" stop-color="#BF0905"></stop>
                <stop offset="1" stop-color="#BF0905"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-g)"
                d="M104.978 4.437L84.481 15.764 71.551 4.285z"
              ></path>
              <linearGradient
                id="ruby-original-h"
                gradientUnits="userSpaceOnUse"
                x1="53.674"
                y1="2444.028"
                x2="55.66"
                y2="2424.153"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#fff"></stop>
                <stop offset="0" stop-color="#fff"></stop>
                <stop offset=".31" stop-color="#DE4024"></stop>
                <stop offset=".99" stop-color="#BF190B"></stop>
                <stop offset="1" stop-color="#BF190B"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-h)"
                d="M3.802 100.034l8.586-15.659L5.442 65.72z"
              ></path>
              <path
                fill="#fff"
                d="M4.981 65.131l6.987 19.821 30.365-6.812L77 45.922l9.783-31.075L71.38 3.969l-26.19 9.802c-8.252 7.675-24.263 22.86-24.84 23.146-.573.291-10.575 19.195-15.369 28.214z"
              ></path>
              <linearGradient
                id="ruby-original-i"
                gradientUnits="userSpaceOnUse"
                x1="40.026"
                y1="2418.781"
                x2="133.345"
                y2="2514.739"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#BD0012"></stop>
                <stop offset="0" stop-color="#BD0012"></stop>
                <stop offset=".07" stop-color="#fff"></stop>
                <stop offset=".17" stop-color="#fff"></stop>
                <stop offset=".27" stop-color="#C82F1C"></stop>
                <stop offset=".33" stop-color="#820C01"></stop>
                <stop offset=".46" stop-color="#A31601"></stop>
                <stop offset=".72" stop-color="#B31301"></stop>
                <stop offset=".99" stop-color="#E82609"></stop>
                <stop offset="1" stop-color="#E82609"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-i)"
                d="M29.519 29.521c17.882-17.73 40.937-28.207 49.785-19.28 8.843 8.926-.534 30.62-18.418 48.345-17.884 17.725-40.653 28.779-49.493 19.852-8.849-8.92.242-31.191 18.126-48.917z"
              ></path>
              <linearGradient
                id="ruby-original-j"
                gradientUnits="userSpaceOnUse"
                x1="111.507"
                y1="2409.102"
                x2="83.398"
                y2="2416.039"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#8C0C01"></stop>
                <stop offset="0" stop-color="#8C0C01"></stop>
                <stop offset=".54" stop-color="#990C00"></stop>
                <stop offset=".99" stop-color="#A80D0E"></stop>
                <stop offset="1" stop-color="#A80D0E"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-j)"
                d="M28.717 123.909l13.89-46.012 46.135 14.82c-16.68 15.642-35.233 28.865-60.025 31.192z"
              ></path>
              <linearGradient
                id="ruby-original-k"
                gradientUnits="userSpaceOnUse"
                x1="159.785"
                y1="2442.837"
                x2="134.814"
                y2="2465.217"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#7E110B"></stop>
                <stop offset="0" stop-color="#7E110B"></stop>
                <stop offset=".99" stop-color="#9E0C00"></stop>
                <stop offset="1" stop-color="#9E0C00"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-k)"
                d="M77.062 45.831l11.844 46.911c13.934-14.65 26.439-30.401 32.563-49.883l-44.407 2.972z"
              ></path>
              <linearGradient
                id="ruby-original-l"
                gradientUnits="userSpaceOnUse"
                x1="168.959"
                y1="2483.901"
                x2="156.521"
                y2="2497.199"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#79130D"></stop>
                <stop offset="0" stop-color="#79130D"></stop>
                <stop offset=".99" stop-color="#9E120B"></stop>
                <stop offset="1" stop-color="#9E120B"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-l)"
                d="M121.348 43.097c4.74-14.305 5.833-34.825-16.517-38.635l-18.339 10.13 34.856 28.505z"
              ></path>
              <path
                fill="#9E1209"
                d="M3.802 99.828c.656 23.608 17.689 23.959 24.945 24.167l-16.759-39.14-8.186 14.973z"
              ></path>
              <radialGradient
                id="ruby-original-m"
                cx="138.703"
                cy="2464.789"
                r="30.601"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#A80D00"></stop>
                <stop offset="0" stop-color="#A80D00"></stop>
                <stop offset=".99" stop-color="#7E0E08"></stop>
                <stop offset="1" stop-color="#7E0E08"></stop>
              </radialGradient>
              <path
                fill="url(#ruby-original-m)"
                d="M77.128 45.904c10.708 6.581 32.286 19.798 32.723 20.041.68.383 9.304-14.542 11.261-22.976l-43.984 2.935z"
              ></path>
              <radialGradient
                id="ruby-original-n"
                cx="96.325"
                cy="2424.465"
                r="40.679"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#A30C00"></stop>
                <stop offset="0" stop-color="#A30C00"></stop>
                <stop offset=".99" stop-color="#800E08"></stop>
                <stop offset="1" stop-color="#800E08"></stop>
              </radialGradient>
              <path
                fill="url(#ruby-original-n)"
                d="M42.589 77.897l18.57 35.828c10.98-5.955 19.579-13.211 27.454-20.983L42.589 77.897z"
              ></path>
              <linearGradient
                id="ruby-original-o"
                gradientUnits="userSpaceOnUse"
                x1="67.509"
                y1="2393.115"
                x2="57.373"
                y2="2427.506"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#8B2114"></stop>
                <stop offset="0" stop-color="#8B2114"></stop>
                <stop offset=".43" stop-color="#9E100A"></stop>
                <stop offset=".99" stop-color="#B3100C"></stop>
                <stop offset="1" stop-color="#B3100C"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-o)"
                d="M11.914 84.904l-2.631 31.331c4.964 6.781 11.794 7.371 18.96 6.842-5.184-12.9-15.538-38.696-16.329-38.173z"
              ></path>
              <linearGradient
                id="ruby-original-p"
                gradientUnits="userSpaceOnUse"
                x1="145.272"
                y1="2507.076"
                x2="167.996"
                y2="2497.045"
                gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
              >
                <stop offset="0" stop-color="#B31000"></stop>
                <stop offset="0" stop-color="#B31000"></stop>
                <stop offset=".44" stop-color="#910F08"></stop>
                <stop offset=".99" stop-color="#791C12"></stop>
                <stop offset="1" stop-color="#791C12"></stop>
              </linearGradient>
              <path
                fill="url(#ruby-original-p)"
                d="M86.384 14.67l36.891 5.177c-1.969-8.343-8.015-13.727-18.32-15.41L86.384 14.67z"
              ></path>
            </svg>
          );
          break;
        case 73:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path
                d="M62.271 10.88c-.189.11-.982 1.248-1.763 2.529-1.96 3.217-1.982 3.219-4.615.448-1.713-1.802-2.127-2.132-2.679-2.128-.359.002-.812.124-1.008.271-.195.147-.748 1.317-1.228 2.6-1.099 2.939-1.152 3.034-1.761 3.151-.375.071-1.097-.331-2.828-1.574-1.278-.919-2.532-1.67-2.786-1.67-1.054 0-1.351.576-1.853 3.593-.638 3.836-.616 3.823-4.074 2.252-1.396-.633-2.72-1.152-2.943-1.152-.223 0-.646.24-.939.533-.532.533-.533.535-.388 3.468l.146 2.936-.555.297c-.492.263-.831.231-3.009-.284-2.843-.671-3.443-.653-4.019.122l-.421.566.565 2.421c.31 1.331.609 2.613.665 2.848.055.234-.04.609-.212.832-.284.367-.586.4-3.217.36-4.453-.07-4.706.312-2.866 4.328.585 1.275 1.064 2.433 1.064 2.572 0 .734-.585 1.001-3.098 1.411-1.406.229-2.628.417-2.716.417-.088 0-.352.192-.586.426-.765.765-.548 1.483 1.187 3.932 2.161 3.05 2.157 3.061-1.413 4.427-4.06 1.553-4.142 1.936-1.051 4.868 2.879 2.73 2.882 2.69-.377 4.739-2.469 1.551-2.507 1.588-2.57 2.429-.076 1.023-.058 1.041 2.89 2.842 2.915 1.78 2.915 1.834.054 4.541-3.077 2.91-2.982 3.335 1.081 4.868 3.55 1.339 3.555 1.355 1.39 4.405-1.227 1.729-1.618 2.449-1.618 2.983 0 .999.52 1.254 3.627 1.776 2.617.441 3.2.7 3.2 1.422 0 .148-.48 1.316-1.067 2.594-1.826 3.977-1.618 4.308 2.704 4.308 4.025 0 3.918-.123 3.051 3.507-.654 2.736-.664 3.26-.072 3.851.453.454 1.307.403 3.978-.236 2.04-.487 2.398-.521 2.871-.268l.54.289-.146 2.935c-.145 2.934-.144 2.936.388 3.469.293.293.722.533.952.533.23 0 1.554-.516 2.943-1.147 3.447-1.565 3.425-1.578 4.061 2.246.504 3.031.798 3.594 1.874 3.594.267 0 1.494-.72 2.728-1.6 2.167-1.546 2.729-1.788 3.306-1.421.149.094.727 1.364 1.284 2.822.819 2.144 1.119 2.702 1.575 2.92.868.416 1.405.082 3.445-2.14 2.463-2.683 2.564-2.67 4.575.589 2.221 3.598 2.796 3.59 5.073-.073 1.962-3.156 1.939-3.154 4.591-.384 1.761 1.838 2.136 2.131 2.73 2.131.379 0 .832-.142 1.005-.316.174-.174.75-1.459 1.28-2.855.53-1.397 1.079-2.613 1.221-2.703.561-.357 1.142-.106 3.306 1.43 1.274.905 2.473 1.6 2.758 1.6 1.058 0 1.44-.751 1.88-3.703.376-2.517.452-2.758.947-3.009.487-.247.779-.164 3.063.873 1.389.63 2.713 1.146 2.943 1.146.23 0 .666-.247.967-.549l.549-.548-.151-2.815c-.144-2.688-.131-2.832.298-3.22.441-.399.486-.397 2.952.166 2.986.682 3.543.7 4.104.139.548-.548.542-.668-.208-3.831-.841-3.548-.954-3.422 3.088-3.422 2.755 0 3.062-.039 3.413-.426.586-.648.447-1.39-.732-3.903-.595-1.266-1.078-2.418-1.074-2.56.02-.747.607-1.002 3.32-1.443 1.66-.269 2.902-.581 3.127-.784.754-.681.477-1.567-1.244-3.98-2.157-3.024-2.148-3.053 1.306-4.326 4.136-1.524 4.254-2.032 1.159-4.973-2.867-2.724-2.868-2.709.272-4.637 3.796-2.33 3.802-2.855.067-5.173-3.212-1.993-3.21-1.965-.331-4.699 3.088-2.934 3.004-3.318-1.057-4.871-3.584-1.371-3.595-1.405-1.417-4.394 1.297-1.78 1.618-2.371 1.618-2.981 0-1.066-.478-1.305-3.622-1.813-2.627-.424-3.205-.682-3.205-1.429 0-.142.48-1.285 1.067-2.542 1.149-2.461 1.31-3.446.66-4.035-.349-.316-.817-.361-3.321-.32-2.62.044-2.955.007-3.318-.358-.397-.399-.393-.455.227-3.042.76-3.17.763-3.247.138-3.834-.634-.596-1.03-.586-3.941.099-2.121.5-2.472.533-2.954.275l-.547-.293.151-2.926.152-2.925-.547-.547c-.301-.301-.728-.547-.95-.547-.221 0-1.538.523-2.926 1.161-2.318 1.067-2.567 1.138-3.068.876-.5-.262-.583-.52-1.01-3.127-.493-3.016-.798-3.603-1.869-3.603-.254 0-1.513.755-2.798 1.678-2.11 1.516-2.393 1.659-2.919 1.476-.435-.152-.688-.483-.997-1.306-.229-.606-.667-1.774-.975-2.595-.622-1.656-.969-2.027-1.901-2.027-.52 0-.991.374-2.679 2.127-2.653 2.756-2.663 2.755-4.614-.445-.78-1.279-1.595-2.421-1.812-2.537-.488-.262-1.062-.261-1.511.002m2.418 9.635c2.311 1.645 1.082 5.512-1.752 5.512-2.75 0-4.135-3.313-2.171-5.194 1.108-1.062 2.697-1.191 3.923-.318m-2.906 10.214c1.515.576 2.137.23 5.596-3.104l2.599-2.506 1.1.146c3.45.458 10.312 3.472 14.255 6.261 3.623 2.564 8.438 7.786 10.49 11.377l.439.769-1.944 4.38c-1.07 2.409-1.945 4.633-1.945 4.944 0 .717.47 1.851.923 2.226.191.159 2.006 1.033 4.033 1.942l3.684 1.654.145.937c.187 1.221.212 4.22.042 5.072l-.133.666h-2.103c-2.439 0-2.251-.218-2.383 2.774-.096 2.169-.62 3.368-1.812 4.144-1.942 1.267-5.149 1.037-6.509-.466-.209-.231-.615-1.392-.903-2.581-.841-3.473-1.971-5.423-4.241-7.32-.717-.599-1.303-1.158-1.303-1.243 0-.084.788-.748 1.752-1.473 3.51-2.646 5.528-5.726 5.75-8.777.423-5.819-4.213-11.243-11.109-13.001-1.635-.417-2.333-.43-22.56-.43-11.48 0-20.873-.075-20.873-.166 0-.215 2.551-2.691 4.054-3.933 4.127-3.412 9.488-6.097 15.04-7.531l1.92-.497 2.728 2.766c1.501 1.521 2.972 2.857 3.268 2.97M27.432 48.526c1.257.823 1.772 2.891 1.03 4.134-1.148 1.924-4.056 2.005-5.205.145-1.671-2.702 1.547-6.001 4.175-4.279m74.05.105c3.288 2.005.74 6.937-2.78 5.38-2.35-1.04-2.425-4.252-.127-5.424.959-.489 2.061-.472 2.907.044M37.12 60.907v12.266H26.276l-.43-1.866c-.846-3.675-1.202-7.477-.989-10.591l.149-2.188 3.728-1.672c2.339-1.048 3.843-1.847 4.037-2.144.848-1.293.767-2.217-.423-4.845l-.556-1.227h5.328v12.267m31.22-11.733c2.322.604 3.549 1.833 3.552 3.556.002 1.265-.625 2.059-2.18 2.761-1.101.498-1.276.51-8.219.578l-7.093.068v-7.284h6.355c4.964 0 6.625.07 7.585.321m-2.396 17.602c1.151.32 2.512 1.32 3.21 2.359.733 1.092 1.162 2.512 2.178 7.216.858 3.976 1.41 5.276 2.956 6.968 1.915 2.095 1.471 2.014 11.037 2.014 4.581 0 8.328.073 8.328.163 0 .161-3.155 3.891-3.291 3.891-.039 0-1.687-.345-3.662-.767-5.577-1.191-5.778-1.051-7.058 4.926l-.823 3.84-.743.366c-1.24.612-5.27 1.872-7.359 2.302-3.452.71-7.209.95-10.511.671-5.629-.477-13.083-2.661-13.374-3.92-.062-.267-.437-1.995-.832-3.841-.396-1.846-.877-3.597-1.069-3.891-.923-1.408-1.894-1.495-6.164-.55-1.617.358-3.028.65-3.136.65-.203 0-3.204-3.47-3.204-3.704 0-.073 7.128-.158 15.84-.188l15.84-.054.057-5.627c.04-3.973-.015-5.714-.187-5.92-.192-.232-1.214-.293-4.91-.293H54.4V66.56l5.387.001c2.962.001 5.733.098 6.157.215M41.536 92.365c2.519 1.535 1.311 5.557-1.668 5.554-3.055-.002-4.187-3.987-1.584-5.575.861-.525 2.374-.515 3.252.021m46.126.168c1.235.905 1.646 2.788.881 4.042-2.009 3.295-7.033.676-5.355-2.791.825-1.703 3.018-2.317 4.474-1.251"
                fill-rule="evenodd"
              ></path>
            </svg>
          );
          break;
        case 81:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path
                d="M25 110.437V94.874h5.616c3.113 0 8.052-.203 11.03-.474l5.278-.406-7.038-1.894c-3.924-1.015-8.864-2.504-10.961-3.316L25 87.364V55.627h6.293c3.383 0 8.323-.203 10.894-.473l4.737-.406-8.323-2.233C34 51.366 29.128 49.809 27.639 49.2L25 47.982v-30.72l2.098-.473c1.15-.203 3.992-.406 6.293-.406 11.367 0 38.366-3.722 51.628-7.105 9.27-2.436 15.698-4.872 17.931-6.902 1.15-1.015 1.218-.406 1.218 14.548v15.63l-1.624 1.219-1.624 1.285 3.248 2.842v33.9l-1.624 1.218-1.624 1.286 3.248 2.842v33.9l-1.76 1.353c-1.894 1.489-9.202 3.993-17.524 6.09C71.892 121.737 40.157 126 29.33 126H25z"
                fill="#390d09"
              ></path>
              <g fill="#de3423">
                <path d="M25 110.572V95.077l11.842-.474c12.315-.473 21.45-1.488 34.847-3.789 15.225-2.639 30.246-7.375 31.803-10.082.406-.677.676 4.534.676 14.616v15.698l-1.76 1.353c-1.894 1.489-9.202 3.993-17.524 6.09C71.892 121.737 40.157 126 29.33 126H25zM25 71.327V55.83l11.842-.406c13.127-.541 23.344-1.691 36.877-4.195 15.157-2.842 28.96-7.443 29.976-9.947.203-.473.406 6.09.406 14.616.067 13.533-.068 15.698-1.083 16.78-2.368 2.64-20.638 7.376-39.449 10.286-11.435 1.76-30.381 3.79-35.66 3.79H25zM25 32.352V17.195l2.098-.406c1.15-.203 3.992-.406 6.293-.406 11.367 0 38.366-3.722 51.628-7.105 9.27-2.436 15.698-4.872 17.931-6.902 1.15-1.015 1.218-.406 1.218 14.48 0 14.548-.067 15.63-1.285 16.714-1.827 1.691-14.345 5.548-24.09 7.51-15.765 3.113-41.951 6.429-50.883 6.429H25z"></path>
              </g>
            </svg>
          );
          break;
          case 85:
            icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
            <path d="M121.172 62.878c0-34.048-26.473-61.648-59.135-61.648C29.379 1.23 2.9 28.83 2.9 62.878s26.478 61.651 59.136 61.651c32.662 0 59.135-27.603 59.135-61.651z" fill="#fff"></path><path d="M53.34 127.516c-13.91-2.461-25.842-8.812-35.703-19.006C9.25 99.842 3.477 88.928.853 76.763c-1.137-5.256-1.137-20.287 0-25.54C2.629 43 6.075 34.835 10.776 27.714 13.89 23 23.004 13.888 27.716 10.773c7.123-4.7 15.293-8.15 23.514-9.921 5.253-1.137 20.286-1.137 25.543 0C89.58 3.617 100.225 9.4 109.41 18.585c9.187 9.186 14.97 19.828 17.739 32.639 1.133 5.252 1.133 20.283 0 25.54-2.769 12.806-8.552 23.448-17.739 32.634-9.038 9.041-19.55 14.812-32.147 17.65-4.467 1.009-19.238 1.297-23.923.468zm11.567-12.772c0-4.194-.062-4.497-.907-4.497-.838 0-.904.288-.869 3.897.043 4.264.343 5.572 1.211 5.284.401-.132.565-1.491.565-4.684zm-6.757 1.445c1.192-1.196 1.542-1.92 1.542-3.209 0-1.316-.16-1.635-.763-1.519-.417.078-.919.76-1.114 1.507-.194.748-1 1.904-1.783 2.57-1.418 1.196-1.472 2.192-.125 2.192.386 0 1.394-.697 2.243-1.541zm14.943 1.047c.167-.269-.339-1.036-1.122-1.698-.786-.666-1.589-1.822-1.783-2.57-.199-.747-.701-1.429-1.118-1.507-.6-.116-.76.203-.76 1.519 0 2.609 3.743 5.942 4.783 4.256zm-20.66-8.146c0-.261-.634-.822-1.41-1.246-5.054-2.769-10.985-7.176-14.28-10.61-6.433-6.71-9.33-13.388-9.4-21.678-.048-5.54.665-8.43 3.364-13.605 2.609-5.004 5.631-8.78 13.95-17.421 9.287-9.653 11.425-12.2 13.038-15.533 1.148-2.367 1.3-3.231 1.46-8.235.199-6.215-.18-10.506-.927-10.506-.339 0-.401 1.612-.21 5.234.623 11.592-1.53 15.19-14.892 24.881-9.202 6.674-13.424 10.3-16.613 14.264-4.518 5.61-6.52 10.466-7.018 17.05-1.207 15.868 8.848 29.629 26.59 36.385 3.914 1.487 6.348 1.881 6.348 1.02zm30.7-1.285c6.098-2.543 10.736-5.615 15.11-10.007 6.667-6.701 9.439-12.967 9.856-22.242.362-8.134-1.402-13.515-6.437-19.61-3.45-4.173-7.162-7.16-17.174-13.81-13.47-8.953-16.633-12.516-16.633-18.746 0-1.658.3-4.006.662-5.217.623-2.068.608-3.493-.02-1.862-.591 1.546-1.947.837-2.675-1.41l-.7-2.152.264 2.04c.942 7.242 1.06 10.276.642 16.615-.564 8.57-1.616 14.427-4.51 25.076-2.87 10.572-3.387 14.404-3.029 22.476.3 6.825 1.254 11.93 3.474 18.593 2.06 6.183 2.445 6.654 6.235 7.624 2.083.533 4.058 1.433 5.627 2.566 1.476 1.067 2.952 1.76 3.781 1.775.748.012 3.237-.755 5.526-1.709zm-1.371-3.076c-.565-.565-.3-1.048 1.912-3.493 6.97-7.694 10.094-15.641 10.183-25.906.063-6.993-1.483-11.627-6.2-18.593-2.13-3.15-9.634-11.008-13.263-13.893-2.66-2.114-5.398-5.72-5.885-7.76-.494-2.068.892-1.523 2.496.98.787 1.227 2.493 3.03 3.79 4.004 1.296.977 5.132 3.835 8.524 6.355 11.664 8.671 16.859 16.066 18.023 25.672.678 5.556-.397 11.3-3.107 16.634-2.812 5.525-7.937 11.545-12.326 14.477-2.703 1.803-3.556 2.115-4.147 1.523zm-22.837.584c.133-.343-1.036-2.535-2.593-4.875-4.128-6.191-5.924-9.606-7.598-14.454-1.414-4.085-1.492-4.641-1.504-10.883-.015-9.431 1.005-12.422 8.49-24.85 7.057-11.718 8.015-16.258 7.22-34.286-.288-6.46-.611-11.838-.72-11.95-.744-.744-.904 1.172-.627 7.67.545 12.94-.292 20.147-3.018 26.062-1.858 4.026-3.938 7.075-9.53 14.002-7.788 9.637-9.985 14.75-9.946 23.126.031 5.743.806 9.275 3.127 14.185 2.512 5.32 7.135 10.689 12.93 15.011 2.667 1.994 3.391 2.231 3.77 1.242z" fill="#212178"></path>
            </svg>
            )
        case 82:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path d="M55.25 4.15c-.33.11-2.1.68-3.96 1.29-10 3.27-17.08 7.06-18.84 10.06-.67 1.15-.8 2.08-.4 3.01.44 1.05 1.25 1.84 3.47 3.41 1.04.73 2.81 2.26 3.96 3.41 5.5 5.49 8.17 12.22 7.87 19.83-.34 8.56-4.35 17.12-12.03 25.69-2.68 2.99-5.43 5.48-10.71 9.71-4.4 3.52-6.79 5.8-8.42 8.01-4.99 6.8-3.66 12.86 3.96 17.92 6.72 4.47 18.56 8.19 32.51 10.21 4.68.68 9.97 1.11 11.24.92l.89-.13 1.4-2.52c7.08-12.75 10.66-24.77 11.09-37.21.19-5.55-.51-12.12-1.7-15.96-.22-.69-.38-1.28-.35-1.3.02-.02 2-.61 4.4-1.33 12.61-3.76 24.81-6.72 34.89-8.47 1.96-.34 3.64-.69 3.73-.78.54-.53-1.03-2.98-3.58-5.61-9.43-9.73-26.09-17.14-45.64-20.29-3.77-.61-4.23-.83-5.63-2.68-2.22-2.94-4.31-7.97-7.16-17.17-.09-.28-.18-.28-.99-.02zm1.3 3.46c1.1 2.99 1.77 5.34 1.77 6.17v.65l-.93-.11c-5.04-.58-13.08-1.83-14.79-2.29-.44-.12-.69-.29-.61-.42.13-.21 1.84-1.03 6.92-3.34 4.74-2.15 6.54-2.95 6.68-2.96.06 0 .49 1.03.96 2.3zm-10.66 6.31c6.15 1.29 10.63 2.1 11.62 2.1.96 0 .85.08-3.67 2.84-3.49 2.12-3.89 2.32-4.77 2.32h-.96l-2.58-2.62c-3.13-3.17-5.25-5.49-5.25-5.75 0-.11.06-.14.15-.09.08.04 2.55.59 5.46 1.2zm-4.54 2.91c1.51 1.76 2.68 3.24 2.62 3.31-.13.13-4.44-.94-7.08-1.75-2.3-.71-2.58-.95-1.97-1.73.4-.52 3.37-3 3.59-3.01.06-.01 1.33 1.41 2.84 3.18zm19.62 3.65c.6 1.43 1.06 2.59 1.04 2.61-.03.02-8.11-1.23-8.82-1.37-.15-.03 1.22-.96 3.06-2.08s3.41-1.97 3.49-1.88c.08.07.63 1.29 1.23 2.72zm-17.62 2.71c.16.16 2.09 6.36 2 6.44-.03.03-.95-1.03-2.04-2.38-1.1-1.35-2.75-3.24-3.7-4.23l-1.71-1.79 2.67.92c1.46.51 2.72.98 2.78 1.04zm7.72.83c3.35.48 6.13.91 6.18.96.04.05-1.98 1.62-4.5 3.5-2.52 1.87-4.6 3.38-4.63 3.35-.03-.03-.28-.81-.56-1.74-.28-.93-1-2.86-1.59-4.31-.59-1.45-1.05-2.63-1.03-2.63.02 0 2.78.4 6.13.87zm8.42 2.68c.74 1.73 1.03 3.39 1.15 6.7.06 1.78.07 3.23.01 3.23-.06 0-1.12-.37-2.35-.81-2.46-.89-7.28-2.48-7.85-2.59-.25-.05.91-1.16 3.96-3.79 2.38-2.05 4.4-3.72 4.49-3.72.1.01.36.45.59.98zm8.64.42c3.71.76 6.95 1.44 7.21 1.5.37.09-.52.65-4.44 2.8-2.7 1.48-5.76 3.16-6.8 3.75-1.05.59-1.91 1.04-1.93 1.02-.02-.02.09-.57.24-1.23.56-2.4.21-5.4-.91-7.79-.33-.69-.6-1.3-.6-1.35 0-.17.67-.05 7.23 1.3zm10.11 4.53c-.19.84-.6 2.27-.93 3.2-.71 2.04-3.3 7.33-3.65 7.47-.14.06-1.36-.51-2.69-1.25-1.33-.74-3.26-1.72-4.27-2.17l-1.84-.82 6.79-4.35c5.63-3.61 6.8-4.29 6.86-3.97.04.2-.08 1.05-.27 1.89zm4.96-1.55c7.04 2.02 14.47 4.75 14.04 5.16-.09.08-1.01.39-2.04.68-5.31 1.51-12.7 4.06-16.16 5.58-1.07.47-2 .82-2.05.77-.05-.05.37-1.61.94-3.45 1.11-3.63 2.4-8.53 2.4-9.16 0-.28.1-.37.35-.3.18.05 1.31.37 2.52.72zm-30.27 7.3c1.61.53 3.48 1.24 4.17 1.59 1.25.63 1.26.64.9 1.03-.64.71-7.63 7.22-7.83 7.29-.1.04-.18-.95-.18-2.38-.01-2.48-.29-6.95-.5-7.95-.16-.73-.03-.72 3.44.42zm44.7 1.29c-1.54 2.54-4.07 6.16-5.9 8.44-1.87 2.34-5.82 6.74-6.05 6.74-.09 0-.66-.71-1.27-1.59-2.25-3.21-4.86-5.99-7.15-7.61-.22-.15-.35-.32-.3-.37.05-.05 3.81-1.43 8.33-3.07 9.16-3.32 13.19-4.67 13.44-4.49.02.03-.47.9-1.1 1.95zm5.73-.43c6.32 4.41 10.62 7.98 12.18 10.11.39.54.68 1 .64 1.03-.04.03-2.07.26-4.53.5-9.81.97-16.8 1.95-20.5 2.89-.99.25-1.82.44-1.83.43-.02-.02.63-.82 1.46-1.81 4.28-5.13 8.14-10.47 9.58-13.24.38-.73.75-1.33.83-1.33.07-.01 1.04.63 2.17 1.42zm-35.43 5.47c1.21.65 2.14 1.25 2.09 1.35-.09.18-10.76 6.02-10.85 5.94-.02-.02.53-1.77 1.23-3.91s1.38-4.46 1.51-5.17l.24-1.3 1.8.96c1 .53 2.77 1.48 3.98 2.13zm-8.93.34c-1.03 3.57-3.12 8.17-4.07 8.97-.22.18-.65-.07-2.06-1.21-.99-.8-2-1.59-2.27-1.77-.26-.18-.45-.37-.41-.42.73-.73 9.23-7.58 9.27-7.47.03.07-.18.93-.46 1.9zm19.32 6.21c1.61 1.07 5.17 4.26 4.98 4.46-.05.05-3.67 1.23-8.03 2.6-4.36 1.38-9.22 2.94-10.8 3.47-1.59.53-2.89.95-2.9.93-.02-.02 1.09-1.28 2.46-2.81 3.57-3.98 7.24-8.25 8.54-9.93l1.12-1.45 1.47.79c.79.44 2.23 1.32 3.16 1.94zm-8.26-2.29c-.1.13-1.06 1.35-2.14 2.72-1.08 1.36-3.66 4.68-5.76 7.37l-3.81 4.9-.13-.83c-.24-1.61-1.1-4.74-1.59-5.81l-.49-1.07 2.42-1.21c2.5-1.25 7.71-4.08 10.15-5.5 1.54-.9 1.64-.94 1.35-.57zm-20.21 5.92c.99.51 1.92 1.17 1.92 1.38 0 .32-6.45 5.3-6.62 5.11-.04-.04.54-1.19 1.29-2.56.76-1.37 1.52-2.9 1.7-3.42.18-.52.46-.94.6-.94.16 0 .66.2 1.11.43zm5.5 6.13c.45.87.91 3.32.67 3.54-.1.09-2.76 1.35-5.93 2.8-3.17 1.45-7.28 3.4-9.17 4.34-1.88.94-3.31 1.6-3.17 1.48.14-.13 2.21-1.86 4.61-3.86 4.64-3.86 9.93-8.47 10.9-9.49l.58-.61.57.55c.32.3.74.86.94 1.25zm-5.21-.05c-.46.41-2.94 2.58-5.5 4.8C42.08 67 39 69.68 37.8 70.73c-2.42 2.11-2.42 2.11.67-1.92 2.39-3.12 3.64-4.28 7.07-6.58 1.67-1.12 4.99-2.99 5.31-2.99.07-.01-.25.34-.71.75zm24.03 2.12c.13.65.28 2.69.35 4.51l.12 3.32-.77-.36c-2.66-1.23-10.13-5.44-9.85-5.55 1.63-.65 9.7-3.33 9.79-3.24.07.07.23.66.36 1.32zm-6.34 5.94c3.11 1.83 5.68 3.35 5.72 3.38.04.03-.37.37-.88.75-.99.73-11.54 6.18-11.68 6.04-.04-.04.1-.95.31-2 .43-2.12.82-8.44.63-10.45-.06-.71-.04-1.21.06-1.15.11.06 2.73 1.6 5.84 3.43zm-8.6-1.34c.24 1.97-.05 5.93-.58 7.99-.63 2.42-.99 3.43-1.26 3.52-.37.13-2.67-1.97-4.08-3.72-1.42-1.76-3.28-5.08-3-5.35.17-.16 8.39-3.55 8.64-3.56.08-.01.21.5.28 1.12zm-10.08 4.95c.87 1.8 2.86 4.4 5.04 6.6 1.4 1.41 1.75 1.87 1.53 2.01-.98.66-5.35 2.71-8.11 3.79-3.35 1.32-7.7 2.82-7.8 2.7-.04-.04.96-1.86 2.22-4.04 2.73-4.74 6.18-11.44 6.18-11.99 0-.7.29-.42.94.93zm-5.16.11c-.05.14-.47 1.18-.92 2.33-1.94 4.92-5.71 11.6-6.55 11.6-.65 0-1.61-3.89-1.88-7.63l-.14-1.88 4.61-2.33c2.54-1.28 4.69-2.33 4.8-2.33.09-.01.13.1.08.24zm30.78 4.55c.02 2.83-1.17 9.68-1.8 10.37-.26.29-3.19-.79-5.82-2.15-2.36-1.22-6.24-3.63-6.24-3.87 0-.07.59-.37 1.33-.68 1.4-.59 7.91-4.07 10.67-5.7l1.59-.94.14.72c.05.39.12 1.42.13 2.25zm-43.43 3.27c.27 2.24.96 4.98 1.82 7.16.35.89.6 1.66.56 1.7-.34.31-14.19 4.12-16.02 4.41l-.87.14.13-.67c.19-.95 1.53-3.69 2.53-5.17 1.24-1.84 4.31-4.92 6.34-6.35 1.51-1.07 5.15-3.19 5.26-3.07.01.01.13.84.25 1.85zm31.42 4.72c4.28 2.05 5.9 2.76 7.95 3.47l1.57.54-.99.5c-5.61 2.84-15.53 6.89-18.1 7.39-.57.11-.65.08-.54-.2.44-1.15 6.36-13.38 6.47-13.38.07-.01 1.72.76 3.64 1.68zm-7.53-.46c-.3 1.44-1.93 6.11-2.88 8.23-.82 1.84-2.72 5.43-3.06 5.77-.15.15-3.53-1.76-5.13-2.9-1.8-1.28-5.74-5.08-5.63-5.43.04-.13 2.44-1.05 5.33-2.05 6.09-2.1 9.5-3.37 10.49-3.88.96-.5 1.04-.47.88.26zm17.03 6.45c-.06.42-.4 2.26-.77 4.12-1.16 5.83-2.57 9.81-3.47 9.81-1.24 0-9.73-2.06-12.47-3.03-1.86-.66-3.47-1.41-4-1.88-.33-.29-.16-.39 2.28-1.39 7.85-3.2 16.9-7.28 17.88-8.06.57-.45.66-.39.55.43zm-39.72 1.78c-.89 1.59-2.72 4.22-6.2 8.92l-2.97 4-.89-.64c-1.25-.89-3.23-3.05-4.06-4.42-.89-1.47-1.5-3.28-1.57-4.66l-.06-1.07 1.47-.15c1.99-.2 7.55-1.35 11.52-2.39 1.8-.47 3.3-.83 3.34-.8.03.04-.23.58-.58 1.21zm8.63 4.11c.99.71 2.35 1.61 3.05 2.02l1.27.74-.57.24c-.32.13-4.93 1.81-10.26 3.74-9.1 3.29-9.7 3.48-9.95 3.14-.15-.2-.25-.41-.23-.48.02-.07 2.48-3.24 5.47-7.07l5.43-6.95 2 1.67c1.12.93 2.8 2.24 3.79 2.95zm2.24 10.45c-1.99 2.97-3.67 5.48-3.73 5.56-.15.2-3.33-.55-5.71-1.34-2.5-.84-5.58-2.4-6.78-3.43l-.87-.75 1.96-.53c8.03-2.19 18.65-5 18.7-4.96.04.01-1.58 2.48-3.57 5.45zm9.56-4.5c4.25 1.46 8.13 2.29 13.16 2.83l1.39.15-3.75 1.35c-9.36 3.38-16.94 5.75-20.76 6.49-1.07.21-2.05.38-2.16.38-.11 0 .66-1.05 1.71-2.32 2.86-3.49 5.96-7.46 6.78-8.68.4-.59.8-1.09.89-1.09.09.01 1.31.4 2.74.89zm13.95 7.88c-1.61 4.16-2.79 6.69-3.21 6.85-.8.31-11.85-1.32-15.22-2.23-2.24-.61-3.67-1.2-3.25-1.35.16-.06 1.76-.43 3.57-.84 5.85-1.32 14.77-4.03 18.46-5.61.48-.2.9-.35.93-.32.02.03-.55 1.6-1.28 3.5z"></path>
            </svg>
          );
          break;
        case 83:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path
                fill="#f05138"
                d="M126.33 34.06a39.32 39.32 0 00-.79-7.83 28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.82 21.82 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.5 78.5 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.49 78.49 0 00.79-7.83V34.06z"
              ></path>
              <path
                fill="#fefefe"
                d="M85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0-15.9-11.66-29.4-26.82-39.46-39.2a43.47 43.47 0 01-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a271.77 271.77 0 01-27-32.34 266.8 266.8 0 0044.47 34.87c.71.38 1.26.7 1.7 1a32.7 32.7 0 001.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.59 12.63 7.68 26 6.35 23.5C101 91 90.37 94.33 85 96.5z"
              ></path>
            </svg>
          );
          break;
        case 74:
          icon = (
            <svg viewBox="0 0 128 128" width="30" height="30">
              <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
              <path
                data-name="original"
                fill="#007acc"
                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
              ></path>
            </svg>
          );
          break;
        default:
          icon = null;
          break;
      }

  return icon;
}

export default LanguageIcon
