import { routerRedux } from 'dva/router';
import { dispatch } from 'dva';
// 对象转url
export const urlEncode = (param) => {
  if (param === null) return '';
  let result = JSON.stringify(param);
  result = result.replace(/{|}|"/g, '');
  result = result.replace(/:/g, '=');
  result = result.replace(/,/g, '&');
  return result;
};

export const getRandomColor = () => {
  return `#${'0123456789abcdef'.split('').map((v, i, a) => {
    return i > 5 ? null : a[Math.floor(Math.random() * 16)];
  }).join('')}`;
};

export const goToUrl = (pathname, query) => {
  dispatch(routerRedux.push({
    pathname,
    query,
  }));
};

export const goBack = () => {
  window.history.back();
};
