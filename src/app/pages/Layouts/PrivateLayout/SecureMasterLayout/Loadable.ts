/**
*
* Asynchronously loads the component for SecureMasterLayout
*
*/

import { lazyLoad } from 'utils/loadable';

export const MasterLayout = lazyLoad(() => import('./index'), module => module.SecureMasterLayout);
