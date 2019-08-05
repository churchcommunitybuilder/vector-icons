import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Settings: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M21.903 10.622c-0.025-0.183-0.17-0.327-0.354-0.351l-2.323-0.304c-0.16-0.568-0.386-1.115-0.676-1.631l1.429-1.859c0.113-0.147 0.113-0.351 0.002-0.498-0.558-0.738-1.216-1.395-1.953-1.953-0.148-0.112-0.351-0.111-0.499 0.002l-1.858 1.428c-0.516-0.29-1.063-0.517-1.632-0.677l-0.304-2.323c-0.024-0.183-0.168-0.328-0.351-0.354-0.932-0.129-1.83-0.129-2.762-0.001-0.183 0.025-0.327 0.17-0.351 0.354l-0.304 2.322c-0.57 0.16-1.118 0.387-1.636 0.677l-1.859-1.429c-0.147-0.113-0.351-0.113-0.498-0.002-0.335 0.253-0.661 0.534-0.971 0.837l-0.152 0.152c-0.299 0.305-0.578 0.629-0.831 0.963-0.112 0.148-0.111 0.352 0.002 0.499l1.428 1.858c-0.291 0.518-0.519 1.067-0.679 1.637l-2.323 0.304c-0.184 0.024-0.328 0.168-0.354 0.351-0.056 0.404-0.087 0.82-0.093 1.24v0.286c0.006 0.414 0.037 0.829 0.093 1.234 0.025 0.183 0.17 0.327 0.354 0.351l2.323 0.304c0.16 0.57 0.388 1.119 0.679 1.637l-1.428 1.858c-0.113 0.147-0.113 0.351-0.002 0.499 0.253 0.334 0.532 0.658 0.834 0.966l0.152 0.152c0.307 0.3 0.633 0.581 0.968 0.834 0.147 0.111 0.351 0.111 0.498-0.002l1.859-1.429c0.518 0.291 1.066 0.517 1.636 0.677l0.304 2.322c0.024 0.184 0.168 0.328 0.351 0.354 0.465 0.064 0.928 0.097 1.377 0.097 0.452 0 0.918-0.033 1.385-0.097 0.183-0.025 0.327-0.171 0.351-0.354l0.304-2.323c0.569-0.16 1.116-0.387 1.632-0.677l1.858 1.428c0.147 0.113 0.351 0.113 0.499 0.002 0.738-0.558 1.395-1.216 1.953-1.953 0.111-0.148 0.111-0.351-0.002-0.498l-1.429-1.859c0.29-0.516 0.516-1.062 0.676-1.631l2.323-0.304c0.184-0.024 0.328-0.168 0.354-0.351 0.064-0.466 0.097-0.931 0.097-1.381s-0.033-0.916-0.097-1.382v0zM21.126 12.962l-2.281 0.298c-0.169 0.022-0.307 0.146-0.346 0.312-0.163 0.676-0.43 1.32-0.794 1.915-0.089 0.145-0.079 0.33 0.025 0.465l1.403 1.826c-0.403 0.498-0.857 0.952-1.355 1.356l-1.825-1.403c-0.135-0.104-0.32-0.113-0.465-0.025-0.595 0.365-1.24 0.633-1.917 0.796-0.165 0.040-0.289 0.178-0.311 0.346l-0.299 2.281c-0.648 0.069-1.269 0.069-1.917 0.001l-0.298-2.281c-0.022-0.169-0.146-0.307-0.312-0.346-0.677-0.163-1.323-0.43-1.92-0.795-0.145-0.088-0.33-0.079-0.465 0.025l-1.826 1.403c-0.221-0.18-0.436-0.371-0.64-0.57l-0.146-0.145c-0.2-0.205-0.391-0.419-0.57-0.639l1.403-1.825c0.104-0.135 0.113-0.32 0.025-0.465-0.366-0.596-0.634-1.242-0.797-1.921-0.040-0.166-0.178-0.289-0.346-0.312l-2.281-0.298c-0.030-0.272-0.046-0.547-0.050-0.818v-0.274c0.004-0.275 0.020-0.552 0.049-0.824l2.281-0.298c0.169-0.022 0.307-0.146 0.346-0.312 0.163-0.678 0.431-1.324 0.797-1.921 0.089-0.146 0.079-0.33-0.025-0.465l-1.403-1.825c0.179-0.22 0.369-0.433 0.567-0.635l0.146-0.146c0.206-0.202 0.422-0.394 0.642-0.574l1.826 1.403c0.135 0.103 0.32 0.113 0.465 0.025 0.596-0.365 1.242-0.633 1.92-0.795 0.166-0.039 0.29-0.178 0.312-0.346l0.298-2.281c0.648-0.068 1.269-0.068 1.917 0.001l0.299 2.281c0.022 0.169 0.146 0.306 0.311 0.346 0.677 0.163 1.321 0.431 1.917 0.796 0.145 0.089 0.33 0.079 0.465-0.025l1.825-1.403c0.498 0.404 0.952 0.858 1.355 1.356l-1.403 1.826c-0.104 0.135-0.113 0.32-0.025 0.465 0.364 0.595 0.631 1.239 0.794 1.915 0.040 0.166 0.178 0.289 0.346 0.312l2.281 0.298c0.034 0.324 0.051 0.645 0.051 0.959s-0.016 0.635-0.050 0.959zM11.998 8.041c-2.185 0-3.963 1.778-3.963 3.962s1.778 3.962 3.963 3.962c2.185 0 3.963-1.778 3.963-3.962s-1.778-3.962-3.963-3.962zM11.998 15.144c-1.732 0-3.141-1.409-3.141-3.14s1.409-3.14 3.141-3.14c1.732 0 3.141 1.409 3.141 3.14s-1.41 3.14-3.141 3.14z" />
  </Svg>
);
;

export default React.memo(Settings);