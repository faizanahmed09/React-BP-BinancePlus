/**
 *
 * Asynchronously loads the component for RegisterSuccess
 *
 */

import { lazyLoad } from "utils/loadable";

export const Register = lazyLoad(
  () => import("./index"),
  (module) => module.Register
);
