/**
*
* Asynchronously loads the component for OnBoard
*
*/

import { lazyLoad } from 'utils/loadable';

export const OnBoard = lazyLoad(() => import('./index'), module => module.OnBoard);