/**
 *
 * Asynchronously loads the component for WhoWeAre
 *
 */

import { lazyLoad } from "utils/loadable";

export const WhoWeAre = lazyLoad(
  () => import("./index"),
  (module) => module.WhoWeAre
);
