# Issue Sample: #228

https://github.com/unifiedjs/unified/issues/228

This sample repo is a vanilla typescript setup with `unified@11.0.2` and `remark-parse` added to show typescript type error.

https://github.com/unifiedjs/unified#use

The first 2 lines of the "getting started" sample on the Unified README are used to demonstrate the type error below, although other plugins that were successfully being used with the prior major version of unified@10.1.2 also produce similar type errors:

import { unified } from "unified";
import remarkParse from "remark-parse";

unified().use(remarkParse);
producing type error:

src/index.ts:4:15 - error TS2769: No overload matches this call.
Overload 1 of 3, '(preset?: Preset | null | undefined): Processor<undefined, undefined, undefined, undefined, undefined>', gave the following error.
Type 'Plugin<[(Options | undefined)?], string, Root>' has no properties in common with type 'Preset'.
