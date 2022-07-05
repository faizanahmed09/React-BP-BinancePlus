/**
 *
 * Asynchronously loads the component for Benefits
 *
 */

import { lazyLoad } from "utils/loadable";

export const Benefits = lazyLoad(
  () => import("./index"),
  (module) => module.Benefits
);
