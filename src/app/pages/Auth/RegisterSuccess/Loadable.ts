/**
 *
 * Asynchronously loads the component for RegisterSuccess
 *
 */

import { lazyLoad } from "utils/loadable";

export const RegisterSuccess = lazyLoad(
  () => import("./index"),
  (module) => module.RegisterSuccess
);
