import { unified } from "unified";
import remarkParse from "remark-parse";

unified().use(remarkParse);
