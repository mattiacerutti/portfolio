export const PROJECT_DETAIL_TRANSITION_TYPE = "project-detail";
export const POST_DETAIL_TRANSITION_TYPE = "post-detail";

export const PROJECT_DETAIL_SHARE = {
  [PROJECT_DETAIL_TRANSITION_TYPE]: "auto",
  default: "none",
} as const;

export const POST_DETAIL_SHARE = {
  [POST_DETAIL_TRANSITION_TYPE]: "auto",
  default: "none",
} as const;
