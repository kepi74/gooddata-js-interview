import React from "react";
import { ColumnChart } from "@gooddata/react-components";
import { VisualizationObject } from "@gooddata/typings";

export interface GrossProfitAllMonthsViewProps {
  measures: VisualizationObject.BucketItem[];
  viewBy: VisualizationObject.IVisualizationAttribute;
  projectId: string;
}

const GrossProfitAllMonthsView: React.FC<GrossProfitAllMonthsViewProps> = ({
  measures,
  viewBy,
  projectId
}) => (
  <>
    <h1>$ Gross Profit - All months</h1>
    <div>
      <ColumnChart measures={measures} viewBy={viewBy} projectId={projectId} />
    </div>
  </>
);

export default GrossProfitAllMonthsView;
