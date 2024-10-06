import { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";

export const $api = hc<AppType>("/").api;
