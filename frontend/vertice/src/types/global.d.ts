type DatasetType =
  | "Levels"
  | "CurrentProducts"
  | "PropensityToMoveUp"
  | "MemberTenure"
  | "LifeStage"
  | "OriginationChannel"
  | "PreferredChannel";

type Dataset = {
  XData: string[];
  YData: number[];
};

type Data = {
  [key in DatasetType]: Dataset;
};
