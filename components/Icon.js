const icons = {
  cancel: {
    title: "Cancel",
    viewBox: "0 0 24 24",
    path: "M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z",
  },
  edit: {
    title: "Edit",
    viewBox: "0 0 24 24",
    path: "M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z",
  },
  playSound: {
    title: "Play soung",
    viewBox: "0 0 24 24",
    path: "M22.1,7.7c-0.6-1.3-1.3-2.5-2.4-3.5c-1-1-2.2-1.8-3.5-2.4C14.9,1.3,13.5,1,12,1S9.1,1.3,7.7,1.9C6.4,2.4,5.2,3.2,4.2,4.2S2.4,6.4,1.9,7.7C1.3,9.1,1,10.5,1,12s0.3,2.9,0.9,4.3c0.6,1.3,1.3,2.5,2.4,3.5c1,1,2.2,1.8,3.5,2.4C9.1,22.7,10.5,23,12,23s2.9-0.3,4.3-0.9c1.3-0.6,2.5-1.3,3.5-2.4c1-1,1.8-2.2,2.4-3.5c0.6-1.4,0.9-2.8,0.9-4.3S22.7,9.1,22.1,7.7L22.1,7.7z M18.6,18.6c-1.8,1.8-4.1,2.7-6.6,2.7s-4.8-1-6.6-2.7c-1.8-1.8-2.7-4.1-2.7-6.6s1-4.8,2.7-6.6C7.2,3.7,9.5,2.7,12,2.7s4.8,1,6.6,2.7c1.8,1.8,2.7,4.1,2.7,6.6S20.3,16.8,18.6,18.6L18.6,18.6z M17.8,10.1L10.1,6C9.8,5.8,9.5,5.8,9.1,5.8c-1.1,0-2,0.9-2,2v8.1c0,1.1,0.9,2,2,2c0.3,0,0.6-0.1,0.9-0.2l7.8-4.1c0.7-0.4,1.1-1,1.1-1.8C18.9,11.1,18.5,10.4,17.8,10.1z M17.1,11.9c0,0,0,0.2-0.1,0.2l-7.8,4.1c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.2-0.2V7.8c0-0.2,0.1-0.2,0.2-0.2c0,0,0.1,0,0.1,0l7.8,4.1C17.1,11.7,17.1,11.8,17.1,11.9L17.1,11.9z",
  },
  noSound: {
    title: "No sound",
    viewBox: "0 0 800 800",
    path: "m763.23,247.84c-19.69-46.55-47.87-88.35-83.76-124.24-35.89-35.89-77.69-64.07-124.24-83.76-48.21-20.39-99.4-30.73-152.16-30.73s-103.95,10.34-152.16,30.73c-46.55,19.69-88.35,47.87-124.24,83.76s-64.07,77.69-83.76,124.24c-20.39,48.21-30.73,99.4-30.73,152.16s10.34,103.95,30.73,152.16c19.69,46.55,47.87,88.35,83.76,124.24s77.69,64.07,124.24,83.76c48.21,20.39,99.4,30.73,152.16,30.73s103.95-10.34,152.16-30.73c46.55-19.69,88.35-47.87,124.24-83.76,35.89-35.89,64.07-77.69,83.76-124.24,20.39-48.21,30.73-99.4,30.73-152.16s-10.34-103.95-30.73-152.16ZM72.19,400c0-88.38,34.42-171.48,96.91-233.97,62.5-62.5,145.59-96.91,233.97-96.91,78.54,0,152.9,27.2,212.34,77.12l-83.25,88.1c-1.14-6.96-2.2-13.13-3.12-18.29-1.82-10.29-10.8-17.62-21.25-17.62-13.83,0-24.3,12.62-21.96,26.26,2.27,13.25,5.06,30.72,7.75,50.48l-57.24,60.58v-137.32c0-42.97-54.7-61.21-80.49-26.83l-87.19,116.26h-55.89c-37.04,0-67.07,30.03-67.07,67.07v89.43c0,37.04,30.03,67.07,67.07,67.07h55.75l.8,1.09-107.57,113.84c-57.83-61.55-89.57-141.51-89.57-226.36Zm227.98,79.87c-8.32-8.35-19.68-13.15-31.65-13.15h-55.75c-12.35,0-22.36-10.01-22.36-22.36v-89.43c0-12.35,10.01-22.36,22.36-22.36h55.89c14.07,0,27.33-6.63,35.77-17.89l87.19-116.26v184.65l-91.46,96.8Zm91.46-9.44v133.14l-55-74.93,55-58.21Zm245.41,163.54c-62.5,62.5-145.59,96.91-233.97,96.91-71.71,0-139.94-22.66-196.51-64.59l98.84-104.61,50.18,68.35c25.57,34.83,80.76,16.75,80.76-26.46v-180.47l65.42-69.24c1.03,15.46,1.65,30.93,1.65,45.77,0,62.77-11.01,136.54-17.58,174.96-2.33,13.64,8.13,26.26,21.96,26.26,10.45,0,19.42-7.33,21.25-17.62,6.21-35,19.08-115.73,19.08-183.6,0-28.86-2.33-60.04-5.48-89.04l36.44-38.56c.08.43.17.87.27,1.3,6.24,26.23,13.49,69.02,13.49,126.3s-7.25,100.07-13.49,126.3c-3.5,14.69,7.56,30.21,22.66,30.21,8.08,0,15.37-4.6,17.89-12.28,6.56-19.99,17.66-65.45,17.66-144.23s-11.1-124.24-17.66-144.23c-2.09-6.38-7.48-10.63-13.88-11.88l51.75-54.77c49.32,59.26,76.18,133.18,76.18,211.23,0,88.38-34.42,171.48-96.91,233.97Z",
  },
  dashboard: {
    title: "Dashboard",
    viewBox: "0 0 24 24",
    path: "M1,2c0-0.6,0.4-1,1-1s1,0.4,1,1v18c0,0.6,0.4,1,1,1h18c0.6,0,1,0.4,1,1s-0.4,1-1,1H3c-1.1,0-2-0.9-2-2V2z M19.9,5.4c0.2-0.5,0-1.1-0.6-1.3c-0.5-0.2-1.1,0-1.3,0.6l-3.2,8.1c-0.1,0.3-0.5,0.4-0.8,0.2l-3-2.4C10.3,10,9.2,10.2,8.8,11l-3.7,6.5C4.8,18,5,18.6,5.5,18.9s1.1,0.1,1.4-0.4L10,13c0.2-0.3,0.5-0.3,0.7-0.1l3.1,2.5c0.8,0.6,2,0.3,2.3-0.6L19.9,5.4z",
  },
  delete: {
    title: "Delete",
    viewBox: "0 0 24 24",
    path: "M13,17v-6c0-0.6,0.4-1,1-1s1,0.4,1,1v6c0,0.6-0.4,1-1,1S13,17.6,13,17z M10,18c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6C9,17.6,9.4,18,10,18z M20.4,6.6l-1.7,13.8c-0.2,1.5-1.5,2.6-3,2.6H8.3c-1.5,0-2.8-1.1-3-2.6L3.6,6.6c-0.4-3,2-5.6,5-5.6h6.9C18.5,1,20.8,3.6,20.4,6.6z M5.7,5h12.6c-0.4-1.2-1.5-2-2.8-2H8.5C7.2,3,6.1,3.8,5.7,5z M18.4,7H5.6l1.6,13.1c0.1,0.5,0.5,0.9,1,0.9h7.5c0.5,0,0.9-0.4,1-0.9L18.4,7z",
  },
  home: {
    title: "Home",
    viewBox: "0 0 24 24",
    path: "M4.18753 11.3788C4.03002 11.759 4 11.9533 4 12V20.0018C4 20.5529 4.44652 21 5 21H8V15C8 13.8954 8.89543 13 10 13H14C15.1046 13 16 13.8954 16 15V21H19C19.5535 21 20 20.5529 20 20.0018V12C20 11.9533 19.97 11.759 19.8125 11.3788C19.6662 11.0256 19.4443 10.5926 19.1547 10.1025C18.5764 9.1238 17.765 7.97999 16.8568 6.89018C15.9465 5.79788 14.9639 4.78969 14.0502 4.06454C13.5935 3.70204 13.1736 3.42608 12.8055 3.2444C12.429 3.05862 12.1641 3 12 3C11.8359 3 11.571 3.05862 11.1945 3.2444C10.8264 3.42608 10.4065 3.70204 9.94978 4.06454C9.03609 4.78969 8.05348 5.79788 7.14322 6.89018C6.23505 7.97999 5.42361 9.1238 4.8453 10.1025C4.55568 10.5926 4.33385 11.0256 4.18753 11.3788ZM10.3094 1.45091C10.8353 1.19138 11.4141 1 12 1C12.5859 1 13.1647 1.19138 13.6906 1.45091C14.2248 1.71454 14.7659 2.07921 15.2935 2.49796C16.3486 3.33531 17.4285 4.45212 18.3932 5.60982C19.3601 6.77001 20.2361 8.0012 20.8766 9.08502C21.1963 9.62614 21.4667 10.1462 21.6602 10.6134C21.8425 11.0535 22 11.5467 22 12V20.0018C22 21.6599 20.6557 23 19 23H16C14.8954 23 14 22.1046 14 21V15H10V21C10 22.1046 9.10457 23 8 23H5C3.34434 23 2 21.6599 2 20.0018V12C2 11.5467 2.15748 11.0535 2.33982 10.6134C2.53334 10.1462 2.80369 9.62614 3.12345 9.08502C3.76389 8.0012 4.63995 6.77001 5.60678 5.60982C6.57152 4.45212 7.65141 3.33531 8.70647 2.49796C9.2341 2.07921 9.77521 1.71454 10.3094 1.45091Z",
  },
  reset: {
    title: "Reset",
    viewBox: "0 0 24 24",
    path: "M4.52185 7H7C7.55229 7 8 7.44772 8 8C8 8.55229 7.55228 9 7 9H3C1.89543 9 1 8.10457 1 7V3C1 2.44772 1.44772 2 2 2C2.55228 2 3 2.44772 3 3V5.6754C4.26953 3.8688 6.06062 2.47676 8.14852 1.69631C10.6633 0.756291 13.435 0.768419 15.9415 1.73041C18.448 2.69239 20.5161 4.53782 21.7562 6.91897C22.9963 9.30013 23.3228 12.0526 22.6741 14.6578C22.0254 17.263 20.4464 19.541 18.2345 21.0626C16.0226 22.5842 13.3306 23.2444 10.6657 22.9188C8.00083 22.5931 5.54702 21.3041 3.76664 19.2946C2.20818 17.5356 1.25993 15.3309 1.04625 13.0078C0.995657 12.4579 1.45216 12.0088 2.00445 12.0084C2.55673 12.0079 3.00351 12.4566 3.06526 13.0055C3.27138 14.8374 4.03712 16.5706 5.27027 17.9625C6.7255 19.605 8.73118 20.6586 10.9094 20.9247C13.0876 21.1909 15.288 20.6513 17.0959 19.4075C18.9039 18.1638 20.1945 16.3018 20.7247 14.1724C21.2549 12.043 20.9881 9.79319 19.9745 7.8469C18.9608 5.90061 17.2704 4.3922 15.2217 3.6059C13.173 2.8196 10.9074 2.80968 8.8519 3.57803C7.11008 4.22911 5.62099 5.40094 4.57993 6.92229C4.56156 6.94914 4.54217 6.97505 4.52185 7Z",
  },
  confirm: {
    title: "Confirm",
    viewBox: "0 0 24 24",
    path: "M22.7048 4.95406C22.3143 4.56353 21.6811 4.56353 21.2906 4.95406L8.72696 17.5177C8.33643 17.9082 7.70327 17.9082 7.31274 17.5177L2.714 12.919C2.32348 12.5284 1.69031 12.5284 1.29979 12.919C0.909266 13.3095 0.909265 13.9427 1.29979 14.3332L5.90392 18.9289C7.07575 20.0986 8.97367 20.0978 10.1445 18.9271L22.7048 6.36827C23.0953 5.97775 23.0953 5.34458 22.7048 4.95406Z",
  },
  words: {
    title: "Words",
    viewBox: "0 0 24 24",
    path: "M16,1c1.7,0,3,1.3,3,3c0,0.6-0.4,1-1,1s-1-0.4-1-1s-0.4-1-1-1H4C3.4,3,3,3.4,3,4v16c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1c0,1.7-1.3,3-3,3H4c-1.7,0-3-1.3-3-3V4c0-1.7,1.3-3,3-3H16z M20.8,8.2c-0.3-0.3-0.8-0.3-1.1,0L11.9,16c-0.1,0.1-0.2,0.3-0.3,0.5l-0.2,1l1-0.2c0.2,0,0.4-0.1,0.5-0.3l7.8-7.8C21.1,9,21.1,8.5,20.8,8.2z M18.3,6.8c1.1-1.1,2.8-1.1,3.9,0c1.1,1.1,1.1,2.8,0,3.9l-7.8,7.8c-0.4,0.4-1,0.7-1.6,0.8l-1,0.2c-1.4,0.2-2.5-0.9-2.3-2.3l0.2-1c0.1-0.6,0.4-1.2,0.8-1.6L18.3,6.8z M5,7c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1s-0.4,1-1,1H6C5.4,8,5,7.6,5,7z M5,11c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1s-0.4,1-1,1H6C5.4,12,5,11.6,5,11z M5,15c0-0.6,0.4-1,1-1h1c0.6,0,1,0.4,1,1s-0.4,1-1,1H6C5.4,16,5,15.6,5,15z",
  },
  arrowRight: {
    title: "Right arrow",
    viewBox: "0 0 24 24",
    path: "M2.6,13.4h16.3l-8.3,7.3c-0.1,0.1-0.3,0.3-0.3,0.4c-0.1,0.2-0.1,0.3-0.1,0.5c0,0.2,0,0.4,0.1,0.5c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.4-0.2,0.5-0.3l8.8-7.7c0.8-0.7,1.2-1.6,1.3-2.5c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.3-0.1-0.4c-0.1-1-0.6-1.8-1.3-2.5l-8.8-7.7C12.5,1.1,12.1,1,11.7,1c-0.4,0-0.8,0.1-1.1,0.4c-0.3,0.3-0.5,0.6-0.5,1c0,0.4,0.2,0.7,0.4,1l8.2,7.3H2.6c-0.4,0-0.8,0.1-1.1,0.4C1.2,11.3,1,11.7,1,12c0,0.4,0.2,0.7,0.5,1C1.8,13.3,2.2,13.4,2.6,13.4z",
  },
  checkmark: {
    title: "Checkmark",
    viewBox: "0 0 24 24",
    path: "M22.7048 4.95406C22.3143 4.56353 21.6811 4.56353 21.2906 4.95406L8.72696 17.5177C8.33643 17.9082 7.70327 17.9082 7.31274 17.5177L2.714 12.919C2.32348 12.5284 1.69031 12.5284 1.29979 12.919C0.909266 13.3095 0.909265 13.9427 1.29979 14.3332L5.90392 18.9289C7.07575 20.0986 8.97367 20.0978 10.1445 18.9271L22.7048 6.36827C23.0953 5.97775 23.0953 5.34458 22.7048 4.95406Z",
  },
  checkmarkSmall: {
    title: "Small checkmark",
    viewBox: "0 0 24 24",
    path: "M22.5,5C22,4.4,21,4.4,20.4,5L9.5,15.9c-0.6,0.6-1.5,0.6-2.1,0l-3.8-3.8c-0.6-0.6-1.5-0.6-2.1,0c-0.6,0.6-0.6,1.5,0,2.1L5.3,18c1.8,1.8,4.6,1.8,6.4,0L22.5,7.1C23.1,6.5,23.1,5.6,22.5,5z",
  },
  checkmarkBig: {
    title: "Big checkmark",
    viewBox: "0 0 24 24",
    path: "M23.5,3.7c-0.7-0.5-1.6-0.4-2.1,0.2L10.5,17.2l-8.1-5.9c-0.7-0.4-1.6-0.4-2.1,0.3c-0.4,0.7-0.4,1.6,0.3,2.1l9.2,6.7c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0.1,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1,0.1h0.9c0.1,0,0.1,0,0.1-0.1c0.1,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.1-0.1L23.8,5.9C24.1,5.2,24.1,4.2,23.5,3.7z",
  },
  cross: {
    title: "Cross",
    viewBox: "0 0 24 24",
    path: "M22.6,1.4c-0.5-0.5-1.3-0.5-1.7,0L12,10.3L3.1,1.4c-0.5-0.5-1.3-0.5-1.7,0c-0.5,0.5-0.5,1.3,0,1.7l8.9,8.9l-8.9,8.9c-0.5,0.5-0.5,1.3,0,1.7c0.5,0.5,1.3,0.5,1.7,0l8.9-8.9l8.9,8.9c0.5,0.5,1.3,0.5,1.7,0c0.5-0.5,0.5-1.3,0-1.7L13.7,12l8.9-8.9C23.1,2.6,23.1,1.8,22.6,1.4z",
  },
  crossBig: {
    title: "Big Cross",
    viewBox: "0 0 24 24",
    path: "M9.7,12L1.5,3.8C1.2,3.5,1,3.1,1,2.6c0-0.4,0.2-0.9,0.5-1.2C1.8,1.2,2.2,1,2.6,1c0.4,0,0.9,0.2,1.2,0.5L12,9.7l8.2-8.2C20.5,1.2,20.9,1,21.4,1c0.4,0,0.9,0.2,1.2,0.5C22.8,1.8,23,2.2,23,2.6c0,0.4-0.2,0.9-0.5,1.2L14.3,12l8.2,8.2c0.3,0.3,0.5,0.7,0.5,1.2c0,0.4-0.2,0.9-0.5,1.2c-0.3,0.3-0.7,0.5-1.2,0.5c-0.4,0-0.9-0.2-1.2-0.5L12,14.3l-8.2,8.2C3.5,22.8,3.1,23,2.6,23c-0.4,0-0.9-0.2-1.2-0.5C1.2,22.2,1,21.8,1,21.4c0-0.4,0.2-0.9,0.5-1.2L9.7,12z",
  },
  upload: {
    title: "Upload",
    viewBox: "0 0 24 24",
    path: "M23,22c0,0.5-0.4,1-1,1H2c-0.6,0-1-0.4-1-1c0-0.5,0.4-1,1-1h20C22.6,21,23,21.5,23,22z M10.7,1.5c0.8-0.6,1.9-0.6,2.6,0l4.8,4.1c1.4,1.2,0.5,3.5-1.3,3.5H15V17c0,1.1-0.9,2-2,2h-2c-1.1,0-2-0.9-2-2V9.1H7.2c-1.9,0-2.7-2.3-1.3-3.5L10.7,1.5z M12.7,3.5c-0.4-0.3-0.9-0.3-1.3,0L7.2,7.1h2.3c0.8,0,1.5,0.7,1.5,1.5V17h2V8.6c0-0.8,0.7-1.5,1.5-1.5h2.3L12.7,3.5z",
  },
  views: {
    title: "Views",
    viewBox: "0 0 24 24",
    path: "M12,15.5c1.9,0,3.5-1.6,3.5-3.5S13.9,8.5,12,8.5S8.5,10.1,8.5,12S10.1,15.5,12,15.5z M12,13.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S12.8,13.5,12,13.5z M12,5C7.2,5,3.9,7.6,2.2,9.5c-1.3,1.4-1.3,3.6,0,5c1.7,1.9,5,4.5,9.8,4.5c4.8,0,8.1-2.6,9.8-4.5c1.3-1.4,1.3-3.6,0-5C20.1,7.6,16.8,5,12,5z M3.7,10.8C5.2,9.2,8,7,12,7s6.8,2.2,8.3,3.8c0.6,0.7,0.6,1.7,0,2.3C18.8,14.8,16,17,12,17s-6.8-2.2-8.3-3.8C3,12.5,3,11.5,3.7,10.8z",
  },
};

export default function Icon({
  variant,
  color = "var(--darktext)",
  size = 20,
}) {
  return (
    <svg
      viewBox={icons[variant].viewBox}
      width={size}
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icons[variant].title}</title>
      <path d={icons[variant].path}></path>
    </svg>
  );
}
