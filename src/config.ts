import * as AllIcons from "@buianhthang/icons-vue";
import type { Options } from "./types";
import { allComponents , allImports} from "./antdv";

export const libraryName = "ant-design-vue";
export const iconLibraryName = "@buianhthang/icons-vue";
export const prefix = "A"


export const allIcons = Object.keys(AllIcons).filter(v=>/.*(Outlined|Filled|TwoTone)$/.test(v));

export { allComponents } from "./antdv"

export const defaults:Options = {
  components: allComponents,
  icons: allIcons,
  imports: allImports,
  extractStyle: false
}
